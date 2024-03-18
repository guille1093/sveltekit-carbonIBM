import { c as create_ssr_component, v as validate_component, i as add_attribute, f as escape, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object } from "../../../chunks/ssr.js";
import "devalue";
import { C as ComposedModal, M as ModalHeader, a as ModalBody } from "../../../chunks/ModalBody.js";
import { I as InlineLoading, M as ModalFooter } from "../../../chunks/InlineLoading.js";
import { F as FormGroup } from "../../../chunks/FormGroup.js";
import { T as TextInput } from "../../../chunks/TextInput.js";
import { B as Button } from "../../../chunks/Button.js";
import { A as Add } from "../../../chunks/Add.js";
import { R as Row, C as Column, G as Grid } from "../../../chunks/Column.js";
import { D as DataTable, T as Toolbar, a as ToolbarContent, b as ToolbarSearch, c as ToolbarMenu, P as Pagination } from "../../../chunks/Pagination.js";
import { N as NumberInput } from "../../../chunks/NumberInput.js";
const CreateModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let creating;
  let form;
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    creating = false;
    $$rendered = `${validate_component(ComposedModal, "ComposedModal").$$render(
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
          return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { label: "", title: "Registrar nuevo" }, {}, {})} ${validate_component(ModalBody, "ModalBody").$$render($$result, { hasForm: true, hasScrollingContent: true }, {}, {
            default: () => {
              return `${creating ? `<div>${validate_component(InlineLoading, "InlineLoading").$$render($$result, { description: "Guardando..." }, {}, {})}</div>` : `${`<form id="modalForm" method="post" action="?/create"${add_attribute("this", form, 0)}><div class="flex"><div class="w-[50%] flex-grow p-4"> ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Nombre" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      required: true,
                      id: "nombre",
                      name: "nombre",
                      labelText: "",
                      placeholder: "Ingrese el nombre"
                    },
                    {},
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
                      labelText: "",
                      placeholder: "Ingrese el telefono"
                    },
                    {},
                    {}
                  )}`;
                }
              })}</div> <div class="w-[50%] flex-grow p-4"> ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Email" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      id: "email",
                      name: "email",
                      labelText: "",
                      placeholder: "Ingrese el email"
                    },
                    {},
                    {}
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Dirección" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      id: "direccion",
                      name: "direccion",
                      labelText: "",
                      placeholder: "Ingrese la dirección"
                    },
                    {},
                    {}
                  )}`;
                }
              })}</div></div> ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Observaciones" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      id: "observaciones",
                      name: "observaciones",
                      labelText: "",
                      placeholder: "Puede ingresar observaciones sobre el hotel"
                    },
                    {},
                    {}
                  )}`;
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
const DataTable_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { open = false } = $$props;
  let rows = data.hotels;
  let pageSize = 10;
  let page = 1;
  let filteredRowIds = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Row, "Row").$$render($$result, {}, {}, {
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
                  { key: "nombre", value: "Nombre" },
                  { key: "direccion", value: "Dirección" },
                  { key: "email", value: "Email" },
                  { key: "telefono", value: "Teléfono" },
                  { key: "created", value: "Creado" },
                  { key: "updated", value: "Actualizado" }
                ],
                rows,
                pageSize,
                page
              },
              {},
              {
                cell: ({ row, cell }) => {
                  return `${cell.key === "created" || cell.key === "updated" ? `<div role="button" tabindex="0">${escape(new Date(cell.value).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                  }))}</div>` : `<div role="button" tabindex="0">${escape(cell.value)}</div>`} `;
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
                                  label: "Numero de filas por página",
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
                              return `Registrar nuevo`;
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
  } while (!$$settled);
  return $$rendered;
});
const Apartment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path d="M30,31.36H2c-0.199,0-0.36-0.161-0.36-0.36V13c0-0.199,0.161-0.36,0.36-0.36h11.64V1	c0-0.199,0.161-0.36,0.36-0.36h16c0.199,0,0.36,0.161,0.36,0.36v30C30.36,31.199,30.199,31.36,30,31.36z M14.36,30.64h15.28V1.36	H14.36V13c0,0.199-0.161,0.36-0.36,0.36H2.36v17.28h7.28V23c0-0.199,0.161-0.36,0.36-0.36h4c0.199,0,0.36,0.161,0.36,0.36V30.64z M10.36,30.64h3.28v-7.28h-3.28V30.64z M26.36,25h-0.72v-2h0.721L26.36,25L26.36,25z M22.36,25h-0.72v-2h0.721L22.36,25L22.36,25z M18.36,25h-0.72v-2h0.721L18.36,25L18.36,25z M6.36,25H5.64v-2h0.72C6.36,23,6.36,25,6.36,25z M26.36,19h-0.72v-2h0.721L26.36,19	L26.36,19z M22.36,19h-0.72v-2h0.721L22.36,19L22.36,19z M18.36,19h-0.72v-2h0.721L18.36,19L18.36,19z M14.36,19h-0.72v-2h0.72V19z M10.36,19H9.64v-2h0.72C10.36,17,10.36,19,10.36,19z M6.36,19H5.64v-2h0.72C6.36,17,6.36,19,6.36,19z M26.36,13h-0.72v-2h0.721	L26.36,13L26.36,13z M22.36,13h-0.72v-2h0.721L22.36,13L22.36,13z M18.36,13h-0.72v-2h0.721L18.36,13L18.36,13z M26.36,7h-0.72V5	h0.721L26.36,7L26.36,7z M22.36,7h-0.72V5h0.721L22.36,7L22.36,7z M18.36,7h-0.72V5h0.721L18.36,7L18.36,7z"></path></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let open = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<main>${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `<h1 data-svelte-h="svelte-wrgk0k">Hoteles</h1> <p data-svelte-h="svelte-1k0qwb">Aqui puede ver, buscar y filtrar todos los hoteles registrados en el sistema.</p>`;
              }
            })} ${validate_component(Column, "Column").$$render($$result, { class: "flex justify-end" }, {}, {
              default: () => {
                return `${validate_component(Apartment, "Apartment").$$render($$result, {}, {}, {})}`;
              }
            })}`;
          }
        })} ${validate_component(DataTable_1, "DataTable").$$render(
          $$result,
          { data, open },
          {
            open: ($$value) => {
              open = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</main> ${validate_component(CreateModal, "CreateModal").$$render(
      $$result,
      { open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
