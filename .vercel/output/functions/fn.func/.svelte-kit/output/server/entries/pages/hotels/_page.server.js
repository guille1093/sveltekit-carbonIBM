async function load({ locals }) {
  try {
    const getHotels = async () => {
      return structuredClone(await locals.pb.collection("hotels").getFullList(void 0, {}));
    };
    return {
      hotels: await getHotels()
    };
  } catch (err) {
    console.log("Error: ", err);
  }
}
const actions = {
  create: async ({ request, locals }) => {
    const form = await request.formData();
    const nombre = form.get("nombre") ?? "";
    const telefono = form.get("telefono") ?? "";
    const email = form.get("email") ?? "";
    const direccion = form.get("direccion") ?? "ARGENTINA";
    const observaciones = form.get("observaciones") ?? "";
    const data = {
      nombre,
      direccion,
      telefono,
      email,
      observaciones
    };
    try {
      await locals.pb.collection("hotels").create(data);
    } catch (err) {
      console.log("Error: ", err);
    }
  }
};
export {
  actions,
  load
};
