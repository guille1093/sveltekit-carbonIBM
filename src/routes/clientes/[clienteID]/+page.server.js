/** @type {import('./$types').PageServerLoad} */
import { error, redirect } from '@sveltejs/kit';


export async function load({ locals, params }) {
    const clienteId = params.clienteID;

    const getClientes = async () => {
        // @ts-ignore
        return structuredClone(await locals.pb.collection('clientes').getFullList(5000, {}));
    };

    const getCliente = async () => {
        try {
            const cliente = structuredClone(await locals.pb.collection('clientes').getOne(clienteId));
            return cliente;
        } catch (err) {
            console.log('Error al obtener el cliente: ', err);
            throw err;
        }
    };


    const getNacionalidades = async () => {
        // @ts-ignore
        return structuredClone(await locals.pb.collection('nacionalidades').getFullList(undefined, {}));
    };

    const [cliente, nacionalidades, clientes] = await Promise.all([getCliente(), getNacionalidades(), getClientes()]);

    if (!cliente) {
        throw new Error('No se encontró el cliente');
    }

    return {
        cliente,
        nacionalidades,
        clientes
    };
};

export const actions = {
    update: async ({ request, params, locals }) => {
        const clienteId = params.clienteID;
        const form = await request.formData();
        const nombre = form.get('nombre') ?? '';
        const dni = form.get('dni') ?? '';
        const apellido = form.get('apellido') ?? '';
        const fechanacimiento = new Date(`${(parts => `${parts[1]}/${parts[0]}/${parts[2]}`)(form.get('nacimiento')?.toString().split('/') ?? new Date().toLocaleDateString().split('/'))}`);
        const nombremadre = form.get('nombremadre') ?? '';
        const apellidomadre = form.get('apellidomadre') ?? '';
        const domicilio = form.get('domicilio') ?? '';
        const telefono = form.get('telefono') ?? '';
        const email = form.get('email') ?? '';
        const ocupacion = form.get('ocupacion') ?? '';
        const nacionalidad = form.get('nacionalidad') ?? 'ARGENTINA';
        const sexo = form.get('sexo') ?? 'MASCULINO';
        const observaciones = form.get('observaciones') ?? '';
        const lugarascenso = form.get('lugarascenso') ?? '';

        const data = {
            dni,
            nombre,
            apellido,
            fechanacimiento,
            nombremadre,
            apellidomadre,
            domicilio,
            telefono,
            email,
            ocupacion,
            nacionalidad,
            sexo,
            observaciones,
            lugarascenso
        };

        console.log('data: ', data);

        try {
            await locals.pb.collection('clientes').update(clienteId, data);
            return {
                status: 200,
                body: {
                    message: 'Cliente actualizado correctamente'
                }
            };
        }
        catch (err) {
            console.log('Error: ', err);
            throw err;
        }
    },


    delete: async ({ params, locals }) => {
        const clienteId = params.clienteID;
        try {
            await locals.pb.collection('clientes').delete(clienteId);
            throw redirect(307, '/clientes');
        }
        catch (err) {
            console.log('Error: ', err);
            throw err;
        }
    }
};