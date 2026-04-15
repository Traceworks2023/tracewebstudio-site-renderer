import { n as decodeKey } from './chunks/astro/server_C5PmS-k4.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BG_tz-Og.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/ashwin/Tracewebstudio/repos/tracewebstudio-site-renderer/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"../node_modules/.pnpm/astro@4.16.19_@types+node@20.19.39_rollup@4.60.1_typescript@5.9.3/node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":root{--color-primary: #000032;--color-accent: #FA5014;--color-background: #F9FAFB;--color-text: #111827;--font-family: \"Exo 2\", system-ui, sans-serif}*{box-sizing:border-box;margin:0;padding:0}body{font-family:var(--font-family);color:var(--color-text);background:var(--color-background);line-height:1.6}a{color:var(--color-primary);text-decoration:none}a:hover{color:var(--color-accent)}h1,h2,h3,h4,h5,h6{line-height:1.2;margin-bottom:1rem}h1{font-size:2.5rem}h2{font-size:2rem}h3{font-size:1.5rem}.container{max-width:1200px;margin:0 auto;padding:0 1.5rem}.btn{display:inline-flex;align-items:center;justify-content:center;padding:.75rem 1.5rem;font-size:1rem;font-weight:500;border-radius:.375rem;cursor:pointer;transition:all .15s ease;border:none}.btn-primary{background:var(--color-primary);color:#fff}.btn-primary:hover{background:var(--color-accent)}.btn-secondary{background:transparent;border:1px solid var(--color-primary);color:var(--color-primary)}.btn-accent{background:var(--color-accent);color:#fff}.site-header[data-astro-cid-gjphf53z]{background:#fff;border-bottom:1px solid #E5E7EB;padding:1rem 0;position:sticky;top:0;z-index:100}.nav[data-astro-cid-gjphf53z]{display:flex;align-items:center;justify-content:space-between}.logo[data-astro-cid-gjphf53z]{font-size:1.25rem;font-weight:700;color:var(--color-primary)}.language-switcher[data-astro-cid-gjphf53z]{display:flex;gap:.5rem}.lang-link[data-astro-cid-gjphf53z]{padding:.25rem .5rem;border-radius:.25rem;font-size:.875rem;color:var(--color-text);opacity:.7}.lang-link[data-astro-cid-gjphf53z]:hover{opacity:1}.lang-link[data-astro-cid-gjphf53z].active{background:var(--color-accent);color:#fff;opacity:1}.site-footer[data-astro-cid-gjphf53z]{background:var(--color-primary);color:#fff;padding:2rem 0;margin-top:4rem;text-align:center}main[data-astro-cid-gjphf53z]{min-height:60vh}.hero[data-astro-cid-bbe6dxrz]{background:linear-gradient(135deg,var(--color-primary) 0%,#000066 100%);color:#fff;padding:6rem 0;text-align:center}.hero[data-astro-cid-bbe6dxrz] h1[data-astro-cid-bbe6dxrz]{font-size:3.5rem;color:#fff;margin-bottom:1rem}.subheading[data-astro-cid-bbe6dxrz]{font-size:1.5rem;opacity:.9;margin-bottom:2rem;max-width:600px;margin-left:auto;margin-right:auto}.features[data-astro-cid-vnivfuh2]{padding:4rem 0}.features[data-astro-cid-vnivfuh2] h2[data-astro-cid-vnivfuh2]{text-align:center;margin-bottom:3rem}.features-grid[data-astro-cid-vnivfuh2]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2rem}.feature-card[data-astro-cid-vnivfuh2]{background:#fff;padding:2rem;border-radius:.5rem;box-shadow:0 1px 3px #0000001a;text-align:center}.feature-card[data-astro-cid-vnivfuh2] h3[data-astro-cid-vnivfuh2]{color:var(--color-primary);margin-bottom:.5rem}.feature-card[data-astro-cid-vnivfuh2] p[data-astro-cid-vnivfuh2]{color:#6b7280;font-size:.875rem}.contact[data-astro-cid-xmivup5a]{padding:4rem 0;background:#fff}.contact[data-astro-cid-xmivup5a] h2[data-astro-cid-xmivup5a]{text-align:center;margin-bottom:2rem}.contact-form[data-astro-cid-xmivup5a]{max-width:500px;margin:0 auto;display:flex;flex-direction:column;gap:1.5rem}.form-group[data-astro-cid-xmivup5a]{display:flex;flex-direction:column;gap:.5rem}label[data-astro-cid-xmivup5a]{font-weight:500;font-size:.875rem}input[data-astro-cid-xmivup5a],textarea[data-astro-cid-xmivup5a]{padding:.75rem;border:1px solid #E5E7EB;border-radius:.375rem;font-size:1rem;font-family:inherit}input[data-astro-cid-xmivup5a]:focus,textarea[data-astro-cid-xmivup5a]:focus{outline:none;border-color:var(--color-accent);box-shadow:0 0 0 3px #fa50141a}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/ashwin/Tracewebstudio/repos/tracewebstudio-site-renderer/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:../node_modules/.pnpm/astro@4.16.19_@types+node@20.19.39_rollup@4.60.1_typescript@5.9.3/node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","/Users/ashwin/Tracewebstudio/repos/node_modules/.pnpm/astro@4.16.19_@types+node@20.19.39_rollup@4.60.1_typescript@5.9.3/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_Cz8p89Ie.mjs","@astrojs/solid-js/client.js":"_astro/client.yL8JVs1M.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/client.yL8JVs1M.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"+d5IMQDraM1LVh4F/xBMK16pSZxs7XBjm95cukR4DT8=","experimentalEnvGetSecretEnabled":false});

export { manifest };
