import { c as create_ssr_component, a as compute_rest_props, b as spread, d as escape_object, i as add_attribute, h as add_classes, f as escape, v as validate_component, m as missing_component, n as add_styles, o as each } from "../../../../chunks/ssr.js";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import "devalue";
import { l as logob64 } from "../../../../chunks/logob64.js";
import { E as Edit, B as ButtonSet } from "../../../../chunks/Edit.js";
import { P as Printer } from "../../../../chunks/Printer.js";
import { T as TrashCan } from "../../../../chunks/TrashCan.js";
import "pdfmake/build/pdfmake.js";
import { M as Modal } from "../../../../chunks/Modal.js";
import { G as Grid, R as Row, C as Column } from "../../../../chunks/Column.js";
import { B as Button } from "../../../../chunks/Button.js";
import { T as Tile } from "../../../../chunks/Tile.js";
import { S as StructuredList, a as StructuredListBody, b as StructuredListRow, c as StructuredListCell } from "../../../../chunks/StructuredListRow.js";
import { E as ErrorFilled, C as CheckmarkFilled } from "../../../../chunks/ErrorFilled.js";
import { A as Accordion, a as AccordionItem } from "../../../../chunks/AccordionItem.js";
import { C as ComposedModal, M as ModalHeader, a as ModalBody } from "../../../../chunks/ModalBody.js";
import { I as InlineLoading, M as ModalFooter } from "../../../../chunks/InlineLoading.js";
import { F as FormGroup } from "../../../../chunks/FormGroup.js";
import { T as TextInput } from "../../../../chunks/TextInput.js";
import { N as NumberInput } from "../../../../chunks/NumberInput.js";
import { D as DatePicker, a as DatePickerInput } from "../../../../chunks/DatePickerInput.js";
import { S as Select, a as SelectItem } from "../../../../chunks/SelectItem.js";
import { T as TextArea } from "../../../../chunks/TextArea.js";
const ProgressBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let indeterminate;
  let $$restProps = compute_rest_props($$props, ["value", "max", "kind", "status", "size", "labelText", "hideLabel", "helperText", "id"]);
  let { value = void 0 } = $$props;
  let { max = 100 } = $$props;
  let { kind = "default" } = $$props;
  let { status = "active" } = $$props;
  let { size = "md" } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { helperText = "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  const statusIcons = {
    error: ErrorFilled,
    finished: CheckmarkFilled
  };
  let helperId = "ccs-" + Math.random().toString(36);
  let capped;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  indeterminate = value === void 0 && status === "active";
  {
    {
      if (status === "error" || value < 0) {
        capped = 0;
      } else if (value > max) {
        capped = max;
      } else {
        capped = value;
      }
    }
  }
  return `<div${spread([escape_object($$restProps)], {
    classes: "bx--progress-bar " + (indeterminate ? "bx--progress-bar--indeterminate" : "") + " " + (size === "md" ? "bx--progress-bar--big" : "") + " " + (size === "sm" ? "bx--progress-bar--small" : "") + " " + (kind === "inline" ? "bx--progress-bar--inline" : "") + " " + (kind === "indented" ? "bx--progress-bar--indented" : "") + " " + (status === "error" ? "bx--progress-bar--error" : "") + " " + (status === "finished" ? "bx--progress-bar--finished" : "")
  })}><label${add_attribute("for", id, 0)}${add_classes(("bx--progress-bar__label " + (hideLabel ? "bx--visually-hidden" : "")).trim())}>${slots.labelText ? slots.labelText({}) : ` ${escape(labelText)} `} ${status === "error" || status === "finished" ? `${validate_component(statusIcons[status] || missing_component, "svelte:component").$$render($$result, { class: "bx--progress-bar__status-icon" }, {}, {})}` : ``}</label> <div role="progressbar"${add_attribute("id", id, 0)}${add_attribute("aria-busy", status === "active", 0)}${add_attribute("aria-valuemin", indeterminate ? void 0 : 0, 0)}${add_attribute("aria-valuemax", indeterminate ? void 0 : max, 0)}${add_attribute("aria-valuenow", indeterminate ? void 0 : capped, 0)}${add_attribute("aria-describedby", helperText ? helperId : null, 0)}${add_classes("bx--progress-bar__track".trim())}><div${add_classes("bx--progress-bar__bar".trim())}${add_styles({
    "transform": status === "active" && `scaleX(${capped / max})`
  })}></div></div> ${helperText ? `<div${add_attribute("id", helperId, 0)}${add_classes("bx--progress-bar__helper-text".trim())}>${escape(helperText)}</div>` : ``}</div>`;
});
const ProgressBar$1 = ProgressBar;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isValidNombre;
  let validartionMessageNombre;
  let isFormValid;
  let { data } = $$props;
  let open = false;
  let open2 = false;
  let creating = false;
  let precio = data.paquetes.precio;
  const fecha = new Date(data.paquetes.fechasalida);
  const opciones = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC"
    // Establece la zona horaria a UTC
  };
  new Intl.DateTimeFormat("es-ES", opciones).format(fecha);
  const items = [
    {
      name: "Destino",
      icon: "bx-map",
      value: data.paquetes.nombre
    },
    {
      name: "Precio",
      icon: "bx-dollar",
      value: precio
    },
    {
      name: "Salida",
      icon: "bx-calendar-heart",
      value: new Date(data.paquetes.fechasalida).toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        timeZone: "UTC"
      })
    },
    {
      name: "Llegada",
      icon: "bx-calendar-check",
      value: new Date(data.paquetes.fecharetorno).toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        timeZone: "UTC"
      })
    },
    {
      name: "Dias",
      icon: "bx-sun",
      value: data.paquetes.cant_dias
    },
    {
      name: "Noches",
      icon: "bx-moon",
      value: data.paquetes.cant_noches
    },
    {
      name: "Regimen",
      icon: "bx-food-menu",
      value: data.paquetes.regimen
    },
    {
      name: "Hotel",
      icon: "bx-bed",
      value: data.paquetes.hotel
    },
    {
      name: "Estado",
      icon: "bx-check-circle",
      value: data.paquetes.estado
    },
    {
      name: "Creado",
      icon: "bx-calendar",
      value: new Date(data.paquetes.created).toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        timeZone: "UTC"
      })
    },
    {
      name: "Modificado",
      icon: "bx-calendar-edit",
      value: new Date(data.paquetes.updated).toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        timeZone: "UTC"
      })
    },
    {
      name: "Chofer 1",
      icon: "bx-user",
      value: data.paquetes.chofer1nombre
    },
    {
      name: "Chofer 2",
      icon: "bx-user",
      value: data.paquetes.chofer2nombre
    },
    {
      name: "Dominio",
      icon: "bx-car",
      value: data.paquetes.dominio
    },
    {
      name: "Interno",
      icon: "bx-car",
      value: data.paquetes.interno
    },
    {
      name: "Pais destino",
      icon: "bx-flag",
      value: data.paquetes.pais_destino
    },
    {
      name: "Observaciones",
      icon: "bx-notepad",
      value: data.paquetes.descripcion
    }
  ];
  let nombre = data.paquetes.nombre;
  let cant_dias = data.paquetes.cant_dias;
  let cant_noches = data.paquetes.cant_noches;
  let hotel = data.paquetes.hotel;
  let regimen = data.paquetes.regimen;
  let estado = data.paquetes.estado;
  let fechasalida = data.paquetes.fechasalida;
  let fecharetorno = data.paquetes.fecharetorno;
  let observaciones = data.paquetes.descripcion;
  let pais_destino = data.paquetes.pais_destino;
  let chofer1nombre = data.paquetes.chofer1nombre;
  let chofer1dni = data.paquetes.chofer1dni;
  let chofer2nombre = data.paquetes.chofer2nombre;
  let chofer2dni = data.paquetes.chofer2dni;
  let interno = data.paquetes.interno;
  let dominio = data.paquetes.dominio;
  let form;
  let deleteForm;
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
            text: `ID PAQUETE: ${data.paquetes.id.toString().padStart(4, "0").toUpperCase()}`,
            fontSize: 10,
            alignment: "right",
            margin: [0, 10]
          }
        ]
      },
      {
        text: `MANIFIESTO DE PASAJEROS Y TRIPULACIÓN`,
        style: "header"
      },
      {
        table: {
          headerRows: 1,
          widths: ["*", "*"],
          body: [
            [
              {
                table: {
                  headerRows: 1,
                  widths: ["*", "*"],
                  body: [
                    [
                      {
                        text: "DATOS CONDUCTOR",
                        style: "tableHeader"
                      },
                      { text: "DNI", style: "tableHeader" }
                    ],
                    [
                      `${data.paquetes.chofer1nombre}`,
                      `${data.paquetes.chofer1dni}`
                    ],
                    [
                      `${data.paquetes.chofer2nombre}`,
                      `${data.paquetes.chofer2dni}`
                    ]
                  ]
                }
              },
              {
                table: {
                  headerRows: 1,
                  widths: ["*", "*"],
                  body: [
                    [
                      {
                        text: "DOMINIO VEHICULO",
                        style: "tableHeader"
                      },
                      {
                        text: "INTERNO VEHICULO",
                        style: "tableHeader"
                      }
                    ],
                    [`${data.paquetes.dominio}`, `${data.paquetes.interno}`]
                  ]
                }
              }
            ]
          ]
        }
      },
      {
        table: {
          headerRows: 1,
          widths: ["auto", "*", "auto", "auto", "auto", "auto", "auto", "auto"],
          body: [
            // Encabezado de la tabla
            [
              { text: "NRO.", style: "tableHeader" },
              {
                text: "APELLIDO Y NOMBRE",
                style: "tableHeader"
              },
              { text: "NACIMIENTO", style: "tableHeader" },
              {
                text: "NACIONALIDAD",
                style: "tableHeader"
              },
              { text: "OCUPACIÓN", style: "tableHeader" },
              { text: "SEXO", style: "tableHeader" },
              { text: "DNI", style: "tableHeader" },
              {
                text: "PAIS RESIDENCIA",
                style: "tableHeader"
              }
            ],
            // Datos de los pasajeros
            ...data.ventas.reduce(
              (rows, venta) => {
                venta.pasajeros.forEach((pasajero) => {
                  rows.push([
                    { text: rows.length + 1, fontSize: 10 },
                    {
                      text: pasajero.apellido + " " + pasajero.nombre || "",
                      // Tamaño de fuente de la celda
                      fontSize: 10
                    },
                    {
                      text: new Date(pasajero.fechanacimiento).toLocaleDateString("es-ES", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric"
                      }).toUpperCase() || "",
                      fontSize: 10
                    },
                    {
                      text: pasajero.nacionalidad || "",
                      fontSize: 10
                    },
                    {
                      text: pasajero.ocupacion || "",
                      fontSize: 10
                    },
                    {
                      text: pasajero.sexo === "MASCULINO" ? "M" : (pasajero.sexo === "FEMENINO" ? "F" : "") || "",
                      fontSize: 10
                    },
                    { text: pasajero.dni || "", fontSize: 10 },
                    {
                      text: pasajero.nacionalidad || "",
                      fontSize: 10
                    }
                  ]);
                });
                return rows;
              },
              []
            )
          ]
        }
      }
    ],
    // ...
    styles: {
      tableFont: {
        fontSize: 8
        // Ajusta el tamaño de fuente deseado para la tabla
      },
      header: {
        fontSize: 14,
        bold: true,
        alignment: "center",
        margin: [0, 15, 0, 5]
      },
      // Estilo para el encabezado de la tabla
      tableHeader: {
        bold: true,
        fontSize: 8,
        alignment: "center",
        fillColor: "#eeeeee"
        // Color de fondo del encabezado de la tabla
      },
      paragraph: {
        fontSize: 10,
        alignment: "justify",
        margin: [0, 2, 0, 2]
      },
      bold: { bold: true, margin: [0, 5, 0, 5] },
      list: { fontSize: 8, margin: [0, 5, 0, 5] },
      page: { fontSize: 8, alignment: "right" }
    }
  });
  const totaldepelotuditos = data.ventas.reduce(
    (acc, venta) => acc + venta.pasajeros.length,
    /** @type {{ pasajeros: string | any[]; }} */
    0
  );
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    isValidNombre = true;
    validartionMessageNombre = "";
    isFormValid = isValidNombre ? true : false;
    creating = false;
    $$rendered = `<form id="deleteForm" action="?/delete" method="post" class="hidden"${add_attribute("this", deleteForm, 0)}></form> ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        danger: true,
        modalHeading: "Eliminar paquete",
        primaryButtonText: "Eliminar",
        secondaryButtonText: "Cancelar",
        open: open2
      },
      {
        open: ($$value) => {
          open2 = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<h5>¿Está seguro que desea eliminar el paquete de ${escape(data.paquetes.nombre)}?</h5> <p class="mt-4" data-svelte-h="svelte-1vrsd96">Esta es una accion permanente y los registros asociados al paquete tambien seran eliminados</p>`;
        }
      }
    )} ${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, { class: "justify-between p-4" }, {}, {
          default: () => {
            return `<h1>Paquete: ${escape(data.paquetes.nombre)}</h1> ${validate_component(ButtonSet, "ButtonSet").$$render($$result, { class: "mr-36 p-4" }, {}, {
              default: () => {
                return `${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    disabled: true,
                    size: "small",
                    icon: TrashCan,
                    kind: "danger"
                  },
                  {},
                  {
                    default: () => {
                      return `Eliminar`;
                    }
                  }
                )} ${validate_component(Button, "Button").$$render($$result, { size: "small", icon: Edit }, {}, {
                  default: () => {
                    return `Editar`;
                  }
                })} ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    size: "small",
                    kind: "tertiary",
                    icon: Printer
                  },
                  {},
                  {
                    default: () => {
                      return `Imprimir Manifiesto`;
                    }
                  }
                )}`;
              }
            })}`;
          }
        })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Tile, "Tile").$$render($$result, {}, {}, {
                  default: () => {
                    return `<h2 class="" data-svelte-h="svelte-qz0u1q">Información del paquete</h2> ${validate_component(StructuredList, "StructuredList").$$render($$result, { condensed: true }, {}, {
                      default: () => {
                        return `${validate_component(StructuredListBody, "StructuredListBody").$$render($$result, {}, {}, {
                          default: () => {
                            return `${each(items, (item) => {
                              return `${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                                    default: () => {
                                      return `<li class="flex justify-between"><div> <i class="${"bx text-blue-600 " + escape(item.icon, true)}"></i>  <span>${escape(item.name)}:</span></div>  <span>${escape(item.value)}</span></li> `;
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
                })}`;
              }
            })} ${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Tile, "Tile").$$render($$result, {}, {}, {
                  default: () => {
                    return `<h2 class="">Pasajeros ${escape(totaldepelotuditos)}</h2> <div class="mb-4">${validate_component(ProgressBar$1, "ProgressBar").$$render(
                      $$result,
                      {
                        max: 30,
                        status: totaldepelotuditos > 30 ? "finished" : void 0,
                        labelText: "Total de pasajeros:",
                        helperText: totaldepelotuditos + " de 30 necesarios",
                        value: totaldepelotuditos
                      },
                      {},
                      {}
                    )}</div> ${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
                      default: () => {
                        return `${each(data.ventas, (venta) => {
                          return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
                            title: () => {
                              return `<h5><a class="" href="${"/ventas/" + escape(venta.id, true)}"><strong data-svelte-h="svelte-yf0yuc">CONTRATO:</strong> ${escape(venta.id)}</a></h5> <div><strong data-svelte-h="svelte-1keb7ev">Titular:</strong> ${escape(venta.cliente.nombre)} ${escape(venta.cliente.apellido)}</div> `;
                            },
                            default: () => {
                              return `${validate_component(StructuredList, "StructuredList").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(StructuredListBody, "StructuredListBody").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${each(venta.pasajeros, (pasajero) => {
                                        return `${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                                          default: () => {
                                            return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                                              default: () => {
                                                return `DNI: ${escape(pasajero.dni)}`;
                                              }
                                            })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                                              default: () => {
                                                return `${escape(pasajero.nombre)} ${escape(pasajero.apellido)}`;
                                              }
                                            })} `;
                                          }
                                        })}`;
                                      })} `;
                                    }
                                  })} `;
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
            })}`;
          }
        })}`;
      }
    })} ${validate_component(ComposedModal, "ComposedModal").$$render(
      $$result,
      { class: "", open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { label: "", title: "Editar paquete" }, {}, {})} ${validate_component(ModalBody, "ModalBody").$$render($$result, { hasForm: true, hasScrollingContent: true }, {}, {
            default: () => {
              return `${creating ? `<div>${validate_component(InlineLoading, "InlineLoading").$$render($$result, { description: "Guardando paquete..." }, {}, {})}</div>` : `${`<form id="modalForm" method="post" action="?/update"${add_attribute("this", form, 0)}><div class="flex"><div class="w-[50%] flex-grow p-4"> ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Destino" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      id: "nombre",
                      name: "nombre",
                      invalid: !isValidNombre,
                      invalidText: validartionMessageNombre,
                      labelText: "",
                      placeholder: "Ingrese el destino",
                      value: nombre
                    },
                    {
                      value: ($$value) => {
                        nombre = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Precio" }, {}, {
                default: () => {
                  return `${validate_component(NumberInput, "NumberInput").$$render(
                    $$result,
                    {
                      id: "precio",
                      min: 1,
                      name: "precio",
                      invalid: precio < 0,
                      invalidText: "El precio debe ser mayor a 0",
                      placeholder: "Ingrese el precio",
                      value: precio
                    },
                    {
                      value: ($$value) => {
                        precio = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Cantidad de días" }, {}, {
                default: () => {
                  return `${validate_component(NumberInput, "NumberInput").$$render(
                    $$result,
                    {
                      id: "cant_dias",
                      min: 1,
                      name: "cant_dias",
                      placeholder: "Ingrese la cantidad de días",
                      invalidText: "La cantidad de días debe ser mayor a 0",
                      value: cant_dias
                    },
                    {
                      value: ($$value) => {
                        cant_dias = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Cantidad de noches" }, {}, {
                default: () => {
                  return `${validate_component(NumberInput, "NumberInput").$$render(
                    $$result,
                    {
                      id: "cant_noches",
                      min: 1,
                      name: "cant_noches",
                      placeholder: "Ingrese la cantidad de noches",
                      invalidText: "La cantidad de noches debe ser mayor a 0",
                      value: cant_noches
                    },
                    {
                      value: ($$value) => {
                        cant_noches = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })}</div> <div class="w-[50%] flex-grow p-4"> ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Fechas salida y retorno" }, {}, {
                default: () => {
                  return `${validate_component(DatePicker, "DatePicker").$$render(
                    $$result,
                    {
                      datePickerType: "range",
                      dateFormat: "d/m/Y",
                      locale: Spanish,
                      valueFrom: fechasalida,
                      valueTo: fecharetorno
                    },
                    {
                      valueFrom: ($$value) => {
                        fechasalida = $$value;
                        $$settled = false;
                      },
                      valueTo: ($$value) => {
                        fecharetorno = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `${validate_component(DatePickerInput, "DatePickerInput").$$render(
                          $$result,
                          {
                            placeholder: "dd/mm/aaa",
                            name: "fechasalida"
                          },
                          {},
                          {}
                        )} ${validate_component(DatePickerInput, "DatePickerInput").$$render(
                          $$result,
                          {
                            placeholder: "dd/mm/aaa",
                            name: "fecharetorno"
                          },
                          {},
                          {}
                        )}`;
                      }
                    }
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Pais de destino" }, {}, {
                default: () => {
                  return `${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      id: "select-1",
                      hideLabel: true,
                      name: "pais_destino",
                      selected: pais_destino
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(SelectItem, "SelectItem").$$render(
                          $$result,
                          {
                            disabled: true,
                            hidden: true,
                            value: "Argentina",
                            text: "Seleccione un país"
                          },
                          {},
                          {}
                        )} ${each(data.nacionalidades, (nacionalidad) => {
                          return `${validate_component(SelectItem, "SelectItem").$$render(
                            $$result,
                            {
                              value: nacionalidad.destpais,
                              text: nacionalidad.destpais + " " + nacionalidad.codpais
                            },
                            {},
                            {}
                          )}`;
                        })}`;
                      }
                    }
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Regimen" }, {}, {
                default: () => {
                  return `${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      id: "select-1",
                      hideLabel: true,
                      name: "regimen",
                      selected: regimen
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(SelectItem, "SelectItem").$$render(
                          $$result,
                          {
                            disabled: true,
                            hidden: true,
                            value: "PENSION COMPLETA",
                            text: "Seleccione un regimen"
                          },
                          {},
                          {}
                        )} ${validate_component(SelectItem, "SelectItem").$$render(
                          $$result,
                          {
                            value: "PENSION COMPLETA",
                            text: "PENSION COMPLETA"
                          },
                          {},
                          {}
                        )} ${validate_component(SelectItem, "SelectItem").$$render(
                          $$result,
                          {
                            value: "MEDIA PENSION",
                            text: "MEDIA PENSION"
                          },
                          {},
                          {}
                        )} ${validate_component(SelectItem, "SelectItem").$$render($$result, { value: "DESAYUNO", text: "DESAYUNO" }, {}, {})}`;
                      }
                    }
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Estado" }, {}, {
                default: () => {
                  return `${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      id: "select-1",
                      hideLabel: true,
                      name: "estado",
                      selected: estado
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(SelectItem, "SelectItem").$$render(
                          $$result,
                          {
                            disabled: true,
                            hidden: true,
                            value: "DISPONIBLE",
                            text: "Seleccione un estado"
                          },
                          {},
                          {}
                        )} ${validate_component(SelectItem, "SelectItem").$$render(
                          $$result,
                          {
                            value: "NO DISPONIBLE",
                            text: "NO DISPONIBLE"
                          },
                          {},
                          {}
                        )} ${validate_component(SelectItem, "SelectItem").$$render($$result, { value: "DISPONIBLE", text: "DISPONIBLE" }, {}, {})}`;
                      }
                    }
                  )}`;
                }
              })}</div></div>  ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Hotel" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      id: "hotel",
                      name: "hotel",
                      placeholder: "Ingrese el hotel",
                      value: hotel
                    },
                    {
                      value: ($$value) => {
                        hotel = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Chofer 1" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      id: "chofer1nombre",
                      name: "chofer1nombre",
                      placeholder: "Ingrese el nombre del chofer 1",
                      value: chofer1nombre
                    },
                    {
                      value: ($$value) => {
                        chofer1nombre = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )} ${validate_component(NumberInput, "NumberInput").$$render(
                    $$result,
                    {
                      id: "chofer1dni",
                      min: 1,
                      name: "chofer1dni",
                      placeholder: "Ingrese el dni del chofer 1",
                      value: chofer1dni
                    },
                    {
                      value: ($$value) => {
                        chofer1dni = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Chofer 2" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      id: "chofer2nombre",
                      name: "chofer2nombre",
                      placeholder: "Ingrese el nombre del chofer 2",
                      value: chofer2nombre
                    },
                    {
                      value: ($$value) => {
                        chofer2nombre = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )} ${validate_component(NumberInput, "NumberInput").$$render(
                    $$result,
                    {
                      id: "chofer2dni",
                      min: 1,
                      name: "chofer2dni",
                      placeholder: "Ingrese el dni del chofer 2",
                      value: chofer2dni
                    },
                    {
                      value: ($$value) => {
                        chofer2dni = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Dominio del bus" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      id: "interno",
                      name: "interno",
                      placeholder: "Ingrese el interno del bus",
                      value: interno
                    },
                    {
                      value: ($$value) => {
                        interno = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )} ${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      id: "dominio",
                      name: "dominio",
                      placeholder: "Ingrese el dominio del bus",
                      value: dominio
                    },
                    {
                      value: ($$value) => {
                        dominio = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(TextArea, "TextArea").$$render(
                $$result,
                {
                  class: "p-4",
                  name: "observaciones",
                  labelText: "Observaciones",
                  placeholder: "Puede ingresar observaciones si lo desea...",
                  maxCount: 300,
                  value: observaciones
                },
                {
                  value: ($$value) => {
                    observaciones = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</form>`}`}`;
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
                  disabled: !isFormValid || creating
                },
                {},
                {
                  default: () => {
                    return `Actualizar`;
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
