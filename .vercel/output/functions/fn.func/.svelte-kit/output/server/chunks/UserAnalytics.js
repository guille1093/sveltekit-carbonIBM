import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object } from "./ssr.js";
const UserAnalytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["title"]);
  let { title = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || $$props["title"];
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { preserveAspectRatio: "xMidYMid meet" },
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { width: "64" },
      { height: "64" },
      { fill: "currentColor" },
      { title: escape_attribute_value(title) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}><path d="M31,29.36H10c-0.199,0-0.36-0.161-0.36-0.36v-4.646c-4.995-0.19-9-4.313-9-9.354	s4.005-9.163,9-9.353V3c0-0.199,0.161-0.36,0.36-0.36h21c0.199,0,0.36,0.161,0.36,0.36v26C31.36,29.199,31.199,29.36,31,29.36z M28.36,28.64h2.279V3.36H10.36v2.287c4.995,0.19,9,4.312,9,9.353c0,5.04-4.005,9.163-9,9.354v4.286h7.28V23	c0-0.199,0.161-0.36,0.36-0.36h4c0.199,0,0.36,0.161,0.36,0.36v5.64h1.279V16c0-0.199,0.161-0.36,0.36-0.36h4	c0.199,0,0.36,0.161,0.36,0.36L28.36,28.64L28.36,28.64z M24.36,28.64h3.279V16.36H24.36V28.64z M18.36,28.64h3.279v-5.28H18.36	V28.64z M3.749,20.959C5.324,22.609,7.544,23.64,10,23.64s4.677-1.03,6.251-2.682c-1.041-1.782-2.864-3.067-4.924-3.457	c-0.16-0.03-0.279-0.163-0.292-0.325s0.084-0.312,0.237-0.367c1.528-0.547,2.555-1.996,2.555-3.604c0-2.12-1.725-3.844-3.844-3.844	s-3.844,1.725-3.844,3.844c0,1.609,1.026,3.058,2.554,3.604c0.153,0.055,0.25,0.205,0.237,0.367s-0.132,0.295-0.292,0.325	C6.57,17.893,4.801,19.146,3.749,20.959z M12.427,17.041c1.783,0.577,3.333,1.773,4.321,3.349c1.183-1.479,1.891-3.354,1.891-5.39	c0-4.764-3.875-8.64-8.64-8.64S1.36,10.236,1.36,15c0,2.036,0.708,3.91,1.892,5.39c0.994-1.599,2.507-2.777,4.286-3.35	c-1.297-0.825-2.118-2.266-2.118-3.836c0-2.517,2.047-4.564,4.564-4.564s4.564,2.047,4.564,4.564	C14.547,14.774,13.725,16.216,12.427,17.041z M28,13.36h-6v-0.72h6V13.36z M28,10.36h-6V9.64h6V10.36z M28,7.36h-6V6.64h6V7.36z"></path></svg>`;
});
export {
  UserAnalytics as U
};
