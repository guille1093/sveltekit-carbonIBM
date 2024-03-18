import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, f as escape, h as add_classes, g as createEventDispatcher, v as validate_component, i as add_attribute, m as missing_component } from "./ssr.js";
import { C as Close } from "./Close.js";
const IconSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"></path></svg>`;
});
const IconSearch$1 = IconSearch;
const SearchSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size"]);
  let { size = "xl" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `  <div${spread([escape_object($$restProps)], {
    classes: "bx--skeleton " + (size === "sm" ? "bx--search--sm" : "") + " " + (size === "lg" ? "bx--search--lg" : "") + " " + (size === "xl" ? "bx--search--xl" : "")
  })}><span${add_classes("bx--label".trim())}></span> <div${add_classes("bx--search-input".trim())}></div></div>`;
});
const SearchSkeleton$1 = SearchSkeleton;
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "value",
    "size",
    "searchClass",
    "skeleton",
    "light",
    "disabled",
    "expandable",
    "expanded",
    "placeholder",
    "autocomplete",
    "autofocus",
    "closeButtonLabelText",
    "labelText",
    "icon",
    "id",
    "ref"
  ]);
  let { value = "" } = $$props;
  let { size = "xl" } = $$props;
  let { searchClass = "" } = $$props;
  let { skeleton = false } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { expandable = false } = $$props;
  let { expanded = false } = $$props;
  let { placeholder = "Search..." } = $$props;
  let { autocomplete = "off" } = $$props;
  let { autofocus = false } = $$props;
  let { closeButtonLabelText = "Clear search input" } = $$props;
  let { labelText = "" } = $$props;
  let { icon = IconSearch$1 } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  const dispatch = createEventDispatcher();
  let searchRef = null;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.searchClass === void 0 && $$bindings.searchClass && searchClass !== void 0)
    $$bindings.searchClass(searchClass);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.expandable === void 0 && $$bindings.expandable && expandable !== void 0)
    $$bindings.expandable(expandable);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.autocomplete === void 0 && $$bindings.autocomplete && autocomplete !== void 0)
    $$bindings.autocomplete(autocomplete);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0)
    $$bindings.autofocus(autofocus);
  if ($$props.closeButtonLabelText === void 0 && $$bindings.closeButtonLabelText && closeButtonLabelText !== void 0)
    $$bindings.closeButtonLabelText(closeButtonLabelText);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (expanded && ref)
      ref.focus();
  }
  {
    dispatch(expanded ? "expand" : "collapse");
  }
  return `${skeleton ? `${validate_component(SearchSkeleton$1, "SearchSkeleton").$$render($$result, Object.assign({}, { size }, $$restProps), {}, {})}` : `<div role="search" aria-labelledby="${escape(id, true) + "-search"}" class="${[
    escape(searchClass, true),
    "bx--search " + (light ? "bx--search--light" : "") + " " + (disabled ? "bx--search--disabled" : "") + " " + (size === "sm" ? "bx--search--sm" : "") + " " + (size === "lg" ? "bx--search--lg" : "") + " " + (size === "xl" ? "bx--search--xl" : "") + " " + (expandable ? "bx--search--expandable" : "") + " " + (expanded ? "bx--search--expanded" : "")
  ].join(" ").trim()}">  <div${add_classes("bx--search-magnifier".trim())}${add_attribute("this", searchRef, 0)}>${validate_component(icon || missing_component, "svelte:component").$$render($$result, { class: "bx--search-magnifier-icon" }, {}, {})}</div> <label id="${escape(id, true) + "-search"}"${add_attribute("for", id, 0)}${add_classes("bx--label".trim())}>${slots.labelText ? slots.labelText({}) : ` ${escape(labelText)} `}</label>  <input${spread(
    [
      { type: "text" },
      { role: "searchbox" },
      {
        autofocus: (autofocus === true ? true : void 0) || null
      },
      {
        autocomplete: escape_attribute_value(autocomplete)
      },
      { disabled: disabled || null },
      { id: escape_attribute_value(id) },
      {
        placeholder: escape_attribute_value(placeholder)
      },
      escape_object($$restProps)
    ],
    { classes: "bx--search-input" }
  )}${add_attribute("this", ref, 0)}${add_attribute("value", value, 0)}> <button type="button"${add_attribute("aria-label", closeButtonLabelText, 0)} ${disabled ? "disabled" : ""}${add_classes(("bx--search-close " + (value === "" ? "bx--search-close--hidden" : "")).trim())}>${validate_component(Close || missing_component, "svelte:component").$$render($$result, { size: size === "xl" ? 20 : 16 }, {}, {})}</button></div>`}`;
});
const Search$1 = Search;
export {
  Search$1 as S
};
