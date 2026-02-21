export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://kamilraza.devaveglobal.com/sitemap.xml',
  }
}
