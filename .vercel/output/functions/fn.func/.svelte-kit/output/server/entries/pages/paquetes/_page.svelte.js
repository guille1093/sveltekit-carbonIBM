import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, f as escape, g as createEventDispatcher, h as add_classes, i as add_attribute, v as validate_component, o as each, k as compute_slots } from "../../../chunks/ssr.js";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import { A as Add } from "../../../chunks/Add.js";
import "devalue";
import { B as Bus } from "../../../chunks/Bus.js";
import { C as ComposedModal, M as ModalHeader, a as ModalBody } from "../../../chunks/ModalBody.js";
import { I as InlineLoading, M as ModalFooter } from "../../../chunks/InlineLoading.js";
import { F as FormGroup } from "../../../chunks/FormGroup.js";
import { T as TextInput } from "../../../chunks/TextInput.js";
import { N as NumberInput } from "../../../chunks/NumberInput.js";
import { D as DatePicker, a as DatePickerInput } from "../../../chunks/DatePickerInput.js";
import { S as Select, a as SelectItem } from "../../../chunks/SelectItem.js";
import { T as TextArea } from "../../../chunks/TextArea.js";
import { B as Button } from "../../../chunks/Button.js";
import { G as Grid, R as Row, C as Column } from "../../../chunks/Column.js";
import { D as DataTable, T as Toolbar, a as ToolbarContent, b as ToolbarSearch, c as ToolbarMenu, P as Pagination } from "../../../chunks/Pagination.js";
import { W as WarningFilled, a as WarningAltFilled } from "../../../chunks/WarningAltFilled.js";
import { L as ListBox, a as ListBoxMenuIcon, b as ListBoxMenu, c as ListBoxMenuItem } from "../../../chunks/ListBoxMenuItem.js";
import { L as ListBoxField, a as ListBoxSelection } from "../../../chunks/ListBoxSelection.js";
const Checkmark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>`;
});
const Checkmark$1 = Checkmark;
const ComboBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let menuId;
  let comboId;
  let highlightedId;
  let filteredItems;
  let $$restProps = compute_rest_props($$props, [
    "items",
    "itemToString",
    "selectedId",
    "value",
    "direction",
    "size",
    "disabled",
    "titleText",
    "placeholder",
    "helperText",
    "invalidText",
    "invalid",
    "warn",
    "warnText",
    "light",
    "open",
    "shouldFilterItem",
    "translateWithId",
    "translateWithIdSelection",
    "id",
    "name",
    "ref",
    "listRef",
    "clear"
  ]);
  let $$slots = compute_slots(slots);
  let { items = [] } = $$props;
  let { itemToString = (item) => item.text || item.id } = $$props;
  let { selectedId = void 0 } = $$props;
  let { value = "" } = $$props;
  let { direction = "bottom" } = $$props;
  let { size = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { titleText = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { helperText = "" } = $$props;
  let { invalidText = "" } = $$props;
  let { invalid = false } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { light = false } = $$props;
  let { open = false } = $$props;
  let { shouldFilterItem = () => true } = $$props;
  let { translateWithId = void 0 } = $$props;
  let { translateWithIdSelection = void 0 } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { ref = null } = $$props;
  let { listRef = null } = $$props;
  const dispatch = createEventDispatcher();
  let selectedItem = void 0;
  let prevSelectedId = null;
  let highlightedIndex = -1;
  function clear(options = {}) {
    prevSelectedId = null;
    highlightedIndex = -1;
    highlightedId = void 0;
    selectedId = void 0;
    selectedItem = void 0;
    open = false;
    value = "";
    if (options?.focus !== false)
      ref?.focus();
  }
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.itemToString === void 0 && $$bindings.itemToString && itemToString !== void 0)
    $$bindings.itemToString(itemToString);
  if ($$props.selectedId === void 0 && $$bindings.selectedId && selectedId !== void 0)
    $$bindings.selectedId(selectedId);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.titleText === void 0 && $$bindings.titleText && titleText !== void 0)
    $$bindings.titleText(titleText);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  if ($$props.warnText === void 0 && $$bindings.warnText && warnText !== void 0)
    $$bindings.warnText(warnText);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.shouldFilterItem === void 0 && $$bindings.shouldFilterItem && shouldFilterItem !== void 0)
    $$bindings.shouldFilterItem(shouldFilterItem);
  if ($$props.translateWithId === void 0 && $$bindings.translateWithId && translateWithId !== void 0)
    $$bindings.translateWithId(translateWithId);
  if ($$props.translateWithIdSelection === void 0 && $$bindings.translateWithIdSelection && translateWithIdSelection !== void 0)
    $$bindings.translateWithIdSelection(translateWithIdSelection);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.listRef === void 0 && $$bindings.listRef && listRef !== void 0)
    $$bindings.listRef(listRef);
  if ($$props.clear === void 0 && $$bindings.clear && clear !== void 0)
    $$bindings.clear(clear);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    filteredItems = items.filter((item) => shouldFilterItem(item, value));
    {
      if (selectedId !== void 0) {
        if (prevSelectedId !== selectedId) {
          prevSelectedId = selectedId;
          if (filteredItems?.length === 1 && open) {
            selectedId = filteredItems[0].id;
            selectedItem = filteredItems[0];
            highlightedIndex = -1;
            highlightedId = void 0;
          } else {
            selectedItem = items.find((item) => item.id === selectedId);
          }
          dispatch("select", { selectedId, selectedItem });
        }
      } else {
        prevSelectedId = selectedId;
        selectedItem = void 0;
      }
    }
    ariaLabel = $$props["aria-label"] || "Choose an item";
    menuId = `menu-${id}`;
    comboId = `combo-${id}`;
    highlightedId = items[highlightedIndex] ? items[highlightedIndex].id : 0;
    $$rendered = ` <div${add_classes("bx--list-box__wrapper".trim())}>${titleText || $$slots.titleText ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (disabled ? "bx--label--disabled" : "")).trim())}>${slots.titleText ? slots.titleText({}) : ` ${escape(titleText)} `}</label>` : ``} ${validate_component(ListBox, "ListBox").$$render(
      $$result,
      {
        class: "bx--combo-box " + (direction === "top" && "bx--list-box--up") + " " + (!invalid && warn && "bx--combo-box--warning"),
        id: comboId,
        "aria-label": ariaLabel,
        disabled,
        invalid,
        invalidText,
        open,
        light,
        size,
        warn,
        warnText
      },
      {},
      {
        default: () => {
          return `${validate_component(ListBoxField, "ListBoxField").$$render(
            $$result,
            {
              role: "button",
              "aria-expanded": open,
              id,
              disabled,
              translateWithId
            },
            {},
            {
              default: () => {
                return `<input${spread(
                  [
                    { tabindex: "0" },
                    { autocomplete: "off" },
                    { "aria-autocomplete": "list" },
                    {
                      "aria-expanded": escape_attribute_value(open)
                    },
                    {
                      "aria-activedescendant": escape_attribute_value(highlightedId)
                    },
                    {
                      "aria-labelledby": escape_attribute_value(comboId)
                    },
                    {
                      "aria-disabled": escape_attribute_value(disabled)
                    },
                    {
                      "aria-controls": escape_attribute_value(open ? menuId : void 0)
                    },
                    {
                      "aria-owns": escape_attribute_value(open ? menuId : void 0)
                    },
                    { disabled: disabled || null },
                    {
                      placeholder: escape_attribute_value(placeholder)
                    },
                    { id: escape_attribute_value(id) },
                    { name: escape_attribute_value(name) },
                    escape_object($$restProps)
                  ],
                  {
                    classes: "bx--text-input " + (light ? "bx--text-input--light" : "") + " " + (value === "" ? "bx--text-input--empty" : "")
                  }
                )}${add_attribute("this", ref, 0)}${add_attribute("value", value, 0)}> ${invalid ? `${validate_component(WarningFilled, "WarningFilled").$$render($$result, { class: "bx--list-box__invalid-icon" }, {}, {})}` : ``} ${!invalid && warn ? `${validate_component(WarningAltFilled, "WarningAltFilled").$$render(
                  $$result,
                  {
                    class: "bx--list-box__invalid-icon bx--list-box__invalid-icon--warning"
                  },
                  {},
                  {}
                )}` : ``} ${value ? `${validate_component(ListBoxSelection, "ListBoxSelection").$$render(
                  $$result,
                  {
                    translateWithId: translateWithIdSelection,
                    disabled,
                    open
                  },
                  {},
                  {}
                )}` : ``} ${validate_component(ListBoxMenuIcon, "ListBoxMenuIcon").$$render($$result, { translateWithId, open }, {}, {})}`;
              }
            }
          )} ${open ? `${validate_component(ListBoxMenu, "ListBoxMenu").$$render(
            $$result,
            {
              "aria-label": ariaLabel,
              id,
              ref: listRef
            },
            {
              ref: ($$value) => {
                listRef = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${each(filteredItems, (item, i) => {
                  return `${validate_component(ListBoxMenuItem, "ListBoxMenuItem").$$render(
                    $$result,
                    {
                      id: item.id,
                      active: selectedId === item.id,
                      highlighted: highlightedIndex === i,
                      disabled: item.disabled
                    },
                    {},
                    {
                      default: () => {
                        return `${slots.default ? slots.default({ item, index: i }) : ` ${escape(itemToString(item))} `} ${selectedItem && selectedItem.id === item.id ? `${validate_component(Checkmark$1, "Checkmark").$$render(
                          $$result,
                          {
                            class: "bx--list-box__menu-item__selected-icon"
                          },
                          {},
                          {}
                        )}` : ``} `;
                      }
                    }
                  )}`;
                })}`;
              }
            }
          )}` : ``}`;
        }
      }
    )} ${!invalid && helperText && !warn ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const ComboBox$1 = ComboBox;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isValidNombre;
  let validartionMessageNombre;
  let isFormValid;
  let creating;
  let rows;
  let { data } = $$props;
  let { form } = $$props;
  let nombre = "";
  let precio = 1;
  let cant_dias = 1;
  let cant_noches = 1;
  let createForm;
  let open = false;
  let pageSize = 10;
  let page = 1;
  let filteredRowIds = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    isValidNombre = false;
    validartionMessageNombre = "";
    isFormValid = isValidNombre ? true : false;
    creating = false;
    rows = data.paquetes;
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
          return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { label: "", title: "Registrar paquete" }, {}, {})} ${validate_component(ModalBody, "ModalBody").$$render($$result, { hasForm: true, hasScrollingContent: true }, {}, {
            default: () => {
              return `${creating ? `<div>${validate_component(InlineLoading, "InlineLoading").$$render($$result, { description: "Guardando paquete..." }, {}, {})}</div>` : `${`<form id="modalForm" enctype="multipart/form-data" method="post" action="?/create"${add_attribute("this", createForm, 0)}><div class="flex"><div class="w-[50%] flex-grow p-4">${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Destino" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      required: true,
                      id: "nombre",
                      name: "nombre",
                      invalid: !isValidNombre,
                      invalidText: validartionMessageNombre,
                      labelText: "",
                      placeholder: "Ingrese el destino",
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
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Precio" }, {}, {
                default: () => {
                  return `${validate_component(NumberInput, "NumberInput").$$render(
                    $$result,
                    {
                      id: "precio",
                      min: 1,
                      name: "precio",
                      invalid: precio < 0,
                      invalidText: "El precio debe ser mayor a 0",
                      placeholder: "Ingrese el precio",
                      value: precio
                    },
                    {
                      value: ($$value) => {
                        precio = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Cantidad de días" }, {}, {
                default: () => {
                  return `${validate_component(NumberInput, "NumberInput").$$render(
                    $$result,
                    {
                      id: "cant_dias",
                      min: 1,
                      name: "cant_dias",
                      placeholder: "Ingrese la cantidad de días",
                      invalidText: "La cantidad de días debe ser mayor a 0",
                      value: cant_dias
                    },
                    {
                      value: ($$value) => {
                        cant_dias = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Cantidad de noches" }, {}, {
                default: () => {
                  return `${validate_component(NumberInput, "NumberInput").$$render(
                    $$result,
                    {
                      id: "cant_noches",
                      min: 1,
                      name: "cant_noches",
                      placeholder: "Ingrese la cantidad de noches",
                      invalidText: "La cantidad de noches debe ser mayor a 0",
                      value: cant_noches
                    },
                    {
                      value: ($$value) => {
                        cant_noches = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })}</div> <div class="w-[50%] flex-grow p-4"> ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Fechas salida y retorno" }, {}, {
                default: () => {
                  return `${validate_component(DatePicker, "DatePicker").$$render(
                    $$result,
                    {
                      datePickerType: "range",
                      dateFormat: "d/m/Y",
                      locale: Spanish,
                      value: (/* @__PURE__ */ new Date()).toISOString()
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(DatePickerInput, "DatePickerInput").$$render(
                          $$result,
                          {
                            placeholder: "dd/mm/aaa",
                            name: "fechasalida"
                          },
                          {},
                          {}
                        )} ${validate_component(DatePickerInput, "DatePickerInput").$$render(
                          $$result,
                          {
                            placeholder: "dd/mm/aaa",
                            name: "fecharetorno"
                          },
                          {},
                          {}
                        )}`;
                      }
                    }
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Pais de destino" }, {}, {
                default: () => {
                  return `${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      id: "select-1",
                      hideLabel: true,
                      name: "pais_destino",
                      selected: "ARGENTINA"
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
                            text: "Seleccione un país"
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
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Regimen" }, {}, {
                default: () => {
                  return `${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      id: "select-1",
                      hideLabel: true,
                      name: "regimen",
                      selected: "PENSION COMPLETA"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(SelectItem, "SelectItem").$$render(
                          $$result,
                          {
                            disabled: true,
                            hidden: true,
                            value: "PENSION COMPLETA",
                            text: "Seleccione un regimen"
                          },
                          {},
                          {}
                        )} ${validate_component(SelectItem, "SelectItem").$$render(
                          $$result,
                          {
                            value: "PENSION COMPLETA",
                            text: "PENSION COMPLETA"
                          },
                          {},
                          {}
                        )} ${validate_component(SelectItem, "SelectItem").$$render(
                          $$result,
                          {
                            value: "MEDIA PENSION",
                            text: "MEDIA PENSION"
                          },
                          {},
                          {}
                        )} ${validate_component(SelectItem, "SelectItem").$$render($$result, { value: "DESAYUNO", text: "DESAYUNO" }, {}, {})}`;
                      }
                    }
                  )}`;
                }
              })} ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Estado" }, {}, {
                default: () => {
                  return `${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      id: "select-1",
                      hideLabel: true,
                      name: "estado",
                      selected: "DISPONIBLE"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(SelectItem, "SelectItem").$$render(
                          $$result,
                          {
                            disabled: true,
                            hidden: true,
                            value: "DISPONIBLE",
                            text: "Seleccione un estado"
                          },
                          {},
                          {}
                        )} ${validate_component(SelectItem, "SelectItem").$$render(
                          $$result,
                          {
                            value: "NO DISPONIBLE",
                            text: "NO DISPONIBLE"
                          },
                          {},
                          {}
                        )} ${validate_component(SelectItem, "SelectItem").$$render($$result, { value: "DISPONIBLE", text: "DISPONIBLE" }, {}, {})}`;
                      }
                    }
                  )}`;
                }
              })}</div></div>   ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Hotel" }, {}, {
                default: () => {
                  return `${validate_component(TextInput, "TextInput").$$render(
                    $$result,
                    {
                      id: "hotel",
                      name: "hotel",
                      placeholder: "Ingrese el hotel"
                    },
                    {},
                    {}
                  )}`;
                }
              })} ${validate_component(TextArea, "TextArea").$$render(
                $$result,
                {
                  class: "p-4",
                  name: "observaciones",
                  labelText: "Observaciones",
                  placeholder: "Puede ingresar observaciones si lo desea...",
                  maxCount: 300
                },
                {},
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
                return `<h1 data-svelte-h="svelte-4o7pls">Paquetes</h1> <p data-svelte-h="svelte-ld85av">Aqui puede ver, buscar y filtrar todos los paquetes registrados en el sistema.</p>`;
              }
            })} ${validate_component(Column, "Column").$$render($$result, { class: "flex justify-end" }, {}, {
              default: () => {
                return `${validate_component(Bus, "Bus").$$render($$result, {}, {}, {})}`;
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
                      { key: "nombre", value: "Destino" },
                      { key: "precio", value: "Precio" },
                      { key: "fechasalida", value: "Salida" },
                      { key: "fecharetorno", value: "Llegada" },
                      { key: "cant_dias", value: "Dias" },
                      { key: "cant_noches", value: "Noches" },
                      { key: "regimen", value: "Regimen" },
                      { key: "created", value: "Creado" },
                      { key: "estado", value: "Estado" }
                    ],
                    rows
                  },
                  {},
                  {
                    cell: ({ row, cell }) => {
                      return `${cell.key === "fechasalida" ? `${escape(new Date(cell.value).toLocaleDateString("es-ES", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                      }))}` : `${cell.key === "fecharetorno" ? `${escape(new Date(cell.value).toLocaleDateString("es-ES", {
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
                      }))}` : `${cell.key === "precio" ? `<a class="text-sm text-gray-300" href="${"/paquetes/" + escape(row.id, true)}">$ ${escape(Intl.NumberFormat("es-AR").format(cell.value))}</a>` : `${cell.key === "nombre" ? `<a class="text-sm text-gray-300" href="${"/paquetes/" + escape(row.id, true)}">${escape(cell.value)}</a>` : `${cell.key === "estado" ? `${cell.value === "activo" ? `<div class="flex justify-end"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">${escape(cell.value)}</span></div>` : `${cell.value === "NO DISPONIBLE" ? `<div class="flex justify-end"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">${escape(cell.value)}</span></div>` : `${cell.value === "DISPONIBLE" ? `<div class="flex justify-end"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">${escape(cell.value)}</span></div>` : `${cell.value === "finalizado" ? `<div class="flex justify-end"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">${escape(cell.value)}</span></div>` : `${escape(cell.value)}`}`}`}`}` : `${escape(cell.value)}`}`}`}`}`}`}`} `;
                    },
                    "cell-header": ({ header }) => {
                      return ` ${header.key === "precio" ? `<div class="flex items-center"><i class="bx bx-dollar-circle text-xl mr-2 text-blue-600"></i> <span class="mr-2">${escape(header.value)}</span> <span class="text-xs" data-svelte-h="svelte-102fxwq">ARS</span></div>` : `${header.key === "fechasalida" ? `<div class="flex items-center"><i class="bx bx-calendar text-xl mr-2 text-blue-600"></i> <span class="mr-2">${escape(header.value)}</span></div>` : `${header.key === "fecharetorno" ? `<div class="flex items-center"><i class="bx bx-calendar text-xl mr-2 text-blue-600"></i> <span class="mr-2">${escape(header.value)}</span></div>` : `${header.key === "created" ? `<div class="flex items-center"><i class="bx bx-calendar text-xl mr-2 text-blue-600"></i> <span class="mr-2">${escape(header.value)}</span></div>` : `${header.key === "updated" ? `<div class="flex items-center"><i class="bx bx-calendar text-xl mr-2 text-blue-600"></i> <span class="mr-2">${escape(header.value)}</span></div>` : `${header.key === "estado" ? `<div class="flex items-center"><i class="bx bx-check-circle text-xl mr-2 text-blue-600"></i> <span class="mr-2">${escape(header.value)}</span></div>` : `${header.key === "nombre" ? `<div class="flex items-center"><i class="bx bx-map text-xl mr-2 text-blue-600"></i> <span class="mr-2">${escape(header.value)}</span></div>` : `${header.key === "cant_dias" ? `<div class="flex items-center"><i class="bx bx-sun text-xl mr-2 text-blue-600"></i> <span class="mr-2">${escape(header.value)}</span></div>` : `${header.key === "cant_noches" ? `<div class="flex items-center"><i class="bx bx-moon text-xl mr-2 text-blue-600"></i> <span class="mr-2">${escape(header.value)}</span></div>` : `${escape(header.value)}`}`}`}`}`}`}`}`}`} `;
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
                                  )} ${validate_component(ComboBox$1, "ComboBox").$$render(
                                    $$result,
                                    {
                                      placeholder: "Ver",
                                      selectedId: "1",
                                      items: [
                                        { id: "0", text: "Disponibles" },
                                        { id: "1", text: "Todos" }
                                      ]
                                    },
                                    {},
                                    {}
                                  )}`;
                                }
                              })} ${validate_component(Button, "Button").$$render($$result, { icon: Add }, {}, {
                                default: () => {
                                  return `Registrar paquete`;
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
