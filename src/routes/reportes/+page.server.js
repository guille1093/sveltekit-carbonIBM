/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	//Obtener todas las ventas y expandir los pagos
	try {
		const getVentas = async () => {
			// @ts-ignore
			return structuredClone(
				await locals.pb
					.collection('ventas')
					.getFullList(undefined, { expand: 'cliente, pasajeros, pagos, paquete' })
			);
		};
		return {
			ventas: await getVentas()
		};
	} catch (err) {
		console.log('Error: ', err);
	}
}
