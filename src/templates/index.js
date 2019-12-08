import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./../assets/scss/templates/index.scss"
import enFlag from "./../assets/images/en.svg"
import plFlag from "./../assets/images/pl.svg"

library.add(fab)

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {console.log(data.indexJson)}
    <Container id="index-template">
      <Row className="language">
        <Col>
          <h1 dangerouslySetInnerHTML={{ __html: data.indexJson.title }}></h1>
          <div className="language-switcher">
            <Link to={data.indexJson.path.startsWith("/en") ? "/" : "/en"}>
              <img
                src={data.indexJson.path.startsWith("/en") ? plFlag : enFlag}
                alt=""
              />
            </Link>
          </div>
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={6} className="my-3">
          <p>{data.indexJson.content}</p>
          <Row>
            {data.indexJson.contact.map((item, key) => (
              <Col
                xs={12}
                sm={6}
                lg={12}
                key={key}
                className="contact mt-3 mt-lg-4"
              >
                <h4>{item.label}</h4>
                <a href={item.href}>{item.link}</a>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={6} className="mt-3">
          <form action="#" method="post" id="contact">
            {data.indexJson.form.fields.map((item, key) => (
              <label htmlFor={item.name} key={key}>
                <span>{item.label}</span>
                {item.field === "input" ? (
                  <input
                    name={item.name}
                    id={item.name}
                    required={item.required}
                    type={item.type}
                  />
                ) : (
                  <textarea
                    name={item.name}
                    id={item.name}
                    required={item.required}
                  ></textarea>
                )}
              </label>
            ))}

            <button type="submit">{data.indexJson.form.button}</button>
          </form>
        </Col>
      </Row>
      <Row>
        <Col className="mt-4 mt-lg-0">
          <div className="icons my-3 mt-lg-5">
            {data.indexJson.social.map((item, key) => (
              <a
                href={item.link}
                rel="noopener noreferrer"
                target="_blank"
                key={key}
              >
                <FontAwesomeIcon icon={item.icon} />
              </a>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    indexJson(path: { eq: $slug }) {
      title
      content
      path
      contact {
        label
        link
        href
      }
      form {
        fields {
          name
          label
          required
          field
          type
        }
        button
      }
      social {
        icon
        link
      }
    }
  }
`

export default IndexPage
