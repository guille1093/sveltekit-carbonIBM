import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, v as validate_component, m as missing_component, f as escape, g as createEventDispatcher, h as add_classes, i as add_attribute, j as subscribe, k as compute_slots, l as set_store_value, n as add_styles, o as each, p as onDestroy } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { H as Home } from "../../chunks/Home.js";
import { w as writable } from "../../chunks/index2.js";
import { p as pb } from "../../chunks/pb.js";
import { g as getImageURL } from "../../chunks/utils.js";
import { C as Close } from "../../chunks/Close.js";
import { C as ClickableTile } from "../../chunks/ClickableTile.js";
import { M as Modal } from "../../chunks/Modal.js";
import { B as Button } from "../../chunks/Button.js";
import { E as ErrorFilled, C as CheckmarkFilled } from "../../chunks/ErrorFilled.js";
import { W as WarningFilled, a as WarningAltFilled } from "../../chunks/WarningAltFilled.js";
const NotificationButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["notificationType", "icon", "title", "iconDescription"]);
  let { notificationType = "toast" } = $$props;
  let { icon = Close } = $$props;
  let { title = void 0 } = $$props;
  let { iconDescription = "Close icon" } = $$props;
  if ($$props.notificationType === void 0 && $$bindings.notificationType && notificationType !== void 0)
    $$bindings.notificationType(notificationType);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  return ` <button${spread(
    [
      { type: "button" },
      {
        "aria-label": escape_attribute_value(iconDescription)
      },
      {
        title: escape_attribute_value(iconDescription)
      },
      escape_object($$restProps)
    ],
    {
      classes: (notificationType === "toast" ? "bx--toast-notification__close-button" : "") + " " + (notificationType === "inline" ? "bx--inline-notification__close-button" : "")
    }
  )}>${validate_component(icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      size: 20,
      title,
      class: (notificationType === "toast" && "bx--toast-notification__close-icon") + " " + (notificationType === "inline" && "bx--inline-notification__close-icon")
    },
    {},
    {}
  )}</button>`;
});
const NotificationButton$1 = NotificationButton;
const InformationFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path fill="none" d="M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z" data-icon-path="inner-path"></path><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,6a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"></path></svg>`;
});
const InformationFilled$1 = InformationFilled;
const InformationSquareFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path fill="none" d="M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z" data-icon-path="inner-path"></path><path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"></path></svg>`;
});
const InformationSquareFilled$1 = InformationSquareFilled;
const NotificationIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { kind = "error" } = $$props;
  let { notificationType = "toast" } = $$props;
  let { iconDescription } = $$props;
  const icons = {
    error: ErrorFilled,
    "info-square": InformationSquareFilled$1,
    info: InformationFilled$1,
    success: CheckmarkFilled,
    warning: WarningFilled,
    "warning-alt": WarningAltFilled
  };
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.notificationType === void 0 && $$bindings.notificationType && notificationType !== void 0)
    $$bindings.notificationType(notificationType);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  return `${validate_component(icons[kind] || missing_component, "svelte:component").$$render(
    $$result,
    {
      size: 20,
      title: iconDescription,
      class: (notificationType === "toast" && "bx--toast-notification__icon") + " " + (notificationType === "inline" && "bx--inline-notification__icon")
    },
    {},
    {}
  )}`;
});
const NotificationIcon$1 = NotificationIcon;
const ToastNotification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "kind",
    "lowContrast",
    "timeout",
    "role",
    "title",
    "subtitle",
    "caption",
    "statusIconDescription",
    "closeButtonDescription",
    "hideCloseButton",
    "fullWidth"
  ]);
  let { kind = "error" } = $$props;
  let { lowContrast = false } = $$props;
  let { timeout = 0 } = $$props;
  let { role = "alert" } = $$props;
  let { title = "" } = $$props;
  let { subtitle = "" } = $$props;
  let { caption = "" } = $$props;
  let { statusIconDescription = kind + " icon" } = $$props;
  let { closeButtonDescription = "Close notification" } = $$props;
  let { hideCloseButton = false } = $$props;
  let { fullWidth = false } = $$props;
  createEventDispatcher();
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.lowContrast === void 0 && $$bindings.lowContrast && lowContrast !== void 0)
    $$bindings.lowContrast(lowContrast);
  if ($$props.timeout === void 0 && $$bindings.timeout && timeout !== void 0)
    $$bindings.timeout(timeout);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.statusIconDescription === void 0 && $$bindings.statusIconDescription && statusIconDescription !== void 0)
    $$bindings.statusIconDescription(statusIconDescription);
  if ($$props.closeButtonDescription === void 0 && $$bindings.closeButtonDescription && closeButtonDescription !== void 0)
    $$bindings.closeButtonDescription(closeButtonDescription);
  if ($$props.hideCloseButton === void 0 && $$bindings.hideCloseButton && hideCloseButton !== void 0)
    $$bindings.hideCloseButton(hideCloseButton);
  if ($$props.fullWidth === void 0 && $$bindings.fullWidth && fullWidth !== void 0)
    $$bindings.fullWidth(fullWidth);
  return ` ${`<div${spread(
    [
      { role: escape_attribute_value(role) },
      { kind: escape_attribute_value(kind) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--toast-notification " + (lowContrast ? "bx--toast-notification--low-contrast" : "") + " " + (kind === "error" ? "bx--toast-notification--error" : "") + " " + (kind === "info" ? "bx--toast-notification--info" : "") + " " + (kind === "info-square" ? "bx--toast-notification--info-square" : "") + " " + (kind === "success" ? "bx--toast-notification--success" : "") + " " + (kind === "warning" ? "bx--toast-notification--warning" : "") + " " + (kind === "warning-alt" ? "bx--toast-notification--warning-alt" : ""),
      styles: { "width": fullWidth ? "100%" : void 0 }
    }
  )}>${validate_component(NotificationIcon$1, "NotificationIcon").$$render(
    $$result,
    {
      kind,
      iconDescription: statusIconDescription
    },
    {},
    {}
  )} <div${add_classes("bx--toast-notification__details".trim())}><h3${add_classes("bx--toast-notification__title".trim())}>${slots.title ? slots.title({}) : `${escape(title)}`}</h3> <div${add_classes("bx--toast-notification__subtitle".trim())}>${slots.subtitle ? slots.subtitle({}) : `${escape(subtitle)}`}</div> <div${add_classes("bx--toast-notification__caption".trim())}>${slots.caption ? slots.caption({}) : `${escape(caption)}`}</div> ${slots.default ? slots.default({}) : ``}</div> ${!hideCloseButton ? `${validate_component(NotificationButton$1, "NotificationButton").$$render($$result, { iconDescription: closeButtonDescription }, {}, {})}` : ``}</div>`}`;
});
const ToastNotification$1 = ToastNotification;
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M4 6H28V8H4zM4 24H28V26H4zM4 12H28V14H4zM4 18H28V20H4z"></path></svg>`;
});
const Menu$1 = Menu;
const shouldRenderHamburgerMenu = writable(false);
const isSideNavCollapsed = writable(false);
const isSideNavRail = writable(false);
const HamburgerMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ariaLabel", "isOpen", "iconMenu", "iconClose", "ref"]);
  let { ariaLabel = void 0 } = $$props;
  let { isOpen = false } = $$props;
  let { iconMenu = Menu$1 } = $$props;
  let { iconClose = Close } = $$props;
  let { ref = null } = $$props;
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.iconMenu === void 0 && $$bindings.iconMenu && iconMenu !== void 0)
    $$bindings.iconMenu(iconMenu);
  if ($$props.iconClose === void 0 && $$bindings.iconClose && iconClose !== void 0)
    $$bindings.iconClose(iconClose);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<button${spread(
    [
      { type: "button" },
      { title: escape_attribute_value(ariaLabel) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--header__action bx--header__menu-trigger bx--header__menu-toggle"
    }
  )}${add_attribute("this", ref, 0)}>${validate_component((isOpen ? iconClose : iconMenu) || missing_component, "svelte:component").$$render($$result, { size: 20 }, {}, {})}</button>`;
});
const HamburgerMenu$1 = HamburgerMenu;
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let $$restProps = compute_rest_props($$props, [
    "expandedByDefault",
    "isSideNavOpen",
    "uiShellAriaLabel",
    "href",
    "company",
    "platformName",
    "persistentHamburgerMenu",
    "expansionBreakpoint",
    "ref",
    "iconMenu",
    "iconClose"
  ]);
  let $$slots = compute_slots(slots);
  let $shouldRenderHamburgerMenu, $$unsubscribe_shouldRenderHamburgerMenu;
  $$unsubscribe_shouldRenderHamburgerMenu = subscribe(shouldRenderHamburgerMenu, (value) => $shouldRenderHamburgerMenu = value);
  let { expandedByDefault = true } = $$props;
  let { isSideNavOpen = false } = $$props;
  let { uiShellAriaLabel = void 0 } = $$props;
  let { href = void 0 } = $$props;
  let { company = void 0 } = $$props;
  let { platformName = "" } = $$props;
  let { persistentHamburgerMenu = false } = $$props;
  let { expansionBreakpoint = 1056 } = $$props;
  let { ref = null } = $$props;
  let { iconMenu = Menu$1 } = $$props;
  let { iconClose = Close } = $$props;
  let winWidth = void 0;
  if ($$props.expandedByDefault === void 0 && $$bindings.expandedByDefault && expandedByDefault !== void 0)
    $$bindings.expandedByDefault(expandedByDefault);
  if ($$props.isSideNavOpen === void 0 && $$bindings.isSideNavOpen && isSideNavOpen !== void 0)
    $$bindings.isSideNavOpen(isSideNavOpen);
  if ($$props.uiShellAriaLabel === void 0 && $$bindings.uiShellAriaLabel && uiShellAriaLabel !== void 0)
    $$bindings.uiShellAriaLabel(uiShellAriaLabel);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.company === void 0 && $$bindings.company && company !== void 0)
    $$bindings.company(company);
  if ($$props.platformName === void 0 && $$bindings.platformName && platformName !== void 0)
    $$bindings.platformName(platformName);
  if ($$props.persistentHamburgerMenu === void 0 && $$bindings.persistentHamburgerMenu && persistentHamburgerMenu !== void 0)
    $$bindings.persistentHamburgerMenu(persistentHamburgerMenu);
  if ($$props.expansionBreakpoint === void 0 && $$bindings.expansionBreakpoint && expansionBreakpoint !== void 0)
    $$bindings.expansionBreakpoint(expansionBreakpoint);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.iconMenu === void 0 && $$bindings.iconMenu && iconMenu !== void 0)
    $$bindings.iconMenu(iconMenu);
  if ($$props.iconClose === void 0 && $$bindings.iconClose && iconClose !== void 0)
    $$bindings.iconClose(iconClose);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    isSideNavOpen = expandedByDefault && winWidth >= expansionBreakpoint && !persistentHamburgerMenu;
    ariaLabel = company ? `${company} ` : "" + (uiShellAriaLabel || $$props["aria-label"] || platformName);
    $$rendered = ` <header${add_attribute("aria-label", ariaLabel, 0)}${add_classes("bx--header".trim())}>${slots["skip-to-content"] ? slots["skip-to-content"]({}) : ``} ${$shouldRenderHamburgerMenu && winWidth < expansionBreakpoint || persistentHamburgerMenu ? `${validate_component(HamburgerMenu$1, "HamburgerMenu").$$render(
      $$result,
      {
        iconClose,
        iconMenu,
        isOpen: isSideNavOpen
      },
      {
        isOpen: ($$value) => {
          isSideNavOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} <a${spread([{ href: escape_attribute_value(href) }, escape_object($$restProps)], { classes: "bx--header__name" })}${add_attribute("this", ref, 0)}>${company || $$slots.company ? `<span${add_classes("bx--header__name--prefix".trim())}>${slots.company ? slots.company({}) : `${escape(company)} `}</span>` : ``} ${slots.platform ? slots.platform({}) : `${escape(platformName)}`}</a> ${slots.default ? slots.default({}) : ``}</header>`;
  } while (!$$settled);
  $$unsubscribe_shouldRenderHamburgerMenu();
  return $$rendered;
});
const Header$1 = Header;
const Switcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M14 4H18V8H14zM4 4H8V8H4zM24 4H28V8H24zM14 14H18V18H14zM4 14H8V18H4zM24 14H28V18H24zM14 24H18V28H14zM4 24H8V28H4zM24 24H28V28H24z"></path></svg>`;
});
const Switcher$1 = Switcher;
const HeaderAction_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".action-text.svelte-1wqhu12.svelte-1wqhu12{display:inline-flex;align-items:center;width:auto;padding:0 1rem 2px 1rem;font-size:0.875rem;line-height:1.28572;letter-spacing:0.16px;color:#f4f4f4}.action-text.svelte-1wqhu12>span.svelte-1wqhu12{margin-left:0.75rem}",
  map: null
};
const HeaderAction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "isOpen",
    "icon",
    "closeIcon",
    "text",
    "ref",
    "transition",
    "preventCloseOnClickOutside"
  ]);
  let { isOpen = false } = $$props;
  let { icon = Switcher$1 } = $$props;
  let { closeIcon = Close } = $$props;
  let { text = void 0 } = $$props;
  let { ref = null } = $$props;
  let { transition = { duration: 200 } } = $$props;
  let { preventCloseOnClickOutside = false } = $$props;
  createEventDispatcher();
  let refPanel = null;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.closeIcon === void 0 && $$bindings.closeIcon && closeIcon !== void 0)
    $$bindings.closeIcon(closeIcon);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.preventCloseOnClickOutside === void 0 && $$bindings.preventCloseOnClickOutside && preventCloseOnClickOutside !== void 0)
    $$bindings.preventCloseOnClickOutside(preventCloseOnClickOutside);
  $$result.css.add(css$1);
  return ` <button${spread([{ type: "button" }, escape_object($$restProps)], {
    classes: "bx--header__action " + (isOpen ? "bx--header__action--active" : "") + " " + (text ? "action-text" : "") + " svelte-1wqhu12"
  })}${add_attribute("this", ref, 0)}>${isOpen ? `${slots.closeIcon ? slots.closeIcon({}) : ` ${validate_component(closeIcon || missing_component, "svelte:component").$$render($$result, { size: 20 }, {}, {})} `}` : `${slots.icon ? slots.icon({}) : ` ${validate_component(icon || missing_component, "svelte:component").$$render($$result, { size: 20 }, {}, {})} `}`} ${slots.text ? slots.text({}) : ` ${text ? `<span class="svelte-1wqhu12">${escape(text)}</span>` : ``} `}</button> ${isOpen ? `<div${add_classes("bx--header-panel bx--header-panel--expanded".trim())}${add_attribute("this", refPanel, 0)}>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const HeaderAction$1 = HeaderAction;
