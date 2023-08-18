/** @type {import('./$types').PageServerLoad} */
import { error } from '@sveltejs/kit';


export async function load({ locals }) {
    try {
        const getClientes = async () => {
            return structuredClone(await locals.pb.collection('clientes').getFullList(5000, {}));
        };

        const [clientes] = await Promise.all([getClientes()]);

        return {
            clientes
        };
    } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
    }
};
