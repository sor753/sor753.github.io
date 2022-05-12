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
  ],
}
