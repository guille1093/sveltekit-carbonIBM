async function load({ locals }) {
  try {
    const getClientes = async () => {
      return structuredClone(await locals.pb.collection("clientes").getFullList(void 0, {}));
    };
    const getNacionalidades = async () => {
      return structuredClone(
        await locals.pb.collection("nacionalidades").getFullList(void 0, {})
      );
    };
    const [clientes, nacionalidades] = await Promise.all([getClientes(), getNacionalidades()]);
    return {
      clientes,
      nacionalidades
    };
  } catch (err) {
    console.log("Error: ", err);
  }
}
const actions = {
  create: async ({ request, locals }) => {
    await new Promise((fulfil) => setTimeout(fulfil, 1500));
    const form = await request.formData();
    console.log("form: ", form);
    const nombre = form.get("nombre") ?? "";
    const dni = form.get("dni") ?? "";
    const apellido = form.get("apellido") ?? "";
    const fechanacimiento = /* @__PURE__ */ new Date(
      `${((parts) => `${parts[1]}/${parts[0]}/${parts[2]}`)(
        form.get("nacimiento")?.toString().split("/") ?? (/* @__PURE__ */ new Date()).toLocaleDateString().split("/")
      )}`
    );
    const nombremadre = form.get("nombremadre") ?? "";
    const apellidomadre = form.get("apellidomadre") ?? "";
    const domicilio = form.get("domicilio") ?? "";
    const telefono = form.get("telefono") ?? "";
    const email = form.get("email") ?? "";
    const ocupacion = form.get("ocupacion") ?? "";
    const nacionalidad = form.get("nacionalidad") ?? "ARGENTINA";
    const sexo = form.get("sexo") ?? "MASCULINO";
    const observaciones = form.get("observaciones") ?? "";
    const lugarascenso = form.get("lugarascenso") ?? "";
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
    try {
      await locals.pb.collection("clientes").create(data);
    } catch (err) {
      console.log("Error: ", err);
    }
  }
};
export {
  actions,
  load
};
