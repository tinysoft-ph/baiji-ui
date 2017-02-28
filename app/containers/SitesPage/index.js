/*
 *
 * SitesPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectSitesPage from './selectors';
import messages from './messages';

export class SitesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="SitesPage"
          meta={[
            { name: 'description', content: 'Description of SitesPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

SitesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SitesPage: makeSelectSitesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SitesPage);
