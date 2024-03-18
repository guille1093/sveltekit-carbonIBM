import { c as create_ssr_component, v as validate_component, f as escape, i as add_attribute, o as each } from "../../../../chunks/ssr.js";
import { E as Edit, B as ButtonSet } from "../../../../chunks/Edit.js";
import { S as Save } from "../../../../chunks/Save.js";
import { T as TrashCan } from "../../../../chunks/TrashCan.js";
import "devalue";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import { T as Tile } from "../../../../chunks/Tile.js";
import { B as Button } from "../../../../chunks/Button.js";
import { S as StructuredList, a as StructuredListBody, b as StructuredListRow, c as StructuredListCell } from "../../../../chunks/StructuredListRow.js";
import { M as Modal } from "../../../../chunks/Modal.js";
import { C as ComposedModal, M as ModalHeader, a as ModalBody } from "../../../../chunks/ModalBody.js";
import { I as InlineLoading, M as ModalFooter } from "../../../../chunks/InlineLoading.js";
import { F as FormGroup } from "../../../../chunks/FormGroup.js";
import { N as NumberInput } from "../../../../chunks/NumberInput.js";
import { T as TextInput } from "../../../../chunks/TextInput.js";
import { D as DatePicker, a as DatePickerInput } from "../../../../chunks/DatePickerInput.js";
import { S as Select, a as SelectItem } from "../../../../chunks/SelectItem.js";
import { T as TextArea } from "../../../../chunks/TextArea.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isValidNombre;
  let isValidApellido;
  let isValidDNI;
  let isValidEmail;
  let isValidTelefono;
  let isValidFechaNacimiento;
  let validartionMessageNombre;
  let validartionMessageApellido;
  let validartionMessageDNI;
  let validartionMessageEmail;
  let validartionMessageTelefono;
  let isFormValid;
  let creating;
  let { data } = $$props;
  let nombre = data.cliente.nombre;
  let apellido = data.cliente.apellido;
  let email = data.cliente.email;
  let telefono = data.cliente.telefono;
  let dni = data.cliente.dni;
  let fechanacimiento = data.cliente.fechanacimiento;
  let nacionalidad = data.cliente.nacionalidad;
  let ocupacion = data.cliente.ocupacion;
  let sexo = data.cliente.sexo;
  let observaciones = data.cliente.observaciones;
  let lugarascenso = data.cliente.lugarascenso;
  let nombremadre = data.cliente.nombremadre;
  let apellidomadre = data.cliente.apellidomadre;
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
    isValidNombre = true;
    isValidApellido = true;
    isValidDNI = true;
    isValidEmail = true;
    isValidTelefono = true;
    isValidFechaNacimiento = true;
    validartionMessageNombre = "";
    validartionMessageApellido = "";
    validartionMessageDNI = "";
    validartionMessageEmail = "";
    validartionMessageTelefono = "";
    isFormValid = isValidApellido && isValidNombre && isValidDNI && nombre.length > 0 && apellido.length > 0 ? true : false;
    creating = false;
    $$rendered = `<main>${validate_component(Tile, "Tile").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="flex flex-row justify-between mb-4"><h1>Cliente: ${escape(data.cliente.nombre)} ${escape(data.cliente.apellido)}</h1> ${validate_component(ButtonSet, "ButtonSet").$$render($$result, { class: "mr-36" }, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render(
              $$result,
              {
                disabled: true,
                icon: TrashCan,
                kind: "danger"
              },
              {},
              {
                default: () => {
                  return `Eliminar`;
                }
              }
            )} ${validate_component(Button, "Button").$$render($$result, { icon: Edit }, {}, {
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
                        return `${escape(data.cliente.nombre)}`;
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
                        return `${escape(data.cliente.apellido)}`;
                      }
                    })}`;
                  }
                })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                      default: () => {
                        return `<strong data-svelte-h="svelte-adw13t">DNI:</strong>`;
                      }
                    })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(data.cliente.dni)}`;
                      }
                    })}`;
                  }
                })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                      default: () => {
                        return `<strong data-svelte-h="svelte-1gq4xx5">Sexo:</strong>`;
                      }
                    })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(data.cliente.sexo)}`;
                      }
                    })}`;
                  }
                })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                      default: () => {
                        return `<strong data-svelte-h="svelte-1rgfrd6">Fecha nacimiento:</strong>`;
                      }
                    })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(new Date(data.cliente.fechanacimiento).toLocaleDateString("es-AR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        }))}`;
                      }
                    })}`;
                  }
                })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                      default: () => {
                        return `<strong data-svelte-h="svelte-gjwf61">Domicilio:</strong>`;
                      }
                    })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(data.cliente.domicilio)}`;
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
                        return `${escape(data.cliente.telefono)}`;
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
                        return `${escape(data.cliente.email)}`;
                      }
                    })}`;
                  }
                })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                      default: () => {
                        return `<strong data-svelte-h="svelte-1fazx4v">Ocupación:</strong>`;
                      }
                    })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(data.cliente.ocupacion)}`;
                      }
                    })}`;
                  }
                })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                      default: () => {
                        return `<strong data-svelte-h="svelte-f75w8l">Nacionalidad:</strong>`;
                      }
                    })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(data.cliente.nacionalidad)}`;
                      }
                    })}`;
                  }
                })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                      default: () => {
                        return `<strong data-svelte-h="svelte-1sy8t0f">Lugar ascenso:</strong>`;
                      }
                    })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(data.cliente.lugarascenso)}`;
                      }
                    })}`;
                  }
                })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                      default: () => {
                        return `<strong data-svelte-h="svelte-19xpr8y">Nombre madre:</strong>`;
                      }
                    })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(data.cliente.nombremadre)}`;
                      }
                    })}`;
                  }
                })} ${validate_component(StructuredListRow, "StructuredListRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, { noWrap: true }, {}, {
                      default: () => {
                        return `<strong data-svelte-h="svelte-1tfgkx9">Apellido madre:</strong>`;
                      }
                    })} ${validate_component(StructuredListCell, "StructuredListCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(data.cliente.apellidomadre)}`;
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
                        return `${escape(data.cliente.observaciones)}`;
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
                        return `${escape(new Date(data.cliente.created).toLocaleDateString("es-AR", {
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
        modalHeading: "Eliminar cliente",
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
          return `<h5>¿Está seguro que desea eliminar el cliente ${escape(data.cliente.nombre)} ${escape(data.cliente.apellido)}?</h5> <p class="mt-4" data-svelte-h="svelte-13eutc1">Esta es una accion permanente y los registros asociados al cliente tambien seran eliminados</p>`;
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
          return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { label: "", title: "Editar cliente" }, {}, {})} ${validate_component(ModalBody, "ModalBody").$$render($$result, { hasForm: true, hasScrollingContent: true }, {}, {
            default: () => {
              return `${creating ? `<div>${validate_component(InlineLoading, "InlineLoading").$$render($$result, { description: "Guardando cliente..." }, {}, {})}</div>` : `${`<form id="modalForm" method="post" action="?/update"${add_attribute("this", form, 0)}><div class="flex"><div class="w-[50%] flex-grow p-4"> ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "DNI" }, {}, {
                default: () => {
                  return `${validate_component(NumberInput, "NumberInput").$$render(
                    $$result,
                    {
                      id: "dni",
                      name: "dni",
                      invalid: !isValidDNI,
                      invalidText: validartionMessageDNI,
                      placeholder: "Ingrese el DNI",
                      readonly: true,
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
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Lugar Ascenso" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      name: "lugarascenso",
                      placeholder: "Ingrese el lugar de ascenso",
                      value: lugarascenso
                    },
                    {
                      value: ($$value) => {
                        lugarascenso = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Ocupacion" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      name: "ocupacion",
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
                      placeholder: "Ingrese el nombre de la madre",
                      value: nombremadre
                    },
                    {
                      value: ($$value) => {
                        nombremadre = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })}</div> <div class="w-[50%] flex-grow p-4"> ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Fecha Nacimiento" }, {}, {
                default: () => {
                  return `${validate_component(DatePicker, "DatePicker").$$render(
                    $$result,
                    {
                      value: fechanacimiento,
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
                            value: fechanacimiento,
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
                      hideLabel: true,
                      selected: nacionalidad,
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
                        )} ${each(data.nacionalidades, (nacionalidad2) => {
                          return `${validate_component(SelectItem, "SelectItem").$$render(
                            $$result,
                            {
                              value: nacionalidad2.destpais,
                              text: nacionalidad2.destpais + " " + nacionalidad2.codpais
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
                      selected: sexo,
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
                      placeholder: "Ingrese el apellido de la madre",
                      value: apellidomadre
                    },
                    {
                      value: ($$value) => {
                        apellidomadre = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })}</div></div> ${validate_component(TextArea, "TextArea").$$render(
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
                  icon: Save,
                  size: "lg",
                  type: "submit",
                  disabled: !isFormValid || creating
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
