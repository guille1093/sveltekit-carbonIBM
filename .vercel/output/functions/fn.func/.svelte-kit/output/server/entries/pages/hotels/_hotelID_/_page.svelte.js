import { c as create_ssr_component, v as validate_component, f as escape, i as add_attribute } from "../../../../chunks/ssr.js";
import { E as Edit, B as ButtonSet } from "../../../../chunks/Edit.js";
import { S as Save } from "../../../../chunks/Save.js";
import { T as TrashCan } from "../../../../chunks/TrashCan.js";
import "devalue";
import { T as Tile } from "../../../../chunks/Tile.js";
import { B as Button } from "../../../../chunks/Button.js";
import { S as StructuredList, a as StructuredListBody, b as StructuredListRow, c as StructuredListCell } from "../../../../chunks/StructuredListRow.js";
import { M as Modal } from "../../../../chunks/Modal.js";
import { C as ComposedModal, M as ModalHeader, a as ModalBody } from "../../../../chunks/ModalBody.js";
import { I as InlineLoading, M as ModalFooter } from "../../../../chunks/InlineLoading.js";
import { F as FormGroup } from "../../../../chunks/FormGroup.js";
import { T as TextInput } from "../../../../chunks/TextInput.js";
import { T as TextArea } from "../../../../chunks/TextArea.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let creating;
  let { data } = $$props;
  let nombre = data.hotel.nombre;
  let email = data.hotel.email;
  let telefono = data.hotel.telefono;
  let observaciones = data.hotel.observaciones;
  let direccion = data.hotel.direccion;
  let form;
  let deleteForm;
  let open = false;
  let open2 = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    creating = false;
    $$rendered = `<main>${validate_component(Tile, "Tile").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="flex flex-row justify-between mb-4"><h1>Hotel: ${escape(data.hotel.nombre)}</h1> ${validate_component(ButtonSet, "ButtonSet").$$render($$result, { class: "mr-36" }, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render($$result, { icon: TrashCan, kind: "danger" }, {}, {
              default: () => {
                return `Eliminar`;
              }
            })} ${validate_component(Button, "Button").$$render($$result, { icon: Edit }, {}, {
              default: () => {
                return `Editar`;
              }
            })}`;
          }
        })}</div> ${validate_component(StructuredList, "StructuredList").$$render($$result, { condensed: true }, {}, {
          default: () => {
            return `${validate_component(StructuredListBody, "StructuredListBody").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                      default: () => {
                        return `<strong data-svelte-h="svelte-1cokq0l">Nombre:</strong>`;
                      }
                    })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(data.hotel.nombre)}`;
                      }
                    })}`;
                  }
                })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                      default: () => {
                        return `<strong data-svelte-h="svelte-12i54no">Direccion:</strong>`;
                      }
                    })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(data.hotel.direccion)}`;
                      }
                    })}`;
                  }
                })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                      default: () => {
                        return `<strong data-svelte-h="svelte-153gj30">Teléfono:</strong>`;
                      }
                    })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(data.hotel.telefono)}`;
                      }
                    })}`;
                  }
                })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                      default: () => {
                        return `<strong data-svelte-h="svelte-a9u3pq">Email:</strong>`;
                      }
                    })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(data.hotel.email)}`;
                      }
                    })}`;
                  }
                })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                      default: () => {
                        return `<strong data-svelte-h="svelte-3tjrm1">Observaciones:</strong>`;
                      }
                    })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(data.hotel.observaciones)}`;
                      }
                    })}`;
                  }
                })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                      default: () => {
                        return `<strong data-svelte-h="svelte-1pjb6zd">Fecha creación:</strong>`;
                      }
                    })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(new Date(data.hotel.created).toLocaleDateString("es-AR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        }))}`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    })}</main> <form id="deleteForm" action="?/delete" method="post" class="hidden"${add_attribute("this", deleteForm, 0)}></form> ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        danger: true,
        modalHeading: "Eliminar hotel",
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
          return `<h5>¿Está seguro que desea eliminar el hotel ${escape(data.hotel.nombre)}?</h5> <p class="mt-4" data-svelte-h="svelte-m94gi1">Esta es una accion permanente y los registros asociados al hotel tambien seran eliminados</p>`;
        }
      }
    )} ${validate_component(ComposedModal, "ComposedModal").$$render(
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
          return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { label: "", title: "Editar hotel" }, {}, {})} ${validate_component(ModalBody, "ModalBody").$$render($$result, { hasForm: true, hasScrollingContent: true }, {}, {
            default: () => {
              return `${creating ? `<div>${validate_component(InlineLoading, "InlineLoading").$$render($$result, { description: "Guardando hotel..." }, {}, {})}</div>` : `${`<form id="modalForm" method="post" action="?/update"${add_attribute("this", form, 0)}><div class="flex"><div class="w-[50%] flex-grow p-4"> ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Nombre" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      id: "nombre",
                      name: "nombre",
                      required: true,
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
                      labelText: "",
                      placeholder: "Ingrese el teléfono",
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
              })}</div> <div class="w-[50%] flex-grow p-4"> ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Email" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      id: "email",
                      name: "email",
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
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Dirección" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      id: "direccion",
                      name: "direccion",
                      labelText: "",
                      placeholder: "Ingrese la dirección",
                      value: direccion
                    },
                    {
                      value: ($$value) => {
                        direccion = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })}</div></div> ${validate_component(TextArea, "TextArea").$$render(
                $$result,
                {
                  id: "observaciones",
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
                  icon: Save,
                  size: "lg",
                  type: "submit",
                  disabled: creating
                },
                {},
                {
                  default: () => {
                    return `Guardar`;
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
