import { t as transporter } from "../../../../chunks/email.js";
const manifestMail = ({ paquete }) => `
    <html lang="es">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                    <title>¡Descubre tu próximo destino!</title>
                    <style media="all" type="text/css">
                        @media all {
            .btn - primary table td:hover {
                            background - color: #ec0867 !important;
            }

                        .btn-primary a:hover {
                            background - color: #ec0867 !important;
                        border-color: #ec0867 !important;
            }
        }

                        @media only screen and (max-width: 640px) {
            .main p,
                        .main td,
                        .main span {
                            font - size: 16px !important;
            }

                        .wrapper {
                            padding: 8px !important;
            }

                        .content {
                            padding: 0 !important;
            }

                        .container {
                            padding: 0 !important;
                        padding-top: 8px !important;
                        width: 100% !important;
            }

                        .main {
                            border - left - width: 0 !important;
                        border-radius: 0 !important;
                        border-right-width: 0 !important;
            }

                        .btn table {
                            max - width: 100% !important;
                        width: 100% !important;
            }

                        .btn a {
                            font - size: 16px !important;
                        max-width: 100% !important;
                        width: 100% !important;
            }
        }

                        @media all {
            .ExternalClass {
                            width: 100%;
            }

                        .ExternalClass,
                        .ExternalClass p,
                        .ExternalClass span,
                        .ExternalClass font,
                        .ExternalClass td,
                        .ExternalClass div {
                            line - height: 100%;
            }

                        .apple-link a {
                            color: inherit !important;
                        font-family: inherit !important;
                        font-size: inherit !important;
                        font-weight: inherit !important;
                        line-height: inherit !important;
                        text-decoration: none !important;
            }

                        #MessageViewBody a {
                            color: inherit;
                        text-decoration: none;
                        font-size: inherit;
                        font-family: inherit;
                        font-weight: inherit;
                        line-height: inherit;
            }
        }
                    </style>
                </head>
                <body style="font-family: Helvetica, sans-serif; -webkit-font-smoothing: antialiased; font-size: 16px; line-height: 1.3; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f4f5f6; margin: 0; padding: 0; ">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f4f5f6; width: 100%;" width="100%" bgcolor="#f4f5f6">
                        <tr>
                            <td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;" valign="top">&nbsp;</td>
                            <td class="container" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; max-width: 600px; padding: 0; padding-top: 24px; width: 600px; margin: 0 auto;" width="600" valign="top">
                                <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 600px; padding: 0;">

                                    <!-- CABECERA DEL MENSAJE -->
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="header" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border: 1px solid #eaebed; border-radius: 16px; width: 100%;" width="100%">
                                        <tr>
                                            <td class="wrapper" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; box-sizing: border-box; padding: 24px; text-align: center;" valign="top">                        
                                                <h1 style="font-family: 'Courier New', Courier, monospace;">ΣXCURSIA</h1>

                                                    <h2>NUEVO MANIFIESTO DISPONIBLE 📋</h2>
                                            </td>
                                        </tr>
                                    </table>

                                    <!-- CONTENIDO PRINCIPAL -->
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border: 1px solid #eaebed; border-radius: 16px; width: 100%;" width="100%">
                                        <tr>
                                            <td class="wrapper" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; box-sizing: border-box; padding: 24px;" valign="top">
                                                <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">¡Hola! 👋🏻</p>
                                                <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">Se encuentra disponible el manifiesto para <strong>${paquete.nombre}<strong/> con fecha de salida <strong>${new Date(paquete.fechasalida).toLocaleDateString("es-ES", { day: "2-digit", month: "short", year: "numeric" })}<strong/></p>
                                                <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; width: 100%; min-width: 100%;" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td align="center" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; padding-bottom: 16px;" valign="top">
                                                                <a href="http://localhost:5173/manifestPDF/${paquete.id}" target="_blank" style="border: solid 2px #ec0867; border-radius: 4px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 16px; font-weight: bold; margin: 0; padding: 12px 24px; text-decoration: none; background-color: #ec0867; border-color: #ec0830; color: #ffffff;">
                                                                    DESCARGAR
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>    
                                                <!-- PIE DE PÁGINA -->
                                    <div class="footer" style="clear: both; padding-top: 24px; text-align: center; width: 100%;">
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                            <tr>
                                                <td class="content-block" style="font-family: Helvetica, sans-serif; vertical-align: top; color: #9a9ea6; font-size: 16px; text-align: center;" valign="top" align="center">
                                                    <span class="company-info" style="color: #9a9ea6; font-size: 16px; text-align: center;">Tu Empresa, Dirección, Ciudad</span>
                                                    <br>
                                                        ¿Deseas no recibir más notificaciones? <a href="http://tupagina.com/desuscribir" style="text-decoration: underline; color: #9a9ea6; font-size: 16px; text-align: center;">Désuscribirme</a>.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="content-block powered-by" style="font-family: Helvetica, sans-serif; vertical-align: top; color: #9a9ea6; font-size: 16px; text-align: center;" valign="top" align="center">
                                                    Powered by <a href="http://tupagina.com" style="color: #9a9ea6; font-size: 16px; text-align: center; text-decoration: none;">EXCURSIA</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>                    
                                </div>
                            </td>
                            <td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;" valign="top">&nbsp;</td>
                        </tr>
                    </table>
                </body>
            </html>`;
