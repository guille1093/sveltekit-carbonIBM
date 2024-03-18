import * as server from '../entries/pages/reportes/_page.server.js';

export const index = 17;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/reportes/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/reportes/+page.server.js";
export const imports = ["_app/immutable/nodes/17.8b8e3489.js","_app/immutable/chunks/scheduler.8d709755.js","_app/immutable/chunks/index.eb84c1c6.js","_app/immutable/chunks/Printer.a32559c2.js","_app/immutable/chunks/Button.734935ca.js","_app/immutable/chunks/index.c1cab4b5.js","_app/immutable/chunks/Tile.a37671a5.js","_app/immutable/chunks/AccordionItem.bc72310a.js","_app/immutable/chunks/index.59ccb19b.js","_app/immutable/chunks/each.7fe1bb46.js","_app/immutable/chunks/ChevronRight.df01c42c.js","_app/immutable/chunks/SkeletonText.a80b19eb.js","_app/immutable/chunks/Pagination.0fd4041d.js","_app/immutable/chunks/Search.82b14fd5.js","_app/immutable/chunks/Close.6bba8c34.js","_app/immutable/chunks/OverflowMenu.cb001309.js","_app/immutable/chunks/SelectItem.836fe3bc.js","_app/immutable/chunks/ChevronDown.2225920a.js","_app/immutable/chunks/WarningAltFilled.32ad045f.js","_app/immutable/chunks/_commonjsHelpers.23102255.js","_app/immutable/chunks/es.cbeea5b7.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/Column.b254b044.js"];
export const stylesheets = ["_app/immutable/assets/17.218d3752.css"];
export const fonts = [];
