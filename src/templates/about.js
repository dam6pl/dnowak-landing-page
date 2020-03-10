import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"

import "./../assets/scss/templates/about.scss"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About me" />
    <Container>
      <Row>
        <Col>
          <div>About me</div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default AboutPage
