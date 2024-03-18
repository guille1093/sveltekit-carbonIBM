import * as server from '../entries/pages/manifestPDF/_paqueteID_/_page.server.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/manifestPDF/_paqueteID_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/manifestPDF/[paqueteID]/+page.server.js";
export const imports = ["_app/immutable/nodes/13.5016b084.js","_app/immutable/chunks/scheduler.8d709755.js","_app/immutable/chunks/index.eb84c1c6.js","_app/immutable/chunks/pdfmake.fba54ce0.js","_app/immutable/chunks/_commonjsHelpers.23102255.js","_app/immutable/chunks/Printer.a32559c2.js","_app/immutable/chunks/Button.734935ca.js"];
export const stylesheets = [];
export const fonts = [];
