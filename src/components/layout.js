import * as React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ children }) => (
  <div>
  <Header />
  { children }
  <Footer />
  </div>
)

export default Layout
