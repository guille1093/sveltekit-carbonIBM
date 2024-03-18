import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, f as escape, g as createEventDispatcher, h as add_classes, i as add_attribute, v as validate_component, k as compute_slots } from "./ssr.js";
import { W as WarningFilled, a as WarningAltFilled } from "./WarningAltFilled.js";
import { E as EditOff } from "./EditOff.js";
const Add = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path></svg>`;
});
const Add$1 = Add;
const Subtract = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M8 15H24V17H8z"></path></svg>`;
});
const Subtract$1 = Subtract;
const NumberInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let incrementLabel;
  let decrementLabel;
  let error;
  let errorId;
  let ariaLabel;
  let $$restProps = compute_rest_props($$props, [
    "size",
    "value",
    "step",
    "max",
    "min",
    "light",
    "readonly",
    "allowEmpty",
    "disabled",
    "hideSteppers",
    "iconDescription",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "helperText",
    "label",
    "hideLabel",
    "translateWithId",
    "translationIds",
    "id",
    "name",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let { size = void 0 } = $$props;
  let { value = null } = $$props;
  let { step = 1 } = $$props;
  let { max = void 0 } = $$props;
  let { min = void 0 } = $$props;
  let { light = false } = $$props;
  let { readonly = false } = $$props;
  let { allowEmpty = false } = $$props;
  let { disabled = false } = $$props;
  let { hideSteppers = false } = $$props;
  let { iconDescription = "" } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { helperText = "" } = $$props;
  let { label = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { translateWithId = (id2) => defaultTranslations[id2] } = $$props;
  const translationIds = {
    increment: "increment",
    decrement: "decrement"
  };
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { ref = null } = $$props;
  const defaultTranslations = {
    [translationIds.increment]: "Increment number",
    [translationIds.decrement]: "Decrement number"
  };
  createEventDispatcher();
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  if ($$props.allowEmpty === void 0 && $$bindings.allowEmpty && allowEmpty !== void 0)
    $$bindings.allowEmpty(allowEmpty);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.hideSteppers === void 0 && $$bindings.hideSteppers && hideSteppers !== void 0)
    $$bindings.hideSteppers(hideSteppers);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
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
  if ($$props.translationIds === void 0 && $$bindings.translationIds && translationIds !== void 0)
    $$bindings.translationIds(translationIds);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  incrementLabel = translateWithId("increment");
  decrementLabel = translateWithId("decrement");
  error = invalid && !readonly || !allowEmpty && value == null || value > max || typeof value === "number" && value < min;
  errorId = `error-${id}`;
  ariaLabel = $$props["aria-label"] || "Numeric input field with increment and decrement buttons";
  return `   <div${add_classes("bx--form-item".trim())}><div${add_attribute("data-invalid", error || void 0, 0)}${add_classes(("bx--number bx--number--helpertext " + (readonly ? "bx--number--readonly" : "") + " " + (light ? "bx--number--light" : "") + " " + (hideLabel ? "bx--number--nolabel" : "") + " " + (hideSteppers ? "bx--number--nosteppers" : "") + " " + (size === "sm" ? "bx--number--sm" : "") + " " + (size === "xl" ? "bx--number--xl" : "")).trim())}>${$$slots.label || label ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (disabled ? "bx--label--disabled" : "") + " " + (hideLabel ? "bx--visually-hidden" : "")).trim())}>${slots.label ? slots.label({}) : `${escape(label)}`}</label>` : ``} <div${add_classes(("bx--number__input-wrapper " + (!invalid && warn ? "bx--number__input-wrapper--warning" : "")).trim())}><input${spread(
    [
      { type: "number" },
      { pattern: "[0-9]*" },
      {
        "aria-describedby": escape_attribute_value(errorId)
      },
      {
        "data-invalid": escape_attribute_value(error || void 0)
      },
      {
        "aria-invalid": escape_attribute_value(error || void 0)
      },
      {
        "aria-label": escape_attribute_value(label ? void 0 : ariaLabel)
      },
      { disabled: disabled || null },
      { id: escape_attribute_value(id) },
      { name: escape_attribute_value(name) },
      { max: escape_attribute_value(max) },
      { min: escape_attribute_value(min) },
      { step: escape_attribute_value(step) },
      {
        value: escape_attribute_value(value ?? "")
      },
      { readonly: readonly || null },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", ref, 0)}> ${readonly ? `${validate_component(EditOff, "EditOff").$$render($$result, { class: "bx--text-input__readonly-icon" }, {}, {})}` : `${invalid ? `${validate_component(WarningFilled, "WarningFilled").$$render($$result, { class: "bx--number__invalid" }, {}, {})}` : ``} ${!invalid && warn ? `${validate_component(WarningAltFilled, "WarningAltFilled").$$render(
    $$result,
    {
      class: "bx--number__invalid bx--number__invalid--warning"
    },
    {},
    {}
  )}` : ``}`} ${!hideSteppers ? `<div${add_classes("bx--number__controls".trim())}><button type="button" tabindex="-1"${add_attribute("title", decrementLabel || iconDescription, 0)}${add_attribute("aria-label", decrementLabel || iconDescription, 0)} ${disabled ? "disabled" : ""}${add_classes("bx--number__control-btn down-icon".trim())}>${validate_component(Subtract$1, "Subtract").$$render($$result, { class: "down-icon" }, {}, {})}</button> <div${add_classes("bx--number__rule-divider".trim())}></div> <button type="button" tabindex="-1"${add_attribute("title", incrementLabel || iconDescription, 0)}${add_attribute("aria-label", incrementLabel || iconDescription, 0)} ${disabled ? "disabled" : ""}${add_classes("bx--number__control-btn up-icon".trim())}>${validate_component(Add$1, "Add").$$render($$result, { class: "up-icon" }, {}, {})}</button> <div${add_classes("bx--number__rule-divider".trim())}></div></div>` : ``}</div> ${!error && !warn && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``} ${error ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``} ${!error && warn ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(warnText)}</div>` : ``}</div></div>`;
});
const NumberInput$1 = NumberInput;
export {
  NumberInput$1 as N
};
