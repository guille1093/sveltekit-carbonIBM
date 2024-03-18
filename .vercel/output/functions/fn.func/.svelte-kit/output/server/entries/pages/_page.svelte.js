import { c as create_ssr_component, a as compute_rest_props, b as spread, d as escape_object, h as add_classes, v as validate_component, f as escape, i as add_attribute, o as each } from "../../chunks/ssr.js";
import { g as getImageURL } from "../../chunks/utils.js";
import { C as ComposedModal, M as ModalHeader, a as ModalBody } from "../../chunks/ModalBody.js";
import { S as StructuredList, a as StructuredListBody, b as StructuredListRow, c as StructuredListCell } from "../../chunks/StructuredListRow.js";
import { B as Button } from "../../chunks/Button.js";
import { C as ClickableTile } from "../../chunks/ClickableTile.js";
import { B as Bus } from "../../chunks/Bus.js";
import { G as Grid, R as Row, C as Column } from "../../chunks/Column.js";
const AspectRatio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ratio"]);
  let { ratio = "2x1" } = $$props;
  if ($$props.ratio === void 0 && $$bindings.ratio && ratio !== void 0)
    $$bindings.ratio(ratio);
  return `<div${spread([escape_object($$restProps)], {
    classes: "bx--aspect-ratio " + (ratio === "2x1" ? "bx--aspect-ratio--2x1" : "") + " " + (ratio === "2x3" ? "bx--aspect-ratio--2x3" : "") + " " + (ratio === "16x9" ? "bx--aspect-ratio--16x9" : "") + " " + (ratio === "4x3" ? "bx--aspect-ratio--4x3" : "") + " " + (ratio === "1x1" ? "bx--aspect-ratio--1x1" : "") + " " + (ratio === "3x4" ? "bx--aspect-ratio--3x4" : "") + " " + (ratio === "3x2" ? "bx--aspect-ratio--3x2" : "") + " " + (ratio === "9x16" ? "bx--aspect-ratio--9x16" : "") + " " + (ratio === "1x2" ? "bx--aspect-ratio--1x2" : "")
  })}><div${add_classes("bx--aspect-ratio--object".trim())}>${slots.default ? slots.default({}) : ``}</div></div>`;
});
const AspectRatio$1 = AspectRatio;
const PackageCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  let pesoARLocale = Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0
  });
  const precio = pesoARLocale.format(project.precio);
  let fechaSalida = new Date(project.fechasalida).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC"
  });
  let fechaRetorno = new Date(project.fecharetorno).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC"
  });
  const items = [
    {
      name: "Salida",
      icon: "bx-calendar-event",
      value: fechaSalida
    },
    {
      name: "Llegada",
      icon: "bx-calendar-check",
      value: fechaRetorno
    }
  ];
  let open = false;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
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
          return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, {}, {}, {
            default: () => {
              return `<h3 class="text-2xl font-semibold">${escape(project.nombre)}</h3> <p>${escape(precio)}</p>`;
            }
          })} ${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(StructuredList, "StructuredList").$$render($$result, { condensed: true }, {}, {
                default: () => {
                  return `${validate_component(StructuredListBody, "StructuredListBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                            default: () => {
                              return `<strong data-svelte-h="svelte-o3tcrj">Nombre del paquete:</strong>`;
                            }
                          })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                            default: () => {
                              return `${escape(project.nombre)}`;
                            }
                          })}`;
                        }
                      })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                            default: () => {
                              return `<strong data-svelte-h="svelte-1xq78gj">Pais destino:</strong>`;
                            }
                          })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                            default: () => {
                              return `${escape(project.pais_destino)}`;
                            }
                          })}`;
                        }
                      })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                            default: () => {
                              return `<strong data-svelte-h="svelte-udquob">Regimen:</strong>`;
                            }
                          })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                            default: () => {
                              return `${escape(project.regimen)}`;
                            }
                          })}`;
                        }
                      })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                            default: () => {
                              return `<strong data-svelte-h="svelte-9tkbrs">Salida:</strong>`;
                            }
                          })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                            default: () => {
                              return `${escape(fechaSalida)}`;
                            }
                          })}`;
                        }
                      })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                            default: () => {
                              return `<strong data-svelte-h="svelte-zk2er2">Llegada:</strong>`;
                            }
                          })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                            default: () => {
                              return `${escape(fechaRetorno)}`;
                            }
                          })}`;
                        }
                      })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                            default: () => {
                              return `<strong data-svelte-h="svelte-tdcc2n">Dias:</strong>`;
                            }
                          })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                            default: () => {
                              return `${escape(project.cant_dias)}`;
                            }
                          })}`;
                        }
                      })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                            default: () => {
                              return `<strong data-svelte-h="svelte-s3gu1o">Noches:</strong>`;
                            }
                          })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                            default: () => {
                              return `${escape(project.cant_noches)}`;
                            }
                          })}`;
                        }
                      })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                            default: () => {
                              return `<strong data-svelte-h="svelte-1w0lq95">Descripción:</strong>`;
                            }
                          })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                            default: () => {
                              return `${escape(project.descripcion)}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })} <div class="flex justify-end">${validate_component(Button, "Button").$$render(
                $$result,
                {
                  kind: "primary",
                  href: "/paquetes/" + project.id
                },
                {},
                {
                  default: () => {
                    return `Ver más`;
                  }
                }
              )} ${validate_component(Button, "Button").$$render($$result, { kind: "secondary" }, {}, {
                default: () => {
                  return `Cerrar`;
                }
              })}</div>`;
            }
          })}`;
        }
      }
    )} <div class="hover:scale-125 hover:z-50 transform transition-all duration-500 ease-in-out w-[320px]">${validate_component(ClickableTile, "ClickableTile").$$render($$result, { href: "/", class: "" }, {}, {
      default: () => {
        return `${project.thumbnail ? `${validate_component(AspectRatio$1, "AspectRatio").$$render($$result, { ratio: "16x9" }, {}, {
          default: () => {
            return `<img class="h-[220px] w-[300px] object-cover"${add_attribute("src", getImageURL(project.collectionId, project.id, project.thumbnail), 0)} alt="logo">`;
          }
        })}` : ``} <div class="mt-16"><h2 class="text-md">${escape(project.nombre)}</h2> <div class="flex items-baseline mb-4"><span class=""></span> <h3>${escape(precio)}</h3></div>  <ul role="list" class="space-y-4">${each(items, (item) => {
          return `<li class="flex space-x-3 justify-between"><div> <i class="${"bx text-blue-600 " + escape(item.icon, true)}"></i>  <span>${escape(item.name)}:</span></div>  <span>${escape(item.value)}</span> </li>`;
        })}</ul></div>`;
      }
    })}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main>${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `<h1 data-svelte-h="svelte-4o7pls">Paquetes</h1> <p data-svelte-h="svelte-142sfk9">Aqui se muestran todos los paquetes disponibles para la venta</p>`;
            }
          })} ${validate_component(Column, "Column").$$render($$result, { class: "flex justify-end" }, {}, {
            default: () => {
              return `${validate_component(Bus, "Bus").$$render($$result, {}, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })} <div class="flex flex-wrap gap-4 mt-8">${each(data.projects, (paquete) => {
    return `${validate_component(PackageCard, "PackageCard").$$render($$result, { project: paquete }, {}, {})}`;
  })}</div></main>`;
});
export {
  Page as default
};
