/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {


    try { 	// Obtener las ventas
        const getVentas = async () => {
            // @ts-ignore
            return structuredClone(
                // @ts-ignore
                await locals.pb
                    .collection('ventas')
                    .getFullList(5000, { expand: 'cliente, pasajeros, pagos, paquete' })
            );
        };

        //Obtener los clientes
        const getClientes = async () => {
            // @ts-ignore
            return structuredClone(await locals.pb.collection('clientes').getFullList(5000, {}));
        };

        //Obtener los paquetes
        const getPaquetes = async () => {
            // @ts-ignore
            return structuredClone(await locals.pb.collection('projects').getFullList(5000, {}));
        };

        const ventas = await getVentas();
        const clientes = await getClientes();
        const paquetes = await getPaquetes();


        return {
            ventas,
            clientes,
            paquetes
        };
} catch (error) {
        console.log(error);
    }
}

export const actions = {
	createVenta: async ({ request, locals }) => {
		await new Promise((fulfil) => setTimeout(fulfil, 1500));
		const form = await request.formData();
		console.log('form: ', form);
		const cliente = form.get('cliente');
		const paquete = form.get('paquete');
		const pagado = '0';
		const observaciones = form.get('observaciones') ?? '';
		const estado = 'EN CURSO';
		const cant_personas = form.get('cant_personas');
		const pasajeros = form.get('pasajeros') ?? '';
		const valor = form.get('precio') ?? '1';

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
