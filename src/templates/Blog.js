import React, { useState } from "react";
import Cookie from "universal-cookie";
import { Layout } from "../components/layout";
import { Seo } from "../components";
import { PersonCard } from "../components/person";
import { BubblesBackground, NavMenu } from "../components/layout";
import { LanguageSwitch } from "../components/helper";

const Blog = () => {
  const cookie = new Cookie();
  const [language, setLanguage] = useState(cookie.get("language") || "pl");

  return (
    <Layout language={language}>
      <Seo language={language} />
      <div className="page new-skin">
        <BubblesBackground />

        <div className="container opened">
          <NavMenu language={language} />

          <PersonCard language={language} />

          <LanguageSwitch language={language} setLanguage={setLanguage} />

          <div className="card-inner blog active" id="blog-card">
            <div className="card-wrap">
              <div className="content blog">
                <div className="title">
                  <span>Blog</span>
                </div>

                <div className="row border-line-v">
                  <div className="col col-d-6 col-t-6 col-m-12">
                    <div className="box-item">
                      <div className="image">
                        <a href="#">
                          <img
                            src="https://via.placeholder.com/400x400"
                            alt="By spite about do of allow"
                          />
                          <span className="info">
                            <span className="ion ion-document-text" />
                          </span>
                        </a>
                      </div>
                      <div className="desc">
                        <a href="#">
                          <span className="date">April 28, 2020</span>
                        </a>
                        <a href="#" className="name">
                          By spite about do of allow
                        </a>
                        <div className="text">
                          <p>
                            Ex audire suavitate has, ei quodsi tacimates
                            sapientem sed, pri zril ubique ut. Te cule tation
                            munere noluisse. Enim torquatos&#8230;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-d-6 col-t-6 col-m-12">
                    <div className="box-item">
                      <div className="image">
                        <a href="#">
                          <img
                            src="https://via.placeholder.com/200x200"
                            alt="By spite about do of allow"
                          />
                          <span className="info">
                            <span className="ion ion-document-text" />
                          </span>
                        </a>
                      </div>
                      <div className="desc">
                        <a href="#">
                          <span className="date">April 28, 2020</span>
                        </a>
                        <a href="#" className="name">
                          By spite about do of allow
                        </a>
                        <div className="text">
                          <p>
                            Ex audire suavitate has, ei quodsi tacimates
                            sapientem sed, pri zril ubique ut. Te cule tation
                            munere noluisse. Enim torquatos&#8230;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-d-6 col-t-6 col-m-12">
                    <div className="box-item">
                      <div className="image">
                        <a href="#">
                          <img
                            src="https://via.placeholder.com/200x200"
                            alt="By spite about do of allow"
                          />
                          <span className="info">
                            <span className="ion ion-document-text" />
                          </span>
                        </a>
                      </div>
                      <div className="desc">
                        <a href="#">
                          <span className="date">April 28, 2020</span>
                        </a>
                        <a href="#" className="name">
                          By spite about do of allow
                        </a>
                        <div className="text">
                          <p>
                            Ex audire suavitate has, ei quodsi tacimates
                            sapientem sed, pri zril ubique ut. Te cule tation
                            munere noluisse. Enim torquatos&#8230;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-d-6 col-t-6 col-m-12">
                    <div className="box-item">
                      <div className="image">
                        <a href="#">
                          <img
                            src="https://via.placeholder.com/200x200"
                            alt="By spite about do of allow"
                          />
                          <span className="info">
                            <span className="ion ion-document-text" />
                          </span>
                        </a>
                      </div>
                      <div className="desc">
                        <a href="#">
                          <span className="date">April 28, 2020</span>
                        </a>
                        <a href="#" className="name">
                          By spite about do of allow
                        </a>
                        <div className="text">
                          <p>
                            Ex audire suavitate has, ei quodsi tacimates
                            sapientem sed, pri zril ubique ut. Te cule tation
                            munere noluisse. Enim torquatos&#8230;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clear" />
                </div>

                <div className="pager">
                  <nav className="navigation pagination">
                    <div className="nav-links">
                      <span className="page-numbers current">1</span>
                      <a className="page-numbers" href="#">
                        2
                      </a>
                      <a className="next page-numbers" href="#">
                        Next
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
