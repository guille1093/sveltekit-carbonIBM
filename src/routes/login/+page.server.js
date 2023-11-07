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
		try {
			await locals.pb
				.collection('users')
				.authWithPassword(formData.get('email').toString(), formData.get('password').toString());
			return {
				success: true
			};
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	}
};
