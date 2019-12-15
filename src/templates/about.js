import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./../assets/scss/templates/about.scss"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About me" />
    <div>siemanko</div>
  </Layout>
)

export default AboutPage
