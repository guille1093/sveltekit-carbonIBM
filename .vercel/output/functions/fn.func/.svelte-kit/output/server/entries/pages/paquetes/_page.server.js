import { t as transporter } from "../../../chunks/email.js";
import { p as publicidad } from "../../../chunks/publicidad.js";
async function sendMail({ cliente, paquete }) {
  console.log("llega a la api de email");
  const htmlParams = {
    cliente,
    paquete
  };
  const options = {
    from: "delvalleturismo@app.com",
    to: cliente.email,
    subject: `Tu proximo viaje a ${paquete.nombre} ya esta aqui 🎉`,
    html: publicidad(htmlParams)
  };
  const info = await transporter.sendMail(options);
  console.log(info.response);
  return new Response(info.response);
}
async function load({ locals }) {
  try {
    const getpaquetes = async () => {
      return structuredClone(await locals.pb.collection("projects").getFullList(5e3, {}));
    };
    const getNacionalidades = async () => {
      return structuredClone(
        await locals.pb.collection("nacionalidades").getFullList(void 0, {})
      );
    };
    const [paquetes, nacionalidades] = await Promise.all([getpaquetes(), getNacionalidades()]);
    return {
      paquetes,
      nacionalidades
    };
  } catch (err) {
    console.log("Error: ", err);
  }
}
const actions = {
  create: async ({ request, locals }) => {
    const form = await request.formData();
    const nombre = form.get("nombre") ?? "";
    const precio = form.get("precio") ?? "";
    const cant_dias = form.get("cant_dias") ?? "";
    const cant_noches = form.get("cant_noches") ?? "";
    const regimen = form.get("regimen") ?? "";
    const hotel = form.get("hotel") ?? "";
    const transporte = form.get("transporte") ?? "";
    const estado = form.get("estado") ?? "";
    function getFormattedCurrentDate() {
      const currentDate = /* @__PURE__ */ new Date();
      return currentDate.toISOString();
    }
    let fechasalida = form.get("fechasalida")?.toString();
    if (!fechasalida) {
      fechasalida = getFormattedCurrentDate();
    } else {
      const parts = fechasalida.split("/");
      fechasalida = new Date(parts[2], parts[1] - 1, parts[0]).toISOString();
    }
    let fecharetorno = form.get("fecharetorno")?.toString();
    if (!fecharetorno) {
      fecharetorno = getFormattedCurrentDate();
    } else {
      const parts = fecharetorno.split("/");
      fecharetorno = new Date(parts[2], parts[1] - 1, parts[0]).toISOString();
    }
    const descripcion = form.get("obervaciones") ?? "";
    const pais_destino = form.get("pais_destino") ?? "";
    let data = {
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
      pais_destino
    };
    const clientesConEmail = await locals.pb.collection("clientes").getFullList({
      filter: 'email != ""'
    });
    try {
      const newPaquete = await locals.pb.collection("projects").create(data);
      clientesConEmail.forEach(async (cliente) => {
        await sendMail({ cliente, paquete: await newPaquete });
      });
      return structuredClone(newPaquete);
    } catch (err) {
      console.log("Error: ", err);
    }
  }
};
export {
  actions,
  load
};
