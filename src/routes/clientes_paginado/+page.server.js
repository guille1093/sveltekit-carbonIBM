/** @type {import('./$types').PageServerLoad} */
import { users_paginados } from '$lib/components/ClientesPaginado/clientes_servicio.js';

export async function load({ locals }) {
    try {
        const clientes = await users_paginados(locals, 1, 5);
        return { clientes };
    } catch (err) {
        console.log('Error: ', err);
    }
}

export const actions = {
    page: async ({ request, locals }) => {
        await new Promise((fulfil) => setTimeout(fulfil, 1500));
        const form = await request.formData();
        console.log('form: ', form);
        const pageNumber = Number(form.get('page'));
        const itemsPerPage = Number(form.get('pageSize'));
        const clientes = await users_paginados(locals, pageNumber, itemsPerPage)
        return clientes;

    }
};
