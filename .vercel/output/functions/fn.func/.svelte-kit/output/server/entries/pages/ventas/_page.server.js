async function load({ locals }) {
  try {
    const getClientes = async () => {
      return structuredClone(await locals.pb.collection("clientes").getFullList(void 0, {}));
    };
    const getPaquetes = async () => {
      return structuredClone(await locals.pb.collection("projects").getFullList(void 0, {}));
    };
    const [clientes, paquetes] = await Promise.all([getClientes(), getPaquetes()]);
    console.log("clientes y paquetes cargados");
    const getVentas = async () => {
      return structuredClone(
        await locals.pb.collection("ventas").getFullList(5e3, { expand: "cliente, pasajeros, pagos, paquete" })
      );
    };
    const ventas = await getVentas();
    const ventasinf = ventas.map((venta) => {
      const cliente = clientes.find((c) => c.id === venta.cliente);
      const paquete = paquetes.find((p) => p.id === venta.paquete);
      if (cliente && paquete) {
        const nombre = cliente.nombre;
        const apellido = cliente.apellido;
        const dni = cliente.dni;
        const nombrePaquete = paquete.nombre;
        const estadoPaquete = paquete.estado;
        const precioPaquete = paquete.precio;
        const paqueteFecha = paquete.fechasalida;
        const precioVenta = precioPaquete * venta.cant_personas;
        return {
          ...venta,
          nombre,
          apellido,
          dni,
          nombrePaquete,
          estadoPaquete,
          precioPaquete,
          paqueteFecha,
          precioVenta
        };
      } else {
        console.log("Cliente o paquete no encontrado para venta:", venta);
        return {
          ...venta,
          nombre: "No encontrado",
          apellido: "No encontrado",
          dni: "No encontrado",
          nombrePaquete: "No encontrado",
          estadoPaquete: "No encontrado",
          precioPaquete: "No encontrado"
        };
      }
    });
    console.log("ventas cargadas");
    return {
      clientes,
      paquetes,
      ventas: ventasinf
    };
  } catch (err) {
    console.log("Error: ", err);
  }
}
const actions = {
  createVenta: async ({ request, locals }) => {
    await new Promise((fulfil) => setTimeout(fulfil, 1500));
    const form = await request.formData();
    console.log("form: ", form);
    const cliente = form.get("cliente") ?? "";
    const paquete = form.get("paquete") ?? "";
    const pagado = "0";
    const observaciones = form.get("observaciones") ?? "";
    const estado = "EN CURSO";
    const cant_personas = form.get("cant_personas") ?? "";
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
