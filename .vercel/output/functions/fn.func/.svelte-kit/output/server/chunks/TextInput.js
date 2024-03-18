import { c as create_ssr_component, a as compute_rest_props, q as getContext, g as createEventDispatcher, h as add_classes, i as add_attribute, f as escape, v as validate_component, b as spread, e as escape_attribute_value, d as escape_object, k as compute_slots } from "./ssr.js";
import { W as WarningFilled, a as WarningAltFilled } from "./WarningAltFilled.js";
import { E as EditOff } from "./EditOff.js";
const TextInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isFluid;
  let error;
  let helperId;
  let errorId;
  let warnId;
  let $$restProps = compute_rest_props($$props, [
    "size",
    "value",
    "placeholder",
    "light",
    "disabled",
    "helperText",
    "id",
    "name",
    "labelText",
    "hideLabel",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "ref",
    "required",
    "inline",
    "readonly"
  ]);
  let $$slots = compute_slots(slots);
  let { size = void 0 } = $$props;
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { helperText = "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { ref = null } = $$props;
  let { required = false } = $$props;
  let { inline = false } = $$props;
  let { readonly = false } = $$props;
  const ctx = getContext("Form");
  createEventDispatcher();
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  if ($$props.warnText === void 0 && $$bindings.warnText && warnText !== void 0)
    $$bindings.warnText(warnText);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  isFluid = !!ctx && ctx.isFluid;
  error = invalid && !readonly;
  helperId = `helper-${id}`;
  errorId = `error-${id}`;
  warnId = `warn-${id}`;
  return `   <div${add_classes(("bx--form-item bx--text-input-wrapper " + (inline ? "bx--text-input-wrapper--inline" : "") + " " + (light ? "bx--text-input-wrapper--light" : "") + " " + (readonly ? "bx--text-input-wrapper--readonly" : "")).trim())}>${inline ? `<div${add_classes("bx--text-input__label-helper-wrapper".trim())}>${labelText ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "") + " " + (inline ? "bx--label--inline" : "") + " " + (size === "sm" ? "bx--label--inline--sm" : "") + " " + (size === "xl" ? "bx--label--inline--xl" : "")).trim())}>${slots.labelText ? slots.labelText({}) : ` ${escape(labelText)} `}</label>` : ``} ${!isFluid && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "") + " " + (inline ? "bx--form__helper-text--inline" : "")).trim())}>${escape(helperText)}</div>` : ``}</div>` : ``} ${!inline && (labelText || $$slots.labelText) ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "") + " " + (inline ? "bx--label--inline" : "") + " " + (inline && size === "sm" ? "bx--label--inline-sm" : "") + " " + (inline && size === "xl" ? "bx--label--inline-xl" : "")).trim())}>${slots.labelText ? slots.labelText({}) : ` ${escape(labelText)} `}</label>` : ``} <div${add_classes(("bx--text-input__field-outer-wrapper " + (inline ? "bx--text-input__field-outer-wrapper--inline" : "")).trim())}><div${add_attribute("data-invalid", error || void 0, 0)}${add_attribute("data-warn", warn || void 0, 0)}${add_classes(("bx--text-input__field-wrapper " + (!invalid && warn ? "bx--text-input__field-wrapper--warning" : "")).trim())}>${readonly ? `${validate_component(EditOff, "EditOff").$$render($$result, { class: "bx--text-input__readonly-icon" }, {}, {})}` : `${invalid ? `${validate_component(WarningFilled, "WarningFilled").$$render($$result, { class: "bx--text-input__invalid-icon" }, {}, {})}` : ``} ${!invalid && warn ? `${validate_component(WarningAltFilled, "WarningAltFilled").$$render(
    $$result,
    {
      class: "bx--text-input__invalid-icon\n            bx--text-input__invalid-icon--warning"
    },
    {},
    {}
  )}` : ``}`} <input${spread(
    [
      {
        "data-invalid": escape_attribute_value(error || void 0)
      },
      {
        "aria-invalid": escape_attribute_value(error || void 0)
      },
      {
        "data-warn": escape_attribute_value(warn || void 0)
      },
      {
        "aria-describedby": escape_attribute_value(error ? errorId : warn ? warnId : helperText ? helperId : void 0)
      },
      { disabled: disabled || null },
      { id: escape_attribute_value(id) },
      { name: escape_attribute_value(name) },
      {
        placeholder: escape_attribute_value(placeholder)
      },
      { required: required || null },
      { readonly: readonly || null },
      escape_object($$restProps)
    ],
    {
      classes: "bx--text-input " + (light ? "bx--text-input--light" : "") + " " + (error ? "bx--text-input--invalid" : "") + " " + (warn ? "bx--text-input--warning" : "") + " " + (size === "sm" ? "bx--text-input--sm" : "") + " " + (size === "xl" ? "bx--text-input--xl" : "")
    }
  )}${add_attribute("this", ref, 0)}${add_attribute("value", value, 0)}> ${isFluid ? `<hr${add_classes("bx--text-input__divider".trim())}>` : ``} ${isFluid && !inline && invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``} ${isFluid && !inline && warn ? `<div${add_attribute("id", warnId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(warnText)}</div>` : ``}</div> ${!invalid && !warn && !isFluid && !inline && helperText ? `<div${add_attribute("id", helperId, 0)}${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "") + " " + (inline ? "bx--form__helper-text--inline" : "")).trim())}>${escape(helperText)}</div>` : ``} ${!isFluid && invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``} ${!isFluid && !invalid && warn ? `<div${add_attribute("id", warnId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(warnText)}</div>` : ``}</div></div>`;
});
const TextInput$1 = TextInput;
export {
  TextInput$1 as T
};
