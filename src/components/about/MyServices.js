import React from "react";
import PropTypes from "prop-types";

const MyServices = ({ language }) => {
  const isEnglish = language === "en";

  return (
    <div className="content services">
      <div className="title">{isEnglish ? "My Services" : "Moje usługi"}</div>

      <div className="row service-items border-line-v">
        <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
          <div className="service-item">
            <div className="icon">
              <span className="fa fa-code" />
            </div>
            <div className="name">
              <span>Web Development</span>
            </div>
            <div className="desc">
              <div>
                <p>
                  Modern and mobile-ready website that will help you reach all
                  of your marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
          <div className="service-item">
            <div className="icon">
              <span className="fa fa-music" />
            </div>
            <div className="name">
              <span>Music Writing</span>
            </div>
            <div className="desc">
              <div>
                <p>
                  Music copying, writing, creating, transcription, arranging and
                  composition services.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
          <div className="service-item">
            <div className="icon">
              <span className="fa fa-buysellads" />
            </div>
            <div className="name">
              <span>Advetising</span>
            </div>
            <div className="desc">
              <div>
                <p>
                  Advertising services include television, radio, print, mail,
                  and web apps.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
          <div className="service-item">
            <div className="icon">
              <span className="fa fa-gamepad" />
            </div>
            <div className="name">
              <span>Game Development</span>
            </div>
            <div className="desc">
              <div>
                <p>
                  Developing memorable and unique mobile android, ios and video
                  games.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clear" />
    </div>
  );
};

export default MyServices;

MyServices.propTypes = {
  language: PropTypes.string.isRequired,
};
