import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import * as cls from "./common.module.scss"
import "modern-css-reset"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SpaceModule from "../components/spaceModule"

const AboutPage = ({ data }) => (
  <div className={cls.container}>
    <Layout>
    <Hero page="about" />
    <SpaceModule size="xl" />
    </Layout>
  </div>
)

export default AboutPage 
