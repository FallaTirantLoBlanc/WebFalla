/**
 * ============================================
 * SITE CONFIGURATION
 * ============================================
 * Edit this file to customize the template for your organization.
 * All site-wide settings (name, address, meta, etc.) live here.
 */

export const siteConfig = {
  /** The main name displayed in the navbar, hero, and footer */
  siteName: "Falla Tirant lo Blanc",

  /** Subtitle shown below the name in the navbar */
  siteSubtitle: "Falla Tirant lo Blanc - L'Alcúdia",

  /** Motto/tagline shown in the hero badge */
  siteMotto: "Tradició, Festa i Cultura",

  /** Default meta description for SEO */
  siteDescription:
    "Web oficial de la Falla Tirant lo Blanc — L'Alcúdia.",

  /** Base URL for Open Graph / canonical links */
  siteUrl: "https://fallatirantloblanc.com",

  /** Path to Open Graph image (relative to /public) */
  ogImage: "/og-image.jpg",

  /** Headquarters / address shown in the footer */
  address: {
    line1: "L'Alcúdia",
    line2: "Valencia",
  },

  /** Footer copyright text */
  copyright: "Falla Tirant lo Blanc — 2026",

  /** Footer disclaimer text */
  disclaimer:
    "Web oficial de la Falla Tirant lo Blanc — L'Alcúdia.",

  /** Navigation links — adjust labels via i18n translations */
  navLinks: [
    { href: "/historia", i18nKey: "nav.historia", label: "Historia" },
    { href: "/calendario", i18nKey: "nav.calendario", label: "Calendario" },
    { href: "/inscripciones", i18nKey: "nav.inscripciones", label: "Inscripciones" },
    { href: "/imagenes", i18nKey: "nav.imagenes", label: "Imágenes" },
    { href: "/contacto", i18nKey: "nav.contacto", label: "Contacto" },
  ],
};
