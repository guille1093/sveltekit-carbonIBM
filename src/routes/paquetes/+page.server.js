//@ts-nocheck

import { sendMail } from '$lib/service/emailTemplates/publicidad_service.js';

export async function load({ locals }) {
	try {
		const getpaquetes = async () => {
			return structuredClone(await locals.pb.collection('projects').getFullList(5000, {}));
		};

		const getNacionalidades = async () => {
			return structuredClone(
				await locals.pb.collection('nacionalidades').getFullList(undefined, {})
			);
		};
		const hoteles = structuredClone(await locals.pb.collection('hotels').getFullList());

		const [paquetes, nacionalidades] = await Promise.all([getpaquetes(), getNacionalidades()]);
		return {
			paquetes,
			nacionalidades,
			hoteles
		};
	} catch (err) {
		console.log('Error: ', err);
	}
}


export const actions = {
	create: async ({ request, locals }) => {
		const form = await request.formData();
		const nombre = form.get('nombre') ?? '';
		const precio = form.get('precio') ?? '';
		const cant_dias = form.get('cant_dias') ?? '';
		const cant_noches = form.get('cant_noches') ?? '';
		const regimen = form.get('regimen') ?? '';
		const hotel = form.get('hotel') ?? '';
		const transporte = form.get('transporte') ?? '';
		const estado = form.get('estado') ?? '';
		// const thumbnail = form.get('thumbnail');

		// si fechasalida es un string vacio se le asigna la fecha actual
		function getFormattedCurrentDate() {
			const currentDate = new Date();
			return currentDate.toISOString();
		}

		let fechasalida = form.get('fechasalida')?.toString();
		if (!fechasalida) {
			fechasalida = getFormattedCurrentDate(); // Usa la fecha actual si no se proporcionó una fecha
		} else {
			const parts = fechasalida.split('/');
			fechasalida = new Date(parts[2], parts[1] - 1, parts[0]).toISOString();
		}

		let fecharetorno = form.get('fecharetorno')?.toString();
		if (!fecharetorno) {
			fecharetorno = getFormattedCurrentDate(); // Usa la fecha actual si no se proporcionó una fecha
		} else {
			const parts = fecharetorno.split('/');
			fecharetorno = new Date(parts[2], parts[1] - 1, parts[0]).toISOString();
		}

		//const fecharetorno = new Date(`${(parts => `${parts[1]}/${parts[0]}/${parts[2]}`)(form.get('fecharetorno')?.toString().split('/') ?? new Date())}`);
		const descripcion = form.get('obervaciones') ?? '';
		const pais_destino = form.get('pais_destino') ?? '';

		let data = {
			nombre,
			precio,
			cant_dias,
			cant_noches,
			regimen,
			hotel,
			transporte,
			estado,
			fechasalida,
			fecharetorno,
			descripcion,
			pais_destino
		};

		// data = { ...data, thumbnail }

		const clientesConEmail = await locals.pb.collection('clientes').getFullList({
			filter: 'email != ""'
		});

		try {
			const newPaquete = await locals.pb.collection('projects').create(data);

			clientesConEmail.forEach(async (cliente) => {
				await sendMail({ cliente, paquete: await newPaquete });
			});

			return structuredClone(newPaquete);
		} catch (err) {
			console.log('Error: ', err);
		}
	}
};
