import { c as create_ssr_component, a as compute_rest_props, q as getContext, b as spread, e as escape_attribute_value, d as escape_object, i as add_attribute, g as createEventDispatcher, h as add_classes, f as escape, v as validate_component } from "./ssr.js";
import { C as Close } from "./Close.js";
const ListBoxField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ariaExpanded;
  let menuId;
  let $$restProps = compute_rest_props($$props, ["disabled", "role", "tabindex", "translationIds", "translateWithId", "id", "ref"]);
  let { disabled = false } = $$props;
  let { role = "combobox" } = $$props;
  let { tabindex = "-1" } = $$props;
  const translationIds = { close: "close", open: "open" };
  let { translateWithId = (id2) => defaultTranslations[id2] } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  const defaultTranslations = {
    [translationIds.close]: "Close menu",
    [translationIds.open]: "Open menu"
  };
  const ctx = getContext("MultiSelect");
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.translationIds === void 0 && $$bindings.translationIds && translationIds !== void 0)
    $$bindings.translationIds(translationIds);
  if ($$props.translateWithId === void 0 && $$bindings.translateWithId && translateWithId !== void 0)
    $$bindings.translateWithId(translateWithId);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (ctx && ref) {
      ctx.declareRef({ key: "field", ref });
    }
  }
  ariaExpanded = $$props["aria-expanded"];
  menuId = `menu-${id}`;
  return ` <div${spread(
    [
      { role: escape_attribute_value(role) },
      {
        "aria-expanded": escape_attribute_value(ariaExpanded)
      },
      {
        "aria-owns": escape_attribute_value(ariaExpanded && menuId || void 0)
      },
      {
        "aria-controls": escape_attribute_value(ariaExpanded && menuId || void 0)
      },
      {
        "aria-disabled": escape_attribute_value(disabled)
      },
      {
        "aria-label": escape_attribute_value(ariaExpanded ? translateWithId("close") : translateWithId("open"))
      },
      {
        tabindex: escape_attribute_value(disabled ? "-1" : tabindex)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--list-box__field"
    }
  )}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const ListBoxField$1 = ListBoxField;
const ListBoxSelection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let translationId;
  let description;
  let $$restProps = compute_rest_props($$props, ["selectionCount", "disabled", "translationIds", "translateWithId", "ref"]);
  let { selectionCount = void 0 } = $$props;
  let { disabled = false } = $$props;
  const translationIds = {
    clearAll: "clearAll",
    clearSelection: "clearSelection"
  };
  let { translateWithId = (id) => defaultTranslations[id] } = $$props;
  let { ref = null } = $$props;
  const defaultTranslations = {
    [translationIds.clearAll]: "Clear all selected items",
    [translationIds.clearSelection]: "Clear selected item"
  };
  createEventDispatcher();
  const ctx = getContext("MultiSelect");
  if ($$props.selectionCount === void 0 && $$bindings.selectionCount && selectionCount !== void 0)
    $$bindings.selectionCount(selectionCount);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.translationIds === void 0 && $$bindings.translationIds && translationIds !== void 0)
    $$bindings.translationIds(translationIds);
  if ($$props.translateWithId === void 0 && $$bindings.translateWithId && translateWithId !== void 0)
    $$bindings.translateWithId(translateWithId);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (ctx && ref) {
      ctx.declareRef({ key: "selection", ref });
    }
  }
  translationId = selectionCount ? translationIds.clearAll : translationIds.clearSelection;
  description = translateWithId?.(translationId) ?? defaultTranslations[translationId];
  return `${selectionCount !== void 0 ? `<div${add_classes(("bx--tag bx--tag--filter bx--tag--high-contrast " + (disabled ? "bx--tag--disabled" : "")).trim())}><span${add_attribute("title", selectionCount, 0)}${add_classes("bx--tag__label".trim())}>${escape(selectionCount)}</span> <div role="button"${add_attribute("tabindex", disabled ? -1 : 0, 0)} ${disabled ? "disabled" : ""}${add_attribute("aria-label", translationIds.clearAll, 0)}${add_attribute("title", description, 0)}${add_classes("bx--tag__close-icon".trim())}${add_attribute("this", ref, 0)}>${validate_component(Close, "Close").$$render($$result, {}, {}, {})}</div></div>` : `<div${spread(
    [
      { role: "button" },
      {
        "aria-label": escape_attribute_value(description)
      },
      {
        title: escape_attribute_value(description)
      },
      {
        tabindex: escape_attribute_value(disabled ? "-1" : "0")
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--list-box__selection " + (selectionCount ? "bx--tag--filter" : "") + " " + (selectionCount ? "bx--list-box__selection--multi" : "")
    }
  )}${add_attribute("this", ref, 0)}>${selectionCount !== void 0 ? `${escape(selectionCount)}` : ``} ${validate_component(Close, "Close").$$render($$result, {}, {}, {})}</div>`}`;
});
const ListBoxSelection$1 = ListBoxSelection;
export {
  ListBoxField$1 as L,
  ListBoxSelection$1 as a
};
