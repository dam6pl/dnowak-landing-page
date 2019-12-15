import React from "react"
import PropTypes from "prop-types"

import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faCopyright } from "@fortawesome/free-solid-svg-icons"
import Header from "./header"

import "./../assets/scss/components/layout.scss"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ lang, children }) => (
  <Container id="layout">
    <Row>
      <Header lang={lang} />
      <main>{children}</main>
      <Col>
        <footer>
          <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()}{" "}
          <a href="https://dnowak.dev">dnowak.dev</a>{" "}
          <FontAwesomeIcon icon={faHeart} />{" "}
          <a
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby.JS
          </a>
        </footer>
      </Col>
    </Row>
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
