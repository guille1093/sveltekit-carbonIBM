import { c as create_ssr_component, a as compute_rest_props, g as createEventDispatcher, j as subscribe, l as set_store_value, b as spread, e as escape_attribute_value, d as escape_object, i as add_attribute, h as add_classes, v as validate_component, f as escape, o as each } from "./ssr.js";
import { C as Close } from "./Close.js";
import { B as Button } from "./Button.js";
import { w as writable } from "./index2.js";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modalLabelId;
  let modalHeadingId;
  let modalBodyId;
  let ariaLabel;
  let $$restProps = compute_rest_props($$props, [
    "size",
    "open",
    "danger",
    "alert",
    "passiveModal",
    "modalHeading",
    "modalLabel",
    "modalAriaLabel",
    "iconDescription",
    "hasForm",
    "hasScrollingContent",
    "primaryButtonText",
    "primaryButtonDisabled",
    "primaryButtonIcon",
    "shouldSubmitOnEnter",
    "secondaryButtonText",
    "secondaryButtons",
    "selectorPrimaryFocus",
    "preventCloseOnClickOutside",
    "id",
    "ref"
  ]);
  let $openStore, $$unsubscribe_openStore;
  let { size = void 0 } = $$props;
  let { open = false } = $$props;
  let { danger = false } = $$props;
  let { alert = false } = $$props;
  let { passiveModal = false } = $$props;
  let { modalHeading = void 0 } = $$props;
  let { modalLabel = void 0 } = $$props;
  let { modalAriaLabel = void 0 } = $$props;
  let { iconDescription = "Close the modal" } = $$props;
  let { hasForm = false } = $$props;
  let { hasScrollingContent = false } = $$props;
  let { primaryButtonText = "" } = $$props;
  let { primaryButtonDisabled = false } = $$props;
  let { primaryButtonIcon = void 0 } = $$props;
  let { shouldSubmitOnEnter = true } = $$props;
  let { secondaryButtonText = "" } = $$props;
  let { secondaryButtons = [] } = $$props;
  let { selectorPrimaryFocus = "[data-modal-primary-focus]" } = $$props;
  let { preventCloseOnClickOutside = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  createEventDispatcher();
  let buttonRef = null;
  let innerModal = null;
  const openStore = writable(open);
  $$unsubscribe_openStore = subscribe(openStore, (value) => $openStore = value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.danger === void 0 && $$bindings.danger && danger !== void 0)
    $$bindings.danger(danger);
  if ($$props.alert === void 0 && $$bindings.alert && alert !== void 0)
    $$bindings.alert(alert);
  if ($$props.passiveModal === void 0 && $$bindings.passiveModal && passiveModal !== void 0)
    $$bindings.passiveModal(passiveModal);
  if ($$props.modalHeading === void 0 && $$bindings.modalHeading && modalHeading !== void 0)
    $$bindings.modalHeading(modalHeading);
  if ($$props.modalLabel === void 0 && $$bindings.modalLabel && modalLabel !== void 0)
    $$bindings.modalLabel(modalLabel);
  if ($$props.modalAriaLabel === void 0 && $$bindings.modalAriaLabel && modalAriaLabel !== void 0)
    $$bindings.modalAriaLabel(modalAriaLabel);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.hasForm === void 0 && $$bindings.hasForm && hasForm !== void 0)
    $$bindings.hasForm(hasForm);
  if ($$props.hasScrollingContent === void 0 && $$bindings.hasScrollingContent && hasScrollingContent !== void 0)
    $$bindings.hasScrollingContent(hasScrollingContent);
  if ($$props.primaryButtonText === void 0 && $$bindings.primaryButtonText && primaryButtonText !== void 0)
    $$bindings.primaryButtonText(primaryButtonText);
  if ($$props.primaryButtonDisabled === void 0 && $$bindings.primaryButtonDisabled && primaryButtonDisabled !== void 0)
    $$bindings.primaryButtonDisabled(primaryButtonDisabled);
  if ($$props.primaryButtonIcon === void 0 && $$bindings.primaryButtonIcon && primaryButtonIcon !== void 0)
    $$bindings.primaryButtonIcon(primaryButtonIcon);
  if ($$props.shouldSubmitOnEnter === void 0 && $$bindings.shouldSubmitOnEnter && shouldSubmitOnEnter !== void 0)
    $$bindings.shouldSubmitOnEnter(shouldSubmitOnEnter);
  if ($$props.secondaryButtonText === void 0 && $$bindings.secondaryButtonText && secondaryButtonText !== void 0)
    $$bindings.secondaryButtonText(secondaryButtonText);
  if ($$props.secondaryButtons === void 0 && $$bindings.secondaryButtons && secondaryButtons !== void 0)
    $$bindings.secondaryButtons(secondaryButtons);
  if ($$props.selectorPrimaryFocus === void 0 && $$bindings.selectorPrimaryFocus && selectorPrimaryFocus !== void 0)
    $$bindings.selectorPrimaryFocus(selectorPrimaryFocus);
  if ($$props.preventCloseOnClickOutside === void 0 && $$bindings.preventCloseOnClickOutside && preventCloseOnClickOutside !== void 0)
    $$bindings.preventCloseOnClickOutside(preventCloseOnClickOutside);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  set_store_value(openStore, $openStore = open, $openStore);
  modalLabelId = `bx--modal-header__label--modal-${id}`;
  modalHeadingId = `bx--modal-header__heading--modal-${id}`;
  modalBodyId = `bx--modal-body--${id}`;
  ariaLabel = modalLabel || $$props["aria-label"] || modalAriaLabel || modalHeading;
  $$unsubscribe_openStore();
  return ` <div${spread(
    [
      { role: "presentation" },
      { id: escape_attribute_value(id) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--modal " + (!passiveModal ? "bx--modal-tall" : "") + " " + (open ? "is-visible" : "") + " " + (danger ? "bx--modal--danger" : "")
    }
  )}${add_attribute("this", ref, 0)}><div tabindex="-1"${add_attribute(
    "role",
    alert ? passiveModal ? "alert" : "alertdialog" : "dialog",
    0
  )}${add_attribute("aria-describedby", alert && !passiveModal ? modalBodyId : void 0, 0)} aria-modal="true"${add_attribute("aria-label", ariaLabel, 0)}${add_classes(("bx--modal-container " + (size === "xs" ? "bx--modal-container--xs" : "") + " " + (size === "sm" ? "bx--modal-container--sm" : "") + " " + (size === "lg" ? "bx--modal-container--lg" : "")).trim())}${add_attribute("this", innerModal, 0)}><div${add_classes("bx--modal-header".trim())}>${passiveModal ? `<button type="button"${add_attribute("aria-label", iconDescription, 0)}${add_classes("bx--modal-close".trim())}${add_attribute("this", buttonRef, 0)}>${validate_component(Close, "Close").$$render(
    $$result,
    {
      size: 20,
      class: "bx--modal-close__icon",
      "aria-hidden": "true"
    },
    {},
    {}
  )}</button>` : ``} ${modalLabel ? `<h2${add_attribute("id", modalLabelId, 0)}${add_classes("bx--modal-header__label".trim())}>${slots.label ? slots.label({}) : `${escape(modalLabel)}`}</h2>` : ``} <h3${add_attribute("id", modalHeadingId, 0)}${add_classes("bx--modal-header__heading".trim())}>${slots.heading ? slots.heading({}) : `${escape(modalHeading)}`}</h3> ${!passiveModal ? `<button type="button"${add_attribute("aria-label", iconDescription, 0)}${add_classes("bx--modal-close".trim())}${add_attribute("this", buttonRef, 0)}>${validate_component(Close, "Close").$$render(
    $$result,
    {
      size: 20,
      class: "bx--modal-close__icon",
      "aria-hidden": "true"
    },
    {},
    {}
  )}</button>` : ``}</div>  <div${add_attribute("id", modalBodyId, 0)}${add_attribute("tabindex", hasScrollingContent ? "0" : void 0, 0)}${add_attribute("role", hasScrollingContent ? "region" : void 0, 0)}${add_attribute("aria-label", hasScrollingContent ? ariaLabel : void 0, 0)}${add_attribute("aria-labelledby", modalLabel ? modalLabelId : modalHeadingId, 0)}${add_classes(("bx--modal-content " + (hasForm ? "bx--modal-content--with-form" : "") + " " + (hasScrollingContent ? "bx--modal-scroll-content" : "")).trim())}>${slots.default ? slots.default({}) : ``}</div> ${hasScrollingContent ? `<div${add_classes("bx--modal-content--overflow-indicator".trim())}></div>` : ``} ${!passiveModal ? `<div${add_classes(("bx--modal-footer " + (secondaryButtons.length === 2 ? "bx--modal-footer--three-button" : "")).trim())}>${secondaryButtons.length > 0 ? `${each(secondaryButtons, (button) => {
    return `${validate_component(Button, "Button").$$render($$result, { kind: "secondary" }, {}, {
      default: () => {
        return `${escape(button.text)} `;
      }
    })}`;
  })}` : `${secondaryButtonText ? `${validate_component(Button, "Button").$$render($$result, { kind: "secondary" }, {}, {
    default: () => {
      return `${escape(secondaryButtonText)}`;
    }
  })}` : ``}`} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      kind: danger ? "danger" : "primary",
      disabled: primaryButtonDisabled,
      icon: primaryButtonIcon
    },
    {},
    {
      default: () => {
        return `${escape(primaryButtonText)}`;
      }
    }
  )}</div>` : ``}</div></div>`;
});
const Modal$1 = Modal;
export {
  Modal$1 as M
};
