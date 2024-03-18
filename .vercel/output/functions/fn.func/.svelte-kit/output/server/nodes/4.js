

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/algo/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.9e51a3f8.js","_app/immutable/chunks/scheduler.8d709755.js","_app/immutable/chunks/index.eb84c1c6.js"];
export const stylesheets = [];
export const fonts = [];
