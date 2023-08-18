import { error, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { loginUserSchema } from '$lib/schemas/login.js';

//Si el usuario ya está logueado, lo redirige a la página principal
export const load = async ({ locals }) => {
    if (locals.pb?.authStore?.model) {
        throw redirect(303, '/');
    }
    return {};
};

export const actions = {
    login: async ({ request, locals }) => {
        const { formData, errors } = await validateData(await request.formData(), loginUserSchema);

        if (errors) {
            return {
                data: formData,
                errors: errors.fieldErrors
            };
        }

        try {
            await locals.pb.collection('users').authWithPassword(formData.email, formData.password);
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