export const publicidad = ({ cliente, paquete }) => `
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
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="header" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url('https://i.ibb.co/hWvYk29/001b704a-city-15939-1629b33a69c.jpg'); background-size: cover; border: 1px solid #eaebed; border-radius: 16px; width: 100%;" width="100%">
                                        <tr>
                                            <td class="wrapper" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; box-sizing: border-box; padding: 24px; text-align: center;" valign="top">
                                                <img src="https://i.ibb.co/rxy3R9k/logo.png" alt="Logo" style="max-width: 80px; height: auto;">
                                                    <h1 style="font-family: Helvetica, sans-serif; font-size: 24px; font-weight: bold; margin: 16px 0; color: #ffffff; border-radius: 16px; backdrop-filter: blur(1px) brightness(60%);">¡Tu próximo destino ya está aquí! ✈️ </h1>
                                            </td>
                                        </tr>
                                    </table>

                                    <!-- CONTENIDO PRINCIPAL -->
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border: 1px solid #eaebed; border-radius: 16px; width: 100%;" width="100%">
                                        <tr>
                                            <td class="wrapper" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; box-sizing: border-box; padding: 24px;" valign="top">
                                                <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">¡Hola ${cliente.nombre}!</p>
                                                <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">Tenemos disponible un nuevo paquete con destino a ${paquete.nombre}. ¡No te las pierdas!</p>
                                                <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; width: 100%; min-width: 100%;" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td align="center" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; padding-bottom: 16px;" valign="top">
                                                                <a href="http://127.0.0.1:8090/notificacion/?cliente=${cliente.id}&paquete=${paquete.id}" target="_blank" style="border: solid 2px #ec0867; border-radius: 4px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 16px; font-weight: bold; margin: 0; padding: 12px 24px; text-decoration: none; background-color: #ec0867; border-color: #ec0830; color: #ffffff;">
                                                                Quiero saber más 🤩
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">Descubre experiencias únicas y ahorra en tu próximo viaje. ¡Esperamos que disfrutes!</p>
                                                <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">¡Buena suerte y que tengas un viaje increíble!</p>
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
                                                        ¿No deseas recibir más promociones? <a href="http://tupagina.com/desuscribir" style="text-decoration: underline; color: #9a9ea6; font-size: 16px; text-align: center;">Désuscribirme</a>.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="content-block powered-by" style="font-family: Helvetica, sans-serif; vertical-align: top; color: #9a9ea6; font-size: 16px; text-align: center;" valign="top" align="center">
                                                    Powered by <a href="http://tupagina.com" style="color: #9a9ea6; font-size: 16px; text-align: center; text-decoration: none;">TuEmpresa.com</a>
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
