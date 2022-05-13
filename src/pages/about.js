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

const AboutPage = ({ data, location }) => (
  <div className={cls.container}>
    <Layout>
    <Seo
      pagetitle="ABOUT"
      pagedesc="ABOUTと言う名の雑記"
      pagepath={location.pathname}
    />
    <Hero page="about" />
    <SpaceModule size="xl" />
    <h2 className={cls.level2Heading}>
      <span className={cls.level2Heading__inner}>ABOUT</span><br />
      <span className={cls.level2Heading__inner_sub}>と言う名の雑記</span>
    </h2>
    <SpaceModule size="s" />
    <div className={cls.content}>
      <p>
        福岡県でフロントエンドエンジニアをしています。<br />
        フロント側の工程なら、ディレクションからデザイン、コーディングまで幅広くやっています。<br />
        最近は、ワイヤーフレームを紙とペンで描き、illustratorでモックアップ、Figmaでプロトタイプ作成。そしてVueかReactでコーディングという流れが多いです。<br />
        メインはVue/Nuxt.jsで、たまにReact/Gatsby.jsを使っています。<br />
        新しいもの好きで、いろいろな技術に手を出している状態なので、そろそろ絞りたいなと思案中です。<br />
        と言いつつ、WebGLやWASMにも手を出したいこの頃です。<br />
        「分かりやすく、作りやすく」がモットーです。<br />
        そして、それがなかなかうまくいかないのもジレンマです。<br />
        フロントエンド、特にWebサイト制作で重視するのは、速さ、もしくはインタラクティブ性です。<br />
        Webサイトは速いに越したことはありません。<br />
        遅いのであれば、インタラクティである、などのそれなりの理由が必要だと思っています。<br />
        なので、新しい分野を勉強する際には、何を学ぶかはそこを基準に決めることが多いです。<br />
        もともとWebデザインから業界に入ったので、Vueに触れる機会の方が多かったのですが、Gatsby.jsの高速さに惚れ込み、改めてReactを勉強したような感じです。
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

export default AboutPage 
