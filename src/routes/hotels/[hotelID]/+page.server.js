import { redirect } from '@sveltejs/kit';

/**
 *
 * @param {*} param0
 * @returns
 */
export async function load({ locals, params }) {
	const hotelId = params.hotelID;


	const gethotel = async () => {
		try {
			const hotel = structuredClone(await locals.pb.collection('hotels').getOne(hotelId));
			return hotel;
		} catch (err) {
			console.log('Error al obtener el hotel: ', err);
			throw err;
		}
	};

	const [hotel] = await Promise.all([
		gethotel(),
	]);

	return {
		hotel
	};
}

export const actions = {
	update: async ({ request, params, locals }) => {
		const hotelId = params.hotelID;
		const form = await request.formData();
		const nombre = form.get('nombre') ?? '';
		const direccion = form.get('direccion') ?? '';
		const telefono = form.get('telefono') ?? '';
		const email = form.get('email') ?? '';
		const observaciones = form.get('observaciones') ?? '';

		const data = {
			
			nombre,
			
			
			direccion,
			telefono,
			email,
			observaciones,
		};

		console.log('data: ', data);

		try {
			await locals.pb.collection('hotels').update(hotelId, data);
			return {
				status: 200,
				body: {
					message: 'hotel actualizado correctamente'
				}
			};
		} catch (err) {
			console.log('Error: ', err);
			throw err;
		}
	},

	delete: async ({ params, locals }) => {
		const hotelId = params.hotelID;
		try {
			await locals.pb.collection('hotels').delete(hotelId);
			throw redirect(307, '/hotels');
		} catch (err) {
			console.log('Error: ', err);
			throw err;
		}
	}
};
