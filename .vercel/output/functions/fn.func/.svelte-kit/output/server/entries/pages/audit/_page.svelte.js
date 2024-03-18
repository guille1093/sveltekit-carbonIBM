import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, v as validate_component, f as escape, o as each } from "../../../chunks/ssr.js";
import { G as Grid, R as Row, C as Column } from "../../../chunks/Column.js";
import { D as DataTable, T as Toolbar, a as ToolbarContent, b as ToolbarSearch, c as ToolbarMenu, P as Pagination } from "../../../chunks/Pagination.js";
import { T as Tile } from "../../../chunks/Tile.js";
import { N as NumberInput } from "../../../chunks/NumberInput.js";
const DataSecurity = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path d="M17,26.36H1c-0.199,0-0.36-0.161-0.36-0.36v-7c0-0.199,0.161-0.36,0.36-0.36h16v0.721H1.36v6.279H17	V26.36z M17,17.36H1c-0.199,0-0.36-0.161-0.36-0.36v-7c0-0.199,0.161-0.36,0.36-0.36h25c0.199,0,0.36,0.161,0.36,0.36v3h-0.72v-2.64	H1.36v6.28H17V17.36z M26,8.36H1C0.801,8.36,0.64,8.199,0.64,8V1c0-0.199,0.161-0.36,0.36-0.36h25c0.199,0,0.36,0.161,0.36,0.36v7	C26.36,8.199,26.199,8.36,26,8.36z M1.36,7.64h24.28V1.36H1.36V7.64z M22,14.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1	S22.552,14.5,22,14.5z M23,4.5c0-0.552-0.448-1-1-1s-1,0.448-1,1s0.448,1,1,1S23,5.052,23,4.5z M25,31.36	c-3.507,0-6.36-2.854-6.36-6.36v-7.223l6.36-3.18l6.36,3.18V25C31.36,28.507,28.507,31.36,25,31.36z M19.36,18.223V25	c0,3.11,2.529,5.64,5.64,5.64s5.64-2.529,5.64-5.64v-6.777L25,15.402L19.36,18.223z"></path></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let rows = data.registros.map((item) => {
    return {
      id: item.id,
      user: `${item.expand.user.name} ${item.expand.user.apellido}`,
      rol: "ADMINISTRADOR",
      action: item.accion,
      date: item.created,
      JSON: item.json,
      JSON2: item.json2,
      collection: item.collection === "projects" ? "PAQUETE" : item.collection,
      created: new Date(item.created).toLocaleString("es-AR", {
        timeZone: "America/Argentina/Buenos_Aires",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })
    };
  });
  let pageSize = 15;
  let page = 1;
  let filteredRowIds = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `<h1 data-svelte-h="svelte-1f3370d">Registros de auditoria</h1>`;
              }
            })} ${validate_component(Column, "Column").$$render($$result, { class: "flex justify-end" }, {}, {
              default: () => {
                return `${validate_component(DataSecurity, "DataSecurity").$$render($$result, {}, {}, {})}`;
              }
            })}`;
          }
        })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `<p data-svelte-h="svelte-9dnrby">Esta página muestra los registros de auditoria de la aplicación.</p>`;
              }
            })}`;
          }
        })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(DataTable, "DataTable").$$render(
                  $$result,
                  {
                    class: "uppercase",
                    pageSize,
                    page,
                    size: "compact",
                    expandable: true,
                    zebra: true,
                    sortable: true,
                    sortKey: "created",
                    sortDirection: "descending",
                    headers: [
                      { key: "user", value: "USUARIO" },
                      { key: "rol", value: "ROL" },
                      { key: "action", value: "ACCIÓN" },
                      { key: "created", value: "FECHA" },
                      {
                        key: "collection",
                        value: "TIPO REGISTRO"
                      },
                      { key: "id", value: "ID REGISTRO" }
                    ],
                    rows
                  },
                  {},
                  {
                    cell: ({ row, cell }) => {
                      return `${cell.key === "action" ? `${cell.value === "actualizar" ? `<span class="px-2 w-24 justify-center inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">${escape(cell.value.toUpperCase())}</span>` : `${cell.value === "eliminar" ? `<span class="px-2 w-24 justify-center inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">${escape(cell.value.toUpperCase())}</span>` : `${cell.value === "crear" ? `<span class="px-2 w-24 justify-center inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">${escape(cell.value.toUpperCase())}</span>` : ``}`}`}` : `${escape(cell.value)}`} `;
                    },
                    "cell-header": ({ header }) => {
                      return `<div class="flex items-center"><span>${escape(header.value)}</span></div> `;
                    },
                    "expanded-row": ({ row }) => {
                      return `${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                            default: () => {
                              return `${row.action !== "crear" && row.JSON2 ? `${validate_component(Column, "Column").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Tile, "Tile").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<p data-svelte-h="svelte-pfg2b0">VALORES PREVIOS</p> <ul>${each(Object.keys(row.JSON2), (key) => {
                                        return `${key !== "created" && key !== "updated" && key !== "collectionId" && key !== "collectionName" && key !== "id" && row.JSON2[key] !== "" ? `<li class="justify-between flex border-b-2 border-black"><strong>${escape(key.toUpperCase())}:</strong><i>${escape(row.JSON2[key])}</i> </li>` : ``}`;
                                      })}</ul>`;
                                    }
                                  })}`;
                                }
                              })}` : ``} ${validate_component(Column, "Column").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Tile, "Tile").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `<ul><p data-svelte-h="svelte-kbwj9k">VALORES ACTUALIZADOS</p> ${each(Object.keys(row.JSON), (key) => {
                                        return `${key !== "created" && key !== "updated" && key !== "collectionId" && key !== "collectionName" && key !== "id" && row.JSON[key] !== "" ? `<li class="justify-between flex border-b-2 border-black"><strong>${escape(key.toUpperCase())}:</strong><i>${escape(row.JSON[key])}</i> </li>` : ``}`;
                                      })}</ul>`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })} `;
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
                              })}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  }
                )} <div class="fixed bottom-0 w-2/3">${validate_component(Pagination, "Pagination").$$render(
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
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
