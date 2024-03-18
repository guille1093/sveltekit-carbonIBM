

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e54a5132.js","_app/immutable/chunks/scheduler.8d709755.js","_app/immutable/chunks/index.eb84c1c6.js","_app/immutable/chunks/stores.6550eb38.js","_app/immutable/chunks/singletons.ec46505f.js","_app/immutable/chunks/index.59ccb19b.js"];
export const stylesheets = [];
export const fonts = [];
