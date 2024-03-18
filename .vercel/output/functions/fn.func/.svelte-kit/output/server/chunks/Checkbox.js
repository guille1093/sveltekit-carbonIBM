import { c as create_ssr_component, a as compute_rest_props, b as spread, d as escape_object, h as add_classes, g as createEventDispatcher, v as validate_component, i as add_attribute, f as escape } from "./ssr.js";
const CheckboxSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `  <div${spread([escape_object($$restProps)], {
    classes: "bx--form-item bx--checkbox-wrapper bx--checkbox-label"
  })}><span${add_classes("bx--checkbox-label-text bx--skeleton".trim())}></span></div>`;
});
const CheckboxSkeleton$1 = CheckboxSkeleton;
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let useGroup;
  let isTruncated;
  let $$restProps = compute_rest_props($$props, [
    "value",
    "checked",
    "group",
    "indeterminate",
    "skeleton",
    "required",
    "readonly",
    "disabled",
    "labelText",
    "hideLabel",
    "name",
    "title",
    "id",
    "ref"
  ]);
  let { value = "" } = $$props;
  let { checked = false } = $$props;
  let { group = void 0 } = $$props;
  let { indeterminate = false } = $$props;
  let { skeleton = false } = $$props;
  let { required = false } = $$props;
  let { readonly = false } = $$props;
  let { disabled = false } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { name = "" } = $$props;
  let { title = void 0 } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  const dispatch = createEventDispatcher();
  let refLabel = null;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.indeterminate === void 0 && $$bindings.indeterminate && indeterminate !== void 0)
    $$bindings.indeterminate(indeterminate);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  useGroup = Array.isArray(group);
  checked = useGroup ? group.includes(value) : checked;
  {
    dispatch("check", checked);
  }
  isTruncated = refLabel?.offsetWidth < refLabel?.scrollWidth;
  title = !title && isTruncated ? refLabel?.innerText : title;
  return ` ${skeleton ? `${validate_component(CheckboxSkeleton$1, "CheckboxSkeleton").$$render($$result, Object.assign({}, $$restProps), {}, {})}` : ` <div${spread([escape_object($$restProps)], {
    classes: "bx--form-item bx--checkbox-wrapper"
  })}><input type="checkbox"${add_attribute("value", value, 0)} ${checked ? "checked" : ""} ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)}${add_attribute("indeterminate", indeterminate, 0)}${add_attribute("name", name, 0)} ${required ? "required" : ""} ${readonly ? "readonly" : ""}${add_classes("bx--checkbox".trim())}${add_attribute("this", ref, 0)}> <label${add_attribute("for", id, 0)}${add_attribute("title", title, 0)}${add_classes("bx--checkbox-label".trim())}><span${add_classes(("bx--checkbox-label-text " + (hideLabel ? "bx--visually-hidden" : "")).trim())}${add_attribute("this", refLabel, 0)}>${slots.labelText ? slots.labelText({}) : ` ${escape(labelText)} `}</span></label></div>`}`;
});
const Checkbox$1 = Checkbox;
export {
  Checkbox$1 as C
};
