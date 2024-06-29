

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.D2Hh8_z2.js","_app/immutable/chunks/scheduler.BXr5QVQj.js","_app/immutable/chunks/index.BcQWKsSn.js","_app/immutable/chunks/entry.0_m6coLK.js"];
export const stylesheets = [];
export const fonts = [];
