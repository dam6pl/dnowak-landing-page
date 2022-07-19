import { Link } from "@reach/router";
import React, {useContext} from "react";
import { useStaticQuery, graphql } from "gatsby";
import Typed from "react-typed";
import { LazyPhoto } from "../helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalStateContext } from "../../context/GlobalStateProvider";
import Translate from "../helper/Translate";

const NavMenu = () => {
  const globalState = useContext(GlobalStateContext);
  const pathname = typeof window === "undefined" ? "/" : window.location.pathname;

  const {
    homepage: { developerName, developerPhoto, translations },
  } = useStaticQuery(graphql`
    {
      homepage: directusHomepage {
        developerName: developer_name
        developerPhoto: developer_photo {
          data {
            thumbnails {
              key
              url
              relative_url
              dimension
              width
              height
            }
          }
        }
        translations: translations {
          language
          developer_position {
            Position_name
            newItem
          }
        }
      }
    }
  `);

  const currentTranslation = translations.find(
    (el) => el.language === globalState.language
  );

  return (
    <header className="header">
      <div className="profile">
        <div className="image">
          {developerPhoto && (
            <LazyPhoto
              image={developerPhoto?.data?.thumbnails}
              alt={developerName}
              imageSize="directus-medium-crop"
            />
          )}
        </div>
        <div className="title">{developerName}</div>
        <div className="subtitle subtitle-typed">
          <div className="typing-title">
            {currentTranslation?.developer_position && (
              <Typed
                strings={currentTranslation?.developer_position.map(
                  (el) => el?.Position_name || ""
                )}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            )}
          </div>
        </div>
      </div>
      <div className="top-menu">
        <ul>
          <li className={pathname === "/" ? "active" : ""}>
            <Link to="/">
              <FontAwesomeIcon icon={["fas", "user"]} size="lg" />
                <Translate id="pages.about_me" className="link"/>
            </Link>
          </li>
          {/*<li className={pathname.indexOf("/resume") === 0 ? "active" : ""}>*/}
          {/*  <Link to="/resume/">*/}
          {/*    <span className="icon ion-android-list" />*/}
          {/*    <span className="link">{isEnglish ? "Resume" : "Życiorys"}</span>*/}
          {/*  </Link>*/}
          {/*</li>*/}
          {/*<li className={pathname.indexOf("/works") === 0 ? "active" : ""}>*/}
          {/*  <Link to="/works/">*/}
          {/*    <span className="icon ion-paintbrush" />*/}
          {/*    <span className="link">{isEnglish ? "Works" : "Prace"}</span>*/}
          {/*  </Link>*/}
          {/*</li>*/}
          {/*<li className={pathname.indexOf("/blog") === 0 ? "active" : ""}>*/}
          {/*  <Link to="/blog/">*/}
          {/*    <span className="icon ion-chatbox-working" />*/}
          {/*    <span className="link">Blog</span>*/}
          {/*  </Link>*/}
          {/*</li>*/}
          <li className={pathname.indexOf("/contact") === 0 ? "active" : ""}>
            <Link to="/contact/">
              <FontAwesomeIcon icon={["fas", "envelope"]} size="lg" />
              <Translate id='pages.contact' className="link" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavMenu;
