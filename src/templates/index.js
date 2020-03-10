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

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    let name = event.target.name,
      value = event.target.value

    this.setState(prevState => ({
      form: { ...prevState.form, [name]: value },
    }))
  }

  handleSubmit(event) {
    event.preventDefault()

    var xhr = new XMLHttpRequest()
    xhr.open("POST", "/mail", true)
    xhr.onload = res => {
      if (res.target.status === 200) {
        this.setState({
          mail: {
            status: true,
            message: this.props.data.pages.form.messages.success,
          },
        })
      } else {
        this.setState({
          mail: {
            status: false,
            message: this.props.data.pages.form.messages.error,
          },
        })
      }
    }
    xhr.send(JSON.stringify(this.state.form))
  }

  render() {
    return (
      <Layout lang={this.props.data.pages.lang} onLoad>
        <SEO {...this.props.data.pages.seo} />
        <Col id="index-template">
          <Row>
            <Col>
              <h1
                dangerouslySetInnerHTML={{
                  __html: this.props.data.pages.title,
                }}
              ></h1>
            </Col>
          </Row>
          <Row className="my-3">
            <Col md={6} className="my-3">
              <p>{this.props.data.pages.content}</p>
              <Row>
                {this.props.data.pages.contact.map((item, key) => (
                  <Col
                    xs={12}
                    sm={6}
                    key={key}
                    className="contact mt-3 mt-lg-4"
                  >
                    <h4>{item.label}</h4>
                    <a href={item.href}>{item.link}</a>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md={6} className="mt-3 d-print-none">
              <form
                action="#"
                method="post"
                id="contact"
                onSubmit={this.handleSubmit}
              >
                {this.props.data.pages.form.alternative_fields.map(
                  (item, key) => (
                    <label htmlFor={item.name} key={key}>
                      <span>{item.label}</span>
                      {item.field === "input" ? (
                        <input
                          name={item.name}
                          id={item.name}
                          required={item.required}
                          type={item.type}
                          value={this.state.form[item.name]}
                          onChange={this.handleChange}
                        />
                      ) : (
                        <textarea
                          name={item.name}
                          id={item.name}
                          required={item.required}
                          rows={4}
                          value={this.state.form[item.name]}
                          onChange={this.handleChange}
                        ></textarea>
                      )}
                    </label>
                  )
                )}

                <button type="submit">
                  {this.props.data.pages.form.button}
                </button>
                {this.state.mail ? (
                  <div
                    className={
                      "message " +
                      (this.state.mail.status ? "success" : "error")
                    }
                  >
                    {this.state.mail.message}
                  </div>
                ) : (
                  ""
                )}
              </form>
            </Col>
          </Row>
          <Row>
            <Col className="mt-4 mt-lg-0">
              <div className="icons my-3">
                {this.props.data.pages.social.map((item, key) => (
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
  }
}

export const query = graphql`
  query($path: String!) {
    pages(path: { eq: $path }) {
      path
      contact {
        href
        label
        link
      }
      content
      form {
        button
        messages {
          error
          success
        }
        alternative_fields {
          type
          required
          name
          label
          field
        }
      }
      id
      lang
      seo {
        lang
        meta {
          metaDescription
        }
        pageTitle
        title
      }
      social {
        icon
        link {
          href
          rel
          target
        }
      }
      template
      title
    }
  }
`

export default IndexPage
