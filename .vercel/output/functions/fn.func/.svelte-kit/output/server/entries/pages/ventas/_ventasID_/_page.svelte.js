import { c as create_ssr_component, a as compute_rest_props, b as spread, d as escape_object, e as escape_attribute_value, f as escape, v as validate_component, o as each, i as add_attribute } from "../../../../chunks/ssr.js";
import "devalue";
import "pdfmake/build/pdfmake.js";
import { l as logob64 } from "../../../../chunks/logob64.js";
import { P as Printer } from "../../../../chunks/Printer.js";
import { T as TrashCan } from "../../../../chunks/TrashCan.js";
import { B as Button } from "../../../../chunks/Button.js";
import { G as Grid, R as Row, C as Column } from "../../../../chunks/Column.js";
import { T as Tile } from "../../../../chunks/Tile.js";
import { S as StructuredList, a as StructuredListBody, b as StructuredListRow, c as StructuredListCell } from "../../../../chunks/StructuredListRow.js";
import { A as Accordion, a as AccordionItem } from "../../../../chunks/AccordionItem.js";
import { O as OverflowMenu } from "../../../../chunks/OverflowMenu.js";
import { C as ComposedModal, M as ModalHeader, a as ModalBody } from "../../../../chunks/ModalBody.js";
import { I as InlineLoading, M as ModalFooter } from "../../../../chunks/InlineLoading.js";
import { F as FormGroup } from "../../../../chunks/FormGroup.js";
import { N as NumberInput } from "../../../../chunks/NumberInput.js";
const StructuredListHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `  <div${spread([{ role: "rowgroup" }, escape_object($$restProps)], {
    classes: "bx--structured-list-thead"
  })}>${slots.default ? slots.default({}) : ``}</div>`;
});
const StructuredListHead$1 = StructuredListHead;
const CurrencyDollar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M23,20.5151c0-4.6152-3.78-5.1411-6.8171-5.563-3.31-.4609-5.1829-.86-5.1829-3.71C11,8.8491,13.5071,8,15.6538,8a6.7538,6.7538,0,0,1,5.5681,2.6279l1.5562-1.2558A8.6508,8.6508,0,0,0,17,6.0962V3H15V6.022c-3.6152.2192-6,2.26-6,5.22,0,4.73,3.83,5.2627,6.9075,5.69C19.16,17.3848,21,17.7744,21,20.5151,21,23.5474,17.8674,24,16,24c-3.4294,0-4.8782-.9639-6.2219-2.6279L8.2219,22.6279A8.4382,8.4382,0,0,0,15,25.9648V29h2V25.9551C20.7256,25.6509,23,23.6279,23,20.5151Z"></path></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let creating;
  let { data } = $$props;
  const created = new Date(data.venta.created).toLocaleString("es-AR");
  const updated = new Date(data.venta.updated).toLocaleString("es-AR");
  const createdMes = new Date(data.venta.created).toLocaleString("es-AR", { month: "long" });
  const createdDia = new Date(data.venta.created).toLocaleString("es-AR", { day: "numeric" });
  const createdAnio = new Date(data.venta.created).toLocaleString("es-AR", { year: "numeric" });
  const precio = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(data.venta.paquete.precio);
  const precio_total = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(data.ventaExpanded.expand.paquete.precio * data.ventaExpanded.cant_personas);
  const fechasalida = new Date(data.venta.paquete.fechasalida).toLocaleString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const fecharetorno = new Date(data.venta.paquete.fecharetorno).toLocaleString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const items = [
    {
      name: "Nombre y Apellido Titular",
      icon: "bx-user",
      value: data.venta.cliente.nombre + " " + data.venta.cliente.apellido
    },
    {
      name: "Precio paquete actual",
      icon: "bx-dollar",
      value: precio
    },
    {
      name: "Destino",
      icon: "bx-map",
      value: data.venta.paquete.nombre
    },
    {
      name: "Creado",
      icon: "bx-calendar",
      value: created
    },
    {
      name: "Modificado",
      icon: "bx-calendar-edit",
      value: updated
    },
    {
      name: "Estado",
      icon: "bx-check-circle",
      value: data.venta.estado
    },
    {
      name: "Observaciones",
      icon: "bx-comment-detail",
      value: data.venta.observaciones
    }
  ];
  let form;
  let open = false;
  let valor = 0;
  let abonado = 0;
  let restante = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(data.ventaExpanded.expand.paquete.precio * data.ventaExpanded.cant_personas);
  let restanteint = data.ventaExpanded.expand.paquete.precio * data.ventaExpanded.cant_personas;
  let pasajeros = data.ventaExpanded.expand.pasajeros;
  if (pasajeros && pasajeros.length > 0) {
    const resultado = pasajeros.map((pasajero) => {
      return pasajero.nombre + " " + pasajero.apellido + " DNI:" + pasajero.dni + ", ";
    });
    pasajeros = "y acompañan: " + resultado.join("").slice(0, -2).toUpperCase();
  } else {
    pasajeros = "";
  }
  if (data.ventaExpanded.expand.pagos != void 0) {
    data.ventaExpanded.expand.pagos;
    abonado = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(data.ventaExpanded.expand.pagos.reduce((acc, pago) => acc + pago.valor, 0));
    restante = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(data.ventaExpanded.expand.paquete.precio * data.ventaExpanded.cant_personas - data.ventaExpanded.expand.pagos.reduce((acc, pago) => acc + pago.valor, 0));
    restanteint = data.ventaExpanded.expand.paquete.precio * data.ventaExpanded.cant_personas - data.ventaExpanded.expand.pagos.reduce((acc, pago) => acc + pago.valor, 0);
  }
  ({
    pageMargins: [40, 40],
    pageSize: "A4",
    content: [
      {
        columns: [
          [
            {
              image: `${logob64}`,
              width: 72,
              // Ajusta el ancho de la imagen según tus necesidades
              alignment: "left",
              margin: [0, 0]
            },
            {
              text: [
                {
                  text: "Del Valle Turismo.\n",
                  fontSize: 14,
                  bold: true
                },
                {
                  text: "Empresa de viajes y turismo \n",
                  fontSize: 10,
                  bold: true
                },
                { text: "Legajo número: ", bold: true },
                "18376. \n",
                { text: "Dirección: ", bold: true },
                "La Rioja 2203 - Posadas (3300) - Misiones. \n",
                { text: "Teléfonos: ", bold: true },
                "+54 (3764) 222333 / +54 (3764) 424450"
              ],
              fontSize: 10,
              alignment: "left",
              width: 320,
              margin: [0, 0]
            }
          ],
          {
            text: `ID CONTRATO: ${data.venta.id.toString().padStart(4, "0").toUpperCase()}`,
            fontSize: 10,
            alignment: "right",
            margin: [0, 10]
          }
        ]
      },
      {
        text: "CONTRATO DE EXCURSIÓN",
        style: "header"
      },
      {
        text: [
          "En la ciudad de ",
          {
            text: "POSADAS, PROVINCIA DE MISIONES",
            fontSize: 10,
            bold: true
          },
          `, a los `,
          {
            text: `${createdDia.toString().toUpperCase()} DÍAS DEL MES DE `,
            bold: true
          },
          {
            text: `${createdMes.toString().toUpperCase()}`,
            bold: true
          },
          ` del año `,
          {
            text: `${createdAnio.toString().toUpperCase()}`,
            bold: true
          },
          `, entre la empresa de viajes y turismo `,
          { text: "DEL VALLE TURISMO", bold: true },
          ", con domicilio en la calle ",
          { text: "LA RIOJA 2203", bold: true },
          " de la ciudad de Posadas, Provincia de Misiones, y la parte contratante el Sr/a ",
          {
            text: `${data.venta.cliente.nombre.toString().toUpperCase()} ${data.venta.cliente.apellido.toString().toUpperCase()}`,
            bold: true
          },
          `, con DNI N° ${data.venta.cliente.dni.toString().toUpperCase()}.`
        ],
        style: "paragraph"
      },
      {
        text: [
          `Contrata una excursión para ${data.venta.cant_personas.toString().toUpperCase()} persona/s ${pasajeros}. El precio es por persona en habitaciones dobles, triples o cuádruples, de `,
          {
            text: `${precio.toString().toUpperCase()}`,
            bold: true
          },
          ` con el régimen de `,
          {
            text: `${data.venta.paquete.regimen.toString().toUpperCase()}`,
            bold: true
          },
          ". Estando la salida prevista para el día ",
          {
            text: `${fechasalida.toString().toUpperCase()}`,
            bold: true
          },
          " y el regreso para el día ",
          {
            text: `${fecharetorno.toString().toUpperCase()}`,
            bold: true
          },
          ` por ${data.venta.paquete.cant_noches.toString().toUpperCase()} noches y ${data.venta.paquete.cant_dias.toString().toUpperCase()} días. El precio total de la excursión es de `,
          {
            text: `${precio_total.toString().toUpperCase()}`,
            bold: true
          },
          "."
        ],
        style: "paragraph"
      },
      { text: "Incluye:", style: "bold" },
      {
        ul: [
          "Todos los servicios que estén expresamente detallados en el programa elegido.",
          "No Incluye: Extras en los hoteles, lavado, planchado, llamadas telefónicas, entradas a los parques y complejos turísticos, así como cualquier otro gasto de carácter personal. El organizador no se hace responsable por problemas de salud en general que padezca el viajero en el transcurso de la excursión, pudiendo este contratar, como servicio adicional, una asistencia de salud a su exclusivo cargo.",
          "Traslado: Desde La Empresa Del Valle Turismo al destino elegido y viceversa, en ómnibus o minibús acondicionado para viajes especiales de larga distancia, provisto con Aire Acondicionado, TV, Video, butacas reclinables y/o semi cama, y coordinación permanente.",
          "Alojamiento: De acuerdo a la categoría del hotel según el programa elegido por el/los pasajeros.",
          "Responsabilidad: El pasajero cuenta con seguro de responsabilidad civil durante el viaje a cargo de la Empresa transportadora. El operador de Del Valle Turismo declina toda responsabilidad por cualquier daño o inconveniente que el/los pasajeros o sus pertenencias pudieran sufrir por huelgas, accidentes y sus consecuencias, enfermedades, robos o pérdidas o daños de equipajes u objetos personales, sean cuales fueren sus causas durante los días de la excursión contratada.",
          "Documentación: El operador de Del Valle Turismo declina toda responsabilidad en caso de ser rechazado por las autoridades Policiales, Migratorias y Aduaneras. Cualquier gasto que se origine correrá por cuenta del pasajero. En este caso, se aplicarán las condiciones establecidas para anulaciones o desistimiento voluntario sin derecho a ninguna indemnización.",
          "El pasajero deberá ir provisto de: DNI, Cédula de la Policía Federal o Pasaporte, según corresponda. ARGENTINOS CON DOBLE CIUDADANÍA deberán tener pasaporte argentino válido. EXTRANJEROS RESIDENTES EN EL PAÍS deben presentar el pasaporte del país de origen, cédula de identidad y visado si fuese necesario.",
          "DERECHO DE PERMANENCIA: El operador Del Valle Turismo se reserva el derecho de hacer abandonar el tour en cualquier circunstancia o lugar a toda aquella persona que, por su conducta o modo de obrar, cause malestar al grupo y ponga en peligro el normal desarrollo de la excursión. Esta persona no tendrá derecho alguno a exigir indemnización por los servicios no utilizados.",
          "Cantidad Mínima: El operador Del Valle Turismo se reserva el derecho de cancelar algunas salidas establecidas cuando no se complete la cantidad mínima de (30) treinta personas en ómnibus o en minibús (17) pasajeros inscritos. En este caso, se les reintegrará la totalidad del dinero abonado hasta la fecha, sin ningún tipo de interés u otro tipo de ajuste. La empresa comunicará 5 (cinco) días antes de la salida la suspensión del viaje.",
          "Cancelaciones: Una vez confirmados los servicios, la cancelación de los mismos sufrirá una retención del 10% del total de la excursión si esta se produce con una anticipación de 20 días o más a la fecha de salida. Si la cancelación se realiza entre 20 días y 10 días antes, la retención será del 20%. En caso de cancelación con menos de 10 días de anticipación, la retención será del 50% del valor total de la excursión. Si se produce una cancelación en menos de 5 (cinco) días, la retención será del 100%. Como alternativa, se podrá ceder o transferir a otra persona, con la condición de que no esté inscrita, o la Empresa otorgará una nota de crédito para otra excursión futura.",
          "COSTO DE LA EXCURSIÓN: El precio está expresado en dólares estadounidenses y está sujeto a modificación según la cotización del día. El costo no sufrirá variación una vez abonada la totalidad de la excursión.",
          "DE CONOCIMIENTO DEL PASAJERO: El simple hecho de inscribirse para tomar parte en los viajes detallados en el presente folleto implica la total conformidad, aceptación y conocimiento de todas y cada una de las condiciones generales mencionadas anteriormente. La Empresa Del Valle Turismo."
        ],
        style: "list"
      },
      { text: "Observaciones:", style: "bold" },
      {
        text: data.venta.observaciones,
        style: "paragraph"
      },
      { text: "Página 1/1", style: "page" }
    ],
    styles: {
      header: {
        fontSize: 14,
        bold: true,
        alignment: "center",
        margin: [0, 15, 0, 5]
      },
      paragraph: {
        fontSize: 10,
        alignment: "justify",
        margin: [0, 2, 0, 2]
      },
      bold: { bold: true, margin: [0, 5, 0, 5] },
      list: { fontSize: 9, margin: [0, 5, 0, 5] },
      page: { fontSize: 8, alignment: "right" }
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    creating = false;
    $$rendered = `<div class="min-h-screen"><div class="flex flex-row flex-wrap justify-between"><h2 class="m-4"><i class="bx bx-venta text-blue-600 mr-2"></i><strong data-svelte-h="svelte-7rs4fm">VENTA</strong> ${escape(data.venta.id)}</h2> <div class="grid grid-cols-3 gap-4 h-[36px] content-end mt-4 mr-[-115px]">${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "mb-0",
        icon: Printer,
        iconDescription: "Imprimir contrato",
        kind: "tertiary",
        size: "small",
        tooltipAlignment: "end",
        tooltipPosition: "right"
      },
      {},
      {
        default: () => {
          return `Imprimir contrato`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        disabled: data.venta.estado == "FINALIZADA",
        icon: CurrencyDollar,
        size: "small"
      },
      {},
      {
        default: () => {
          return `Generar Pago`;
        }
      }
    )} </div></div> ${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, { class: "my-8" }, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Tile, "Tile").$$render($$result, {}, {}, {
                  default: () => {
                    return `<div class="flex flex-row justify-between"><h5 data-svelte-h="svelte-1rbynxk">Total</h5> ${data.venta.estado == "FINALIZADA" ? `<p data-svelte-h="svelte-7o66k1">Venta finalizada</p>` : `<p>${escape(precio_total)}</p>`}</div>`;
                  }
                })}`;
              }
            })} ${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Tile, "Tile").$$render($$result, {}, {}, {
                  default: () => {
                    return `<div class="flex flex-row justify-between"><h5 data-svelte-h="svelte-ojrmzi">Abonado</h5> <p>${escape(abonado)}</p></div>`;
                  }
                })}`;
              }
            })} ${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Tile, "Tile").$$render($$result, {}, {}, {
                  default: () => {
                    return `<div class="flex flex-row justify-between"><h5 data-svelte-h="svelte-1bvgzta">Restante</h5> <p>${escape(restante)}</p></div>`;
                  }
                })}`;
              }
            })}`;
          }
        })} ${validate_component(Row, "Row").$$render($$result, { class: "my-8" }, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Tile, "Tile").$$render($$result, { class: "" }, {}, {
                  default: () => {
                    return `<h3 data-svelte-h="svelte-cf1qpk">Detalles</h3> ${validate_component(StructuredList, "StructuredList").$$render($$result, { condensed: true }, {}, {
                      default: () => {
                        return `${validate_component(StructuredListBody, "StructuredListBody").$$render($$result, {}, {}, {
                          default: () => {
                            return `${each(items, (item) => {
                              return `${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { head: true }, {}, {
                                    default: () => {
                                      return `<i class="${"mr-2 bx text-blue-600 " + escape(item.icon, true)}"></i>${escape(item.name)}`;
                                    }
                                  })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${escape(item.value)}`;
                                    }
                                  })} `;
                                }
                              })}`;
                            })} ${data.ventaExpanded.expand.pasajeros != void 0 ? `${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                                      title: () => {
                                        return `<i class="mr-2 bx text-blue-600 bx-user"></i>Acompañantes:
											`;
                                      },
                                      default: () => {
                                        return `${each(data.ventaExpanded.expand.pasajeros, (pasajero) => {
                                          return `${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                                            default: () => {
                                              return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                                                default: () => {
                                                  return `${escape(pasajero.nombre)} ${escape(pasajero.apellido)} (DNI: ${escape(pasajero.dni)})`;
                                                }
                                              })} `;
                                            }
                                          })}`;
                                        })}`;
                                      }
                                    })}`;
                                  }
                                })}`;
                              }
                            })}` : ``}`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}`;
              }
            })} ${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Tile, "Tile").$$render($$result, { class: "" }, {}, {
                  default: () => {
                    return `<h3 data-svelte-h="svelte-1wictss">Pagos</h3> ${validate_component(StructuredList, "StructuredList").$$render($$result, { condensed: true }, {}, {
                      default: () => {
                        return `${validate_component(StructuredListHead$1, "StructuredListHead").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, { head: true }, {}, {
                              default: () => {
                                return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { head: true }, {}, {
                                  default: () => {
                                    return `Fecha y hora`;
                                  }
                                })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { head: true }, {}, {
                                  default: () => {
                                    return `Monto`;
                                  }
                                })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { head: true }, {}, {
                                  default: () => {
                                    return `Acciones`;
                                  }
                                })}`;
                              }
                            })}`;
                          }
                        })} ${validate_component(StructuredListBody, "StructuredListBody").$$render($$result, {}, {}, {
                          default: () => {
                            return `${data.ventaExpanded.expand.pagos != void 0 ? `${each(data.ventaExpanded.expand.pagos, (pago) => {
                              return `${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${escape(new Date(pago.created).toLocaleDateString("es-ES", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric"
                                      }))} <br> <div class="text-xs"><i class="bx bx-time mr-2 text-blue-600"></i> ${escape(new Date(pago.created).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }))}</div> `;
                                    }
                                  })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${escape(pago.valor.toLocaleString("es-AR", { style: "currency", currency: "ARS" }))} `;
                                    }
                                  })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(OverflowMenu, "OverflowMenu").$$render($$result, { size: "sm", flipped: true }, {}, {
                                        default: () => {
                                          return `${validate_component(Button, "Button").$$render($$result, { icon: Printer, size: "small" }, {}, {
                                            default: () => {
                                              return `Imprimir comprobante`;
                                            }
                                          })} ${validate_component(Button, "Button").$$render(
                                            $$result,
                                            {
                                              icon: TrashCan,
                                              kind: "danger",
                                              size: "small"
                                            },
                                            {},
                                            {
                                              default: () => {
                                                return `Cancelar Pago
												`;
                                              }
                                            }
                                          )} `;
                                        }
                                      })} `;
                                    }
                                  })} `;
                                }
                              })}`;
                            })}` : ``}`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}`;
          }
        })} ${validate_component(Row, "Row").$$render($$result, { class: "my-8" }, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Tile, "Tile").$$render($$result, {}, {}, {
                  default: () => {
                    return `<h3 data-svelte-h="svelte-147gmv4">Contrato</h3> <p class="tracking-widest text-justify">En la ciudad de <strong class="uppercase tracking-tight" data-svelte-h="svelte-1lkr1he">Posadas, Provincia de Misiones,</strong>
						a los <strong class="uppercase tracking-tight">${escape(createdDia)}</strong>
						días del mes de <strong class="uppercase tracking-tight">${escape(createdMes)}</strong>
						del año
						<strong class="uppercase tracking-tight">${escape(createdAnio)}</strong>, entre la empresa de
						viajes y turismo <strong class="" data-svelte-h="svelte-105pr8h">DEL VALLE TURISMO</strong>, con domicilio en la calle
						<strong class="uppercase tracking-tight" data-svelte-h="svelte-srzuvy">La Rioja 2203</strong> de la ciudad de
						<strong class="uppercase tracking-tight" data-svelte-h="svelte-1k69pvb">Posadas, Provincia de Misiones,</strong>
						y la parte contratante el Sr/a
						<strong class="uppercase tracking-tight">${escape(data.venta.cliente.nombre)} ${escape(data.venta.cliente.apellido)} </strong>, con DNI N°
						<strong class="uppercase tracking-tight">${escape(data.venta.cliente.dni)} </strong>.
						<br>
						Contrata una excursión para
						<strong class="uppercase tracking-tight">${escape(data.venta.cant_personas)}</strong>
						persona/s ${escape(pasajeros)}. El precio es por persona en habitaciones dobles, triples o
						cuádruples, de
						<strong class="uppercase tracking-tight">${escape(precio)}</strong>
						con el regimen de
						<strong class="uppercase tracking-tight">${escape(data.venta.paquete.regimen)} </strong>.
						<br>
						Estando la salida prevista para el día
						<strong class="uppercase tracking-tight">${escape(fechasalida)}</strong> y el regreso para el
						día <strong class="uppercase tracking-tight">${escape(fecharetorno)}</strong>
						por
						<strong class="uppercase tracking-tight">${escape(data.venta.paquete.cant_noches)}</strong>
						noches y
						<strong class="uppercase tracking-tight">${escape(data.venta.paquete.cant_dias)}</strong>
						días. El precio total de la excursión es de
						<strong class="uppercase tracking-tight">${escape(precio_total)} </strong>. <br> <strong class="uppercase font-bold" data-svelte-h="svelte-jj24f1">observaciones:</strong> ${escape(data.venta.observaciones)} <br></p>`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    })}</div> ${validate_component(ComposedModal, "ComposedModal").$$render(
      $$result,
      { open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { label: "", title: "Nuevo pago" }, {}, {})} ${validate_component(ModalBody, "ModalBody").$$render($$result, { hasForm: true, hasScrollingContent: true }, {}, {
            default: () => {
              return `${creating ? `<div>${validate_component(InlineLoading, "InlineLoading").$$render($$result, { description: "Registrando Pago..." }, {}, {})}</div>` : `${`<form id="modalForm" method="post" action="?/createPago"${add_attribute("this", form, 0)}>${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Valores actuales" }, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<h5 data-svelte-h="svelte-1rbynxk">Total</h5> <p>${escape(precio_total)}</p>`;
                                }
                              })} ${validate_component(Column, "Column").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<h5 data-svelte-h="svelte-ojrmzi">Abonado</h5> <p>${escape(abonado)}</p>`;
                                }
                              })} ${validate_component(Column, "Column").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<h5 data-svelte-h="svelte-1bvgzta">Restante</h5> <p>${escape(restante)}</p>`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Nuevos Valores" }, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<h5 data-svelte-h="svelte-1rbynxk">Total</h5> <p>${escape(precio_total)}</p>`;
                                }
                              })} ${validate_component(Column, "Column").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<h5 data-svelte-h="svelte-ojrmzi">Abonado</h5> <p>${data.ventaExpanded.expand.pagos != void 0 ? `${escape(new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(data.ventaExpanded.expand.pagos.reduce((acc, pago) => acc + pago.valor, 0) + valor))}` : `${escape(new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(0))}`}</p>`;
                                }
                              })} ${validate_component(Column, "Column").$$render($$result, {}, {}, {
                                default: () => {
                                  return `<h5 data-svelte-h="svelte-1bvgzta">Restante</h5> <p>${escape(new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(restanteint - valor))}</p>`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(FormGroup, "FormGroup").$$render(
                            $$result,
                            {
                              legendText: "Ingrese el importe a abonar: (max: " + restanteint + ")"
                            },
                            {},
                            {
                              default: () => {
                                return `${validate_component(NumberInput, "NumberInput").$$render(
                                  $$result,
                                  {
                                    name: "valor",
                                    label: "Importe a pagar",
                                    invalidText: "El valor debe ser mayor a 0 y menor o igual a " + restanteint,
                                    min: 1,
                                    max: restanteint,
                                    size: "xl",
                                    step: 1,
                                    hideLabel: true,
                                    value: valor
                                  },
                                  {
                                    value: ($$value) => {
                                      valor = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}`;
                              }
                            }
                          )}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })} <input class="hidden" name="total"${add_attribute("value", data.ventaExpanded.expand.paquete.precio * data.ventaExpanded.cant_personas, 0)}> <input class="hidden" name="saldo"${add_attribute("value", restanteint - valor, 0)}></form>`}`}`;
            }
          })} ${validate_component(ModalFooter, "ModalFooter").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, { kind: "secondary", size: "lg" }, {}, {
                default: () => {
                  return `Cancelar`;
                }
              })} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  id: "modalSubmitButton",
                  size: "lg",
                  type: "submit",
                  disabled: creating
                },
                {},
                {
                  default: () => {
                    return `Crear`;
                  }
                }
              )}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
