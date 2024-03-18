import * as server from '../entries/pages/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/3.0c493ac0.js","_app/immutable/chunks/scheduler.8d709755.js","_app/immutable/chunks/index.eb84c1c6.js","_app/immutable/chunks/each.7fe1bb46.js","_app/immutable/chunks/utils.fe61ee76.js","_app/immutable/chunks/ModalBody.1e95c8b1.js","_app/immutable/chunks/Button.734935ca.js","_app/immutable/chunks/index.59ccb19b.js","_app/immutable/chunks/modalStore.2393149c.js","_app/immutable/chunks/Close.6bba8c34.js","_app/immutable/chunks/ClickableTile.b4209db4.js","_app/immutable/chunks/StructuredListRow.11d4697f.js","_app/immutable/chunks/Bus.3ea5d11e.js","_app/immutable/chunks/Column.b254b044.js"];
export const stylesheets = [];
export const fonts = [];
