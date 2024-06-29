

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.vU2k42HQ.js","_app/immutable/chunks/scheduler.BXr5QVQj.js","_app/immutable/chunks/index.BcQWKsSn.js"];
export const stylesheets = ["_app/immutable/assets/0.BVG3YChx.css"];
export const fonts = [];
