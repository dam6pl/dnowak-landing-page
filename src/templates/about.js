import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Cookies from "js-cookie"

import "./../assets/scss/templates/index.scss"
import enFlag from "./../assets/images/en.svg"
import plFlag from "./../assets/images/pl.svg"

library.add(fab)

const AboutPage = ({ data }) => (
  <Layout>
    <SEO {...data.indexJson.seo} />
    <div>siemanko</div>
  </Layout>
)

export default AboutPage
