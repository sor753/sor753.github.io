import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = (props) => {
  const data = useStaticQuery(graphql`
    query{
			site {
        siteMetadata {
          description
          lang
          siteUrl
          title
          locale
          fbappid
        }
      }
    }
  `)

  const title = props.pagetitle
    ? `${props.pagetitle} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title
  const desc = props.pagedesc || data.site.siteMetadata.description
  const url = props.pagepath
    ? `${data.site.siteMetadata.siteUrl}${props.pagepath}`
    : data.site.siteMetadata.siteUrl
  const imgurl = `${data.site.siteMetadata.siteUrl}/thumb.png`

  return (
  <Helmet>
    <html lang={data.site.siteMetadata.lang} />
    <title>{title}</title>
    <meta
      name="description"
      content={desc}
      />
    <link rel="canonical" href={url} />

    <meta property="og:site_name" content={data.site.siteMetadata.title} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content={data.site.siteMetadata.locale} />
    <meta property="fb:app_id" content={data.site.siteMetadata.fbappid} />

    <meta property="og:image" content={imgurl} />
    <meta property="og:image" content="1280" />
    <meta property="og:image" content="640" />

    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
)}

export default Seo
