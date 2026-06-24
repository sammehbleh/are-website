/* ── theme token sets ── */
export const DARK = {
  siteBg:         "#2a2828",
  siteBgAlt:      "#1e1c1c",
  siteBg2:        "#242222",
  siteCard:       "#333030",
  siteText:       "#f0e6d3",
  siteMuted:      "#b0a090",
  sitePlaceholder:"#4a4545",
  siteBigText:    "#3d3939",
  siteGold:       "#7a35b8",
  siteGoldHover:  "#9a5ad6",
  siteTeal:       "#00c4b4",
  siteYellow:     "#f5d894",
  siteGoldDim:    "rgba(122,53,184,0.13)",
  siteBorder:     "rgba(122,53,184,0.2)",
  siteBorderHover:"rgba(0,196,180,0.5)",
  siteNavBg:      "rgba(42,40,40,0.45)",
  siteMobileBg:   "rgba(42,40,40,0.75)",
  siteDivider:    "rgba(122,53,184,0.15)",
  siteHeroBg:     "rgba(42,40,40,0.7)",
  siteHeroFrom:   "rgba(42,40,40,1)",
  siteHeroVia:    "rgba(42,40,40,0.7)",
  siteInputBg:    "#1e1c1c",
  siteRingFocus:  "rgba(0,196,180,0.18)",
};

export const LIGHT = {
  siteBg:         "#e4e0ee",
  siteBgAlt:      "#dad6e6",
  siteBg2:        "#d4cfe2",
  siteCard:       "#ffffff",
  siteText:       "#2a2828",
  siteMuted:      "#5a5565",
  sitePlaceholder:"#b0acc0",
  siteBigText:    "#d0cbe0",
  siteGold:       "#7a35b8",
  siteGoldHover:  "#5d2491",
  siteTeal:       "#009e90",
  siteYellow:     "#b8a800",
  siteGoldDim:    "rgba(122,53,184,0.1)",
  siteBorder:     "rgba(122,53,184,0.18)",
  siteBorderHover:"rgba(0,158,144,0.45)",
  siteNavBg:      "rgba(228,224,238,0.72)",
  siteMobileBg:   "rgba(228,224,238,0.92)",
  siteDivider:    "rgba(122,53,184,0.13)",
  siteHeroBg:     "rgba(228,224,238,0.5)",
  siteHeroFrom:   "rgba(218,214,230,0.95)",
  siteHeroVia:    "rgba(218,214,230,0.6)",
  siteInputBg:    "#fdfbff",
  siteRingFocus:  "rgba(0,158,144,0.15)",
};

export function applyTokens(t: typeof DARK) {
  const r = document.documentElement.style;
  r.setProperty("--site-bg",          t.siteBg);
  r.setProperty("--site-bg-alt",      t.siteBgAlt);
  r.setProperty("--site-bg-2",        t.siteBg2);
  r.setProperty("--site-card",        t.siteCard);
  r.setProperty("--site-text",        t.siteText);
  r.setProperty("--site-muted",       t.siteMuted);
  r.setProperty("--site-placeholder", t.sitePlaceholder);
  r.setProperty("--site-big-text",    t.siteBigText);
  r.setProperty("--site-gold",        t.siteGold);
  r.setProperty("--site-gold-hover",  t.siteGoldHover);
  r.setProperty("--site-teal",        t.siteTeal);
  r.setProperty("--site-yellow",      t.siteYellow);
  r.setProperty("--site-gold-dim",    t.siteGoldDim);
  r.setProperty("--site-border",      t.siteBorder);
  r.setProperty("--site-border-hover",t.siteBorderHover);
  r.setProperty("--site-nav-bg",      t.siteNavBg);
  r.setProperty("--site-mobile-bg",   t.siteMobileBg);
  r.setProperty("--site-divider",     t.siteDivider);
  r.setProperty("--site-hero-bg",     t.siteHeroBg);
  r.setProperty("--site-hero-from",   t.siteHeroFrom);
  r.setProperty("--site-hero-via",    t.siteHeroVia);
  r.setProperty("--site-input-bg",    t.siteInputBg);
  r.setProperty("--site-ring-focus",  t.siteRingFocus);
}

/* shorthand style helpers */
export const v = (name: string) => `var(--${name})`;
