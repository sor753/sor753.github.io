import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import * as cls from "./common.module.scss"
import "modern-css-reset"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import SpaceModule from "../components/spaceModule"

const tagSplit = e => e.split(',')

const WorkPage = ({ data, location }) => (
  <div className={cls.container}>
    <Layout>
    <Seo
      pagetitle="WORK"
      pagedesc="制作一覧"
      pagepath={location.pathname}
    />
    <Hero page="work" />
    <SpaceModule size="xl" />
    <h2 className={cls.level2Heading}>
      <span className={cls.level2Heading__inner}>WORK</span><br />
      <span className={cls.level2Heading__inner_sub}>制作一覧</span>
    </h2>
    <SpaceModule size="s" />
    <div className={cls.card__wrap}>
			{data.allContentfulWork.edges.map(({ node }) => (
        <a href={node.link}
          target="_blank" rel="noopener noreferrer"
          className={`${cls.card} ${cls.card_link}`}
          key={node.id}>
          <figure className={cls.card__imgWrap}>
            <GatsbyImage
              image={getImage(node.thumb.gatsbyImageData)}
              alt={node.thumb.title}
              style={{ height: "100%", width: "100%" }}
            />
          </figure>
          <div className={cls.spaceModule_xs}></div>
          <div className={cls.card__body}>
            <p className={cls.card__ttl}>{node.title}</p>
            <p className={cls.card__text}>
              {node.body.body} 
            </p>
            <div className={cls.spaceModule_xs}></div>
            <p className={`${cls.card__text} ${cls.card__text_explanation}`}>
              {node.explanation.explanation} 
            </p>
            <div className={cls.label__wrap}>
              {tagSplit(node.tag).map(tag => (
                <span className={cls.label}>{tag}</span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
    <SpaceModule size="m" />
    <div className={cls.btn__wrap}>
      <Link to={`/`} className={cls.btn}>Home</Link>
    </div>
    <SpaceModule size="xl" />
    </Layout>
  </div>
)

export default WorkPage 

export const query = graphql`
	query {
		allContentfulWork {
			edges {
				node {
          id
					title
          link
          body {
            body
          }
          explanation {
            explanation
          }  
          thumb {
            gatsbyImageData
            title
          }
          tag
				}
			}
		}
	}  
`
