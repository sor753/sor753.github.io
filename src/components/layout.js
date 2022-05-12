import * as React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"

const Layout = ({ children }) => (
  <div>
  <Header />
  <Hero />
  { children }
  <Footer />
  </div>
)

export default Layout
