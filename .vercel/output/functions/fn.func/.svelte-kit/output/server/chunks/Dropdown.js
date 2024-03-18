import { c as create_ssr_component, a as compute_rest_props, g as createEventDispatcher, b as spread, d as escape_object, i as add_attribute, h as add_classes, f as escape, v as validate_component, o as each } from "./ssr.js";
import { W as WarningFilled, a as WarningAltFilled } from "./WarningAltFilled.js";
import { L as ListBox, a as ListBoxMenuIcon, b as ListBoxMenu, c as ListBoxMenuItem } from "./ListBoxMenuItem.js";
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inline;
  let selectedItem;
  let $$restProps = compute_rest_props($$props, [
    "items",
    "itemToString",
    "selectedId",
    "type",
    "direction",
    "size",
    "open",
    "light",
    "disabled",
    "titleText",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "helperText",
    "label",
    "hideLabel",
    "translateWithId",
    "id",
    "name",
    "ref"
  ]);
  let { items = [] } = $$props;
  let { itemToString = (item) => item.text || item.id } = $$props;
  let { selectedId } = $$props;
  let { type = "default" } = $$props;
  let { direction = "bottom" } = $$props;
  let { size = void 0 } = $$props;
  let { open = false } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { titleText = "" } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { helperText = "" } = $$props;
  let { label = void 0 } = $$props;
  let { hideLabel = false } = $$props;
  let { translateWithId = void 0 } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { ref = null } = $$props;
  createEventDispatcher();
  let highlightedIndex = -1;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.itemToString === void 0 && $$bindings.itemToString && itemToString !== void 0)
    $$bindings.itemToString(itemToString);
  if ($$props.selectedId === void 0 && $$bindings.selectedId && selectedId !== void 0)
    $$bindings.selectedId(selectedId);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.titleText === void 0 && $$bindings.titleText && titleText !== void 0)
    $$bindings.titleText(titleText);
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
  if ($$props.translateWithId === void 0 && $$bindings.translateWithId && translateWithId !== void 0)
    $$bindings.translateWithId(translateWithId);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  inline = type === "inline";
  selectedItem = items.find((item) => item.id === selectedId);
  {
    if (!open) {
      highlightedIndex = -1;
    }
  }
  return ` <div${spread([escape_object($$restProps)], {
    classes: "bx--dropdown__wrapper bx--list-box__wrapper " + (inline ? "bx--dropdown__wrapper--inline" : "") + " " + (inline ? "bx--list-box__wrapper--inline" : "") + " " + (inline && invalid ? "bx--dropdown__wrapper--inline--invalid" : "")
  })}>${titleText ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (disabled ? "bx--label--disabled" : "") + " " + (hideLabel ? "bx--visually-hidden" : "")).trim())}>${escape(titleText)}</label>` : ``} ${validate_component(ListBox, "ListBox").$$render(
    $$result,
    {
      role: void 0,
      type,
      size,
      name,
      "aria-label": $$props["aria-label"],
      class: "bx--dropdown \n      " + (direction === "top" && "bx--list-box--up") + " \n      " + (invalid && "bx--dropdown--invalid") + " \n      " + (!invalid && warn && "bx--dropdown--warning") + " \n      " + (open && "bx--dropdown--open") + "\n      " + (size === "sm" && "bx--dropdown--sm") + "\n      " + (size === "xl" && "bx--dropdown--xl") + "\n      " + (inline && "bx--dropdown--inline") + "\n      " + (disabled && "bx--dropdown--disabled") + "\n      " + (light && "bx--dropdown--light"),
      disabled,
      open,
      invalid,
      invalidText,
      light,
      warn,
      warnText
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
        )}` : ``} <button type="button" tabindex="0"${add_attribute("aria-expanded", open, 0)} ${disabled ? "disabled" : ""}${add_attribute("translatewithid", translateWithId, 0)}${add_attribute("id", id, 0)}${add_classes("bx--list-box__field".trim())}${add_attribute("this", ref, 0)}><span${add_classes("bx--list-box__label".trim())}>${selectedItem ? `${escape(itemToString(selectedItem))}` : `${escape(label)}`}</span> ${validate_component(ListBoxMenuIcon, "ListBoxMenuIcon").$$render($$result, { translateWithId, open }, {}, {})}</button> ${open ? `${validate_component(ListBoxMenu, "ListBoxMenu").$$render($$result, { "aria-labelledby": id, id }, {}, {
          default: () => {
            return `${each(items, (item, i) => {
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
                    return `${slots.default ? slots.default({ item, index: i }) : ` ${escape(itemToString(item))} `} `;
                  }
                }
              )}`;
            })}`;
          }
        })}` : ``}`;
      }
    }
  )} ${!inline && !invalid && !warn && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``}</div>`;
});
const Dropdown$1 = Dropdown;
export {
  Dropdown$1 as D
};
