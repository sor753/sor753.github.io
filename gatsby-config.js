module.exports = {
  siteMetadata: {
    title: `SK PORTFOLIO`,
    description: `福岡県在中のフロントエンドエンジニアです`,
    lang: `ja`,
    siteUrl: `https://www.yourdomain.tld`,
    locale: `ja_JP`,
    fbappid: `1634433760264119`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SK PORTFOLIO`,
        short_name: `SK`,
        start_url: `/`,
        background_color: `#F4F3ED`,
        theme_color: `#471311`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
