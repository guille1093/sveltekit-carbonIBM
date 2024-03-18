import { c as create_ssr_component, a as compute_rest_props, g as createEventDispatcher, j as subscribe, s as setContext, l as set_store_value, b as spread, d as escape_object, i as add_attribute, f as escape, q as getContext, v as validate_component, e as escape_attribute_value, h as add_classes } from "./ssr.js";
import { w as writable } from "./index2.js";
import { C as Close } from "./Close.js";
const ComposedModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "open",
    "danger",
    "preventCloseOnClickOutside",
    "containerClass",
    "selectorPrimaryFocus",
    "ref"
  ]);
  let $openStore, $$unsubscribe_openStore;
  let $label, $$unsubscribe_label;
  let { size = void 0 } = $$props;
  let { open = false } = $$props;
  let { danger = false } = $$props;
  let { preventCloseOnClickOutside = false } = $$props;
  let { containerClass = "" } = $$props;
  let { selectorPrimaryFocus = "[data-modal-primary-focus]" } = $$props;
  let { ref = null } = $$props;
  const dispatch = createEventDispatcher();
  const label = writable(void 0);
  $$unsubscribe_label = subscribe(label, (value) => $label = value);
  let innerModal = null;
  setContext("ComposedModal", {
    closeModal: () => {
      open = false;
    },
    submit: () => {
      dispatch("submit");
      dispatch("click:button--primary");
    },
    declareRef: (ref2) => {
    },
    updateLabel: (value) => {
      label.set(value);
    }
  });
  const openStore = writable(open);
  $$unsubscribe_openStore = subscribe(openStore, (value) => $openStore = value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.danger === void 0 && $$bindings.danger && danger !== void 0)
    $$bindings.danger(danger);
  if ($$props.preventCloseOnClickOutside === void 0 && $$bindings.preventCloseOnClickOutside && preventCloseOnClickOutside !== void 0)
    $$bindings.preventCloseOnClickOutside(preventCloseOnClickOutside);
  if ($$props.containerClass === void 0 && $$bindings.containerClass && containerClass !== void 0)
    $$bindings.containerClass(containerClass);
  if ($$props.selectorPrimaryFocus === void 0 && $$bindings.selectorPrimaryFocus && selectorPrimaryFocus !== void 0)
    $$bindings.selectorPrimaryFocus(selectorPrimaryFocus);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  set_store_value(openStore, $openStore = open, $openStore);
  $$unsubscribe_openStore();
  $$unsubscribe_label();
  return ` <div${spread([{ role: "presentation" }, escape_object($$restProps)], {
    classes: "bx--modal " + (open ? "is-visible" : "") + " " + (danger ? "bx--modal--danger" : "")
  })}${add_attribute("this", ref, 0)}>  <div role="dialog" aria-modal="true"${add_attribute("aria-label", $$props["aria-label"] || $label || void 0, 0)} class="${[
    escape(containerClass, true),
    "bx--modal-container " + (size === "xs" ? "bx--modal-container--xs" : "") + " " + (size === "sm" ? "bx--modal-container--sm" : "") + " " + (size === "lg" ? "bx--modal-container--lg" : "")
  ].join(" ").trim()}"${add_attribute("this", innerModal, 0)}>${slots.default ? slots.default({}) : ``}</div></div>`;
});
const ComposedModal$1 = ComposedModal;
const ModalHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "title",
    "label",
    "labelClass",
    "titleClass",
    "closeClass",
    "closeIconClass",
    "iconDescription"
  ]);
  let { title = "" } = $$props;
  let { label = "" } = $$props;
  let { labelClass = "" } = $$props;
  let { titleClass = "" } = $$props;
  let { closeClass = "" } = $$props;
  let { closeIconClass = "" } = $$props;
  let { iconDescription = "Close" } = $$props;
  const { closeModal, updateLabel } = getContext("ComposedModal");
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelClass === void 0 && $$bindings.labelClass && labelClass !== void 0)
    $$bindings.labelClass(labelClass);
  if ($$props.titleClass === void 0 && $$bindings.titleClass && titleClass !== void 0)
    $$bindings.titleClass(titleClass);
  if ($$props.closeClass === void 0 && $$bindings.closeClass && closeClass !== void 0)
    $$bindings.closeClass(closeClass);
  if ($$props.closeIconClass === void 0 && $$bindings.closeIconClass && closeIconClass !== void 0)
    $$bindings.closeIconClass(closeIconClass);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  {
    updateLabel(label);
  }
  return `<div${spread([escape_object($$restProps)], { classes: "bx--modal-header" })}>${label ? `<h2 class="${[
    escape(labelClass, true),
    "bx--modal-header__label bx--type-delta"
  ].join(" ").trim()}">${escape(label)}</h2>` : ``} ${title ? `<h3 class="${[
    escape(titleClass, true),
    "bx--modal-header__heading bx--type-beta"
  ].join(" ").trim()}">${escape(title)}</h3>` : ``} ${slots.default ? slots.default({}) : ``} <button type="button"${add_attribute("aria-label", iconDescription, 0)} class="${[escape(closeClass, true), "bx--modal-close"].join(" ").trim()}">${validate_component(Close, "Close").$$render(
    $$result,
    {
      size: 20,
      class: "bx--modal-close__icon " + closeIconClass,
      "aria-hidden": "true"
    },
    {},
    {}
  )}</button></div>`;
});
const ModalHeader$1 = ModalHeader;
const ModalBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["hasForm", "hasScrollingContent"]);
  let { hasForm = false } = $$props;
  let { hasScrollingContent = false } = $$props;
  if ($$props.hasForm === void 0 && $$bindings.hasForm && hasForm !== void 0)
    $$bindings.hasForm(hasForm);
  if ($$props.hasScrollingContent === void 0 && $$bindings.hasScrollingContent && hasScrollingContent !== void 0)
    $$bindings.hasScrollingContent(hasScrollingContent);
  return ` <div${spread(
    [
      {
        tabindex: escape_attribute_value(hasScrollingContent ? "0" : void 0)
      },
      {
        role: escape_attribute_value(hasScrollingContent ? "region" : void 0)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--modal-content " + (hasForm ? "bx--modal-content--with-form" : "") + " " + (hasScrollingContent ? "bx--modal-scroll-content" : "")
    }
  )}>${slots.default ? slots.default({}) : ``}</div> ${hasScrollingContent ? `<div${add_classes("bx--modal-content--overflow-indicator".trim())}></div>` : ``}`;
});
const ModalBody$1 = ModalBody;
export {
  ComposedModal$1 as C,
  ModalHeader$1 as M,
  ModalBody$1 as a
};
