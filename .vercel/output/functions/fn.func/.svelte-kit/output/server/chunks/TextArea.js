import { c as create_ssr_component, a as compute_rest_props, h as add_classes, i as add_attribute, f as escape, v as validate_component, b as spread, e as escape_attribute_value, d as escape_object, k as compute_slots } from "./ssr.js";
import { W as WarningFilled } from "./WarningAltFilled.js";
const TextArea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let errorId;
  let $$restProps = compute_rest_props($$props, [
    "value",
    "placeholder",
    "cols",
    "rows",
    "maxCount",
    "light",
    "disabled",
    "readonly",
    "helperText",
    "labelText",
    "hideLabel",
    "invalid",
    "invalidText",
    "id",
    "name",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { cols = 50 } = $$props;
  let { rows = 4 } = $$props;
  let { maxCount = void 0 } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { readonly = false } = $$props;
  let { helperText = "" } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { ref = null } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.cols === void 0 && $$bindings.cols && cols !== void 0)
    $$bindings.cols(cols);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.maxCount === void 0 && $$bindings.maxCount && maxCount !== void 0)
    $$bindings.maxCount(maxCount);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  errorId = `error-${id}`;
  return `   <div${add_classes("bx--form-item".trim())}>${(labelText || $$slots.labelText) && !hideLabel ? `<div${add_classes("bx--text-area__label-wrapper".trim())}><label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "")).trim())}>${slots.labelText ? slots.labelText({}) : ` ${escape(labelText)} `}</label> ${maxCount ? `<div${add_classes(("bx--label " + (disabled ? "bx--label--disabled" : "")).trim())}>${escape(value.length)}/${escape(maxCount)}</div>` : ``}</div>` : ``} <div${add_attribute("data-invalid", invalid || void 0, 0)}${add_classes("bx--text-area__wrapper".trim())}>${invalid ? `${validate_component(WarningFilled, "WarningFilled").$$render($$result, { class: "bx--text-area__invalid-icon" }, {}, {})}` : ``} <textarea${spread(
    [
      {
        "aria-invalid": escape_attribute_value(invalid || void 0)
      },
      {
        "aria-describedby": escape_attribute_value(invalid ? errorId : void 0)
      },
      { disabled: disabled || null },
      { id: escape_attribute_value(id) },
      { name: escape_attribute_value(name) },
      { cols: escape_attribute_value(cols) },
      { rows: escape_attribute_value(rows) },
      {
        placeholder: escape_attribute_value(placeholder)
      },
      { readonly: readonly || null },
      {
        maxlength: escape_attribute_value(maxCount ?? void 0)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--text-area " + (light ? "bx--text-area--light" : "") + " " + (invalid ? "bx--text-area--invalid" : "")
    }
  )}${add_attribute("this", ref, 0)}>${escape(value || "")}</textarea></div> ${!invalid && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``} ${invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``}</div>`;
});
const TextArea$1 = TextArea;
export {
  TextArea$1 as T
};
