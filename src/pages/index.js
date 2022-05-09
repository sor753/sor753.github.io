import * as React from "react"
import * as classes from "./common.module.scss"
import "modern-css-reset"

const IndexPage = () => (
  <>
    <header className="header">
      <div className="container">
        <div className="site">
        </div>
        <nav className="nav">
          <ul>
            <li>TOP</li>
            <li>ABOUT</li>
            <li>LIST</li>
          </ul>
        </nav>
      </div>
    </header>
    <section className="hero"></section>
    <footer className="footer"></footer>
  </>
)

export default IndexPage
