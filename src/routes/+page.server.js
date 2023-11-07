/** @type {import('./$types').PageServerLoad} */

import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	if (!locals.user) {
		throw redirect(302, '/login');
	}

	try {
		const getProjects = async () => {
			return structuredClone(await locals.pb.collection('projects').getFullList(5000, {}));
		};

		const [projects] = await Promise.all([getProjects()]);

		return {
			projects
		};
	} catch (err) {
		console.log('Error: ', err);
	}
}
