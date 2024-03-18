import { c as create_ssr_component, a as compute_rest_props, g as createEventDispatcher, s as setContext, h as add_classes, i as add_attribute, f as escape, v as validate_component, b as spread, d as escape_object, e as escape_attribute_value, o as each, k as compute_slots, m as missing_component } from "./ssr.js";
import { W as WarningFilled, a as WarningAltFilled } from "./WarningAltFilled.js";
import { C as Checkbox } from "./Checkbox.js";
import { L as ListBox, a as ListBoxMenuIcon, b as ListBoxMenu, c as ListBoxMenuItem } from "./ListBoxMenuItem.js";
import { L as ListBoxField, a as ListBoxSelection } from "./ListBoxSelection.js";
import { C as Close } from "./Close.js";
import { F as FormGroup } from "./FormGroup.js";
import { S as Search } from "./Search.js";
import { D as Dropdown } from "./Dropdown.js";
const MultiSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let menuId;
  let inline;
  let ariaLabel;
  let sortedItems;
  let checked;
  let filteredItems;
  let $$restProps = compute_rest_props($$props, [
    "items",
    "itemToString",
    "itemToInput",
    "selectedIds",
    "value",
    "size",
    "type",
    "direction",
    "selectionFeedback",
    "disabled",
    "filterable",
    "filterItem",
    "open",
    "light",
    "locale",
    "placeholder",
    "sortItem",
    "translateWithId",
    "translateWithIdSelection",
    "titleText",
    "useTitleInItem",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "helperText",
    "label",
    "hideLabel",
    "id",
    "name",
    "inputRef",
    "multiSelectRef",
    "fieldRef",
    "selectionRef",
    "highlightedId"
  ]);
  let $$slots = compute_slots(slots);
  let { items = [] } = $$props;
  let { itemToString = (item) => item.text || item.id } = $$props;
  let { itemToInput = (item) => {
  } } = $$props;
  let { selectedIds = [] } = $$props;
  let { value = "" } = $$props;
  let { size = void 0 } = $$props;
  let { type = "default" } = $$props;
  let { direction = "bottom" } = $$props;
  let { selectionFeedback = "top-after-reopen" } = $$props;
  let { disabled = false } = $$props;
  let { filterable = false } = $$props;
  let { filterItem = (item, value2) => item.text.toLowerCase().includes(value2.trim().toLowerCase()) } = $$props;
  let { open = false } = $$props;
  let { light = false } = $$props;
  let { locale = "en" } = $$props;
  let { placeholder = "" } = $$props;
  let { sortItem = (a, b) => a.text.localeCompare(b.text, locale, { numeric: true }) } = $$props;
  let { translateWithId = void 0 } = $$props;
  let { translateWithIdSelection = void 0 } = $$props;
  let { titleText = "" } = $$props;
  let { useTitleInItem = false } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { helperText = "" } = $$props;
  let { label = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { inputRef = null } = $$props;
  let { multiSelectRef = null } = $$props;
  let { fieldRef = null } = $$props;
  let { selectionRef = null } = $$props;
  let { highlightedId = null } = $$props;
  createEventDispatcher();
  let highlightedIndex = -1;
  setContext("MultiSelect", {
    declareRef: ({ key, ref }) => {
      switch (key) {
        case "field":
          fieldRef = ref;
          break;
        case "selection":
          selectionRef = ref;
          break;
      }
    }
  });
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.itemToString === void 0 && $$bindings.itemToString && itemToString !== void 0)
    $$bindings.itemToString(itemToString);
  if ($$props.itemToInput === void 0 && $$bindings.itemToInput && itemToInput !== void 0)
    $$bindings.itemToInput(itemToInput);
  if ($$props.selectedIds === void 0 && $$bindings.selectedIds && selectedIds !== void 0)
    $$bindings.selectedIds(selectedIds);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.selectionFeedback === void 0 && $$bindings.selectionFeedback && selectionFeedback !== void 0)
    $$bindings.selectionFeedback(selectionFeedback);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.filterable === void 0 && $$bindings.filterable && filterable !== void 0)
    $$bindings.filterable(filterable);
  if ($$props.filterItem === void 0 && $$bindings.filterItem && filterItem !== void 0)
    $$bindings.filterItem(filterItem);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0)
    $$bindings.locale(locale);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.sortItem === void 0 && $$bindings.sortItem && sortItem !== void 0)
    $$bindings.sortItem(sortItem);
  if ($$props.translateWithId === void 0 && $$bindings.translateWithId && translateWithId !== void 0)
    $$bindings.translateWithId(translateWithId);
  if ($$props.translateWithIdSelection === void 0 && $$bindings.translateWithIdSelection && translateWithIdSelection !== void 0)
    $$bindings.translateWithIdSelection(translateWithIdSelection);
  if ($$props.titleText === void 0 && $$bindings.titleText && titleText !== void 0)
    $$bindings.titleText(titleText);
  if ($$props.useTitleInItem === void 0 && $$bindings.useTitleInItem && useTitleInItem !== void 0)
    $$bindings.useTitleInItem(useTitleInItem);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  if ($$props.warnText === void 0 && $$bindings.warnText && warnText !== void 0)
    $$bindings.warnText(warnText);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.inputRef === void 0 && $$bindings.inputRef && inputRef !== void 0)
    $$bindings.inputRef(inputRef);
  if ($$props.multiSelectRef === void 0 && $$bindings.multiSelectRef && multiSelectRef !== void 0)
    $$bindings.multiSelectRef(multiSelectRef);
  if ($$props.fieldRef === void 0 && $$bindings.fieldRef && fieldRef !== void 0)
    $$bindings.fieldRef(fieldRef);
  if ($$props.selectionRef === void 0 && $$bindings.selectionRef && selectionRef !== void 0)
    $$bindings.selectionRef(selectionRef);
  if ($$props.highlightedId === void 0 && $$bindings.highlightedId && highlightedId !== void 0)
    $$bindings.highlightedId(highlightedId);
  menuId = `menu-${id}`;
  inline = type === "inline";
  ariaLabel = $$props["aria-label"] || "Choose an item";
  sortedItems = items.map((item) => ({
    ...item,
    checked: selectedIds.includes(item.id)
  }));
  checked = sortedItems.filter(({ checked: checked2 }) => checked2);
  sortedItems.filter(({ checked: checked2 }) => !checked2);
  filteredItems = sortedItems.filter((item) => filterItem(item, value));
  highlightedId = null;
  return ` <div${add_classes(("bx--multi-select__wrapper bx--list-box__wrapper " + (inline ? "bx--multi-select__wrapper--inline" : "") + " " + (inline ? "bx--list-box__wrapper--inline" : "") + " " + (inline && invalid ? "bx--multi-select__wrapper--inline--invalid" : "")).trim())}${add_attribute("this", multiSelectRef, 0)}>${titleText || $$slots.titleText ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (disabled ? "bx--label--disabled" : "") + " " + (hideLabel ? "bx--visually-hidden" : "")).trim())}>${slots.titleText ? slots.titleText({}) : ` ${escape(titleText)} `}</label>` : ``} ${validate_component(ListBox, "ListBox").$$render(
    $$result,
    {
      role: void 0,
      disabled,
      invalid,
      invalidText,
      open,
      light,
      size,
      warn,
      warnText,
      class: "bx--multi-select " + (direction === "top" && "bx--list-box--up") + " " + (filterable && "bx--combo-box") + "\n      " + (filterable && "bx--multi-select--filterable") + "\n      " + (invalid && "bx--multi-select--invalid") + "\n      " + (inline && "bx--multi-select--inline") + "\n      " + (checked.length > 0 && "bx--multi-select--selected")
    },
    {},
    {
      default: () => {
        return `${invalid ? `${validate_component(WarningFilled, "WarningFilled").$$render($$result, { class: "bx--list-box__invalid-icon" }, {}, {})}` : ``} ${!invalid && warn ? `${validate_component(WarningAltFilled, "WarningAltFilled").$$render(
          $$result,
          {
            class: "bx--list-box__invalid-icon bx--list-box__invalid-icon--warning"
          },
          {},
          {}
        )}` : ``} ${validate_component(ListBoxField, "ListBoxField").$$render(
          $$result,
          {
            role: "button",
            tabindex: "0",
            "aria-expanded": open,
            id,
            disabled,
            translateWithId
          },
          {},
          {
            default: () => {
              return `${checked.length > 0 ? `${validate_component(ListBoxSelection, "ListBoxSelection").$$render(
                $$result,
                {
                  selectionCount: checked.length,
                  translateWithId: translateWithIdSelection,
                  disabled
                },
                {},
                {}
              )}` : ``} ${filterable ? `<input${spread(
                [
                  escape_object($$restProps),
                  { role: "combobox" },
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
                    "aria-disabled": escape_attribute_value(disabled)
                  },
                  {
                    "aria-controls": escape_attribute_value(menuId)
                  },
                  { disabled: disabled || null },
                  {
                    placeholder: escape_attribute_value(placeholder)
                  },
                  { id: escape_attribute_value(id) },
                  { name: escape_attribute_value(name) }
                ],
                {
                  classes: "bx--text-input " + (value === "" ? "bx--text-input--empty" : "") + " " + (light ? "bx--text-input--light" : "")
                }
              )}${add_attribute("this", inputRef, 0)}${add_attribute("value", value, 0)}> ${invalid ? `${validate_component(WarningFilled, "WarningFilled").$$render($$result, { class: "bx--list-box__invalid-icon" }, {}, {})}` : ``} ${value ? `${validate_component(ListBoxSelection, "ListBoxSelection").$$render(
                $$result,
                {
                  translateWithId: translateWithIdSelection,
                  disabled,
                  open
                },
                {},
                {}
              )}` : ``} ${validate_component(ListBoxMenuIcon, "ListBoxMenuIcon").$$render(
                $$result,
                {
                  style: "pointer-events: " + (open ? "auto" : "none"),
                  translateWithId,
                  open
                },
                {},
                {}
              )}` : ``} ${!filterable ? `<span${add_classes("bx--list-box__label".trim())}>${escape(label)}</span> ${validate_component(ListBoxMenuIcon, "ListBoxMenuIcon").$$render($$result, { open, translateWithId }, {}, {})}` : ``}`;
            }
          }
        )} ${open ? `${validate_component(ListBoxMenu, "ListBoxMenu").$$render(
          $$result,
          {
            "aria-label": ariaLabel,
            id,
            "aria-multiselectable": "true"
          },
          {},
          {
            default: () => {
              return `${each(filterable ? filteredItems : sortedItems, (item, i) => {
                return `${validate_component(ListBoxMenuItem, "ListBoxMenuItem").$$render(
                  $$result,
                  {
                    id: item.id,
                    role: "option",
                    "aria-labelledby": "checkbox-" + item.id,
                    "aria-selected": item.checked,
                    active: item.checked,
                    highlighted: highlightedIndex === i,
                    disabled: item.disabled
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Checkbox, "Checkbox").$$render(
                        $$result,
                        Object.assign(
                          {},
                          { name: item.id },
                          {
                            title: useTitleInItem ? itemToString(item) : void 0
                          },
                          itemToInput(item),
                          { readonly: true },
                          { tabindex: "-1" },
                          { id: "checkbox-" + item.id },
                          { checked: item.checked },
                          { disabled: item.disabled }
                        ),
                        {},
                        {
                          labelText: () => {
                            return `${slots.default ? slots.default({ slot: "labelText", item, index: i }) : ` ${escape(itemToString(item))} `}`;
                          }
                        }
                      )} `;
                    }
                  }
                )}`;
              })}`;
            }
          }
        )}` : ``}`;
      }
    }
  )} ${!inline && !invalid && !warn && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``}</div>`;
});
const MultiSelect$1 = MultiSelect;
const TagSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size"]);
  let { size = "default" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `  <span${spread([escape_object($$restProps)], {
    classes: "bx--tag " + (size === "sm" ? "bx--tag--sm" : "") + " bx--skeleton"
  })}></span>`;
});
const TagSkeleton$1 = TagSkeleton;
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["type", "size", "filter", "disabled", "interactive", "skeleton", "title", "icon", "id"]);
  let $$slots = compute_slots(slots);
  let { type = void 0 } = $$props;
  let { size = "default" } = $$props;
  let { filter = false } = $$props;
  let { disabled = false } = $$props;
  let { interactive = false } = $$props;
  let { skeleton = false } = $$props;
  let { title = "Clear filter" } = $$props;
  let { icon = void 0 } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  createEventDispatcher();
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0)
    $$bindings.filter(filter);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.interactive === void 0 && $$bindings.interactive && interactive !== void 0)
    $$bindings.interactive(interactive);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return ` ${skeleton ? `${validate_component(TagSkeleton$1, "TagSkeleton").$$render($$result, Object.assign({}, { size }, $$restProps), {}, {})}` : `${filter ? `<div${spread(
    [
      {
        "aria-label": escape_attribute_value(title)
      },
      { id: escape_attribute_value(id) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--tag " + (disabled ? "bx--tag--disabled" : "") + " " + (filter ? "bx--tag--filter" : "") + " " + (size === "sm" ? "bx--tag--sm" : "") + " " + (type === "red" ? "bx--tag--red" : "") + " " + (type === "magenta" ? "bx--tag--magenta" : "") + " " + (type === "purple" ? "bx--tag--purple" : "") + " " + (type === "blue" ? "bx--tag--blue" : "") + " " + (type === "cyan" ? "bx--tag--cyan" : "") + " " + (type === "teal" ? "bx--tag--teal" : "") + " " + (type === "green" ? "bx--tag--green" : "") + " " + (type === "gray" ? "bx--tag--gray" : "") + " " + (type === "cool-gray" ? "bx--tag--cool-gray" : "") + " " + (type === "warm-gray" ? "bx--tag--warm-gray" : "") + " " + (type === "high-contrast" ? "bx--tag--high-contrast" : "") + " " + (type === "outline" ? "bx--tag--outline" : "")
    }
  )}>${slots.default ? slots.default({ props: { class: "bx--tag__label" } }) : ` <span${add_classes("bx--tag__label".trim())}>${escape(type)}</span> `} <button type="button"${add_attribute("aria-labelledby", id, 0)} ${disabled ? "disabled" : ""}${add_attribute("title", title, 0)}${add_classes("bx--tag__close-icon".trim())}>${validate_component(Close, "Close").$$render($$result, {}, {}, {})}</button></div>` : `${interactive ? `<button${spread(
    [
      { type: "button" },
      { id: escape_attribute_value(id) },
      { disabled: disabled || null },
      {
        "aria-disabled": escape_attribute_value(disabled)
      },
      {
        tabindex: escape_attribute_value(disabled ? "-1" : void 0)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--tag bx--tag--interactive " + (disabled ? "bx--tag--disabled" : "") + " " + (size === "sm" ? "bx--tag--sm" : "") + " " + (type === "red" ? "bx--tag--red" : "") + " " + (type === "magenta" ? "bx--tag--magenta" : "") + " " + (type === "purple" ? "bx--tag--purple" : "") + " " + (type === "blue" ? "bx--tag--blue" : "") + " " + (type === "cyan" ? "bx--tag--cyan" : "") + " " + (type === "teal" ? "bx--tag--teal" : "") + " " + (type === "green" ? "bx--tag--green" : "") + " " + (type === "gray" ? "bx--tag--gray" : "") + " " + (type === "cool-gray" ? "bx--tag--cool-gray" : "") + " " + (type === "warm-gray" ? "bx--tag--warm-gray" : "") + " " + (type === "high-contrast" ? "bx--tag--high-contrast" : "") + " " + (type === "outline" ? "bx--tag--outline" : "")
    }
  )}>${$$slots.icon || icon ? `<div${add_classes("bx--tag__custom-icon".trim())}>${slots.icon ? slots.icon({}) : ` ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} `}</div>` : ``} <span>${slots.default ? slots.default({}) : ``}</span></button>` : ` <div${spread([{ id: escape_attribute_value(id) }, escape_object($$restProps)], {
    classes: "bx--tag " + (disabled ? "bx--tag--disabled" : "") + " " + (size === "sm" ? "bx--tag--sm" : "") + " " + (type === "red" ? "bx--tag--red" : "") + " " + (type === "magenta" ? "bx--tag--magenta" : "") + " " + (type === "purple" ? "bx--tag--purple" : "") + " " + (type === "blue" ? "bx--tag--blue" : "") + " " + (type === "cyan" ? "bx--tag--cyan" : "") + " " + (type === "teal" ? "bx--tag--teal" : "") + " " + (type === "green" ? "bx--tag--green" : "") + " " + (type === "gray" ? "bx--tag--gray" : "") + " " + (type === "cool-gray" ? "bx--tag--cool-gray" : "") + " " + (type === "warm-gray" ? "bx--tag--warm-gray" : "") + " " + (type === "high-contrast" ? "bx--tag--high-contrast" : "") + " " + (type === "outline" ? "bx--tag--outline" : "")
  })}>${$$slots.icon || icon ? `<div${add_classes("bx--tag__custom-icon".trim())}>${slots.icon ? slots.icon({}) : ` ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} `}</div>` : ``} <span>${slots.default ? slots.default({}) : ``}</span></div>`}`}`}`;
});
const Tag$1 = Tag;
const SelectSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { legendText } = $$props;
  let { selectedId } = $$props;
  let { items } = $$props;
  let { invalid } = $$props;
  let { invalidText } = $$props;
  let filtered = [...items];
  let search = "";
  let dropdownOpen = false;
  selectedId = items[0].id;
  if ($$props.legendText === void 0 && $$bindings.legendText && legendText !== void 0)
    $$bindings.legendText(legendText);
  if ($$props.selectedId === void 0 && $$bindings.selectedId && selectedId !== void 0)
    $$bindings.selectedId(selectedId);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText }, {}, {
      default: () => {
        return `${validate_component(Search, "Search").$$render(
          $$result,
          {
            size: "sm",
            placeholder: "Buscar...",
            value: search
          },
          {
            value: ($$value) => {
              search = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Dropdown, "Dropdown").$$render(
          $$result,
          {
            invalid,
            invalidText,
            selectedId,
            open: dropdownOpen,
            items: filtered
          },
          {
            selectedId: ($$value) => {
              selectedId = $$value;
              $$settled = false;
            },
            open: ($$value) => {
              dropdownOpen = $$value;
              $$settled = false;
            },
            items: ($$value) => {
              filtered = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  MultiSelect$1 as M,
  SelectSearch as S,
  Tag$1 as T
};
