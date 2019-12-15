import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from "react-bootstrap"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./../assets/scss/templates/index.scss"

library.add(fab)

const IndexPage = ({ data }) => (
  <Layout lang={data.indexJson.lang}>
    <SEO {...data.indexJson.seo} />
    <Col id="index-template">
      <Row>
        <Col>
          <h1 dangerouslySetInnerHTML={{ __html: data.indexJson.title }}></h1>
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={6} className="my-3">
          <p>{data.indexJson.content}</p>
          <Row>
            {data.indexJson.contact.map((item, key) => (
              <Col xs={12} sm={6} key={key} className="contact mt-3 mt-lg-4">
                <h4>{item.label}</h4>
                <a href={item.href}>{item.link}</a>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={6} className="mt-3">
          <form
            action="#"
            method="post"
            id="contact"
            data-netlify="true"
            data-netlify-recaptcha="true"
          >
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
                    rows={4}
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
              <a {...item.link} key={key}>
                <FontAwesomeIcon icon={item.icon} />
              </a>
            ))}
          </div>
        </Col>
      </Row>
    </Col>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    indexJson(path: { eq: $slug }) {
      seo {
        title
        pageTitle
      }
      lang
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
        link {
          href
          rel
          target
        }
      }
    }
  }
`

export default IndexPage
