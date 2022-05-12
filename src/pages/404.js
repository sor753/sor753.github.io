import * as React from "react"
import { Link } from "gatsby"
import * as cls from "./common.module.scss"
import "modern-css-reset"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import SpaceModule from "../components/spaceModule"

const NotFoundPage = ({ location }) => (
  <div className={cls.container}>
    <Layout>
    <Seo
      pagetitle="ページが見つかりません"
      pagepath={ location.pathname }
    />
    <Hero page="notfound" /> 
    <SpaceModule size="xl" />
    <h2 className={cls.level2Heading}>
      <span className={cls.level2Heading__inner}>Not Found Page</span><br />
    </h2>
    <SpaceModule size="s" />
    <div className={cls.content}>
      <p className={cls.tCenter}>
        お探しのページが見つかりませんでした。
      </p>
    </div>
    <SpaceModule size="m" />
    <div className={cls.btn__wrap}>
      <Link to={`/`} className={cls.btn}>Home</Link>
    </div>
    <SpaceModule size="xl" />
    </Layout>
  </div>
)

export default NotFoundPage
