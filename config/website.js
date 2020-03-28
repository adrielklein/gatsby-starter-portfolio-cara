const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Adriel Klein", // Navigation and Site Title
  siteTitleAlt: "Adriel", // Alternative Site title for SEO
  siteTitleShort: "Adriel", // short_name for manifest
  siteHeadline:
    "Engineer eager to add value to the world by bringing clever software visions to life.", // Headline for schema.org JSONLD
  siteUrl: "https://adrielklein.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/screenshot.png", // Used for SEO and manifest
  siteDescription: "Software engineer portfolio",
  author: "Adriel Klein", // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@adrielklein", // Twitter Username
  ogSiteName: "adriel", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "UA-47519312-5",

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
