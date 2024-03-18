async function load({ locals }) {
  try {
    const getVentas = async () => {
      return structuredClone(
        // @ts-ignore
        await locals.pb.collection("ventas").getFullList(5e3, { expand: "cliente, pasajeros, pagos, paquete" })
      );
    };
    const getClientes = async () => {
      return structuredClone(await locals.pb.collection("clientes").getFullList(5e3, {}));
    };
    const getPaquetes = async () => {
      return structuredClone(await locals.pb.collection("projects").getFullList(5e3, {}));
    };
    const ventas = await getVentas();
    const clientes = await getClientes();
    const paquetes = await getPaquetes();
    return {
      ventas,
      clientes,
      paquetes
    };
  } catch (error) {
    console.log(error);
  }
}
const actions = {
  createVenta: async ({ request, locals }) => {
    await new Promise((fulfil) => setTimeout(fulfil, 1500));
    const form = await request.formData();
    console.log("form: ", form);
    const cliente = form.get("cliente");
    const paquete = form.get("paquete");
    const pagado = "0";
    const observaciones = form.get("observaciones") ?? "";
    const estado = "EN CURSO";
    const cant_personas = form.get("cant_personas");
    const pasajeros = form.get("pasajeros") ?? "";
    const valor = form.get("precio") ?? "1";
    const data = {
      cliente,
      paquete,
      pagado,
      observaciones,
      estado,
      cant_personas,
      pasajeros: pasajeros.toString().split(","),
      valor
    };
    console.log("data: ", data);
    const { id } = await locals.pb.collection("ventas").create(data);
    return {
      status: 303,
      redirect: `/ventas/${id}`
    };
  }
};
export {
  actions,
  load
};
