import { f as createComponent, h as addAttribute, j as renderHead, k as renderSlot, r as renderTemplate, i as createAstro, l as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C5PmS-k4.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, language = "en" } = Astro2.props;
  return renderTemplate`<html${addAttribute(language, "lang")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description" content="Built with Tracewebstudio">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/ashwin/Tracewebstudio/repos/tracewebstudio-site-renderer/src/layouts/BaseLayout.astro", void 0);

const $$Astro$4 = createAstro();
const $$SiteLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SiteLayout;
  const { tenant, language = "en" } = Astro2.props;
  const siteName = tenant?.siteSlug || "Tracewebstudio Site";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": siteName, "language": language, "data-astro-cid-gjphf53z": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="site-header" data-astro-cid-gjphf53z> <div class="container" data-astro-cid-gjphf53z> <nav class="nav" data-astro-cid-gjphf53z> <a href="/" class="logo" data-astro-cid-gjphf53z>${siteName}</a> ${tenant?.enabledLanguages && tenant.enabledLanguages.length > 1 && renderTemplate`<div class="language-switcher" data-astro-cid-gjphf53z> ${tenant.enabledLanguages.map((lang) => renderTemplate`<a${addAttribute(`/${lang === tenant.defaultLanguage ? "" : lang}`, "href")}${addAttribute(["lang-link", { active: lang === language }], "class:list")} data-astro-cid-gjphf53z> ${lang.toUpperCase()} </a>`)} </div>`} </nav> </div> </header> <main data-astro-cid-gjphf53z> ${renderSlot($$result2, $$slots["default"])} </main> <footer class="site-footer" data-astro-cid-gjphf53z> <div class="container" data-astro-cid-gjphf53z> <p data-astro-cid-gjphf53z>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${siteName}. Built with Tracewebstudio.</p> </div> </footer> ` })} `;
}, "/Users/ashwin/Tracewebstudio/repos/tracewebstudio-site-renderer/src/layouts/SiteLayout.astro", void 0);

const $$Astro$3 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  const { heading, subheading, cta } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-bbe6dxrz> <div class="container" data-astro-cid-bbe6dxrz> <h1 data-astro-cid-bbe6dxrz>${heading}</h1> <p class="subheading" data-astro-cid-bbe6dxrz>${subheading}</p> <button class="btn btn-accent" data-astro-cid-bbe6dxrz>${cta}</button> </div> </section> `;
}, "/Users/ashwin/Tracewebstudio/repos/tracewebstudio-site-renderer/src/components/Hero.astro", void 0);

const $$Astro$2 = createAstro();
const $$Features = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Features;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="features" data-astro-cid-vnivfuh2> <div class="container" data-astro-cid-vnivfuh2> <h2 data-astro-cid-vnivfuh2>Features</h2> <div class="features-grid" data-astro-cid-vnivfuh2> ${items.map((item) => renderTemplate`<div class="feature-card" data-astro-cid-vnivfuh2> <h3 data-astro-cid-vnivfuh2>${item.title}</h3> <p data-astro-cid-vnivfuh2>${item.description}</p> </div>`)} </div> </div> </section> `;
}, "/Users/ashwin/Tracewebstudio/repos/tracewebstudio-site-renderer/src/components/Features.astro", void 0);

const $$Astro$1 = createAstro();
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contact;
  const { language = "en" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="contact" data-astro-cid-xmivup5a> <div class="container" data-astro-cid-xmivup5a> <h2 data-astro-cid-xmivup5a>Contact Us</h2> <form class="contact-form" data-astro-cid-xmivup5a> <div class="form-group" data-astro-cid-xmivup5a> <label for="name" data-astro-cid-xmivup5a> ${language === "fr" ? "Nom" : language === "ta" ? "\u0BAA\u0BC6\u0BAF\u0BB0\u0BCD" : "Name"} </label> <input type="text" id="name" name="name" required data-astro-cid-xmivup5a> </div> <div class="form-group" data-astro-cid-xmivup5a> <label for="email" data-astro-cid-xmivup5a> ${language === "fr" ? "Email" : language === "ta" ? "\u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD" : "Email"} </label> <input type="email" id="email" name="email" required data-astro-cid-xmivup5a> </div> <div class="form-group" data-astro-cid-xmivup5a> <label for="message" data-astro-cid-xmivup5a> ${language === "fr" ? "Message" : language === "ta" ? "\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF" : "Message"} </label> <textarea id="message" name="message" rows="4" required data-astro-cid-xmivup5a></textarea> </div> <button type="submit" class="btn btn-primary" data-astro-cid-xmivup5a> ${language === "fr" ? "Envoyer" : language === "ta" ? "\u0B85\u0BA9\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1" : "Send"} </button> </form> </div> </section> `;
}, "/Users/ashwin/Tracewebstudio/repos/tracewebstudio-site-renderer/src/components/Contact.astro", void 0);

