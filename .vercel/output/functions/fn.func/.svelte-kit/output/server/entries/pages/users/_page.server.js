import crypto from "crypto";
async function load({ locals }) {
  try {
    const getUsers = async () => {
      return structuredClone(
        // @ts-ignore
        await locals.pb.collection("users").getFullList(void 0, { expand: "rol" })
      );
    };
    const getRoles = async () => {
      return structuredClone(
        // @ts-ignore
        await locals.pb.collection("roles").getFullList()
      );
    };
    const users = (await getUsers()).map((user) => {
      user.rol = user.expand.rol.name;
      return user;
    });
    return {
      users,
      roles: await getRoles()
    };
  } catch (err) {
    console.log("Error: ", err);
  }
}
const actions = {
  create: async ({ request, locals }) => {
    const defaultpassword = locals.default_sys_props.defaultNewUserPassword;
    const form = await request.formData();
    const generateRandomSuffix = () => {
      const randomBytes = crypto.randomBytes(4);
      const suffix = randomBytes.toString("hex");
      return suffix;
    };
    const nombre = form.get("nombre").toString().toLowerCase();
    const apellido = form.get("apellido").toString().toLowerCase();
    const username = `${nombre}.${apellido}.${generateRandomSuffix()}`;
    const dni = form.get("dni");
    const observaciones = form.get("observaciones") ?? "";
    const rol = form.get("rol") ?? "xlgmom4m76l4qcz";
    const password = defaultpassword;
    const data = {
      username,
      password,
      passwordConfirm: password,
      name: nombre,
      apellido,
      dni,
      rol,
      observaciones
    };
    try {
      await locals.pb.collection("users").create(data);
    } catch (err) {
      console.log("Error: ", err);
    }
  },
  update: async ({ request, locals }) => {
    const formData = await request.formData();
    console.log(formData);
    const id = formData.get("id");
    const name = formData.get("name");
    const view_audit = formData.get("view_audit") ? true : false;
    const view_reports = formData.get("view_reports") ? true : false;
    const view_sales = formData.get("view_sales") ? true : false;
    const view_clients = formData.get("view_clients") ? true : false;
    const view_products = formData.get("view_products") ? true : false;
    const view_users = formData.get("view_users") ? true : false;
    const data = {
      name,
      view_users,
      view_audit,
      view_clients,
      view_products,
      view_sales,
      view_reports
    };
    try {
      const updatedRol = structuredClone(await locals.pb.collection("roles").update(id, data));
      return updatedRol;
    } catch (err) {
      console.log("Error: ", err);
    }
  }
};
export {
  actions,
  load
};
