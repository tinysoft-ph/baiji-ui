/*
 *
 * SitesView
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectSitesView from './selectors';
import messages from './messages';

export class SitesView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  onLoad() {
    this.props.onLoadSiteView(this.props.sitesView);
  }

  render() {
    return (
      <div>
        <Helmet
          title="SitesView"
          meta={[
            { name: 'description', content: 'Description of SitesView' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

SitesView.propTypes = {
  sitesView: PropTypes.shape({
    id: PropTypes.string,
  }),
  onLoadSiteView: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SitesView: makeSelectSitesView(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadSiteView: () => dispatch(),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SitesView);
