import * as server from '../entries/pages/ventas/_ventasID_/_page.server.js';

export const index = 21;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/ventas/_ventasID_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/ventas/[ventasID]/+page.server.js";
export const imports = ["_app/immutable/nodes/21.3c471199.js","_app/immutable/chunks/scheduler.8d709755.js","_app/immutable/chunks/index.eb84c1c6.js","_app/immutable/chunks/each.7fe1bb46.js","_app/immutable/chunks/index.c1cab4b5.js","_app/immutable/chunks/forms.2fc59014.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.ec46505f.js","_app/immutable/chunks/index.59ccb19b.js","_app/immutable/chunks/pdfmake.fba54ce0.js","_app/immutable/chunks/_commonjsHelpers.23102255.js","_app/immutable/chunks/Button.734935ca.js","_app/immutable/chunks/Printer.a32559c2.js","_app/immutable/chunks/TrashCan.4fdb372a.js","_app/immutable/chunks/Column.b254b044.js","_app/immutable/chunks/ModalBody.1e95c8b1.js","_app/immutable/chunks/modalStore.2393149c.js","_app/immutable/chunks/Close.6bba8c34.js","_app/immutable/chunks/InlineLoading.0dd66f30.js","_app/immutable/chunks/ToastNotification.51d8db30.js","_app/immutable/chunks/WarningAltFilled.32ad045f.js","_app/immutable/chunks/Tile.a37671a5.js","_app/immutable/chunks/StructuredListRow.11d4697f.js","_app/immutable/chunks/FormGroup.addbf6ce.js","_app/immutable/chunks/AccordionItem.bc72310a.js","_app/immutable/chunks/ChevronRight.df01c42c.js","_app/immutable/chunks/SkeletonText.a80b19eb.js","_app/immutable/chunks/NumberInput.bf4cc1f7.js","_app/immutable/chunks/EditOff.dab82d64.js","_app/immutable/chunks/OverflowMenu.cb001309.js"];
export const stylesheets = [];
export const fonts = [];
