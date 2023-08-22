/** @type {import('./$types').PageServerLoad} */
import { error } from '@sveltejs/kit';


export async function load({ locals }) {
    try {
        const getClientes = async () => {
            // @ts-ignore
            return structuredClone(await locals.pb.collection('clientes').getFullList(5000, {}));
        };

        const [clientes] = await Promise.all([getClientes()]);
        console.log('clientes cargados');
        return {
            clientes
        };
    } catch (err) {
        console.log('Error: ', err);
        // @ts-ignore
        throw error(err.status, err.message);
    }
};

export const actions = {
    create: async ({ request, locals }) => {
        const form = await request.formData();
        const nombre = form.get('nombre') ?? '';
        const nacimiento = new Date(`${(parts => `${parts[1]}/${parts[0]}/${parts[2]}`)(form.get('nacimiento')?.toString().split('/') ?? new Date().toLocaleDateString().split('/'))}`);

        const data = {
            nombre,
            nacimiento
        };

        console.log('data: ', data);
        // @ts-ignore
        await locals.pb.collection('persona').create(data);
    }
}