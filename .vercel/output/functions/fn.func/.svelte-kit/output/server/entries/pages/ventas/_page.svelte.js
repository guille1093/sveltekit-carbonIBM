import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, v as validate_component, i as add_attribute, o as each, f as escape } from "../../../chunks/ssr.js";
import { A as Add } from "../../../chunks/Add.js";
import { S as SelectSearch, M as MultiSelect, T as Tag } from "../../../chunks/SelectSearch.js";
import "devalue";
import { C as ComposedModal, M as ModalHeader, a as ModalBody } from "../../../chunks/ModalBody.js";
import { I as InlineLoading, M as ModalFooter } from "../../../chunks/InlineLoading.js";
import { G as Grid, R as Row, C as Column } from "../../../chunks/Column.js";
import { F as FormGroup } from "../../../chunks/FormGroup.js";
import { S as Search } from "../../../chunks/Search.js";
import { D as Dropdown } from "../../../chunks/Dropdown.js";
import { T as Tile } from "../../../chunks/Tile.js";
import { T as TextArea } from "../../../chunks/TextArea.js";
import { B as Button } from "../../../chunks/Button.js";
import { D as DataTable, T as Toolbar, a as ToolbarContent, b as ToolbarSearch, c as ToolbarMenu, P as Pagination } from "../../../chunks/Pagination.js";
import { N as NumberInput } from "../../../chunks/NumberInput.js";
const NewFinancialCustomerExperiences = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["title"]);
  let { title = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || $$props["title"];
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { preserveAspectRatio: "xMidYMid meet" },
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { width: "64" },
      { height: "64" },
      { fill: "currentColor" },
      { title: escape_attribute_value(title) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}><path d="M4.5,25.509l-1.254-1.254	l0.509-0.51L4.5,24.491l1.746-1.746l0.509,0.51L4.5,25.509z M23.192,29.305l-0.385-0.609C20.822,29.949,18.404,30.64,16,30.64	c-2.467,0-4.821-0.672-6.806-1.942l-0.389,0.605c2.102,1.346,4.589,2.058,7.194,2.058C18.539,31.36,21.093,30.63,23.192,29.305z M31.36,23c0-2.404-1.956-4.36-4.36-4.36s-4.36,1.956-4.36,4.36s1.956,4.36,4.36,4.36S31.36,25.404,31.36,23z M30.64,23	c0,2.007-1.633,3.64-3.64,3.64s-3.64-1.633-3.64-3.64s1.633-3.64,3.64-3.64S30.64,20.993,30.64,23z M8.36,27v-8	c0-0.199-0.161-0.36-0.36-0.36H5c-0.096,0-0.187,0.038-0.254,0.105l-3,3C1.678,21.812,1.64,21.904,1.64,22v5	c0,0.199,0.161,0.36,0.36,0.36h6C8.199,27.36,8.36,27.199,8.36,27z M2.36,22.36H5c0.199,0,0.36-0.161,0.36-0.36v-2.64h2.28v7.279	H2.36V22.36z M4.64,19.869v1.771H2.869L4.64,19.869z M27.36,24.86h0.39c0.612,0,1.11-0.498,1.11-1.11s-0.498-1.11-1.11-1.11h-1.5	c-0.215,0-0.39-0.175-0.39-0.39s0.175-0.39,0.39-0.39h2.25v-0.72h-1.14V20.5h-0.72v0.64h-0.39c-0.612,0-1.11,0.498-1.11,1.11	s0.498,1.11,1.11,1.11h1.5c0.215,0,0.39,0.175,0.39,0.39s-0.175,0.39-0.39,0.39H25.5v0.721h1.14v0.64h0.721L27.36,24.86L27.36,24.86	z M21.36,21.5c0-2.146-1.301-4.066-3.241-4.902c0.779-0.628,1.241-1.57,1.241-2.598c0-1.853-1.508-3.36-3.36-3.36	s-3.36,1.507-3.36,3.36c0,1.028,0.461,1.969,1.241,2.598c-1.941,0.836-3.241,2.756-3.241,4.902V23h0.72v-1.5	c0-2.079,1.412-3.913,3.434-4.46c0.145-0.039,0.25-0.165,0.264-0.314c0.014-0.15-0.066-0.292-0.202-0.358	C13.934,15.921,13.36,15.014,13.36,14c0-1.456,1.185-2.64,2.64-2.64c1.456,0,2.64,1.185,2.64,2.64c0,1.014-0.573,1.921-1.497,2.368	c-0.135,0.065-0.215,0.208-0.201,0.358c0.014,0.149,0.119,0.275,0.265,0.314c2.021,0.547,3.434,2.381,3.434,4.46V23h0.721v-1.5	H21.36z M29.329,16.958c-0.319-4.184-2.649-8.02-6.231-10.263l-0.383,0.61c3.39,2.122,5.594,5.751,5.896,9.707	c0.024,0.321,0.029,0.66,0.029,0.988h0.721C29.36,17.654,29.354,17.298,29.329,16.958z M3.404,17.013	c0.301-3.956,2.505-7.584,5.895-9.708l-0.382-0.61c-3.583,2.244-5.913,6.081-6.231,10.263C2.66,17.297,2.64,17.654,2.64,18h0.72	C3.36,17.672,3.38,17.334,3.404,17.013z M21.36,7V3c0-0.75-0.61-1.36-1.36-1.36h-8c-0.75,0-1.36,0.61-1.36,1.36v4	c0,0.75,0.61,1.36,1.36,1.36h8C20.75,8.36,21.36,7.75,21.36,7z M20.64,6.36V7c0,0.353-0.287,0.64-0.64,0.64h-8	c-0.353,0-0.64-0.287-0.64-0.64V6.36H20.64z M11.36,3c0-0.353,0.287-0.64,0.64-0.64h8c0.353,0,0.64,0.287,0.64,0.64v2.64h-9.28V3z"></path></svg>`;
});
let invalidText = "El cliente ya esta en el paquete";
const CrearVentaModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let creating;
  let selectCantidad;
  let precio;
  let precioUnitario;
  let { data } = $$props;
  let selected = [];
  let form;
  let paqueteDropdownOpen = false;
  let isFormValid = true;
  let { open } = $$props;
  let paquetesItems = data.paquetes.map(
    /** @type {{ id: any; nombre: any; fechasalida: Date; precio: number }} */
    (paquete2) => ({
      id: paquete2.id,
      text: paquete2.nombre,
      fecha: paquete2.fechasalida,
      precio: paquete2.precio
    })
  );
  let paqueteSearch = "";
  let paquetesFiltered = [...paquetesItems];
  let clientesItems = data.clientes.map(
    /** @type {{ id: any; nombre: any; apellido: string; fechanacimiento: Date; dni: string; }} */
    (cliente) => ({
      id: cliente.id,
      text: `${cliente.nombre} ${cliente.apellido} - ${cliente.dni}`
    })
  );
  let clientesFiltered = [...clientesItems];
  let paquete = paquetesItems[0].id;
  const getPrecio = (id) => {
    let precio2 = 0;
    paquetesItems.forEach(
      /** @type {{ id: any; precio: any; }} */
      (paquete2) => {
        if (paquete2.id === id) {
          precio2 = paquete2.precio;
        }
      }
    );
    return precio2;
  };
  paquetesItems[0].precio;
  const getPersonasEnPaquete = (id) => {
    console.log("paquete selecionado", id);
    let personas = [];
    data.ventas.forEach(
      /** @type {{ expand: { paquete: { id: any; }; cliente: { id: any; }; pasajeros: { id: any; }[]; }; }} */
      (venta) => {
        if (venta.expand.paquete.id === id) {
          personas.push(venta.expand.cliente.id);
          if (venta.expand.pasajeros) {
            venta.expand.pasajeros.forEach(
              /** @type {{ id: any; }} */
              (pasajero) => {
                personas.push(pasajero.id);
              }
            );
          }
        }
      }
    );
    return personas;
  };
  let selectedId;
  let invalid = false;
  let acompañantes = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    creating = false;
    selectCantidad = (selected.length + 1).toString();
    precio = (getPrecio(paquete) * (selected.length + 1)).toString();
    precioUnitario = getPrecio(paquete).toString();
    invalid = getPersonasEnPaquete(paquete).includes(selectedId);
    clientesFiltered = clientesItems.filter(
      /** @type {{ id: any; }} */
      (cliente) => !getPersonasEnPaquete(paquete).includes(cliente.id)
    );
    acompañantes = clientesFiltered.filter(
      /** @type {{ id: any; }} */
      (cliente) => cliente.id !== selectedId
    );
    isFormValid = !invalid;
    $$rendered = `${validate_component(ComposedModal, "ComposedModal").$$render(
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
          return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { label: "", title: "Nueva venta" }, {}, {})} ${validate_component(ModalBody, "ModalBody").$$render($$result, { hasForm: true, hasScrollingContent: true }, {}, {
            default: () => {
              return `${creating ? `<div>${validate_component(InlineLoading, "InlineLoading").$$render($$result, { description: "Guardando venta..." }, {}, {})}</div>` : `${`<form id="modalForm" method="post" action="?/createVenta"${add_attribute("this", form, 0)}><input type="hidden" name="paquete"${add_attribute("value", paquete, 0)}> <input type="hidden" name="cant_personas"${add_attribute("value", selectCantidad, 0)}> <input type="hidden" name="cliente"${add_attribute("value", selectedId, 0)}> <input type="hidden" name="precio"${add_attribute("value", precio, 0)}> ${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Paquete" }, {}, {
                            default: () => {
                              return `${validate_component(Search, "Search").$$render(
                                $$result,
                                {
                                  size: "sm",
                                  placeholder: "Buscar paquete",
                                  value: paqueteSearch
                                },
                                {
                                  value: ($$value) => {
                                    paqueteSearch = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )} ${validate_component(Dropdown, "Dropdown").$$render(
                                $$result,
                                {
                                  itemToString: (item) => {
                                    return item.text + " - " + new Date(item.fecha).toLocaleDateString("es-ES", {
                                      day: "2-digit",
                                      month: "short",
                                      year: "numeric"
                                    });
                                  },
                                  items: paquetesFiltered,
                                  selectedId: paquete,
                                  open: paqueteDropdownOpen
                                },
                                {
                                  selectedId: ($$value) => {
                                    paquete = $$value;
                                    $$settled = false;
                                  },
                                  open: ($$value) => {
                                    paqueteDropdownOpen = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(SelectSearch, "SelectSearch").$$render(
                            $$result,
                            {
                              invalid,
                              invalidText,
                              legendText: "Titular",
                              items: clientesFiltered,
                              selectedId
                            },
                            {
                              items: ($$value) => {
                                clientesFiltered = $$value;
                                $$settled = false;
                              },
                              selectedId: ($$value) => {
                                selectedId = $$value;
                                $$settled = false;
                              }
                            },
                            {}
                          )}`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Acompañantes" }, {}, {
                            default: () => {
                              return `<input type="hidden" name="pasajeros"${add_attribute("value", selected, 0)}> ${validate_component(MultiSelect, "MultiSelect").$$render(
                                $$result,
                                {
                                  selectionFeedback: "top-after-reopen",
                                  filterable: true,
                                  direction: "top",
                                  label: "Seleccione los acompañantes",
                                  items: acompañantes,
                                  selectedIds: selected
                                },
                                {
                                  selectedIds: ($$value) => {
                                    selected = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )} ${each(selected, (id) => {
                                return `${each(data.clientes, (cliente) => {
                                  return `${cliente.id === id ? `${validate_component(Tag, "Tag").$$render($$result, { size: "sm", filter: true, type: "blue" }, {}, {
                                    default: () => {
                                      return `${escape(cliente.nombre)} ${escape(cliente.apellido)}`;
                                    }
                                  })}` : ``}`;
                                })}`;
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
                          return `${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Valor" }, {}, {
                            default: () => {
                              return `${validate_component(Tile, "Tile").$$render($$result, { light: true }, {}, {
                                default: () => {
                                  return `<div class="flex justify-between p-1"><p data-svelte-h="svelte-1v05954">Cantidad de personas:</p> <h5>${escape(selected.length + 1)}</h5></div> <div class="flex justify-between p-1"><p data-svelte-h="svelte-kccwtr">Precio por persona:</p> <h5>$${escape(Intl.NumberFormat("es-AR").format(precioUnitario))}</h5></div> <div class="flex justify-between p-1 bg-blue-600"><p data-svelte-h="svelte-1s87a6c">Total:</p> <h5>$${escape(Intl.NumberFormat("es-AR").format(precio))}</h5></div>`;
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
                          return `${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Observaciones" }, {}, {
                            default: () => {
                              return `${validate_component(TextArea, "TextArea").$$render(
                                $$result,
                                {
                                  name: "observaciones",
                                  placeholder: "Observaciones"
                                },
                                {},
                                {}
                              )}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</form>`}`}`;
            }
          })} ${validate_component(ModalFooter, "ModalFooter").$$render($$result, {}, {}, {
            default: () => {
              return `${`${validate_component(Button, "Button").$$render($$result, { kind: "secondary", size: "lg" }, {}, {
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
                    return `Crear`;
                  }
                }
              )}`}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let open = false;
  let rows = data.ventas;
  let pageSize = 10;
  let page = 1;
  let filteredRowIds = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<main>${validate_component(CrearVentaModal, "CrearVentaModal").$$render(
      $$result,
      { data, open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `<h1 data-svelte-h="svelte-fkky2z">Ventas</h1> <p data-svelte-h="svelte-13z9u4t">Aqui puede ver y crear ventas.</p>`;
              }
            })} ${validate_component(Column, "Column").$$render($$result, { class: "flex justify-end" }, {}, {
              default: () => {
                return `${validate_component(NewFinancialCustomerExperiences, "NewFinancialCustomerExperiences").$$render($$result, {}, {}, {})}`;
              }
            })}`;
          }
        })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="overflow-hidden uppercase">${validate_component(DataTable, "DataTable").$$render(
                  $$result,
                  {
                    zebra: true,
                    sortable: true,
                    sortKey: "created",
                    sortDirection: "descending",
                    headers: [
                      { key: "nombrePaquete", value: "Destino" },
                      { key: "nombre", value: "Titular" },
                      { key: "precioVenta", value: "Precio" },
                      { key: "pagado", value: "Pagado" },
                      { key: "restante", value: "Adeudado" },
                      { key: "estado", value: "Estado" },
                      { key: "created", value: "Creado" }
                    ],
                    rows,
                    pageSize,
                    page
                  },
                  {},
                  {
                    cell: ({ row, cell }) => {
                      return `${cell.key === "restante" ? `$${escape(Intl.NumberFormat("es-AR").format(row.precioVenta - row.pagado))}` : `${cell.key === "precioVenta" ? `$${escape(Intl.NumberFormat("es-AR").format(cell.value))}` : `${cell.key === "pagado" ? `$${escape(Intl.NumberFormat("es-AR").format(cell.value))}` : `${cell.key === "created" ? `${escape(new Date(cell.value).toLocaleDateString("es-ES", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                      }))}` : `${cell.key === "updated" ? `${escape(new Date(cell.value).toLocaleDateString("es-ES", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                      }))}` : `${cell.key === "precio" ? `<a class="text-sm text-gray-300" href="${"/ventas/" + escape(row.id, true)}">$ ${escape(Intl.NumberFormat("es-AR").format(cell.value))}</a>` : `${cell.key === "nombre" ? `<a class="text-sm text-gray-300" href="${"/ventas/" + escape(row.id, true)}">${escape(row.nombre)} ${escape(row.apellido)}</a>` : `${cell.key === "nombrePaquete" ? `<a class="text-sm text-gray-300" href="${"/ventas/" + escape(row.id, true)}">${escape(cell.value)}</a> <br> <a class="text-xs text-gray-500" href="${"/ventas/" + escape(row.id, true)}"><i class="bx bx-calendar text-xs mr-2 text-blue-600"></i> ${escape(new Date(row.paqueteFecha).toLocaleDateString("es-ES", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                      }))}</a>` : `${cell.key === "estado" ? `${cell.value === "EN CURSO" ? `<div class="flex"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">${escape(cell.value)}</span></div>` : `${cell.value === "CANCELADA" ? `<div class="flex"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">${escape(cell.value)}</span></div>` : `${cell.value === "FINALIZADA" ? `<div class="flex"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">${escape(cell.value)}</span></div>` : `${escape(cell.value)}`}`}`}` : `${escape(cell.value)}`}`}`}`}`}`}`}`}`} `;
                    },
                    "cell-header": ({ header }) => {
                      return ` ${header.key === "valor" ? `<div class="flex items-center"><i class="bx bx-dollar-circle text-xl mr-2 text-blue-600"></i> <span class="mr-2">${escape(header.value)}</span> <span class="text-xs" data-svelte-h="svelte-102fxwq">ARS</span></div>` : `${header.key === "nombre" ? `<div class="flex items-center"><i class="bx bx-user text-xl mr-2 text-blue-600"></i> <span class="mr-2">${escape(header.value)}</span></div>` : `${header.key === "created" ? `<div class="flex items-center"><i class="bx bx-calendar text-xl mr-2 text-blue-600"></i> <span class="mr-2">${escape(header.value)}</span></div>` : `${header.key === "updated" ? `<div class="flex items-center"><i class="bx bx-calendar text-xl mr-2 text-blue-600"></i> <span class="mr-2">${escape(header.value)}</span></div>` : `${header.key === "estado" ? `<div class="flex items-center"><i class="bx bx-check-circle text-xl mr-2 text-blue-600"></i> <span class="mr-2">${escape(header.value)}</span></div>` : `${header.key === "nombrePaquete" ? `<div class="flex items-center"><i class="bx bx-map text-xl mr-2 text-blue-600"></i> <span class="mr-2">${escape(header.value)}</span></div>` : `${escape(header.value)}`}`}`}`}`}`} `;
                    },
                    default: () => {
                      return ` ${validate_component(Toolbar, "Toolbar").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(ToolbarContent, "ToolbarContent").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(ToolbarSearch, "ToolbarSearch").$$render(
                                $$result,
                                {
                                  persistent: true,
                                  shouldFilterRows: true,
                                  placeholder: "Buscar...",
                                  filteredRowIds
                                },
                                {
                                  filteredRowIds: ($$value) => {
                                    filteredRowIds = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )} ${validate_component(ToolbarMenu, "ToolbarMenu").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(NumberInput, "NumberInput").$$render(
                                    $$result,
                                    {
                                      min: 1,
                                      max: 100,
                                      label: "Numero de filas por pagina",
                                      value: pageSize
                                    },
                                    {
                                      value: ($$value) => {
                                        pageSize = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {}
                                  )}`;
                                }
                              })} ${validate_component(Button, "Button").$$render($$result, { icon: Add }, {}, {
                                default: () => {
                                  return `Nueva venta`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  }
                )}</div> <div class="fixed bottom-0 w-2/3">${validate_component(Pagination, "Pagination").$$render(
                  $$result,
                  {
                    totalItems: filteredRowIds.length,
                    pageSizeInputDisabled: true,
                    pageSize,
                    page
                  },
                  {
                    pageSize: ($$value) => {
                      pageSize = $$value;
                      $$settled = false;
                    },
                    page: ($$value) => {
                      page = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div>`;
              }
            })}`;
          }
        })}`;
      }
    })}</main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
