/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {};
};


export const actions = {
    create: async ({ request, locals }) => {
        const form = await request.formData();
        const nombre = form.get('nombre') ?? '';
        const nacimiento = new Date(`${(parts => `${parts[1]}/${parts[0]}/${parts[2]}`)(form.get('nacimiento').split('/'))}`);

        const data = {
            nombre,
            nacimiento
        };

        await locals.pb.collection('persona').create(data);
    }
}