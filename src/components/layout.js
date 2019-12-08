/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faCopyright } from "@fortawesome/free-solid-svg-icons"

import "./../assets/scss/components/layout.scss"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <main>{children}</main>
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
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
