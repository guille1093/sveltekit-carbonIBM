import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object } from "./ssr.js";
const Bus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path d="M28,31.36h-3c-0.199,0-0.36-0.161-0.36-0.36v-3.64H7.36V31c0,0.199-0.161,0.36-0.36,0.36H4	c-0.199,0-0.36-0.161-0.36-0.36v-4h0.108c-0.666-0.418-1.108-1.158-1.108-2V3c0-1.301,1.059-2.36,2.36-2.36h22	c1.302,0,2.36,1.059,2.36,2.36v22c0,0.842-0.443,1.582-1.108,2h0.108v4C28.36,31.199,28.199,31.36,28,31.36z M25.36,30.64h2.279	v-3.368c-0.203,0.058-0.418,0.089-0.64,0.089h-1.64L25.36,30.64L25.36,30.64z M4.36,30.64h2.28v-3.28H5	c-0.222,0-0.437-0.031-0.64-0.089V30.64z M3.36,16.36V25c0,0.904,0.736,1.64,1.64,1.64h22c0.904,0,1.64-0.735,1.64-1.64v-8.64H3.36z M3.36,15.64h25.28V4.36H3.36V15.64z M3.36,3.64h25.28V3c0-0.904-0.735-1.64-1.64-1.64H5C4.096,1.36,3.36,2.096,3.36,3V3.64z M25,24.36c-1.302,0-2.36-1.059-2.36-2.36s1.059-2.36,2.36-2.36s2.36,1.059,2.36,2.36S26.302,24.36,25,24.36z M25,20.36	c-0.904,0-1.64,0.735-1.64,1.64s0.735,1.64,1.64,1.64s1.64-0.735,1.64-1.64S25.904,20.36,25,20.36z M7,24.36	c-1.301,0-2.36-1.059-2.36-2.36S5.699,19.64,7,19.64S9.36,20.698,9.36,22S8.301,24.36,7,24.36z M7,20.36	c-0.904,0-1.64,0.735-1.64,1.64S6.096,23.64,7,23.64S8.64,22.904,8.64,22S7.904,20.36,7,20.36z M21,23.36H11v-0.72h10V23.36z M21,21.36H11v-0.72h10V21.36z M21.688,13.644l-4-6.928l0.623-0.36l4,6.928L21.688,13.644z M31.36,11h-0.72V5h0.721L31.36,11	L31.36,11z M1.36,11H0.64V5h0.72V11z M22.688,10.912l-2-3.464l0.623-0.36l2,3.464L22.688,10.912z"></path></svg>`;
});
export {
  Bus as B
};