const HeaderPanelDivider_svelte_svelte_type_style_lang = "";
const css = {
  code: "li.svelte-o2pm5c{margin:2rem 1rem 0;color:#525252}span.svelte-o2pm5c{font-size:0.75rem;line-height:1.3;letter-spacing:0.02rem;color:#c6c6c6}",
  map: null
};
const HeaderPanelDivider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  $$result.css.add(css);
  return `${$$slots.default ? `<li class="svelte-o2pm5c"><span class="svelte-o2pm5c">${slots.default ? slots.default({}) : ``}</span></li>` : ``} <hr${add_classes("bx--switcher__item--divider".trim())}>`;
});
const HeaderPanelDivider$1 = HeaderPanelDivider;
const HeaderPanelLinks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<ul${add_classes("bx--switcher__item".trim())}>${slots.default ? slots.default({}) : ``}</ul>`;
});
const HeaderPanelLinks$1 = HeaderPanelLinks;
const HeaderUtilities = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div${add_classes("bx--header__global".trim())}>${slots.default ? slots.default({}) : ``}</div>`;
});
const HeaderUtilities$1 = HeaderUtilities;
const SideNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["fixed", "rail", "ariaLabel", "isOpen", "expansionBreakpoint"]);
  let $isSideNavRail, $$unsubscribe_isSideNavRail;
  let $isSideNavCollapsed, $$unsubscribe_isSideNavCollapsed;
  $$unsubscribe_isSideNavRail = subscribe(isSideNavRail, (value) => $isSideNavRail = value);
  $$unsubscribe_isSideNavCollapsed = subscribe(isSideNavCollapsed, (value) => $isSideNavCollapsed = value);
  let { fixed = false } = $$props;
  let { rail = false } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { isOpen = false } = $$props;
  let { expansionBreakpoint = 1056 } = $$props;
  const dispatch = createEventDispatcher();
  let winWidth = void 0;
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.rail === void 0 && $$bindings.rail && rail !== void 0)
    $$bindings.rail(rail);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.expansionBreakpoint === void 0 && $$bindings.expansionBreakpoint && expansionBreakpoint !== void 0)
    $$bindings.expansionBreakpoint(expansionBreakpoint);
  {
    dispatch(isOpen ? "open" : "close");
  }
  set_store_value(isSideNavCollapsed, $isSideNavCollapsed = !isOpen, $isSideNavCollapsed);
  set_store_value(isSideNavRail, $isSideNavRail = rail, $isSideNavRail);
  $$unsubscribe_isSideNavRail();
  $$unsubscribe_isSideNavCollapsed();
  return ` ${!fixed ? `  <div${add_classes(("bx--side-nav__overlay " + (isOpen ? "bx--side-nav__overlay-active" : "")).trim())}${add_styles({ "z-index": isOpen ? 6e3 : void 0 })}></div>` : ``} <nav${spread(
    [
      {
        "aria-hidden": escape_attribute_value(!isOpen)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--side-nav__navigation bx--side-nav bx--side-nav--ux " + ((rail && winWidth >= expansionBreakpoint ? false : isOpen) ? "bx--side-nav--expanded" : "") + " " + (!isOpen && !rail ? "bx--side-nav--collapsed" : "") + " " + (rail ? "bx--side-nav--rail" : "")
    }
  )}>${slots.default ? slots.default({}) : ``}</nav>`;
});
const SideNav$1 = SideNav;
const SideNavItems = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<ul${add_classes("bx--side-nav__items".trim())}>${slots.default ? slots.default({}) : ``}</ul>`;
});
const SideNavItems$1 = SideNavItems;
const SideNavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isSelected", "href", "text", "icon", "ref"]);
  let $$slots = compute_slots(slots);
  let { isSelected = false } = $$props;
  let { href = void 0 } = $$props;
  let { text = void 0 } = $$props;
  let { icon = void 0 } = $$props;
  let { ref = null } = $$props;
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<li${add_classes("bx--side-nav__item".trim())}><a${spread(
    [
      {
        "aria-current": escape_attribute_value(isSelected ? "page" : void 0)
      },
      { href: escape_attribute_value(href) },
      {
        rel: escape_attribute_value($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--side-nav__link " + (isSelected ? "bx--side-nav__link--current" : "")
    }
  )}${add_attribute("this", ref, 0)}>${$$slots.icon || icon ? `<div${add_classes("bx--side-nav__icon bx--side-nav__icon--small".trim())}>${slots.icon ? slots.icon({}) : ` ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} `}</div>` : ``} <span${add_classes("bx--side-nav__link-text".trim())}>${slots.default ? slots.default({}) : ` ${escape(text)} `}</span></a></li>`;
});
const SideNavLink$1 = SideNavLink;
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let unsetLeftMargin;
  let $$restProps = compute_rest_props($$props, ["id"]);
  let $isSideNavRail, $$unsubscribe_isSideNavRail;
  let $isSideNavCollapsed, $$unsubscribe_isSideNavCollapsed;
  $$unsubscribe_isSideNavRail = subscribe(isSideNavRail, (value) => $isSideNavRail = value);
  $$unsubscribe_isSideNavCollapsed = subscribe(isSideNavCollapsed, (value) => $isSideNavCollapsed = value);
  let { id = "main-content" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  unsetLeftMargin = $isSideNavCollapsed && !$isSideNavRail;
  $$unsubscribe_isSideNavRail();
  $$unsubscribe_isSideNavCollapsed();
  return `<main${spread([{ id: escape_attribute_value(id) }, escape_object($$restProps)], {
    classes: "bx--content",
    styles: {
      "margin-left": unsetLeftMargin ? 0 : void 0
    }
  })}>${slots.default ? slots.default({}) : ``}</main>`;
});
const Content$1 = Content;
const SkipToContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "tabindex"]);
  let { href = "#main-content" } = $$props;
  let { tabindex = "0" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  return `<a${spread(
    [
      { href: escape_attribute_value(href) },
      {
        tabindex: escape_attribute_value(tabindex)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--skip-to-content"
    }
  )}>${slots.default ? slots.default({}) : `Skip to main content`}</a>`;
});
const SkipToContent$1 = SkipToContent;
const Group = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M31 30H29V27a3 3 0 00-3-3H22a3 3 0 00-3 3v3H17V27a5 5 0 015-5h4a5 5 0 015 5zM24 12a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0024 10zM15 22H13V19a3 3 0 00-3-3H6a3 3 0 00-3 3v3H1V19a5 5 0 015-5h4a5 5 0 015 5zM8 4A3 3 0 115 7 3 3 0 018 4M8 2a5 5 0 105 5A5 5 0 008 2z"></path></svg>`;
});
const FlightInternational = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16,28a5.3257,5.3257,0,0,1-.6714-.044A21.7855,21.7855,0,0,1,12.0332,17H29.95c.0236-.3315.05-.6626.05-1A14,14,0,1,0,16,30ZM27.9492,15H21.9631A24.3247,24.3247,0,0,0,19.21,4.4492,12.0123,12.0123,0,0,1,27.9492,15ZM16.6714,4.0439A21.7855,21.7855,0,0,1,19.9668,15H12.0332A21.7855,21.7855,0,0,1,15.3286,4.0439,5.159,5.159,0,0,1,16.6714,4.0439ZM12.79,4.4492A24.3275,24.3275,0,0,0,10.0369,15H4.0508A12.0126,12.0126,0,0,1,12.79,4.4492ZM4.0508,17h5.9861A24.3275,24.3275,0,0,0,12.79,27.5508,12.0126,12.0126,0,0,1,4.0508,17Z"></path><path fill-rule="evenodd" d="M25,25l5,2V25l-5-2.5V20a1,1,0,0,0-2,0v2.5L18,25v2l5-2v3.5L21,30v1l3-1,3,1V30l-2-1.5Z"></path></svg>`;
});
const Hotel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M9.5,15A1.5,1.5,0,1,1,8,16.5,1.5,1.5,0,0,1,9.5,15m0-2A3.5,3.5,0,1,0,13,16.5,3.5,3.5,0,0,0,9.5,13Z"></path><path d="M25,14H17a2,2,0,0,0-2,2v6H4V10.6L16,4.14l12.53,6.74.94-1.76-13-7a1,1,0,0,0-.94,0l-13,7A1,1,0,0,0,2,10V30H4V24H28v6h2V19A5,5,0,0,0,25,14Zm-8,8V16h8a3,3,0,0,1,3,3v3Z"></path></svg>`;
});
const Currency = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M21,12V10H17V7H15v3H13a2.002,2.002,0,0,0-2,2v3a2.002,2.002,0,0,0,2,2h6v3H11v2h4v3h2V22h2a2.0023,2.0023,0,0,0,2-2V17a2.002,2.002,0,0,0-2-2H13V12Z"></path><path d="M16,4A12,12,0,1,1,4,16,12.0353,12.0353,0,0,1,16,4m0-2A14,14,0,1,0,30,16,14.0412,14.0412,0,0,0,16,2Z"></path></svg>`;
});
const ChartColumnTarget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M27 28V6H19V28H15V14H7V28H4V2H2V28a2 2 0 002 2H30V28zM13 28H9V16h4zm12 0H21V8h4zM19 2H27V4H19z"></path><path d="M7 10H15V12H7z"></path></svg>`;
});
const ChangeCatalog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M24 24v2h2.4592A5.94 5.94 0 0122 28a6.0066 6.0066 0 01-6-6H14a7.9841 7.9841 0 0014 5.2651V30h2V24zM22 14a8.04 8.04 0 00-6 2.7349V14H14v6h6V18H17.5408A5.94 5.94 0 0122 16a6.0066 6.0066 0 016 6h2A8.0092 8.0092 0 0022 14z"></path><path d="M12,28H6V24H8V22H6V17H8V15H6V10H8V8H6V4H24v8h2V4a2,2,0,0,0-2-2H6A2,2,0,0,0,4,4V8H2v2H4v5H2v2H4v5H2v2H4v4a2,2,0,0,0,2,2h6Z"></path></svg>`;
});
const IbmCloudAppId = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M20 18h-6c-1.6569 0-3 1.3431-3 3v2h2v-2c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1v2h2v-2c0-1.6569-1.3431-3-3-3zM17 17c2.2091 0 4-1.7909 4-4s-1.7909-4-4-4-4 1.7909-4 4 1.7909 4 4 4zm0-6c1.1046 0 2 .8954 2 2s-.8954 2-2 2-2-.8954-2-2 .8954-2 2-2z"></path><path d="M17 30c-7.7197 0-14-6.2804-14-14h2c0 6.6168 5.3831 12 12 12 5.2263 0 9.8162-3.3385 11.4214-8.3074l1.9033.6147c-1.873 5.7975-7.2278 9.6926-13.3247 9.6926zM31 16h-2c0-6.6168-5.3833-12-12-12V2c7.7197 0 14 6.2804 14 14zM6 14l-2.1387-1.0127c-1.7383-.8223-2.8613-2.5967-2.8613-4.5195V2H11v6.4678c0 1.9229-1.123 3.6973-2.8613 4.5195l-2.1387 1.0127zM3 4v4.4678c0 1.1533.6738 2.2178 1.7168 2.7109l1.2832.6074 1.2832-.6074c1.043-.4932 1.7168-1.5576 1.7168-2.7109V4H3z"></path></svg>`;
});
const SideNav_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const navigation = [
    {
      title: "Clientes",
      href: "/clientes",
      icon: Group
    },
    {
      title: "Paquetes",
      href: "/paquetes",
      icon: FlightInternational
    },
    {
      title: "Hoteles",
      href: "/hotels",
      icon: Hotel
    },
    {
      title: "Ventas",
      href: "/ventas",
      icon: Currency
    },
    {
      title: "Reportes",
      href: "/reportes",
      icon: ChartColumnTarget
    },
    {
      title: "Auditoría",
      href: "/audit",
      icon: ChangeCatalog
    },
    {
      title: "Cuentas",
      href: "/users",
      icon: IbmCloudAppId
    }
  ];
  $$unsubscribe_page();
  return `${validate_component(SideNav$1, "SideNav").$$render(
    $$result,
    {
      rail: true,
      "aria-hidden": "false",
      ariaLabel: "sidebar"
    },
    {},
    {
      default: () => {
        return `${validate_component(SideNavItems$1, "SideNavItems").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(SideNavLink$1, "SideNavLink").$$render(
              $$result,
              {
                href: "/",
                text: "Inicio",
                icon: Home,
                isSelected: $page.url.pathname === "/" ? true : false
              },
              {},
              {}
            )} ${each(navigation, (navItem) => {
              return `${validate_component(SideNavLink$1, "SideNavLink").$$render(
                $$result,
                {
                  text: navItem.title,
                  href: navItem.href,
                  isSelected: $page.url.pathname.includes(navItem.href.replace(/^\//, "")) ? true : false,
                  icon: navItem.icon
                },
                {},
                {}
              )}`;
            })}`;
          }
        })}`;
      }
    }
  )}`;
});
const Notification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M28.7071,19.293,26,16.5859V13a10.0136,10.0136,0,0,0-9-9.9492V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.2929,19.293A1,1,0,0,0,3,20v3a1,1,0,0,0,1,1h7v.7768a5.152,5.152,0,0,0,4.5,5.1987A5.0057,5.0057,0,0,0,21,25V24h7a1,1,0,0,0,1-1V20A1,1,0,0,0,28.7071,19.293ZM19,25a3,3,0,0,1-6,0V24h6Zm8-3H5V20.4141L7.707,17.707A1,1,0,0,0,8,17V13a8,8,0,0,1,16,0v4a1,1,0,0,0,.293.707L27,20.4141Z"></path></svg>`;
});
const notificationStore = writable({ title: "", subtitle: "", open: false });
const Notifications = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let openModal = false;
  let notifications = [];
  onDestroy(() => {
    pb.collection("notificaciones").unsubscribe();
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(HeaderAction$1, "HeaderAction").$$render(
      $$result,
      {
        "aria-label": "Notificaciones",
        icon: Notification
      },
      {},
      {
        default: () => {
          return `${validate_component(HeaderPanelLinks$1, "HeaderPanelLinks").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(HeaderPanelDivider$1, "HeaderPanelDivider").$$render($$result, {}, {}, {
                default: () => {
                  return `Notificaciones`;
                }
              })} <section class="h-[500px] overflow-scroll">${each(notifications, (notification) => {
                return `${validate_component(ClickableTile, "ClickableTile").$$render(
                  $$result,
                  {
                    light: notification.isNew ? true : false,
                    href: "/"
                  },
                  {},
                  {
                    default: () => {
                      return `<p>Cliente interesado en viajar a <strong>${escape(notification.expand.paquete.nombre)}</strong></p> <small class="text-muted">${new Date(notification.created).toLocaleDateString("es-ES", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                      }) === (/* @__PURE__ */ new Date()).toLocaleDateString("es-ES", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                      }) ? `Hoy ${escape(new Date(notification.created).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }))}` : `${escape(new Date(notification.created).toLocaleDateString("es-ES", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      }))}`}</small> `;
                    }
                  }
                )}`;
              })}</section>`;
            }
          })}`;
        }
      }
    )} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        modalHeading: "Hay un cliente interesado en un paquete!",
        primaryButtonText: "Aceptar",
        secondaryButtonText: "Cancelar",
        open: openModal
      },
      {
        open: ($$value) => {
          openModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const app = "";
const g100 = "";
const Logout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M6,30H18a2.0023,2.0023,0,0,0,2-2V25H18v3H6V4H18V7h2V4a2.0023,2.0023,0,0,0-2-2H6A2.0023,2.0023,0,0,0,4,4V28A2.0023,2.0023,0,0,0,6,30Z"></path><path d="M20.586 20.586L24.172 17 10 17 10 15 24.172 15 20.586 11.414 22 10 28 16 22 22 20.586 20.586z"></path></svg>`;
});
const UserAvatarFilledAlt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16,8a5,5,0,1,0,5,5A5,5,0,0,0,16,8Z"></path><path d="M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2Zm7.9925,22.9258A5.0016,5.0016,0,0,0,19,20H13a5.0016,5.0016,0,0,0-4.9925,4.9258,12,12,0,1,1,15.985,0Z"></path></svg>`;
});
const Header_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let isSideNavOpen = false;
  let isOpen1 = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Header$1, "Header").$$render(
      $$result,
      {
        href: "/",
        uiShellAriaLabel: "Del Valle",
        company: "Del Valle",
        platformName: "Empresa de turismo",
        isSideNavOpen
      },
      {
        isSideNavOpen: ($$value) => {
          isSideNavOpen = $$value;
          $$settled = false;
        }
      },
      {
        "skip-to-content": () => {
          return `${validate_component(SkipToContent$1, "SkipToContent").$$render($$result, {}, {}, {})} `;
        },
        default: () => {
          return `${validate_component(HeaderUtilities$1, "HeaderUtilities").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(HeaderAction$1, "HeaderAction").$$render(
                $$result,
                {
                  "aria-label": "User Avatar",
                  icon: UserAvatarFilledAlt,
                  closeIcon: UserAvatarFilledAlt,
                  isOpen: isOpen1
                },
                {
                  isOpen: ($$value) => {
                    isOpen1 = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `${validate_component(HeaderPanelLinks$1, "HeaderPanelLinks").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(HeaderPanelDivider$1, "HeaderPanelDivider").$$render($$result, {}, {}, {
                          default: () => {
                            return `Cuenta`;
                          }
                        })} <div class="w-full flex flex-col items-center justify-center"><img class="w-32 rounded-full"${add_attribute(
                          "src",
                          data.user?.avatar ? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar) : `https://ui-avatars.com/api/?name=${data.user?.name}`,
                          0
                        )} alt="user avatar" id="avatar-preview"> <p>${escape(data?.user?.username)}</p> <div></div> <br> <h4>${escape(data?.user?.name)} ${escape(data?.user?.apellido)}</h4> <form action="/logout" method="POST" class="mt-16 w-full">${validate_component(Button, "Button").$$render(
                          $$result,
                          {
                            type: "submit",
                            icon: Logout,
                            class: "w-full"
                          },
                          {},
                          {
                            default: () => {
                              return `Cerrar sesión`;
                            }
                          }
                        )}</form></div>`;
                      }
                    })}`;
                  }
                }
              )} ${validate_component(Notifications, "Notifications").$$render($$result, {}, {}, {})}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let notification;
  let title;
  let subtitle;
  let $notificationStore, $$unsubscribe_notificationStore;
  $$unsubscribe_notificationStore = subscribe(notificationStore, (value) => $notificationStore = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    notification = $notificationStore.open;
    title = $notificationStore.title;
    subtitle = $notificationStore.subtitle;
    $$rendered = `${notification ? `<div class="absolute top-10">${validate_component(ToastNotification$1, "ToastNotification").$$render(
      $$result,
      {
        kind: "info",
        caption: (/* @__PURE__ */ new Date()).toLocaleString(),
        title,
        subtitle
      },
      {
        title: ($$value) => {
          title = $$value;
          $$settled = false;
        },
        subtitle: ($$value) => {
          subtitle = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_notificationStore();
  return $$rendered;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-17jkymp_START -->${$$result.title = `<title>Del Valle Turismo</title>`, ""}<meta name="description" content="Software de gestión y control de ventas de paquetes turisticos"><!-- HEAD_svelte-17jkymp_END -->`, ""} ${!data.user ? `${slots.default ? slots.default({}) : ``}` : `${validate_component(Header_1, "Header").$$render(
      $$result,
      { data },
      {
        data: ($$value) => {
          data = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(SideNav_1, "SideNav").$$render($$result, {}, {}, {})} <div class="absolute w-full flex justify-end rigth-4 z-10">${validate_component(Toast, "Toast").$$render($$result, {}, {}, {})}</div> ${validate_component(Content$1, "Content").$$render($$result, { class: "z-0" }, {}, {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    })} <button class="fixed bottom-4 right-4 z-50 p-4 rounded-full bg-primary text-white" data-svelte-h="svelte-20ltbn"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg></button>`}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Layout as default
};
