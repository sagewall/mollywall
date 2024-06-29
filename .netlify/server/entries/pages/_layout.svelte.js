import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Playfair+Display:wght@400;700&family=Roboto:wght@400;700&display=swap');html,body{height:100%;width:100%;margin:0;padding:0}#app{height:100%;width:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:center}.gray-background.svelte-dczdpg{background:lightgray}.padded.svelte-dczdpg{padding:1em 0;margin:0}.title.svelte-dczdpg{width:100%;text-align:center;font-family:'Dancing Script', cursive}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<!-- <div class=\\"app-container\\"> -->\\n<h1 class=\\"title gray-background padded\\">In Loving Memory of Molly Wall</h1>\\n<slot />\\n\\n<!-- </div> -->\\n<style>\\n\\t@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Playfair+Display:wght@400;700&family=Roboto:wght@400;700&display=swap');\\n\\n\\t:global(html),\\n\\t:global(body) {\\n\\t\\theight: 100%;\\n\\t\\twidth: 100%;\\n\\t\\tmargin: 0;\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\t:global(#app) {\\n\\t\\theight: 100%;\\n\\t\\twidth: 100%;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: center;\\n\\t}\\n\\n\\t.gray-background {\\n\\t\\tbackground: lightgray;\\n\\t}\\n\\n\\t.padded {\\n\\t\\tpadding: 1em 0;\\n\\t\\tmargin: 0;\\n\\t}\\n\\n\\t.title {\\n\\t\\twidth: 100%;\\n\\t\\ttext-align: center;\\n\\t\\tfont-family: 'Dancing Script', cursive;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAMC,QAAQ,wJAAwJ,CAExJ,IAAK,CACL,IAAM,CACb,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CACV,CAEQ,IAAM,CACb,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MACd,CAEA,8BAAiB,CAChB,UAAU,CAAE,SACb,CAEA,qBAAQ,CACP,OAAO,CAAE,GAAG,CAAC,CAAC,CACd,MAAM,CAAE,CACT,CAEA,oBAAO,CACN,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,gBAAgB,CAAC,CAAC,OAChC"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <h1 class="title gray-background padded svelte-dczdpg" data-svelte-h="svelte-kofd4u">In Loving Memory of Molly Wall</h1> ${slots.default ? slots.default({}) : ``} `;
});
export {
  Layout as default
};
