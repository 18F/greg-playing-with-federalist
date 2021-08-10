module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "greg's play site",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blogs",
        path: "./src/blog/",
      },
    },
  ],
};
