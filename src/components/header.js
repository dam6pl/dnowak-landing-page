import { Link } from "gatsby"
import React from "react"

import { Col } from "react-bootstrap"

import "./../assets/scss/components/header.scss"
import enFlag from "./../assets/images/en.svg"
import plFlag from "./../assets/images/pl.svg"

const Header = ({ lang }) => (
  <header>
    <Col className="language-switcher">
      <Link to={toLang(lang)}>
        <img src={lang === "en" ? plFlag : enFlag} alt="" />
      </Link>
    </Col>
  </header>
)

const toLang = lang => {
  if (lang === "en") {
    return window.location.pathname.replace(/en\/?/, "")
  }

  return window.location.pathname.replace(/\/$/, "") + "/en"
}

export default Header
