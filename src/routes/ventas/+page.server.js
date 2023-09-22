/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	//retonar todos los clientes y los paquetes

	try {
		const getClientes = async () => {
			// @ts-ignore
			return structuredClone(await locals.pb.collection('clientes').getFullList(undefined, {}));
		};

		const getPaquetes = async () => {
			// @ts-ignore
			return structuredClone(await locals.pb.collection('projects').getFullList(undefined, {}));
		};

		const [clientes, paquetes] = await Promise.all([getClientes(), getPaquetes()]);
		console.log('clientes y paquetes cargados');

		// Obtener las ventas
		const getVentas = async () => {
			// @ts-ignore
			return structuredClone(await locals.pb.collection('ventas').getFullList(undefined, {}));
		};

		const ventas = await getVentas();

		const ventasinf = ventas.map((/** @type {{ cliente: any; paquete: any; }} */ venta) => {
			const cliente = clientes.find((c) => c.id === venta.cliente);
			const paquete = paquetes.find((p) => p.id === venta.paquete);

			if (cliente && paquete) {
				const nombre = cliente.nombre;
				const apellido = cliente.apellido;
				const dni = cliente.dni;
				const nombrePaquete = paquete.nombre;
				const estadoPaquete = paquete.estado;
				const precioPaquete = paquete.precio;
				const precioVenta = precioPaquete * venta.cant_personas;

				return {
					...venta,
					nombre,
					apellido,
					dni,
					nombrePaquete,
					estadoPaquete,
					precioPaquete,
					precioVenta
				};
			} else {
				console.log('Cliente o paquete no encontrado para venta:', venta);
				return {
					...venta,
					nombre: 'No encontrado',
					apellido: 'No encontrado',
					dni: 'No encontrado',
					nombrePaquete: 'No encontrado',
					estadoPaquete: 'No encontrado',
					precioPaquete: 'No encontrado',
				};
			}
		});


		console.log('ventas cargadas');
		console.log('ventasinf: ', ventasinf);

		return {
			clientes,
			paquetes,
			ventas: ventasinf
		};
	} catch (err) {
		console.log('Error: ', err);
	}
}

export const actions = {
	createVenta: async ({ request, locals }) => {
		await new Promise((fulfil) => setTimeout(fulfil, 1500));
		const form = await request.formData();
		console.log('form: ', form);
		const cliente = form.get('cliente') ?? '';
		const paquete = form.get('paquete') ?? '';
		const pagado = form.get('pagado') ?? '';
		const observaciones = form.get('observaciones') ?? '';
		const estado = form.get('estado') ?? '';
		const cant_personas = form.get('cant_personas') ?? '';
		const pasajeros = form.get('pasajeros') ?? '';
		const valor = form.get('precio') ?? '1';
		console.log('pasajeros: ', pasajeros);
		const data = {
			cliente,
			paquete,
			pagado,
			observaciones,
			estado,
			cant_personas,
			pasajeros: pasajeros.toString().split(','),
			valor
		};
		console.log('data: ', data);
		// @ts-ignore
		const { id } = await locals.pb.collection('ventas').create(data);
		return {
			status: 303,
			redirect: `/ventas/${id}`
		};
	}
};
