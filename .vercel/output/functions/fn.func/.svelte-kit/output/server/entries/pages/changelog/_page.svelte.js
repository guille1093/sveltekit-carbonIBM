import { c as create_ssr_component, v as validate_component, i as add_attribute, o as each, f as escape } from "../../../chunks/ssr.js";
import { S as SelectSearch, M as MultiSelect, T as Tag } from "../../../chunks/SelectSearch.js";
import { A as Add } from "../../../chunks/Add.js";
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
let invalidText = "El cliente ya esta en el paquete";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let creating;
  let selectCantidad;
  let precio;
  let { data } = $$props;
  let selected = [];
  data.clientes.map(
    /** @type {{ id: any; nombre: any; apellido: string; dni:string}} */
    (cliente) => ({
      id: cliente.id,
      text: `${cliente.nombre} ${cliente.apellido}`,
      dni: cliente.dni
    })
  );
  let form;
  let paqueteDropdownOpen = false;
  let isFormValid = true;
  let open = true;
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
  let paquetePrecio = paquetesItems[0].precio;
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
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    creating = false;
    selectCantidad = (selected.length + 1).toString();
    precio = (getPrecio(paquete) * (selected.length + 1)).toString();
    getPrecio(paquete).toString();
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
                                  return `<div class="flex justify-between p-1"><p data-svelte-h="svelte-1v05954">Cantidad de personas:</p> <h5>${escape(selected.length + 1)}</h5></div> <div class="flex justify-between p-1"><p data-svelte-h="svelte-kccwtr">Precio por persona:</p> <h5>$${escape(Intl.NumberFormat("es-AR").format(paquetePrecio))}</h5></div> <div class="flex justify-between p-1 bg-blue-600"><p data-svelte-h="svelte-1s87a6c">Total:</p> <h5>$${escape(Intl.NumberFormat("es-AR").format((selected.length + 1) * paquetePrecio))}</h5></div>`;
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
                    return `Crear`;
                  }
                }
              )}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Button, "Button").$$render($$result, { kind: "primary", size: "lg" }, {}, {
      default: () => {
        return `${validate_component(Add, "Add").$$render($$result, {}, {}, {})} <span data-svelte-h="svelte-8ukayj">Nueva venta</span>`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
