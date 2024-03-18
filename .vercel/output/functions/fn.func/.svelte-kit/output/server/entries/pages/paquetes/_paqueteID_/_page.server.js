import { r as redirect } from "../../../../chunks/index.js";
const load = ({ locals, params }) => {
  const getProject = async (paqueteID) => {
    try {
      return structuredClone(await locals.pb.collection("projects").getOne(paqueteID));
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  const getNacionalidades = async () => {
    return structuredClone(await locals.pb.collection("nacionalidades").getFullList(void 0, {}));
  };
  const getVentas = async (paqueteID) => {
    try {
      const ventas = structuredClone(
        await locals.pb.collection("ventas").getFullList(void 0, { filter: `paquete = "${paqueteID}" && estado = "FINALIZADA"` })
      );
      const getNombrePasajero = async (pasajero) => {
        const cliente = await locals.pb.collection("clientes").getOne(pasajero);
        return structuredClone(cliente);
      };
      await Promise.all(
        ventas.map(async (venta) => {
          await Promise.all(
            venta.pasajeros.map(
              async (pasajero, index) => {
                venta.pasajeros[index] = await getNombrePasajero(pasajero);
              }
            )
          );
          const titular = await getNombrePasajero(venta.cliente);
          venta.cliente = titular;
          venta.pasajeros.push(venta.cliente);
        })
      );
      console.log("ventas: ", ventas);
      return ventas;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  return {
    paquetes: getProject(params.paqueteID),
    ventas: getVentas(params.paqueteID),
    nacionalidades: getNacionalidades()
  };
};
const actions = {
  update: async ({ request, params, locals }) => {
    const clienteId = params.paqueteID;
    const form = await request.formData();
    const nombre = form.get("nombre") ?? "";
    const precio = form.get("precio") ?? "";
    const cant_dias = form.get("cant_dias") ?? "";
    const cant_noches = form.get("cant_noches") ?? "";
    const regimen = form.get("regimen") ?? "";
    const hotel = form.get("hotel") ?? "";
    const transporte = form.get("transporte") ?? "";
    const estado = form.get("estado") ?? "";
    const fechasalida = /* @__PURE__ */ new Date(
      `${((parts) => `${parts[1]}/${parts[0]}/${parts[2]}`)(
        form.get("fechasalida")?.toString().split("/") ?? (/* @__PURE__ */ new Date()).toLocaleDateString().split("/")
      )}`
    );
    const fecharetorno = /* @__PURE__ */ new Date(
      `${((parts) => `${parts[1]}/${parts[0]}/${parts[2]}`)(
        form.get("fecharetorno")?.toString().split("/") ?? (/* @__PURE__ */ new Date()).toLocaleDateString().split("/")
      )}`
    );
    const descripcion = form.get("obervaciones") ?? "";
    const pais_destino = form.get("pais_destino") ?? "";
    const chofer1nombre = form.get("chofer1nombre") ?? "";
    const chofer1dni = form.get("chofer1dni") ?? "";
    const chofer2nombre = form.get("chofer2nombre") ?? "";
    const chofer2dni = form.get("chofer2dni") ?? "";
    const dominio = form.get("dominio") ?? "";
    const interno = form.get("interno") ?? "";
    const data = {
      nombre,
      precio,
      cant_dias,
      cant_noches,
      regimen,
      hotel,
      transporte,
      estado,
      fechasalida,
      fecharetorno,
      descripcion,
      pais_destino,
      chofer1nombre,
      chofer1dni,
      chofer2nombre,
      chofer2dni,
      dominio,
      interno
    };
    try {
      await locals.pb.collection("projects").update(clienteId, data);
      return {
        status: 200,
        body: {
          message: "Paquete actualizado correctamente"
        }
      };
    } catch (err) {
      console.log("Error: ", err);
      throw err;
    }
  },
  delete: async ({ params, locals }) => {
    const clienteId = params.paqueteID;
    try {
      await locals.pb.collection("projects").delete(clienteId);
      throw redirect(307, "/paquetes");
    } catch (err) {
      console.log("Error: ", err);
      throw err;
    }
  }
};
export {
  actions,
  load
};
