import { c as create_ssr_component, a as compute_rest_props, g as createEventDispatcher, q as getContext, b as spread, d as escape_object, o as each, v as validate_component, f as escape, i as add_attribute, h as add_classes, e as escape_attribute_value } from "./ssr.js";
import { B as Button } from "./Button.js";
import { E as ErrorFilled, C as CheckmarkFilled } from "./ErrorFilled.js";
const ModalFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "primaryButtonText",
    "primaryButtonIcon",
    "primaryButtonDisabled",
    "primaryClass",
    "secondaryButtonText",
    "secondaryButtons",
    "secondaryClass",
    "danger"
  ]);
  let { primaryButtonText = "" } = $$props;
  let { primaryButtonIcon = void 0 } = $$props;
  let { primaryButtonDisabled = false } = $$props;
  let { primaryClass = void 0 } = $$props;
  let { secondaryButtonText = "" } = $$props;
  let { secondaryButtons = [] } = $$props;
  let { secondaryClass = void 0 } = $$props;
  let { danger = false } = $$props;
  createEventDispatcher();
  getContext("ComposedModal");
  if ($$props.primaryButtonText === void 0 && $$bindings.primaryButtonText && primaryButtonText !== void 0)
    $$bindings.primaryButtonText(primaryButtonText);
  if ($$props.primaryButtonIcon === void 0 && $$bindings.primaryButtonIcon && primaryButtonIcon !== void 0)
    $$bindings.primaryButtonIcon(primaryButtonIcon);
  if ($$props.primaryButtonDisabled === void 0 && $$bindings.primaryButtonDisabled && primaryButtonDisabled !== void 0)
    $$bindings.primaryButtonDisabled(primaryButtonDisabled);
  if ($$props.primaryClass === void 0 && $$bindings.primaryClass && primaryClass !== void 0)
    $$bindings.primaryClass(primaryClass);
  if ($$props.secondaryButtonText === void 0 && $$bindings.secondaryButtonText && secondaryButtonText !== void 0)
    $$bindings.secondaryButtonText(secondaryButtonText);
  if ($$props.secondaryButtons === void 0 && $$bindings.secondaryButtons && secondaryButtons !== void 0)
    $$bindings.secondaryButtons(secondaryButtons);
  if ($$props.secondaryClass === void 0 && $$bindings.secondaryClass && secondaryClass !== void 0)
    $$bindings.secondaryClass(secondaryClass);
  if ($$props.danger === void 0 && $$bindings.danger && danger !== void 0)
    $$bindings.danger(danger);
  return `<div${spread([escape_object($$restProps)], {
    classes: "bx--modal-footer " + (secondaryButtons.length === 2 ? "bx--modal-footer--three-button" : "")
  })}>${secondaryButtons.length > 0 ? `${each(secondaryButtons, (button) => {
    return `${validate_component(Button, "Button").$$render($$result, { kind: "secondary" }, {}, {
      default: () => {
        return `${escape(button.text)} `;
      }
    })}`;
  })}` : `${secondaryButtonText ? `${validate_component(Button, "Button").$$render($$result, { kind: "secondary", class: secondaryClass }, {}, {
    default: () => {
      return `${escape(secondaryButtonText)}`;
    }
  })}` : ``}`} ${primaryButtonText ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      kind: danger ? "danger" : "primary",
      disabled: primaryButtonDisabled,
      class: primaryClass,
      icon: primaryButtonIcon
    },
    {},
    {
      default: () => {
        return `${escape(primaryButtonText)}`;
      }
    }
  )}` : ``} ${slots.default ? slots.default({}) : ``}</div>`;
});
const ModalFooter$1 = ModalFooter;
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let spinnerRadius;
  let $$restProps = compute_rest_props($$props, ["small", "active", "withOverlay", "description"]);
  let { small = false } = $$props;
  let { active = true } = $$props;
  let { withOverlay = true } = $$props;
  let { description = "loading" } = $$props;
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.withOverlay === void 0 && $$bindings.withOverlay && withOverlay !== void 0)
    $$bindings.withOverlay(withOverlay);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  spinnerRadius = small ? "42" : "44";
  return `${withOverlay ? `<div${spread([escape_object($$restProps)], {
    classes: "bx--loading-overlay " + (!active ? "bx--loading-overlay--stop" : "")
  })}><div aria-atomic="true"${add_attribute("aria-live", active ? "assertive" : "off", 0)}${add_classes(("bx--loading " + (small ? "bx--loading--small" : "") + " " + (!active ? "bx--loading--stop" : "")).trim())}><svg viewBox="0 0 100 100"${add_classes("bx--loading__svg".trim())}><title>${escape(description)}</title>${small ? `<circle cx="50%" cy="50%"${add_attribute("r", spinnerRadius, 0)}${add_classes("bx--loading__background".trim())}></circle>` : ``}<circle cx="50%" cy="50%"${add_attribute("r", spinnerRadius, 0)}${add_classes("bx--loading__stroke".trim())}></circle></svg></div></div>` : `<div${spread(
    [
      { "aria-atomic": "true" },
      {
        "aria-live": escape_attribute_value(active ? "assertive" : "off")
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--loading " + (small ? "bx--loading--small" : "") + " " + (!active ? "bx--loading--stop" : "")
    }
  )}><svg viewBox="0 0 100 100"${add_classes("bx--loading__svg".trim())}><title>${escape(description)}</title>${small ? `<circle cx="50%" cy="50%"${add_attribute("r", spinnerRadius, 0)}${add_classes("bx--loading__background".trim())}></circle>` : ``}<circle cx="50%" cy="50%"${add_attribute("r", spinnerRadius, 0)}${add_classes("bx--loading__stroke".trim())}></circle></svg></div>`}`;
});
const Loading$1 = Loading;
const InlineLoading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["status", "description", "iconDescription", "successDelay"]);
  let { status = "active" } = $$props;
  let { description = void 0 } = $$props;
  let { iconDescription = void 0 } = $$props;
  let { successDelay = 1500 } = $$props;
  createEventDispatcher();
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.successDelay === void 0 && $$bindings.successDelay && successDelay !== void 0)
    $$bindings.successDelay(successDelay);
  return `  <div${spread([{ "aria-live": "assertive" }, escape_object($$restProps)], {
    classes: "bx--inline-loading"
  })}><div${add_classes("bx--inline-loading__animation".trim())}>${status === "error" ? `${validate_component(ErrorFilled, "ErrorFilled").$$render(
    $$result,
    {
      class: "bx--inline-loading--error",
      title: iconDescription || status
    },
    {},
    {}
  )}` : `${status === "finished" ? `${validate_component(CheckmarkFilled, "CheckmarkFilled").$$render(
    $$result,
    {
      class: "bx--inline-loading__checkmark-container",
      title: iconDescription || status
    },
    {},
    {}
  )}` : `${status === "inactive" || status === "active" ? `${validate_component(Loading$1, "Loading").$$render(
    $$result,
    {
      small: true,
      description: iconDescription,
      withOverlay: false,
      active: status === "active"
    },
    {},
    {}
  )}` : ``}`}`}</div> ${description ? `<div${add_classes("bx--inline-loading__text".trim())}>${escape(description)}</div>` : ``}</div>`;
});
const InlineLoading$1 = InlineLoading;
export {
  InlineLoading$1 as I,
  ModalFooter$1 as M
};
