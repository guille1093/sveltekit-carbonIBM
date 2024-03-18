const users_paginados = async (locals, pageNumber, itemsPerPage) => {
  return structuredClone(
    await locals.pb.collection("clientes").getList(pageNumber, itemsPerPage, {})
  );
};
async function load({ locals }) {
  try {
    const clientes = await users_paginados(locals, 1, 5);
    return { clientes };
  } catch (err) {
    console.log("Error: ", err);
  }
}
const actions = {
  page: async ({ request, locals }) => {
    await new Promise((fulfil) => setTimeout(fulfil, 1500));
    const form = await request.formData();
    console.log("form: ", form);
    const pageNumber = Number(form.get("page"));
    const itemsPerPage = Number(form.get("pageSize"));
    const clientes = await users_paginados(locals, pageNumber, itemsPerPage);
    return clientes;
  }
};
export {
  actions,
  load
};
