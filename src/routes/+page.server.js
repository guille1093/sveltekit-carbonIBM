/** @type {import('./$types').PageServerLoad} */

export async function load({ locals }) {

	const today = new Date().toISOString().split('T')[0];
	const filter = `fechasalida >= "${today} 00:00:00"`;
	try {
		const getProjects = async () => {
			return structuredClone(
				await locals.pb.collection('projects').getFullList(5000, { sort: '-created',  filter: filter })
			);
		};
		const [projects] = await Promise.all([getProjects()]);
		return {
			projects
		};
	} catch (err) {
		console.log('Error: ', err);
	}
}
