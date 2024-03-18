import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, i as add_attribute, h as add_classes, f as escape } from "./ssr.js";
const FormGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["noMargin", "invalid", "message", "messageText", "legendText", "legendId"]);
  let { noMargin = false } = $$props;
  let { invalid = false } = $$props;
  let { message = false } = $$props;
  let { messageText = "" } = $$props;
  let { legendText = "" } = $$props;
  let { legendId = "" } = $$props;
  if ($$props.noMargin === void 0 && $$bindings.noMargin && noMargin !== void 0)
    $$bindings.noMargin(noMargin);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.messageText === void 0 && $$bindings.messageText && messageText !== void 0)
    $$bindings.messageText(messageText);
  if ($$props.legendText === void 0 && $$bindings.legendText && legendText !== void 0)
    $$bindings.legendText(legendText);
  if ($$props.legendId === void 0 && $$bindings.legendId && legendId !== void 0)
    $$bindings.legendId(legendId);
  return `  <fieldset${spread(
    [
      {
        "data-invalid": escape_attribute_value(invalid || void 0)
      },
      {
        "aria-labelledby": escape_attribute_value($$restProps["aria-labelledby"] || legendId)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--fieldset " + (noMargin ? "bx--fieldset--no-margin" : "")
    }
  )}>${legendText ? `<legend${add_attribute("id", legendId || $$restProps["aria-labelledby"], 0)}${add_classes("bx--label".trim())}>${escape(legendText)}</legend>` : ``} ${slots.default ? slots.default({}) : ``} ${message ? `<div${add_classes("bx--form__requirement".trim())}>${escape(messageText)}</div>` : ``}</fieldset>`;
});
const FormGroup$1 = FormGroup;
export {
  FormGroup$1 as F
};
