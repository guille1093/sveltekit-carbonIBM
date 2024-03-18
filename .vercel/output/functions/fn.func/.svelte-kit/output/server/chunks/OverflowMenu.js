import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, f as escape, q as getContext, g as createEventDispatcher, j as subscribe, s as setContext, i as add_attribute, v as validate_component, m as missing_component } from "./ssr.js";
import { w as writable } from "./index2.js";
const OverflowMenuVertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<circle cx="16" cy="8" r="2"></circle><circle cx="16" cy="16" r="2"></circle><circle cx="16" cy="24" r="2"></circle></svg>`;
});
const OverflowMenuVertical$1 = OverflowMenuVertical;
const OverflowMenuHorizontal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<circle cx="8" cy="16" r="2"></circle><circle cx="16" cy="16" r="2"></circle><circle cx="24" cy="16" r="2"></circle></svg>`;
});
const OverflowMenuHorizontal$1 = OverflowMenuHorizontal;
const OverflowMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let styles;
  let $$restProps = compute_rest_props($$props, [
    "size",
    "direction",
    "open",
    "light",
    "flipped",
    "menuOptionsClass",
    "icon",
    "iconClass",
    "iconDescription",
    "id",
    "buttonRef",
    "menuRef"
  ]);
  let $currentIndex, $$unsubscribe_currentIndex;
  let $items, $$unsubscribe_items;
  let $$unsubscribe_currentId;
  let { size = void 0 } = $$props;
  let { direction = "bottom" } = $$props;
  let { open = false } = $$props;
  let { light = false } = $$props;
  let { flipped = false } = $$props;
  let { menuOptionsClass = void 0 } = $$props;
  let { icon = OverflowMenuVertical$1 } = $$props;
  let { iconClass = void 0 } = $$props;
  let { iconDescription = "Open and close list of options" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { buttonRef = null } = $$props;
  let { menuRef = null } = $$props;
  const ctxBreadcrumbItem = getContext("BreadcrumbItem");
  createEventDispatcher();
  const items = writable([]);
  $$unsubscribe_items = subscribe(items, (value) => $items = value);
  const currentId = writable(void 0);
  $$unsubscribe_currentId = subscribe(currentId, (value) => value);
  const focusedId = writable(void 0);
  const currentIndex = writable(-1);
  $$unsubscribe_currentIndex = subscribe(currentIndex, (value) => $currentIndex = value);
  setContext("OverflowMenu", {
    focusedId,
    add: ({ id: id2, text, primaryFocus, disabled }) => {
      items.update((_) => {
        if (primaryFocus) {
          currentIndex.set(_.length);
        }
        return [
          ..._,
          {
            id: id2,
            text,
            primaryFocus,
            disabled,
            index: _.length
          }
        ];
      });
    },
    update: (id2) => {
      currentId.set(id2);
    },
    change: (direction2) => {
      let index = $currentIndex + direction2;
      if (index < 0) {
        index = $items.length - 1;
      } else if (index >= $items.length) {
        index = 0;
      }
      let disabled = $items[index].disabled;
      while (disabled) {
        index = index + direction2;
        if (index < 0) {
          index = $items.length - 1;
        } else if (index >= $items.length) {
          index = 0;
        }
        disabled = $items[index].disabled;
      }
      currentIndex.set(index);
    }
  });
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.flipped === void 0 && $$bindings.flipped && flipped !== void 0)
    $$bindings.flipped(flipped);
  if ($$props.menuOptionsClass === void 0 && $$bindings.menuOptionsClass && menuOptionsClass !== void 0)
    $$bindings.menuOptionsClass(menuOptionsClass);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconClass === void 0 && $$bindings.iconClass && iconClass !== void 0)
    $$bindings.iconClass(iconClass);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.buttonRef === void 0 && $$bindings.buttonRef && buttonRef !== void 0)
    $$bindings.buttonRef(buttonRef);
  if ($$props.menuRef === void 0 && $$bindings.menuRef && menuRef !== void 0)
    $$bindings.menuRef(menuRef);
  {
    if (ctxBreadcrumbItem) {
      icon = OverflowMenuHorizontal$1;
    }
  }
  ariaLabel = $$props["aria-label"] || "menu";
  {
    if ($items[$currentIndex]) {
      focusedId.set($items[$currentIndex].id);
    }
  }
  styles = `<style>
    #${id} .bx--overflow-menu-options.bx--overflow-menu-options:after {
      width: ${"2rem"};
    }
  </style>`;
  $$unsubscribe_currentIndex();
  $$unsubscribe_items();
  $$unsubscribe_currentId();
  return `${$$result.head += `<!-- HEAD_svelte-7ztmff_START --><!-- HTML_TAG_START -->${styles}<!-- HTML_TAG_END --><!-- HEAD_svelte-7ztmff_END -->`, ""}   <button${spread(
    [
      { type: "button" },
      { "aria-haspopup": true },
      {
        "aria-expanded": escape_attribute_value(open)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { id: escape_attribute_value(id) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--overflow-menu " + (open ? "bx--overflow-menu--open" : "") + " " + (light ? "bx--overflow-menu--light" : "") + " " + (size === "sm" ? "bx--overflow-menu--sm" : "") + " " + (size === "xl" ? "bx--overflow-menu--xl" : "")
    }
  )}${add_attribute("this", buttonRef, 0)}>${slots.menu ? slots.menu({}) : ` ${validate_component(icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      "aria-label": iconDescription,
      title: iconDescription,
      class: "bx--overflow-menu__icon " + iconClass
    },
    {},
    {}
  )} `} ${open ? ` <ul role="menu" tabindex="-1"${add_attribute("aria-label", ariaLabel, 0)}${add_attribute("data-floating-menu-direction", direction, 0)} class="${[
    escape(menuOptionsClass, true),
    "bx--overflow-menu-options " + (flipped ? "bx--overflow-menu--flip" : "") + " " + (open ? "bx--overflow-menu-options--open" : "") + " " + (light ? "bx--overflow-menu-options--light" : "") + " " + (size === "sm" ? "bx--overflow-menu-options--sm" : "") + " " + (size === "xl" ? "bx--overflow-menu-options--xl" : "") + " " + (!!ctxBreadcrumbItem ? "bx--breadcrumb-menu-options" : "")
  ].join(" ").trim()}"${add_attribute("this", menuRef, 0)}>${slots.default ? slots.default({}) : ``}</ul>` : ``}</button>`;
});
const OverflowMenu$1 = OverflowMenu;
export {
  OverflowMenu$1 as O
};
