import { redirect } from '@sveltejs/kit';

/**
 *
 * @param {*} param0
 * @returns
 */
export async function load({ locals, params }) {
	const userId = params.userID;

	const getuser = async () => {
		try {
			const user = structuredClone(
				await locals.pb.collection('users').getOne(userId, { expand: 'rol' })
			);
			return user;
		} catch (err) {
			console.log('Error al obtener el user: ', err);
			throw err;
		}
	};

	const getRoles = async () => {
		return structuredClone(
			// @ts-ignore
			await locals.pb.collection('roles').getFullList()
		);
	};

	const [user] = await Promise.all([getuser()]);

	return {
		user,
		roles: await getRoles()
	};
}

export const actions = {
	update: async ({ request, params, locals }) => {
		const userId = params.userID;
		const form = await request.formData();
		const name = form.get('nombre').toString().toLocaleLowerCase();
		const apellido = form.get('apellido').toString().toLocaleLowerCase();
		const rol = form.get('rol');
		const verified = form.get('verified');
		console.log('form: ', form);
		let data = {
			name,
			apellido,
			rol,
			verified: verified
		};
		const resetPassword = form.get('resetPassword');
		console.log('resetPassword: ', resetPassword);
		if (resetPassword === 'true') {
			const defaultpassword = locals.default_sys_props.defaultNewUserPassword;
			const password = defaultpassword;
			data = {
				...data,
				password: password,
				passwordConfirm: password
			};
		}

		console.log('dataform: ', data);

		try {
			await locals.pb.collection('users').update(userId, data);
		} catch (err) {
			console.log('Error: ', err);
			throw err;
		}
	},

	delete: async ({ params, locals }) => {
		const userId = params.userID;
		try {
			await locals.pb.collection('users').update(userId, { verified: false });
			throw redirect(307, '/users');
		} catch (err) {
			console.log('Error: ', err);
			throw err;
		}
	}
};
