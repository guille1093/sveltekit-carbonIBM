/** @type {import('./$types').PageServerLoad} */

export async function load({ locals }) {
	try {
		const getProjects = async () => {
			return structuredClone(
				await locals.pb.collection('projects').getFullList(5000, { sort: '-created' })
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
