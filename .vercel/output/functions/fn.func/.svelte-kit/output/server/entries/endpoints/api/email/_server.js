import { t as transporter } from "../../../../chunks/email.js";
import { p as publicidad } from "../../../../chunks/publicidad.js";
async function POST() {
  console.log("llega a la api de email");
  const htmlParams = {
    nombre: "Marina",
    destino: "Brasil"
  };
  const options = {
    from: "delvalleturismo@app.com",
    to: "marina_olivera@gmail.com, unman@email.com",
    subject: `Tu proximo viaje a ${htmlParams.destino} ya esta aqui 🤩`,
    html: publicidad(htmlParams)
  };
  const info = await transporter.sendMail(options);
  console.log(info.response);
  return new Response(info.response);
}
export {
  POST
};
