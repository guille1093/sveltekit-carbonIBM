import { c as create_ssr_component, a as compute_rest_props, g as createEventDispatcher, j as subscribe, s as setContext, b as spread, d as escape_object, h as add_classes, i as add_attribute, f as escape, v as validate_component, q as getContext } from "./ssr.js";
import { w as writable } from "./index2.js";
import { C as ChevronDown } from "./ChevronDown.js";
import { W as WarningFilled, a as WarningAltFilled } from "./WarningAltFilled.js";
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let errorId;
  let $$restProps = compute_rest_props($$props, [
    "selected",
    "size",
    "inline",
    "light",
    "disabled",
    "id",
    "name",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "helperText",
    "noLabel",
    "labelText",
    "hideLabel",
    "ref",
    "required"
  ]);
  let $defaultValue, $$unsubscribe_defaultValue;
  let $$unsubscribe_selectedValue;
  let $$unsubscribe_itemTypesByValue;
  let $defaultSelectId, $$unsubscribe_defaultSelectId;
  let { selected = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { inline = false } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { helperText = "" } = $$props;
  let { noLabel = false } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { ref = null } = $$props;
  let { required = false } = $$props;
  createEventDispatcher();
  const selectedValue = writable(selected);
  $$unsubscribe_selectedValue = subscribe(selectedValue, (value) => value);
  const defaultSelectId = writable(null);
  $$unsubscribe_defaultSelectId = subscribe(defaultSelectId, (value) => $defaultSelectId = value);
  const defaultValue = writable(null);
  $$unsubscribe_defaultValue = subscribe(defaultValue, (value) => $defaultValue = value);
  const itemTypesByValue = writable({});
  $$unsubscribe_itemTypesByValue = subscribe(itemTypesByValue, (value) => value);
  setContext("Select", {
    selectedValue,
    setDefaultValue: (id2, value) => {
      if ($defaultValue === null) {
        defaultSelectId.set(id2);
        defaultValue.set(value);
      } else {
        if ($defaultSelectId === id2) {
          selectedValue.set(value);
        }
      }
      itemTypesByValue.update((types) => ({ ...types, [value]: typeof value }));
    }
  });
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
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
  if ($$props.noLabel === void 0 && $$bindings.noLabel && noLabel !== void 0)
    $$bindings.noLabel(noLabel);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  errorId = `error-${id}`;
  {
    selectedValue.set(selected ?? $defaultValue);
  }
  $$unsubscribe_defaultValue();
  $$unsubscribe_selectedValue();
  $$unsubscribe_itemTypesByValue();
  $$unsubscribe_defaultSelectId();
  return `<div${spread([escape_object($$restProps)], { classes: "bx--form-item" })}><div${add_classes(("bx--select " + (inline ? "bx--select--inline" : "") + " " + (light ? "bx--select--light" : "") + " " + (invalid ? "bx--select--invalid" : "") + " " + (disabled ? "bx--select--disabled" : "") + " " + (warn ? "bx--select--warning" : "")).trim())}>${!noLabel ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "")).trim())}>${slots.labelText ? slots.labelText({}) : ` ${escape(labelText)} `}</label>` : ``} ${inline ? `<div${add_classes("bx--select-input--inline__wrapper".trim())}><div${add_attribute("data-invalid", invalid || void 0, 0)}${add_classes("bx--select-input__wrapper".trim())}><select${add_attribute("aria-describedby", invalid ? errorId : void 0, 0)}${add_attribute("aria-invalid", invalid || void 0, 0)} ${disabled || void 0 ? "disabled" : ""} ${required || void 0 ? "required" : ""}${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_classes(("bx--select-input " + (size === "sm" ? "bx--select-input--sm" : "") + " " + (size === "xl" ? "bx--select-input--xl" : "")).trim())}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</select> ${validate_component(ChevronDown, "ChevronDown").$$render($$result, { class: "bx--select__arrow" }, {}, {})} ${invalid ? `${validate_component(WarningFilled, "WarningFilled").$$render($$result, { class: "bx--select__invalid-icon" }, {}, {})}` : ``}</div> ${invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``}</div> ${!invalid && !warn && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``}` : ``} ${!inline ? `<div${add_attribute("data-invalid", invalid || void 0, 0)}${add_classes("bx--select-input__wrapper".trim())}><select${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_attribute("aria-describedby", invalid ? errorId : void 0, 0)} ${disabled || void 0 ? "disabled" : ""} ${required || void 0 ? "required" : ""}${add_attribute("aria-invalid", invalid || void 0, 0)}${add_classes(("bx--select-input " + (size === "sm" ? "bx--select-input--sm" : "") + " " + (size === "xl" ? "bx--select-input--xl" : "")).trim())}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</select> ${validate_component(ChevronDown, "ChevronDown").$$render($$result, { class: "bx--select__arrow" }, {}, {})} ${invalid ? `${validate_component(WarningFilled, "WarningFilled").$$render($$result, { class: "bx--select__invalid-icon" }, {}, {})}` : ``} ${!invalid && warn ? `${validate_component(WarningAltFilled, "WarningAltFilled").$$render(
    $$result,
    {
      class: "bx--select__invalid-icon bx--select__invalid-icon--warning"
    },
    {},
    {}
  )}` : ``}</div> ${!invalid && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``} ${invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``} ${!invalid && warn ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(warnText)}</div>` : ``}` : ``}</div></div>`;
});
const Select$1 = Select;
const SelectItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "text", "hidden", "disabled"]);
  let { value = "" } = $$props;
  let { text = "" } = $$props;
  let { hidden = false } = $$props;
  let { disabled = false } = $$props;
  const id = "ccs-" + Math.random().toString(36);
  const ctx = getContext("Select") || getContext("TimePickerSelect");
  let selected = false;
  ctx.selectedValue.subscribe((currentValue) => {
    selected = currentValue === value;
  });
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  {
    ctx?.setDefaultValue?.(id, value);
  }
  return `<option${add_attribute("value", value, 0)} ${disabled ? "disabled" : ""} ${hidden ? "hidden" : ""} ${selected ? "selected" : ""} class="${[escape($$restProps.class, true), "bx--select-option"].join(" ").trim()}"${add_attribute("style", $$restProps.style, 0)}>${escape(text || value)}</option>`;
});
const SelectItem$1 = SelectItem;
export {
  Select$1 as S,
  SelectItem$1 as a
};
