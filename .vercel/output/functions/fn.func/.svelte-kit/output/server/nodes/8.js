import * as server from '../entries/pages/clientes/_clienteID_/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/clientes/_clienteID_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/clientes/[clienteID]/+page.server.js";
export const imports = ["_app/immutable/nodes/8.3072fd46.js","_app/immutable/chunks/scheduler.8d709755.js","_app/immutable/chunks/index.eb84c1c6.js","_app/immutable/chunks/each.7fe1bb46.js","_app/immutable/chunks/Edit.0bc5aaa0.js","_app/immutable/chunks/Button.734935ca.js","_app/immutable/chunks/Save.2a00e594.js","_app/immutable/chunks/TrashCan.4fdb372a.js","_app/immutable/chunks/forms.2fc59014.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.ec46505f.js","_app/immutable/chunks/index.59ccb19b.js","_app/immutable/chunks/index.c1cab4b5.js","_app/immutable/chunks/es.cbeea5b7.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/WarningAltFilled.32ad045f.js","_app/immutable/chunks/_commonjsHelpers.23102255.js","_app/immutable/chunks/Tile.a37671a5.js","_app/immutable/chunks/Modal.b1c80e4c.js","_app/immutable/chunks/Close.6bba8c34.js","_app/immutable/chunks/modalStore.2393149c.js","_app/immutable/chunks/ModalBody.1e95c8b1.js","_app/immutable/chunks/StructuredListRow.11d4697f.js","_app/immutable/chunks/InlineLoading.0dd66f30.js","_app/immutable/chunks/ToastNotification.51d8db30.js","_app/immutable/chunks/FormGroup.addbf6ce.js","_app/immutable/chunks/TextArea.5ef5efe5.js","_app/immutable/chunks/NumberInput.bf4cc1f7.js","_app/immutable/chunks/EditOff.dab82d64.js","_app/immutable/chunks/TextInput.e12822fe.js","_app/immutable/chunks/SelectItem.836fe3bc.js","_app/immutable/chunks/ChevronDown.2225920a.js"];
export const stylesheets = [];
export const fonts = [];
