import { c as create_ssr_component, a as compute_rest_props, b as spread, d as escape_object } from "./ssr.js";
const Tile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["light"]);
  let { light = false } = $$props;
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  return `  <div${spread([escape_object($$restProps)], {
    classes: "bx--tile " + (light ? "bx--tile--light" : "")
  })}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Tile$1 = Tile;
export {
  Tile$1 as T
};
