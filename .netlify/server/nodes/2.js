import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.VEhlw1HR.js","_app/immutable/chunks/scheduler.BXr5QVQj.js","_app/immutable/chunks/index.BcQWKsSn.js"];
export const stylesheets = ["_app/immutable/assets/2.CKXTeQIB.css"];
export const fonts = [];
