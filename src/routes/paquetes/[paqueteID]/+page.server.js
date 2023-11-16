import { redirect } from '@sveltejs/kit';

export const load = ({ locals, params }) => {
	const getProject = async (/** @type {any} */ paqueteID) => {
		try {
			return structuredClone(await locals.pb.collection('projects').getOne(paqueteID));
		} catch (err) {
			console.log('Error: ', err);
		}
	};

	const getNacionalidades = async () => {
		// @ts-ignore
		return structuredClone(await locals.pb.collection('nacionalidades').getFullList(undefined, {}));
	};

	const getVentas = async (/** @type {any} */ paqueteID) => {
		try {
			const ventas = structuredClone(
				await locals.pb
					.collection('ventas')
					.getFullList(undefined, { filter: `paquete = "${paqueteID}"` })
			);

			// Crear una función asincrónica para obtener el nombre del pasajero
			const getNombrePasajero = async (/** @type {any} */ pasajero) => {
				const cliente = await locals.pb.collection('clientes').getOne(pasajero);
				return structuredClone(cliente);
			};

			// Mostrar los IDs de los pasajeros y obtener sus nombres
			await Promise.all(
				ventas.map(async (/** @type {{ pasajeros: any[]; cliente: any; }} */ venta) => {
					await Promise.all(
						venta.pasajeros.map(
							async (/** @type {string} */ pasajero, /** @type {string | number} */ index) => {
								venta.pasajeros[index] = await getNombrePasajero(pasajero);
							}
						)
					);

					const titular = await getNombrePasajero(venta.cliente);
					venta.cliente = titular;
					// Agregar la información del cliente al array de pasajeros
					venta.pasajeros.push(venta.cliente);
				})
			);
			console.log('ventas: ', ventas);
			return ventas;
		} catch (error) {
			// Manejar errores aquí
			console.error(error);
			throw error;
		}
	};

	return {
		paquetes: getProject(params.paqueteID),
		ventas: getVentas(params.paqueteID),
		nacionalidades: getNacionalidades()
	};
};

export const actions = {
	update: async ({ request, params, locals }) => {
		const clienteId = params.paqueteID;
		const form = await request.formData();
		const nombre = form.get('nombre') ?? '';
		const precio = form.get('precio') ?? '';
		const cant_dias = form.get('cant_dias') ?? '';
		const cant_noches = form.get('cant_noches') ?? '';
		const regimen = form.get('regimen') ?? '';
		const hotel = form.get('hotel') ?? '';
		const transporte = form.get('transporte') ?? '';
		const estado = form.get('estado') ?? '';
		const fechasalida = new Date(
			`${((parts) => `${parts[1]}/${parts[0]}/${parts[2]}`)(
				form.get('fechasalida')?.toString().split('/') ?? new Date().toLocaleDateString().split('/')
			)}`
		);
		const fecharetorno = new Date(
			`${((parts) => `${parts[1]}/${parts[0]}/${parts[2]}`)(
				form.get('fecharetorno')?.toString().split('/') ??
					new Date().toLocaleDateString().split('/')
			)}`
		);
		const descripcion = form.get('obervaciones') ?? '';
		const pais_destino = form.get('pais_destino') ?? '';

		//   "chofer1nombre": "test",
		// "chofer1dni": "test",
		// 	"chofer2nombre": "test",
		// 		"chofer2dni": "test",
		// 			"dominio": "test"

		const chofer1nombre = form.get('chofer1nombre') ?? '';
		const chofer1dni = form.get('chofer1dni') ?? '';
		const chofer2nombre = form.get('chofer2nombre') ?? '';
		const chofer2dni = form.get('chofer2dni') ?? '';
		const dominio = form.get('dominio') ?? '';
		const interno = form.get('interno') ?? '';

		const data = {
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
			pais_destino,
			chofer1nombre,
			chofer1dni,
			chofer2nombre,
			chofer2dni,
			dominio,
			interno
		};


		try {
			await locals.pb.collection('projects').update(clienteId, data);
			return {
				status: 200,
				body: {
					message: 'Paquete actualizado correctamente'
				}
			};
		} catch (err) {
			console.log('Error: ', err);
			throw err;
		}
	},

	delete: async ({ params, locals }) => {
		const clienteId = params.paqueteID;
		try {
			await locals.pb.collection('projects').delete(clienteId);
			throw redirect(307, '/paquetes');
		} catch (err) {
			console.log('Error: ', err);
			throw err;
		}
	}
};
