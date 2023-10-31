import { error, redirect } from '@sveltejs/kit';

//Si el usuario ya está logueado, lo redirige a la página principal
export const load = async ({ locals }) => {
	if (locals.pb?.authStore?.model) {
		throw redirect(303, '/');
	}
	return {};
};

export const actions = {
	login: async ({ request, locals }) => {
		const formData = await request.formData();

		console.log('formData: ', formData);

		const data = {
			email: formData.get('email'),
			password: formData.get('password')
		};

		try {
			await locals.pb.collection('users').authWithPassword(data);
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				return {
					notVerified: true
				};
			}
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, '/');
	}
};
