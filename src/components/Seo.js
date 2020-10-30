import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ language, title, description, keywords }) => {
  const { pathname } = useLocation();
  const {
    site: {
      siteMetadata: { siteUrl },
    },
    allTranslation: { translations },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl: url
        }
      }
      allTranslation: allDirectusTranslation {
        translations: nodes {
          language
          seo_description
          seo_keywords
          seo_title_template
        }
      }
    }
  `);

  const currentTranslation = translations.find(
    (el) => el.language === language
  );

  const seo = {
    title: title || "",
    titleTemplate: currentTranslation.seo_title_template || "",
    description: description || currentTranslation.seo_description || "",
    keywords: keywords || currentTranslation.seo_keywords || "",
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
      <meta name="description" content={seo.description} />
      {seo.image && <meta name="image" content={seo.image} />}
      {/* Facebook */}
      <meta property="og:type" content="website" />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      {seo.url && <meta property="twitter:url" content={seo.url} />}
      {seo.title && <meta property="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta property="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta property="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  language: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  description: null,
  keywords: null,
};
