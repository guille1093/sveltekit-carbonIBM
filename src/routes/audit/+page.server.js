/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	try {
		// Obtener las ventas
		const getRegistrosAuditoria = async () => {
			// @ts-ignore
			return structuredClone(
				// @ts-ignore
				await locals.pb.collection('audit').getFullList(5000, { expand: 'user' })
			);
		};

		const registros = await getRegistrosAuditoria();

		return {
			registros
		};
	} catch (error) {
		console.log(error);
	}
}
