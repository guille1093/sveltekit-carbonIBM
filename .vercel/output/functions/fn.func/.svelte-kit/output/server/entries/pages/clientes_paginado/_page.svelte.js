import { c as create_ssr_component, i as add_attribute, v as validate_component, f as escape } from "../../../chunks/ssr.js";
import { A as Add } from "../../../chunks/Add.js";
import { U as UserAnalytics } from "../../../chunks/UserAnalytics.js";
import "devalue";
import { G as Grid, R as Row, C as Column } from "../../../chunks/Column.js";
import { D as DataTable, T as Toolbar, a as ToolbarContent, b as ToolbarSearch, c as ToolbarMenu, P as Pagination } from "../../../chunks/Pagination.js";
import { N as NumberInput } from "../../../chunks/NumberInput.js";
import { B as Button } from "../../../chunks/Button.js";
const ClientesDataTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rows;
  let { data } = $$props;
  let { form } = $$props;
  let pageSize = 5;
  let page = 1;
  let filteredRowIds = [];
  let page_form;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    rows = form?.items ?? data.clientes.items;
    $$rendered = `<form hidden method="POST" action="?/page"${add_attribute("this", page_form, 0)}><input type="hidden" name="page"${add_attribute("value", page, 0)}> <input type="hidden" name="pageSize"${add_attribute("value", pageSize, 0)}></form> ${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `<h1 data-svelte-h="svelte-1difwn">CLIENTES</h1> <p data-svelte-h="svelte-1uq3z68">Aqui puede ver, buscar y filtrar todos los clientes registrados en el sistema.</p>`;
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
                return `${`${validate_component(DataTable, "DataTable").$$render(
                  $$result,
                  {
                    zebra: true,
                    sortable: true,
                    sortKey: "created",
                    sortDirection: "descending",
                    headers: [
                      { key: "dni", value: "DNI" },
                      { key: "nombre", value: "NOMBRE" },
                      { key: "apellido", value: "APELLIDO" },
                      {
                        key: "fechanacimiento",
                        value: "NACIMIENTO"
                      },
                      { key: "created", value: "CREADO" },
                      { key: "updated", value: "ACTUALIZADO" },
                      {
                        key: "nacionalidad",
                        value: "NACIONALIDAD"
                      }
                    ],
                    rows
                  },
                  {},
                  {
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
                )} ${validate_component(Pagination, "Pagination").$$render(
                  $$result,
                  {
                    totalItems: data.clientes.totalItems,
                    pageSizes: [5, 10, 25, 50, 100],
                    forwardText: "Siguiente página",
                    backwardText: "Página anterior",
                    itemsPerPageText: "Items por página",
                    itemRangeText: (min, max, total) => `${min}–${max} de ${total} item${max === 1 ? "" : "s"}`,
                    pageRangeText: (current, total) => `de ${total} página${total === 1 ? "" : "s"}`,
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
                )}`}`;
              }
            })}`;
          }
        })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {})}`;
      }
    })} <h1 data-svelte-h="svelte-osti1y">FORM</h1> <pre><code>${escape(JSON.stringify(form, null, 4))}</code></pre> <h1 data-svelte-h="svelte-eb9p7w">DATA</h1> <pre><code>${escape(JSON.stringify(data, null, 4))}</code></pre>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      console.log("form desde +page", form);
    }
    $$rendered = `<main>${validate_component(ClientesDataTable, "ClientesDataTable").$$render(
      $$result,
      { data, form },
      {
        data: ($$value) => {
          data = $$value;
          $$settled = false;
        },
        form: ($$value) => {
          form = $$value;
          $$settled = false;
        }
      },
      {}
    )}</main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