const API_BASE = "http://localhost:8081";
async function fetchPages(siteId) {
  try {
    const response = await fetch(`${API_BASE}/api/v1/sites/${siteId}/pages`);
    if (!response.ok) return [];
    return response.json();
  } catch (error) {
    console.error("Failed to fetch pages:", error);
    return [];
  }
}
async function fetchHomePage(siteId, language = "en") {
  try {
    const pages = await fetchPages(siteId);
    const homePage = pages.find((p) => p.page_type === "home" || p.slug === "index");
    return homePage || pages[0] || null;
  } catch (error) {
    console.error("Failed to fetch home page:", error);
    return null;
  }
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const tenant = Astro2.locals.tenant;
  const language = Astro2.locals.language || "en";
  const defaultContent = {
    hero: {
      heading: language === "fr" ? "Bienvenue" : language === "ta" ? "\u0BB5\u0BB0\u0BB5\u0BC7\u0BB1\u0BCD\u0BAA\u0BC1" : "Welcome",
      subheading: language === "fr" ? "Votre site web professionnel" : language === "ta" ? "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BA4\u0BCA\u0BB4\u0BBF\u0BB2\u0BCD\u0BAE\u0BC1\u0BB1\u0BC8 \u0BB5\u0BB2\u0BC8\u0BA4\u0BCD\u0BA4\u0BB3\u0BAE\u0BCD" : "Your professional website",
      cta_text: language === "fr" ? "Commencer" : language === "ta" ? "\u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD" : "Get Started",
      cta_link: "/contact"
    },
    features: language === "fr" ? [
      { title: "Facile", description: "Configurez en minutes" },
      { title: "Rapide", description: "H\xE9bergement ultra rapide" },
      { title: "S\xE9curis\xE9", description: "SSL et sauvegardes automatiques" }
    ] : language === "ta" ? [
      { title: "\u0B8E\u0BB3\u0BBF\u0BA4\u0BBE\u0BA9", description: "\u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD \u0B85\u0BAE\u0BC8\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD" },
      { title: "\u0BB5\u0BC7\u0B95\u0BAE\u0BBE\u0BA9", description: "\u0BB5\u0BC7\u0B95\u0BAE\u0BBE\u0BA9 \u0BB9\u0BCB\u0BB8\u0BCD\u0B9F\u0BBF\u0B99\u0BCD" },
      { title: "\u0BAA\u0BBE\u0BA4\u0BC1\u0B95\u0BBE\u0BAA\u0BCD\u0BAA\u0BBE\u0BA9", description: "SSL \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0BA4\u0BBE\u0BA9\u0BBF\u0BAF\u0B99\u0BCD\u0B95\u0BBF \u0B95\u0BBE\u0BAA\u0BCD\u0BAA\u0BC1\u0BAA\u0BCD\u0BAA\u0BBF\u0BB0\u0BA4\u0BBF" }
    ] : [
      { title: "Easy", description: "Set up in minutes" },
      { title: "Fast", description: "Ultra-fast hosting" },
      { title: "Secure", description: "SSL and automatic backups" }
    ],
    contact: {
      title: language === "fr" ? "Contactez-nous" : language === "ta" ? "\u0B8E\u0B99\u0BCD\u0B95\u0BB3\u0BC8\u0BA4\u0BCD \u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BC1 \u0B95\u0BCA\u0BB3\u0BCD\u0BB3\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD" : "Contact Us",
      email: "hello@tracewebstudio.com"
    }
  };
  let content = defaultContent;
  if (tenant?.siteId && tenant.siteId !== "dev-site-id") {
    try {
      const page = await fetchHomePage(tenant.siteId, language);
      if (page?.sections?.length) {
        const heroSection = page.sections.find((s) => s.section_type === "hero");
        const featuresSection = page.sections.find((s) => s.section_type === "features");
        const contactSection = page.sections.find((s) => s.section_type === "contact");
        if (heroSection?.content) {
          content.hero = {
            heading: heroSection.content.heading || defaultContent.hero.heading,
            subheading: heroSection.content.subheading || defaultContent.hero.subheading,
            cta_text: heroSection.content.cta_text || defaultContent.hero.cta_text,
            cta_link: heroSection.content.cta_link || defaultContent.hero.cta_link
          };
        }
        if (featuresSection?.content?.items) {
          content.features = featuresSection.content.items;
        }
        if (contactSection?.content) {
          content.contact = {
            title: contactSection.content.title || defaultContent.contact.title,
            email: contactSection.content.email || defaultContent.contact.email,
            phone: contactSection.content.phone || defaultContent.contact?.phone,
            address: contactSection.content.address || defaultContent.contact?.address
          };
        }
      }
    } catch (error) {
      console.error("Failed to fetch page content, using defaults:", error);
    }
  }
  return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, { "tenant": tenant, "language": language }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "heading": content.hero?.heading || "Welcome", "subheading": content.hero?.subheading || "", "cta": content.hero?.cta_text || "Get Started" })} ${renderComponent($$result2, "Features", $$Features, { "items": content.features || [] })} ${renderComponent($$result2, "Contact", $$Contact, { "title": content.contact?.title || "Contact Us", "email": content.contact?.email || "hello@example.com" })} ` })}`;
}, "/Users/ashwin/Tracewebstudio/repos/tracewebstudio-site-renderer/src/pages/index.astro", void 0);

const $$file = "/Users/ashwin/Tracewebstudio/repos/tracewebstudio-site-renderer/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
