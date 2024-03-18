import { c as create_ssr_component, a as compute_rest_props, b as spread, d as escape_object, o as each, h as add_classes, n as add_styles, v as validate_component, s as setContext, q as getContext, i as add_attribute, f as escape } from "./ssr.js";
import { w as writable } from "./index2.js";
import { C as ChevronRight } from "./ChevronRight.js";
const SkeletonText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rows;
  let widthNum;
  let widthPx;
  let $$restProps = compute_rest_props($$props, ["lines", "heading", "paragraph", "width"]);
  let { lines = 3 } = $$props;
  let { heading = false } = $$props;
  let { paragraph = false } = $$props;
  let { width = "100%" } = $$props;
  const RANDOM = [0.973, 0.153, 0.567];
  if ($$props.lines === void 0 && $$bindings.lines && lines !== void 0)
    $$bindings.lines(lines);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.paragraph === void 0 && $$bindings.paragraph && paragraph !== void 0)
    $$bindings.paragraph(paragraph);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  rows = [];
  widthNum = parseInt(width, 10);
  widthPx = width.includes("px");
  {
    if (paragraph) {
      for (let i = 0; i < lines; i++) {
        const min = widthPx ? widthNum - 75 : 0;
        const max = widthPx ? widthNum : 75;
        const rand = Math.floor(RANDOM[i % 3] * (max - min + 1)) + min + "px";
        rows = [
          ...rows,
          {
            width: widthPx ? rand : `calc(${width} - ${rand})`
          }
        ];
      }
    }
  }
  return ` ${paragraph ? ` <div${spread([escape_object($$restProps)], {})}>${each(rows, ({ width: width2 }) => {
    return `<p${add_classes(("bx--skeleton__text " + (heading ? "bx--skeleton__heading" : "")).trim())}${add_styles({ width: width2 })}></p>`;
  })}</div>` : ` <p${spread([escape_object($$restProps)], {
    classes: "bx--skeleton__text " + (heading ? "bx--skeleton__heading" : ""),
    styles: { width }
  })}></p>`}`;
});
const SkeletonText$1 = SkeletonText;
const AccordionSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["count", "align", "size", "open"]);
  let { count = 4 } = $$props;
  let { align = "end" } = $$props;
  let { size = void 0 } = $$props;
  let { open = true } = $$props;
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  return `  <ul${spread([escape_object($$restProps)], {
    classes: "bx--skeleton bx--accordion " + (align === "start" ? "bx--accordion--start" : "") + " " + (align === "end" ? "bx--accordion--end" : "") + " " + (size === "sm" ? "bx--accordion--sm" : "") + " " + (size === "xl" ? "bx--accordion--xl" : "")
  })}>${open ? `<li${add_classes("bx--accordion__item bx--accordion__item--active".trim())}><span${add_classes("bx--accordion__heading".trim())}>${validate_component(ChevronRight, "ChevronRight").$$render($$result, { class: "bx--accordion__arrow" }, {}, {})} ${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { class: "bx--accordion__title" }, {}, {})}</span> <div${add_classes("bx--accordion__content".trim())}>${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { width: "90%" }, {}, {})} ${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { width: "80%" }, {}, {})} ${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { width: "95%" }, {}, {})}</div></li>` : ``} ${each(Array.from({ length: open ? count - 1 : count }, (_, i) => i), (item) => {
    return `<li${add_classes("bx--accordion__item".trim())}><span${add_classes("bx--accordion__heading".trim())}>${validate_component(ChevronRight, "ChevronRight").$$render($$result, { class: "bx--accordion__arrow" }, {}, {})} ${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { class: "bx--accordion__title" }, {}, {})}</span> </li>`;
  })}</ul>`;
});
const AccordionSkeleton$1 = AccordionSkeleton;
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["align", "size", "disabled", "skeleton"]);
  let { align = "end" } = $$props;
  let { size = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { skeleton = false } = $$props;
  const disableItems = writable(disabled);
  setContext("Accordion", { disableItems });
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  {
    disableItems.set(disabled);
  }
  return ` ${skeleton ? `${validate_component(AccordionSkeleton$1, "AccordionSkeleton").$$render($$result, Object.assign({}, $$restProps, { align }, { size }), {}, {})}` : ` <ul${spread([escape_object($$restProps)], {
    classes: "bx--accordion " + (align === "start" ? "bx--accordion--start" : "") + " " + (align === "end" ? "bx--accordion--end" : "") + " " + (size === "sm" ? "bx--accordion--sm" : "") + " " + (size === "xl" ? "bx--accordion--xl" : "")
  })}>${slots.default ? slots.default({}) : ``}</ul>`}`;
});
const Accordion$1 = Accordion;
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["title", "open", "disabled", "iconDescription"]);
  let { title = "title" } = $$props;
  let { open = false } = $$props;
  let { disabled = false } = $$props;
  let { iconDescription = "Expand/Collapse" } = $$props;
  let initialDisabled = disabled;
  const ctx = getContext("Accordion");
  ctx.disableItems.subscribe((value) => {
    if (!value && initialDisabled)
      return;
    disabled = value;
  });
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  return ` <li${spread([escape_object($$restProps)], {
    classes: "bx--accordion__item " + (open ? "bx--accordion__item--active" : "") + " " + (disabled ? "bx--accordion__item--disabled" : "") + "  "
  })}><button type="button"${add_attribute("title", iconDescription, 0)}${add_attribute("aria-expanded", open, 0)} ${disabled ? "disabled" : ""}${add_classes("bx--accordion__heading".trim())}>${validate_component(ChevronRight, "ChevronRight").$$render(
    $$result,
    {
      class: "bx--accordion__arrow",
      "aria-label": iconDescription
    },
    {},
    {}
  )} <div${add_classes("bx--accordion__title".trim())}>${slots.title ? slots.title({}) : `${escape(title)}`}</div></button> <div${add_classes("bx--accordion__content".trim())}>${slots.default ? slots.default({}) : ``}</div></li>`;
});
const AccordionItem$1 = AccordionItem;
export {
  Accordion$1 as A,
  AccordionItem$1 as a
};