async function sendManifestEmail({ paquete }) {
  const htmlParams = {
    paquete
  };
  const options = {
    from: "excursia@app.com",
    to: "guillermo@turismo.com",
    subject: `Manifiesto disponible ${paquete.nombre}`,
    html: manifestMail(htmlParams)
  };
  const info = await transporter.sendMail(options);
  console.log(info.response);
  return new Response(info.response);
}
let venta = void 0;
async function load({ locals, params }) {
  const getVenta = async (ventaId) => {
    const [ventaRaw, clientesRaw, paquetesRaw] = await Promise.all([
      locals.pb.collection("ventas").getOne(ventaId),
      locals.pb.collection("clientes").getFullList(void 0, {}),
      locals.pb.collection("projects").getFullList(void 0, {})
    ]);
    const venta2 = structuredClone(ventaRaw);
    const clientes = clientesRaw.reduce(
      (map, cliente2) => {
        map[cliente2.id] = cliente2;
        return map;
      },
      {}
    );
    const paquetes = paquetesRaw.reduce(
      (map, paquete2) => {
        map[paquete2.id] = paquete2;
        return map;
      },
      {}
    );
    const cliente = clientes[venta2.cliente];
    const paquete = paquetes[venta2.paquete];
    venta2.cliente = {
      dni: cliente.dni,
      nombre: cliente.nombre,
      apellido: cliente.apellido
    };
    venta2.paquete = {
      nombre: paquete.nombre,
      precio: paquete.precio,
      regimen: paquete.regimen,
      cant_dias: paquete.cant_dias,
      cant_noches: paquete.cant_noches,
      fechasalida: paquete.fechasalida,
      fecharetorno: paquete.fecharetorno
    };
    return venta2;
  };
  const ventaExpanded = structuredClone(
    await locals.pb.collection("ventas").getOne(params.ventasID, { expand: "cliente, pasajeros, pagos, paquete" })
  );
  venta = ventaExpanded;
  return {
    venta: getVenta(params.ventasID),
    ventaExpanded
  };
}
const actions = {
  createPago: async ({ request, locals, params }) => {
    const form = await request.formData();
    const data = {
      valor: form.get("valor"),
      total: form.get("total"),
      saldo: form.get("saldo")
    };
    const NuevoPagoValor = parseInt(data.valor, 10);
    const TotalPagado = parseInt(venta.pagado, 10);
    const NuevoTotalPagado = NuevoPagoValor + TotalPagado;
    const record = await createPago(locals, data);
    await updateVentas(locals, params, record.id, NuevoTotalPagado);
  },
  deletePago: async ({ locals, request, params }) => {
    const form = await request.formData();
    const data = {
      valor: form.get("valor"),
      total: form.get("total"),
      saldo: form.get("saldo")
    };
    console.log(data);
    const record = await locals.pb.collection("pagos").getOne(params.pagosID);
    const PagoValor = parseInt(record.valor, 10);
    const TotalPagado = parseInt(venta.pagado, 10);
    const NuevoTotalPagado = TotalPagado - PagoValor;
    await locals.pb.collection("pagos").delete(params.pagosID);
    await updateVentas(locals, params, null, NuevoTotalPagado);
  }
};
async function createPago(locals, data) {
  return await locals.pb.collection("pagos").create(data);
}
async function updateVentas(locals, params, recordID, NuevoTotalPagado) {
  let estado = "EN CURSO";
  let valor = venta.expand.paquete.precio * venta.cant_personas;
  if (venta.expand.paquete.precio * venta.cant_personas === NuevoTotalPagado) {
    estado = "FINALIZADA";
    valor = NuevoTotalPagado;
    const ventas = await locals.pb.collection("ventas").getFullList(void 0, {
      filter: `paquete = "${venta.paquete}" && estado = "FINALIZADA"`
    }, { expand: "cliente, pasajeros, pagos, paquete" });
    const sumatoriaCantPersonas = venta.cant_personas + ventas.reduce((sum, venta2) => sum + venta2.cant_personas, 0);
    console.log("Sumatoria de cant_personas:", sumatoriaCantPersonas);
    if (sumatoriaCantPersonas > 30) {
      console.log("Venta con noti", venta.paquete);
      const paquete = await locals.pb.collection("projects").getOne(venta.paquete);
      sendManifestEmail({ paquete });
    }
  }
  return await locals.pb.collection("ventas").update(params.ventasID, {
    "pagos+": recordID,
    estado,
    pagado: NuevoTotalPagado,
    valor
  });
}
export {
  actions,
  load
};
