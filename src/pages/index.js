import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import * as cls from "./common.module.scss"
import "modern-css-reset"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SpaceModule from "../components/spaceModule"

const IndexPage = ({ data }) => (
  <div className={cls.container}>
    <Layout>
    <Hero page="index" />
    <SpaceModule size="xl" />
    <section className={cls.career}>
      <h2 className={cls.level2Heading}>
        <span className={cls.level2Heading__inner}>CAREER</span><br />
        <span className={cls.level2Heading__inner_sub}>経歴</span>
      </h2>
      <SpaceModule size="s" />
      <div className={cls.content}>
        <p>フロントエンドエンジニア。</p>
        <p>前職でwebマーケティングを担当した際に、これからの時代でのwebの重要性を痛感し、エンジニアへ転職。</p>
        <p>スクールで学習し、未経験エンジニア集団のLizeへジョイン。3年に渡りwebデザインとフロントエンド業務をてがける。</p>
        <p>個人事業主や中小企業から大企業案件まで幅広い制作にたずさわる。</p>
        <p>最近の目標は、Railsを使用してWebアプリケーションを作ることと、WebGLを学習して3Dを利用したインタラクティブなWebサイトを制作すること。</p>
      </div>
    </section>
    <SpaceModule size="l" />
    <section className={cls.skill}>
      <h2 className={cls.level2Heading}>
        <span className={cls.level2Heading__inner}>SKILL<br />&<br />TECH</span><br />
        <span className={cls.level2Heading__inner_sub}>技術</span>
      </h2>
      <SpaceModule size="m" />
      <h3 className={cls.level3Heading}>
        <span className={cls.level3Heading__inner}>Main</span>
      </h3>
      <SpaceModule size="s" />
      <div className={cls.content}>
        <div className={cls.tCenter}>
          <p>HTML5/CSS3</p>
          <p>JavaScript</p>
          <p>Vue.js/Nuxt.js</p>
          <p>React.js/Gatsby.js</p>
          <p>Canvas/CreateJS</p>
          <p>git/github</p>
          <p>Netlify</p>
          <p>microCMS</p>
          <p>Contentful</p>
          <p>VSCode</p>
          <p>Vim</p>
          <p>Adobe Photoshop/Illustrator/XD</p>
          <p>Figma</p>
          <p>紙とペン</p>
        </div>
      </div>
      <SpaceModule size="m" />
      <h3 className={cls.level3Heading}>
        <span className={cls.level3Heading__inner}>Sub</span>
      </h3>
      <SpaceModule size="s" />
      <div className={cls.content}>
        <div className={cls.tCenter}>
          <p>Ruby</p>
          <p>Ruby on Rails</p>
          <p>MySQL</p>
          <p>php/WordPress</p>
          <p>Movable Type</p>
          <p>Docker</p>
          <p>Heroku</p>
          <p>AWS</p>
          <p>Adobe InDesign/Animate</p>
        </div>
      </div>
    </section>
    <SpaceModule size="l" />
    <section className={cls.product}>
      <h2 className={cls.level2Heading}>
        <span className={cls.level2Heading__inner}>PRODUCT</span><br />
        <span className={cls.level2Heading__inner_sub}>制作</span>
      </h2>
      <SpaceModule size="m" />
      <div className={cls.card__wrap}>
        <a href="https://lize.dev/"
          target="_blank" rel="noopener noreferrer"
          className={`${cls.card} ${cls.card_link}`}>
          <figure className={cls.card__imgWrap}>
            <img
              className={cls.card__img}
              src="/images/card.jpg"
              alt="Lize" />
          </figure>
          <div className={cls.spaceModule_xs}></div>
          <div className={cls.card__body}>
            <p className={cls.card__ttl}>Lize</p>
            <p className={cls.card__text}>
              text
            </p>
            <div className={cls.label__wrap}>
              <span className={cls.label}>html/css</span>
              <span className={cls.label}>JavaScript</span>
              <span className={cls.label}>Vue/Nuxt.js</span>
              <span className={cls.label}>Canvas/CreateJS</span>
            </div>
          </div>
          <div className={cls.spaceModule_xs}></div>
        </a>
        <a className={`${cls.card} ${cls.card_link}`}>
          <figure className={cls.card__imgWrap}>
            <img
              className={cls.card__img}
              src="/images/card.jpg"
              alt="カード" />
          </figure>
          <div className={cls.spaceModule_xs}></div>
          <div className={cls.card__body}>
            <p className={cls.card__ttl}>Lize</p>
            <p className={cls.card__text}>
              text
            </p>
            <span className={cls.label}>html/css</span>
          </div>
          <div className={cls.spaceModule_xs}></div>
        </a>
        <a className={`${cls.card} ${cls.card_link}`}>
          <figure className={cls.card__imgWrap}>
            <img
              className={cls.card__img}
              src="/images/card.jpg"
              alt="カード" />
          </figure>
          <div className={cls.spaceModule_xs}></div>
          <div className={cls.card__body}>
            <p className={cls.card__ttl}>Lize</p>
            <p className={cls.card__text}>
              text
            </p>
            <span className={cls.label}>html/css</span>
          </div>
          <div className={cls.spaceModule_xs}></div>
        </a>
      </div>
      <div className={cls.btn__wrap}>
        <Link to={`/`} className={cls.btn}>More</Link>
      </div>
    </section>
    <SpaceModule size="l" />
    <section className={cls.about}>
      <div>
        <div className={cls.about__wrap}>
          <div className={cls.aboutImg__wrap}>
            <figure className={cls.aboutImg}>
             <StaticImage
                src="../images/stargazer.jpg" 
                width={335}
                alt="星空"
                placeholder="blurred"
                quality="40"
              /> 
            </figure>
          </div>
          <div className={cls.aboutText__wrap}>
            <p className={cls.aboutText}>
              福岡県でフロントエンドエンジニアをしています。フロント側の工程なら、ディレクションからデザイン、コーディングまで幅広くやっています。<br />
              最近は、ワイヤーフレームを紙とペンで描き、illustratorでモックアップ、Figmaでプロトタイプ作成。そしてVueかReactでコーディングという流れが多いです。<br />
              メインはVue/Nuxt.jsで、たまにReact/Gatsby.jsを使っています。<br />
              新しいもの好きで、いろいろな技術に手を出している状態なので、そろそろ絞りたいなと思案中です。<br />
              と言いつつ、WebGLやWASMにも手を出したいこの頃です。
            </p>
            <div className={cls.aboutTextBtn}>
              <Link to ={`/about/`} className={cls.btn}>More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <SpaceModule size="xl" />
    </Layout>
  </div>
)

export default IndexPage
