import { c as create_ssr_component, a as compute_rest_props, g as createEventDispatcher, b as spread, d as escape_object, i as add_attribute, h as add_classes, f as escape, n as add_styles } from "./ssr.js";
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "toggled",
    "disabled",
    "labelA",
    "labelB",
    "labelText",
    "hideLabel",
    "id",
    "name"
  ]);
  let { size = "default" } = $$props;
  let { toggled = false } = $$props;
  let { disabled = false } = $$props;
  let { labelA = "Off" } = $$props;
  let { labelB = "On" } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.toggled === void 0 && $$bindings.toggled && toggled !== void 0)
    $$bindings.toggled(toggled);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.labelA === void 0 && $$bindings.labelA && labelA !== void 0)
    $$bindings.labelA(labelA);
  if ($$props.labelB === void 0 && $$bindings.labelB && labelB !== void 0)
    $$bindings.labelB(labelB);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  {
    dispatch("toggle", { toggled });
  }
  return `  <div${spread([escape_object($$restProps)], {
    classes: "bx--form-item",
    styles: { "user-select": `none` }
  })}> <input role="switch" type="checkbox" ${toggled ? "checked" : ""} ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_classes(("bx--toggle-input " + (size === "sm" ? "bx--toggle-input--small" : "")).trim())}> <label${add_attribute(
    "aria-label",
    labelText ? void 0 : $$props["aria-label"] || "Toggle",
    0
  )}${add_attribute("for", id, 0)}${add_classes("bx--toggle-input__label".trim())}><span${add_classes((hideLabel ? "bx--visually-hidden" : "").trim())}>${slots.labelText ? slots.labelText({}) : ` ${escape(labelText)} `}</span> <span${add_classes("bx--toggle__switch".trim())}${add_styles({ "margin-top": hideLabel ? 0 : void 0 })}><span aria-hidden="true"${add_classes("bx--toggle__text--off".trim())}>${slots.labelA ? slots.labelA({}) : ` ${escape(labelA)} `}</span> <span aria-hidden="true"${add_classes("bx--toggle__text--on".trim())}>${slots.labelB ? slots.labelB({}) : ` ${escape(labelB)} `}</span></span></label></div>`;
});
const Toggle$1 = Toggle;
export {
  Toggle$1 as T
};
