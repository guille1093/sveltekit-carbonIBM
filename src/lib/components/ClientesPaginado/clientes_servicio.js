export const users_paginados = async (locals, pageNumber, itemsPerPage) => {
	return structuredClone(
		await locals.pb.collection('clientes').getList(pageNumber, itemsPerPage, {})
	);
};
