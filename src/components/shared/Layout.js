import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import * as IconsBrand from '@fortawesome/free-brands-svg-icons';
import Cookie from 'universal-cookie';
import Loader from './Loader';

import '../../assets/stylesheets/basic.scss';
import '../../assets/stylesheets/layout.scss';
import '../../assets/stylesheets/blogs.scss';
import '../../assets/stylesheets/css/ionicons.css';
import '../../assets/stylesheets/css/new-skin/new-skin.css';
import '../../assets/stylesheets/css/template-dark/dark.css';

const iconList = Object
  .keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon]);

const iconBrandList = Object
  .keys(IconsBrand)
  .filter((key) => key !== 'fab' && key !== 'prefix')
  .map((icon) => IconsBrand[icon]);

library.add(...iconList, ...iconBrandList);

const cookie = new Cookie();

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      componentNotStartLoading: true,
      componentIsLoading: false,
      firstTimeLoaded: cookie.get('loaded') === '1'
    };
  }

  componentDidMount() {
    const { firstTimeLoaded } = this.state;

    this.setState({ componentNotStartLoading: false, componentIsLoading: true });

    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      !firstTimeLoaded && cookie.set('loaded', 1, { path: '/' });
      this.setState({ componentIsLoading: false, firstTimeLoaded: true });
    }, firstTimeLoaded ? 300 : 4000);
  }

  render() {
    const { componentIsLoading, firstTimeLoaded, componentNotStartLoading } = this.state;
    const { children } = this.props;

    return (
      <div id="application">
        <Helmet key="app-head">
          <html lang="en" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
        </Helmet>
        {componentIsLoading && <Loader key="app-loader" withLogo={!firstTimeLoaded} duration={firstTimeLoaded ? 300 : 4000} />}
        {!componentNotStartLoading && <div key="app-content">{children}</div>}
      </div>
    );
  }
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
