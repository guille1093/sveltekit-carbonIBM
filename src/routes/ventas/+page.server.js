/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	//retonar todos los clientes y los paquetes

	try {
		const getClientes = async () => {
			// @ts-ignore
			return structuredClone(await locals.pb.collection('clientes').getFullList(5000, {}));
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

		// Agregar los campos `nombre`, `apellido` y `dni` del titular
		const ventasinf = ventas.map((venta) => {
			const cliente = clientes.find((c) => c.id === venta.cliente);
			const paquete = paquetes.find((p) => p.id === venta.paquete);

			const nombre = cliente.nombre;
			const apellido = cliente.apellido;
			const dni = cliente.dni;

			const nombrePaquete = paquete.nombre;
			const estadoPaquete = paquete.estado;

			return {
				...venta,
				nombre,
				apellido,
				dni,
				nombrePaquete,
				estadoPaquete
			};
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
	// example create data

	//     "cliente": "RELATION_RECORD_ID",
	//     "paquete": "RELATION_RECORD_ID",
	//     "pagado": "test",
	//     "observaciones": "test",
	//     "estado": "test",
	//     "cant_personas": 123,
	//     "pasajeros": [
	//         "ID",
	//         "ID",
	//     ]

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
		console.log('pasajeros: ', pasajeros);
		const data = {
			cliente,
			paquete,
			pagado,
			observaciones,
			estado,
			cant_personas,
			pasajeros: pasajeros.toString().split(',')
		};
		console.log('data: ', data);
		const { id } = await locals.pb.collection('ventas').create(data);
		return {
			status: 303,
			redirect: `/ventas/${id}`
		};
	}
};
