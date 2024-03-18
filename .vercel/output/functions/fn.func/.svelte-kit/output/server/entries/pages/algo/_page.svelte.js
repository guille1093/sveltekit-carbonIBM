import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<form action="/api/email" method="post" data-svelte-h="svelte-66tx55"><button type="submit">Enviar</button></form>`;
});
export {
  Page as default
};
