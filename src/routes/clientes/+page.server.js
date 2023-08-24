/** @type {import('./$types').PageServerLoad} */
import { error } from '@sveltejs/kit';


export async function load({ locals }) {
    try {
        const getClientes = async () => {
            // @ts-ignore
            return structuredClone(await locals.pb.collection('clientes').getFullList(5000, {}));
        };

        const getNacionalidades = async () => {
            // @ts-ignore
            return structuredClone(await locals.pb.collection('nacionalidades').getFullList(undefined, {}));
        };

        const [clientes, nacionalidades] = await Promise.all([getClientes(), getNacionalidades()]);
        console.log('clientes y nacionalidades cargados');
        return {
            clientes,
            nacionalidades
        };
    } catch (err) {
        console.log('Error: ', err);
        // @ts-ignore
        throw error(err.status, err.message);
    }
};

export const actions = {
    create: async ({ request, locals }) => {
        await new Promise((fulfil) => setTimeout(fulfil, 2000));
        const form = await request.formData();
        console.log('form: ', form);
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
            // @ts-ignore
            await locals.pb.collection('clientes').create(data);
            return {
                success: true,
                message: "Cliente creado con éxito"
            };
        } catch (err) {
            console.log('Error: ', err);
            // @ts-ignore
            throw error(err.status, err.message);
        }

    }
}
