/** @type {import('./$types').PageServerLoad} */

import { error } from '@sveltejs/kit';

export const load = ({ locals, params }) => {
    const clienteId = params.clienteID;

    const getCliente = async () => {
        try {
            const cliente = structuredClone(await locals.pb.collection('clientes').getOne(clienteId));
            return cliente;
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }
    };

    return {
        cliente: getCliente()
    };
};