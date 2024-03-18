import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, f as escape, g as createEventDispatcher, v as validate_component, h as add_classes, i as add_attribute } from "../../../../chunks/ssr.js";
import { E as Edit, B as ButtonSet } from "../../../../chunks/Edit.js";
import { S as Save } from "../../../../chunks/Save.js";
import "devalue";
import { T as Tile } from "../../../../chunks/Tile.js";
import { B as Button } from "../../../../chunks/Button.js";
import { S as StructuredList, a as StructuredListBody, b as StructuredListRow, c as StructuredListCell } from "../../../../chunks/StructuredListRow.js";
import { M as Modal } from "../../../../chunks/Modal.js";
import { C as ComposedModal, M as ModalHeader, a as ModalBody } from "../../../../chunks/ModalBody.js";
import { I as InlineLoading, M as ModalFooter } from "../../../../chunks/InlineLoading.js";
import { G as Grid, R as Row, C as Column } from "../../../../chunks/Column.js";
import { F as FormGroup } from "../../../../chunks/FormGroup.js";
import { T as TextInput } from "../../../../chunks/TextInput.js";
import { D as Dropdown } from "../../../../chunks/Dropdown.js";
import { T as Toggle } from "../../../../chunks/Toggle.js";
import { C as Checkbox } from "../../../../chunks/Checkbox.js";
const Copy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"></path><path d="M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"></path></svg>`;
});
const Copy$1 = Copy;
const CopyButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["feedback", "feedbackTimeout", "iconDescription", "text", "copy"]);
  let { feedback = "Copied!" } = $$props;
  let { feedbackTimeout = 2e3 } = $$props;
  let { iconDescription = "Copy to clipboard" } = $$props;
  let { text } = $$props;
  let { copy = async (text2) => {
    try {
      await navigator.clipboard.writeText(text2);
    } catch (e) {
      console.log(e);
    }
  } } = $$props;
  createEventDispatcher();
  if ($$props.feedback === void 0 && $$bindings.feedback && feedback !== void 0)
    $$bindings.feedback(feedback);
  if ($$props.feedbackTimeout === void 0 && $$bindings.feedbackTimeout && feedbackTimeout !== void 0)
    $$bindings.feedbackTimeout(feedbackTimeout);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.copy === void 0 && $$bindings.copy && copy !== void 0)
    $$bindings.copy(copy);
  return `<button${spread(
    [
      { type: "button" },
      { "aria-live": "polite" },
      {
        "aria-label": escape_attribute_value(iconDescription)
      },
      {
        title: escape_attribute_value(iconDescription)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--copy-btn bx--copy   "
    }
  )}>${validate_component(Copy$1, "Copy").$$render($$result, { class: "bx--snippet__icon" }, {}, {})} <span aria-hidden="true"${add_classes("bx--assistive-text bx--copy-btn__feedback".trim())}>${escape(feedback)}</span></button>`;
});
const CopyButton$1 = CopyButton;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let creating;
  let { data } = $$props;
  data.user.name;
  data.user.apellido;
  data.user.email;
  let form;
  let deleteForm;
  let open = false;
  let open2 = false;
  let toggled = data.user.verified;
  const dropDownItems = data.roles.map((rol) => {
    return { id: rol.id, text: rol.name };
  });
  let dropDownSelected = data.user.expand.rol.id;
  let resetPassword = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    creating = false;
    $$rendered = `<main>${validate_component(Tile, "Tile").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="flex flex-row justify-between mb-4"><h1>USUARIO: ${escape(data.user.username)}</h1> ${validate_component(CopyButton$1, "CopyButton").$$render(
          $$result,
          {
            "aria-label": "Copiar link",
            text: data.user.username
          },
          {},
          {}
        )} ${validate_component(ButtonSet, "ButtonSet").$$render($$result, { class: "mr-36" }, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render($$result, { icon: Edit }, {}, {
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
                        return `${escape(data.user.name)}`;
                      }
                    })}`;
                  }
                })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                      default: () => {
                        return `<strong data-svelte-h="svelte-1l7dmdq">Apellido:</strong>`;
                      }
                    })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(data.user.apellido)}`;
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
                        return `${escape(data.user.email)}`;
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
                        return `${escape(new Date(data.user.created).toLocaleDateString("es-AR", {
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
        modalHeading: "Eliminar user",
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
          return `<h5>¿Está seguro que desea eliminar el user ${escape(data.user.name)}?</h5> <p class="mt-4" data-svelte-h="svelte-1dlobte">Esta es una accion permanente y los registros asociados al user tambien seran eliminados</p>`;
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
          return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { label: "", title: "Editar" }, {}, {})} ${validate_component(ModalBody, "ModalBody").$$render($$result, { hasForm: true, hasScrollingContent: true }, {}, {
            default: () => {
              return `${creating ? `<div>${validate_component(InlineLoading, "InlineLoading").$$render($$result, { description: "Guardando..." }, {}, {})}</div>` : `${`<form id="modalForm" method="post" action="?/update"${add_attribute("this", form, 0)}>${validate_component(Grid, "Grid").$$render($$result, { class: "uppercase" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Column, "Column").$$render($$result, { class: "bg-neutral-900 py-2 my-2" }, {}, {
                        default: () => {
                          return `${validate_component(FormGroup, "FormGroup").$$render(
                            $$result,
                            {
                              legendText: "Datos personales (Obligatorios)"
                            },
                            {},
                            {
                              default: () => {
                                return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
                                      default: () => {
                                        return `${validate_component(TextInput, "TextInput").$$render(
                                          $$result,
                                          {
                                            required: true,
                                            id: "nombre",
                                            name: "nombre",
                                            labelText: "Nombre",
                                            placeholder: "Ingrese el nombre",
                                            value: data.user.name
                                          },
                                          {},
                                          {}
                                        )}`;
                                      }
                                    })} ${validate_component(Column, "Column").$$render($$result, {}, {}, {
                                      default: () => {
                                        return `${validate_component(TextInput, "TextInput").$$render(
                                          $$result,
                                          {
                                            required: true,
                                            id: "apellido",
                                            name: "apellido",
                                            labelText: "Apellido",
                                            placeholder: "Ingrese el apellido",
                                            value: data.user.apellido
                                          },
                                          {},
                                          {}
                                        )}`;
                                      }
                                    })}`;
                                  }
                                })} ${validate_component(Row, "Row").$$render($$result, { class: "py-2 my-2" }, {}, {
                                  default: () => {
                                    return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
                                      default: () => {
                                        return `${validate_component(TextInput, "TextInput").$$render(
                                          $$result,
                                          {
                                            required: true,
                                            id: "dni",
                                            name: "dni",
                                            labelText: "DNI",
                                            placeholder: "Ingrese el DNI",
                                            value: data.user.dni
                                          },
                                          {},
                                          {}
                                        )}`;
                                      }
                                    })}`;
                                  }
                                })}`;
                              }
                            }
                          )}`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Column, "Column").$$render($$result, { class: "bg-neutral-900 py-2 my-2" }, {}, {
                        default: () => {
                          return `${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Datos de cuenta" }, {}, {})} <input type="hidden" name="rol"${add_attribute("value", dropDownSelected, 0)}> <input type="hidden" id="verified" name="verified"${add_attribute("value", toggled, 0)}> ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Dropdown, "Dropdown").$$render(
                                    $$result,
                                    {
                                      titleText: "Permisos de usuario",
                                      name: "rol",
                                      id: "rol",
                                      selectedId: dropDownSelected,
                                      items: dropDownItems
                                    },
                                    {},
                                    {}
                                  )}`;
                                }
                              })} ${validate_component(Column, "Column").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Toggle, "Toggle").$$render(
                                    $$result,
                                    {
                                      class: "mt-0",
                                      labelText: "Estado de la cuenta",
                                      labelA: "Cuenta inactiva",
                                      labelB: "Cuenta activa",
                                      toggled
                                    },
                                    {
                                      toggled: ($$value) => {
                                        toggled = $$value;
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
                                  return `<input type="hidden" id="resetPassword" name="resetPassword"${add_attribute("value", resetPassword, 0)}> ${validate_component(Checkbox, "Checkbox").$$render($$result, { labelText: "Resetear contraseña" }, {}, {})}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Column, "Column").$$render($$result, { class: "bg-neutral-900 py-2 my-2" }, {}, {
                        default: () => {
                          return `${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Observaciones" }, {}, {
                            default: () => {
                              return `${validate_component(TextInput, "TextInput").$$render(
                                $$result,
                                {
                                  id: "observaciones",
                                  name: "observaciones",
                                  labelText: "",
                                  placeholder: "Puede ingresar observaciones"
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
