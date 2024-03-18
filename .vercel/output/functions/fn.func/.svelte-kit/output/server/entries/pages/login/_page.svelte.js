import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, f as escape, q as getContext, h as add_classes, i as add_attribute, v as validate_component, k as compute_slots } from "../../../chunks/ssr.js";
import "devalue";
import { F as FormGroup } from "../../../chunks/FormGroup.js";
import { T as TextInput } from "../../../chunks/TextInput.js";
import { W as WarningFilled, a as WarningAltFilled } from "../../../chunks/WarningAltFilled.js";
import { B as Button } from "../../../chunks/Button.js";
const View = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M30.94,15.66A16.69,16.69,0,0,0,16,5,16.69,16.69,0,0,0,1.06,15.66a1,1,0,0,0,0,.68A16.69,16.69,0,0,0,16,27,16.69,16.69,0,0,0,30.94,16.34,1,1,0,0,0,30.94,15.66ZM16,25c-5.3,0-10.9-3.93-12.93-9C5.1,10.93,10.7,7,16,7s10.9,3.93,12.93,9C26.9,21.07,21.3,25,16,25Z"></path><path d="M16,10a6,6,0,1,0,6,6A6,6,0,0,0,16,10Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,16,20Z"></path></svg>`;
});
const View$1 = View;
const ViewOff = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M5.24,22.51l1.43-1.42A14.06,14.06,0,0,1,3.07,16C5.1,10.93,10.7,7,16,7a12.38,12.38,0,0,1,4,.72l1.55-1.56A14.72,14.72,0,0,0,16,5,16.69,16.69,0,0,0,1.06,15.66a1,1,0,0,0,0,.68A16,16,0,0,0,5.24,22.51Z"></path><path d="M12 15.73a4 4 0 013.7-3.7l1.81-1.82a6 6 0 00-7.33 7.33zM30.94 15.66A16.4 16.4 0 0025.2 8.22L30 3.41 28.59 2 2 28.59 3.41 30l5.1-5.1A15.29 15.29 0 0016 27 16.69 16.69 0 0030.94 16.34 1 1 0 0030.94 15.66zM20 16a4 4 0 01-6 3.44L19.44 14A4 4 0 0120 16zm-4 9a13.05 13.05 0 01-6-1.58l2.54-2.54a6 6 0 008.35-8.35l2.87-2.87A14.54 14.54 0 0128.93 16C26.9 21.07 21.3 25 16 25z"></path></svg>`;
});
const ViewOff$1 = ViewOff;
const PasswordInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isFluid;
  let helperId;
  let errorId;
  let warnId;
  let $$restProps = compute_rest_props($$props, [
    "size",
    "value",
    "type",
    "placeholder",
    "hidePasswordLabel",
    "showPasswordLabel",
    "tooltipAlignment",
    "tooltipPosition",
    "light",
    "disabled",
    "helperText",
    "labelText",
    "hideLabel",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "inline",
    "id",
    "name",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let { size = void 0 } = $$props;
  let { value = "" } = $$props;
  let { type = "password" } = $$props;
  let { placeholder = "" } = $$props;
  let { hidePasswordLabel = "Hide password" } = $$props;
  let { showPasswordLabel = "Show password" } = $$props;
  let { tooltipAlignment = "center" } = $$props;
  let { tooltipPosition = "bottom" } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { helperText = "" } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { inline = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { ref = null } = $$props;
  const ctx = getContext("Form");
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.hidePasswordLabel === void 0 && $$bindings.hidePasswordLabel && hidePasswordLabel !== void 0)
    $$bindings.hidePasswordLabel(hidePasswordLabel);
  if ($$props.showPasswordLabel === void 0 && $$bindings.showPasswordLabel && showPasswordLabel !== void 0)
    $$bindings.showPasswordLabel(showPasswordLabel);
  if ($$props.tooltipAlignment === void 0 && $$bindings.tooltipAlignment && tooltipAlignment !== void 0)
    $$bindings.tooltipAlignment(tooltipAlignment);
  if ($$props.tooltipPosition === void 0 && $$bindings.tooltipPosition && tooltipPosition !== void 0)
    $$bindings.tooltipPosition(tooltipPosition);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
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
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  if ($$props.warnText === void 0 && $$bindings.warnText && warnText !== void 0)
    $$bindings.warnText(warnText);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  isFluid = !!ctx && ctx.isFluid;
  helperId = `helper-${id}`;
  errorId = `error-${id}`;
  warnId = `warn-${id}`;
  return `   <div${add_classes(("bx--form-item bx--text-input-wrapper " + (!isFluid ? "bx--password-input-wrapper" : "") + " " + (light ? "bx--text-input-wrapper--light" : "") + " " + (inline ? "bx--text-input-wrapper--inline" : "")).trim())}>${inline ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "") + " " + (inline ? "bx--label--inline" : "") + " " + (inline && size === "sm" ? "bx--label--inline--sm" : "") + " " + (inline && size === "xl" ? "bx--label--inline--xl" : "")).trim())}>${slots.labelText ? slots.labelText({}) : ` ${escape(labelText)} `}</label> ${!isFluid && helperText ? `<div${add_attribute("id", helperId, 0)}${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "") + " " + (inline ? "bx--form__helper-text--inline" : "")).trim())}>${escape(helperText)}</div>` : ``}` : ``} ${!inline && (labelText || $$slots.labelText) ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "") + " " + (inline ? "bx--label--inline" : "") + " " + (inline && size === "sm" ? "bx--label--inline--sm" : "") + " " + (inline && size === "xl" ? "bx--label--inline--xl" : "")).trim())}>${slots.labelText ? slots.labelText({}) : ` ${escape(labelText)} `}</label>` : ``} <div${add_classes(("bx--text-input__field-outer-wrapper " + (inline ? "bx--text-input__field-outer-wrapper--inline" : "")).trim())}><div${add_attribute("data-invalid", invalid || void 0, 0)}${add_classes(("bx--text-input__field-wrapper " + (warn ? "bx--text-input__field-wrapper--warning" : "")).trim())}>${invalid ? `${validate_component(WarningFilled, "WarningFilled").$$render($$result, { class: "bx--text-input__invalid-icon" }, {}, {})}` : ``} ${!invalid && warn ? `${validate_component(WarningAltFilled, "WarningAltFilled").$$render(
    $$result,
    {
      class: "bx--text-input__invalid-icon\n            bx--text-input__invalid-icon--warning"
    },
    {},
    {}
  )}` : ``} <input${spread(
    [
      {
        "data-invalid": escape_attribute_value(invalid || void 0)
      },
      {
        "aria-invalid": escape_attribute_value(invalid || void 0)
      },
      {
        "aria-describedby": escape_attribute_value(invalid ? errorId : warn ? warnId : helperText ? helperId : void 0)
      },
      { id: escape_attribute_value(id) },
      { name: escape_attribute_value(name) },
      {
        placeholder: escape_attribute_value(placeholder)
      },
      { type: escape_attribute_value(type) },
      {
        value: escape_attribute_value(value ?? "")
      },
      { disabled: disabled || null },
      escape_object($$restProps)
    ],
    {
      classes: "bx--text-input bx--password-input " + (light ? "bx--text-input--light" : "") + " " + (invalid ? "bx--text-input--invalid" : "") + " " + (warn ? "bx--text-input--warning" : "") + " " + (size === "sm" ? "bx--text-input--sm" : "") + " " + (size === "xl" ? "bx--text-input--xl" : "")
    }
  )}${add_attribute("this", ref, 0)}> ${isFluid && invalid ? `<hr class="bx--text-input__divider"> <div class="bx--form-requirement"${add_attribute("id", errorId, 0)}>${escape(invalidText)}</div>` : ``} ${!(isFluid && invalid) ? `<button type="button" ${disabled ? "disabled" : ""}${add_classes(("bx--text-input--password__visibility__toggle bx--btn bx--btn--icon-only " + (disabled ? "bx--btn--disabled" : "") + " bx--tooltip__trigger bx--tooltip--a11y " + (tooltipPosition === "top" ? "bx--tooltip--top" : "") + " " + (tooltipPosition === "right" ? "bx--tooltip--right" : "") + " " + (tooltipPosition === "bottom" ? "bx--tooltip--bottom" : "") + " " + (tooltipPosition === "left" ? "bx--tooltip--left" : "") + " " + (tooltipAlignment === "start" ? "bx--tooltip--align-start" : "") + " " + (tooltipAlignment === "center" ? "bx--tooltip--align-center" : "") + " " + (tooltipAlignment === "end" ? "bx--tooltip--align-end" : "")).trim())}>${!disabled ? `<span${add_classes("bx--assistive-text".trim())}>${type === "text" ? `${escape(hidePasswordLabel)}` : `${escape(showPasswordLabel)}`}</span>` : ``} ${type === "text" ? `${validate_component(ViewOff$1, "ViewOff").$$render($$result, { class: "bx--icon-visibility-off" }, {}, {})}` : `${validate_component(View$1, "View").$$render($$result, { class: "bx--icon-visibility-on" }, {}, {})}`}</button>` : ``}</div> ${!isFluid && invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``} ${!invalid && !warn && !isFluid && !inline && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "") + " " + (inline ? "bx--form__helper-text--inline" : "")).trim())}>${escape(helperText)}</div>` : ``} ${!isFluid && !invalid && warn ? `<div${add_attribute("id", warnId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(warnText)}</div>` : ``}</div></div>`;
});
const PasswordInput$1 = PasswordInput;
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M26,30H14a2,2,0,0,1-2-2V25h2v3H26V4H14V7H12V4a2,2,0,0,1,2-2H26a2,2,0,0,1,2,2V28A2,2,0,0,1,26,30Z"></path><path d="M14.59 20.59L18.17 17 4 17 4 15 18.17 15 14.59 11.41 16 10 22 16 16 22 14.59 20.59z"></path></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loading = false;
  let open2 = false;
  let loginform;
  return `<div class="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black min-h-screen flex items-center justify-center">${``} ${``} <div class="container max-w-md mx-auto xl:max-w-3xl h-full flex shadow-black shadow-2xl"><div class="hidden xl:block xl:w-1/2" data-svelte-h="svelte-15f5jl"><img class="object-cover object-center" src="https://images.unsplash.com/photo-1537100861360-bf6be4ddeac4?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D" alt="una playa xd"></div> <div class="w-full xl:w-1/2 p-8"><h1 data-svelte-h="svelte-1y4w9fg">Del Valle Turismo</h1> <p data-svelte-h="svelte-ih8jwk">Empresa de viajes y turismo</p> <h4 class="mt-14 mb-4" data-svelte-h="svelte-okp4h9">Inicie sesión en su cuenta</h4> <form action="?/login" method="POST"${add_attribute("this", loginform, 0)}>${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Nombre de usuario" }, {}, {
    default: () => {
      return `${validate_component(TextInput, "TextInput").$$render(
        $$result,
        {
          required: true,
          id: "email",
          name: "email",
          placeholder: "Ingrese su nombre de usuario",
          disabled: loading
        },
        {},
        {}
      )}`;
    }
  })} ${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(PasswordInput$1, "PasswordInput").$$render(
        $$result,
        {
          required: true,
          id: "password",
          name: "password",
          labelText: "Contraseña",
          placeholder: "Ingrese su contraseña",
          disabled: loading
        },
        {},
        {}
      )}`;
    }
  })} <div class="flex w-full justify-end">${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "submit",
      icon: Login,
      disabled: open2,
      skeleton: loading
    },
    {},
    {
      default: () => {
        return `Iniciar sesión`;
      }
    }
  )}</div></form></div></div></div>`;
});
export {
  Page as default
};
