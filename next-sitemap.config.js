/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.quadrasecurity.com', // 🔁 Replace with your actual domain
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/server-sitemap.xml'], // exclude custom sitemaps if needed
  alternateRefs: [],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
