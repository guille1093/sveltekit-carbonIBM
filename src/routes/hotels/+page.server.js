/** @type {import('./$types').PageServerLoad} */

export async function load({ locals }) {
	//Obtener todas las ventas y expandir los pagos
	try {
		const getHotels = async () => {
			// @ts-ignore
			return structuredClone(await locals.pb.collection('hotels').getFullList(undefined, {}));
		};
		return {
			hotels: await getHotels()
		};
	} catch (err) {
		console.log('Error: ', err);
	}
}

export const actions = {
	create: async ({ request, locals }) => {
		const form = await request.formData();
		const nombre = form.get('nombre') ?? '';
		const telefono = form.get('telefono') ?? '';
		const email = form.get('email') ?? '';
		const direccion = form.get('direccion') ?? 'ARGENTINA';
		const observaciones = form.get('observaciones') ?? '';

		const data = {
			nombre,
			direccion,
			telefono,
			email,
			observaciones
		};

		try {
			// @ts-ignore
			await locals.pb.collection('hotels').create(data);
		} catch (err) {
			console.log('Error: ', err);
		}
	}
};
