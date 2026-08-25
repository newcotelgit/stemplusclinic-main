export type Locale = "en" | "ar";

const FONT_STACKS: Record<Locale, string> = {
  en: "'Plus Jakarta Sans', system-ui, sans-serif",
  ar: "'Cairo', system-ui, sans-serif",
};

export function applyLocale(locale: Locale) {
  const root = document.documentElement;
  root.lang = locale;
  root.dir = locale === "ar" ? "rtl" : "ltr";
  root.style.setProperty("--font-sans", FONT_STACKS[locale]);
}

export function setMeta(overrides: {
  title: string;
  description: string;
  ogDescription?: string;
  twitterDescription?: string;
  keywords?: string;
  ogLocale: string;
  canonical: string;
}) {
  document.title = overrides.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", overrides.description);

  if (overrides.keywords) {
    const keywords = document.querySelector('meta[name="keywords"]');
    if (keywords) keywords.setAttribute("content", overrides.keywords);
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", overrides.title);

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute("content", overrides.ogDescription ?? overrides.description);

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute("content", overrides.ogLocale);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", overrides.canonical);

  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute("content", overrides.title);

  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) twitterDescription.setAttribute("content", overrides.twitterDescription ?? overrides.description);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", overrides.canonical);
}
