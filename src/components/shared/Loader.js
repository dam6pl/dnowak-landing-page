import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../assets/images/svg/logo.svg';

class Loader extends React.Component {
  constructor(props) {
    super(props);

    this.state = { styles: { opacity: 1, transition: 'all 200ms ease' } };

    this.startFadeOut = this.startFadeOut.bind(this);
  }

  componentDidMount() {
    const { duration } = this.props;

    setTimeout(this.startFadeOut, duration - 300);
  }

  startFadeOut() {
    this.setState({ styles: { opacity: 0, transition: 'all 500ms ease' } });
  }

  render() {
    const { styles } = this.state;
    const { withLogo } = this.props;

    return (
      <div className="preloader" style={styles}>
        {withLogo && (
        <div className="centrize full-width">
          <div className="vertical-center">
            <Logo />
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default Loader;

Loader.propTypes = {
  withLogo: PropTypes.bool,
  duration: PropTypes.number
};

Loader.defaultProps = {
  withLogo: true,
  duration: 4000
};
