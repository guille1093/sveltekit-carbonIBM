import { c as create_ssr_component, v as validate_component, i as add_attribute, o as each, f as escape } from "../../../chunks/ssr.js";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import { A as Add } from "../../../chunks/Add.js";
import "devalue";
import { U as UserAnalytics } from "../../../chunks/UserAnalytics.js";
import { C as ComposedModal, M as ModalHeader, a as ModalBody } from "../../../chunks/ModalBody.js";
import { I as InlineLoading, M as ModalFooter } from "../../../chunks/InlineLoading.js";
import { F as FormGroup } from "../../../chunks/FormGroup.js";
import { N as NumberInput } from "../../../chunks/NumberInput.js";
import { T as TextInput } from "../../../chunks/TextInput.js";
import { D as DatePicker, a as DatePickerInput } from "../../../chunks/DatePickerInput.js";
import { S as Select, a as SelectItem } from "../../../chunks/SelectItem.js";
import { B as Button } from "../../../chunks/Button.js";
import { G as Grid, R as Row, C as Column } from "../../../chunks/Column.js";
import { D as DataTable, T as Toolbar, a as ToolbarContent, b as ToolbarSearch, c as ToolbarMenu, P as Pagination } from "../../../chunks/Pagination.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nombre;
  let apellido;
  let email;
  let telefono;
  let dni;
  let ocupacion;
  let isValidNombre;
  let isValidApellido;
  let isValidDNI;
  let isValidEmail;
  let isValidTelefono;
  let isValidFechaNacimiento;
  let isValidOcupacion;
  let validartionMessageNombre;
  let validartionMessageApellido;
  let validartionMessageDNI;
  let validartionMessageEmail;
  let validartionMessageTelefono;
  let validartionMessageOcupacion;
  let isFormValid;
  let creating;
  let { data } = $$props;
  let form;
  let open = false;
  let rows = data.clientes;
  let pageSize = 10;
  let page = 1;
  let filteredRowIds = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    nombre = "";
    apellido = "";
    email = "";
    telefono = "";
    dni = null;
    ocupacion = "";
    isValidNombre = true;
    isValidApellido = true;
    isValidDNI = true;
    isValidEmail = true;
    isValidTelefono = true;
    isValidFechaNacimiento = true;
    isValidOcupacion = true;
    validartionMessageNombre = "";
    validartionMessageApellido = "";
    validartionMessageDNI = "";
    validartionMessageEmail = "";
    validartionMessageTelefono = "";
    validartionMessageOcupacion = "";
    isFormValid = isValidApellido && isValidNombre && dni && isValidEmail && nombre.length > 0 && apellido.length > 0 ? true : false;
    creating = false;
    $$rendered = `<main>${validate_component(ComposedModal, "ComposedModal").$$render(
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
          return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { label: "", title: "Registrar cliente" }, {}, {})} ${validate_component(ModalBody, "ModalBody").$$render($$result, { hasForm: true, hasScrollingContent: true }, {}, {
            default: () => {
              return `${creating ? `<div>${validate_component(InlineLoading, "InlineLoading").$$render($$result, { description: "Guardando cliente..." }, {}, {})}</div>` : `${`<form id="modalForm" method="post" action="?/create"${add_attribute("this", form, 0)}><div class="flex"><div class="w-[50%] flex-grow p-4"> ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "DNI" }, {}, {
                default: () => {
                  return `${validate_component(NumberInput, "NumberInput").$$render(
                    $$result,
                    {
                      id: "dni",
                      name: "dni",
                      invalid: !isValidDNI,
                      invalidText: validartionMessageDNI,
                      placeholder: "Ingrese el DNI",
                      value: dni
                    },
                    {
                      value: ($$value) => {
                        dni = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Nombre" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      id: "nombre",
                      name: "nombre",
                      invalid: !isValidNombre,
                      invalidText: validartionMessageNombre,
                      labelText: "",
                      placeholder: "Ingrese el nombre",
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
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Telefono" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      id: "telefono",
                      name: "telefono",
                      invalid: !isValidTelefono,
                      invalidText: validartionMessageTelefono,
                      labelText: "",
                      placeholder: "Ingrese el telefono",
                      value: telefono
                    },
                    {
                      value: ($$value) => {
                        telefono = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Lugar Ascenso" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      name: "lugarascenso",
                      placeholder: "Ingrese el lugar de ascenso"
                    },
                    {},
                    {}
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Ocupacion" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      id: "ocupacion",
                      name: "ocupacion",
                      invalid: !isValidOcupacion,
                      invalidText: validartionMessageOcupacion,
                      labelText: "",
                      placeholder: "Ingrese la ocupacion",
                      value: ocupacion
                    },
                    {
                      value: ($$value) => {
                        ocupacion = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Nombre Madre" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      name: "nombremadre",
                      placeholder: "Ingrese el nombre de la madre"
                    },
                    {},
                    {}
                  )}`;
                }
              })}</div> <div class="w-[50%] flex-grow p-4"> ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Fecha Nacimiento" }, {}, {
                default: () => {
                  return `${validate_component(DatePicker, "DatePicker").$$render(
                    $$result,
                    {
                      value: (/* @__PURE__ */ new Date()).toISOString(),
                      datePickerType: "single",
                      dateFormat: "d/m/Y",
                      locale: Spanish,
                      maxDate: /* @__PURE__ */ new Date(),
                      flatpickrProps: { position: "above" }
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(DatePickerInput, "DatePickerInput").$$render(
                          $$result,
                          {
                            invalid: !isValidFechaNacimiento,
                            name: "nacimiento",
                            placeholder: "dd/mm/yyyy"
                          },
                          {},
                          {}
                        )}`;
                      }
                    }
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Apellido" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      id: "apellido",
                      name: "apellido",
                      invalid: !isValidApellido,
                      invalidText: validartionMessageApellido,
                      labelText: "",
                      placeholder: "Ingrese el apellido",
                      value: apellido
                    },
                    {
                      value: ($$value) => {
                        apellido = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Nacionalidad" }, {}, {
                default: () => {
                  return `${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      id: "select-1",
                      hideLabel: true,
                      name: "nacionalidad"
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
                            text: "Seleccione la nacionalidad"
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
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Email" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      id: "email",
                      name: "email",
                      invalid: !isValidEmail,
                      invalidText: validartionMessageEmail,
                      labelText: "",
                      placeholder: "Ingrese el email",
                      value: email
                    },
                    {
                      value: ($$value) => {
                        email = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Sexo" }, {}, {
                default: () => {
                  return `${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      id: "select-1",
                      hideLabel: true,
                      selected: "MASCULINO",
                      name: "sexo"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(SelectItem, "SelectItem").$$render($$result, { value: "MASCULINO", text: "Masculino" }, {}, {})} ${validate_component(SelectItem, "SelectItem").$$render($$result, { value: "FEMENINO", text: "Femenino" }, {}, {})} ${validate_component(SelectItem, "SelectItem").$$render($$result, { value: "OTRO", text: "Otro" }, {}, {})}`;
                      }
                    }
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Apellido Madre" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      name: "apellidomadre",
                      placeholder: "Ingrese el apellido de la madre"
                    },
                    {},
                    {}
                  )}`;
                }
              })}</div></div></form>`}`}`;
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
    )} ${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `<h1 data-svelte-h="svelte-30xh0n">Clientes</h1> <p data-svelte-h="svelte-1uq3z68">Aqui puede ver, buscar y filtrar todos los clientes registrados en el sistema.</p>`;
              }
            })} ${validate_component(Column, "Column").$$render($$result, { class: "flex justify-end" }, {}, {
              default: () => {
                return `${validate_component(UserAnalytics, "UserAnalytics").$$render($$result, {}, {}, {})}`;
              }
            })}`;
          }
        })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="overflow-scroll uppercase">${validate_component(DataTable, "DataTable").$$render(
                  $$result,
                  {
                    zebra: true,
                    sortable: true,
                    sortKey: "created",
                    sortDirection: "descending",
                    headers: [
                      { key: "dni", value: "DNI" },
                      { key: "nombre", value: "Nombre" },
                      { key: "apellido", value: "Apellido" },
                      {
                        key: "fechanacimiento",
                        value: "Nacimiento"
                      },
                      { key: "created", value: "Creado" },
                      { key: "updated", value: "Actualizado" },
                      {
                        key: "nacionalidad",
                        value: "Nacionalidad"
                      }
                    ],
                    rows,
                    pageSize,
                    page
                  },
                  {},
                  {
                    cell: ({ row, cell }) => {
                      return `${cell.key === "fechanacimiento" ? `${escape(new Date(cell.value).toLocaleDateString("es-ES", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                      }))}` : `${cell.key === "created" ? `${escape(new Date(cell.value).toLocaleDateString("es-ES", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                      }))}` : `${cell.key === "updated" ? `${escape(new Date(cell.value).toLocaleDateString("es-ES", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                      }))}` : `${cell.key === "dni" ? `<div role="button" tabindex="0">${escape(cell.value)}</div>` : `${cell.key === "nombre" ? `<a class="text-sm text-gray-300" href="${"/clientes/" + escape(row.id, true)}">${escape(cell.value)}</a>` : `${cell.key === "apellido" ? `<a class="text-sm text-gray-300" href="${"/clientes/" + escape(row.id, true)}">${escape(cell.value)}</a>` : `${cell.key === "email" ? `<a class="text-sm text-gray-300" href="${"/clientes/" + escape(row.id, true)}">${escape(cell.value)}</a>` : `${cell.key === "telefono" ? `<a class="text-sm text-gray-300" href="${"/clientes/" + escape(row.id, true)}">${escape(cell.value)}</a>` : `${escape(cell.value)}`}`}`}`}`}`}`}`} `;
                    },
                    "cell-header": ({ header }) => {
                      return `${header.key === "dni" ? `<div class="flex" data-svelte-h="svelte-1sc9vc6"><i class="bx bx-id-card mr-2 text-blue-600"></i>DNI</div>` : `${header.key === "nombre" ? `<div class="flex" data-svelte-h="svelte-1g7dd0z"><i class="bx bx-user mr-2 text-blue-600"></i>Nombre</div>` : `${header.key === "apellido" ? `<div class="flex" data-svelte-h="svelte-1k4nbg6"><i class="bx bx-user mr-2 text-blue-600"></i>Apellido</div>` : `${header.key === "telefono" ? `<div class="flex" data-svelte-h="svelte-4o3b4d"><i class="bx bx-phone mr-2 text-blue-600"></i>Telefono</div>` : `${header.key === "fechanacimiento" ? `<div class="flex" data-svelte-h="svelte-pnsqce"><i class="bx bx-calendar mr-2 text-blue-600"></i>Nacimiento</div>` : `${header.key === "created" ? `<div class="flex" data-svelte-h="svelte-7d8vv3"><i class="bx bx-calendar mr-2 text-blue-600"></i>Creado</div>` : `${header.key === "updated" ? `<div class="flex" data-svelte-h="svelte-ut2rci"><i class="bx bx-calendar mr-2 text-blue-600"></i>Actualizado</div>` : `${header.key === "nacionalidad" ? `<div class="flex" data-svelte-h="svelte-pjtsnr"><i class="bx bx-globe mr-2 text-blue-600"></i>Nacionalidad</div>` : `${escape(header.value)}`}`}`}`}`}`}`}`} `;
                    },
                    default: () => {
                      return `${validate_component(Toolbar, "Toolbar").$$render($$result, {}, {}, {
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
                                  return `Registrar cliente`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  }
                )}</div> <div class="fixed bottom-0 sm:w-2/3 ml-8">${validate_component(Pagination, "Pagination").$$render(
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
