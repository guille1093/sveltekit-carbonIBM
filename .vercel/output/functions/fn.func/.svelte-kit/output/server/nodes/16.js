import * as server from '../entries/pages/perfil/_page.server.js';

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/perfil/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/perfil/+page.server.js";
export const imports = ["_app/immutable/nodes/16.72355a89.js","_app/immutable/chunks/scheduler.8d709755.js","_app/immutable/chunks/index.eb84c1c6.js","_app/immutable/chunks/forms.2fc59014.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.ec46505f.js","_app/immutable/chunks/index.59ccb19b.js","_app/immutable/chunks/utils.fe61ee76.js","_app/immutable/chunks/Button.734935ca.js"];
export const stylesheets = [];
export const fonts = [];
