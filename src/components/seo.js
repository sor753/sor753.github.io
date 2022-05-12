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
        }
      }
    }
  `)

  const title = props.pagetitle
    ? `${props.pagetitle} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title
  const desc = props.pagedesc || data.site.siteMetadata.description

  return (
  <Helmet>
    <html lang={data.site.siteMetadata.lang} />
    <title>{title}</title>
    <meta
      name="description"
      content={desc}
      />
  </Helmet>
)}

export default Seo
