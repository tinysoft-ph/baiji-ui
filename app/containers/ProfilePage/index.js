/*
 *
 * ProfilePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { makeSelectProfile } from './selectors';
import messages from './messages';

export class ProfilePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  onSave() {
    this.props.onSaveProfile(this.props.profile);
  }
  onLoad() {
    this.props.onLoadProfile(this.props.profile);
  }
  render() {
    return (
      <div>
        <Helmet
          title="ProfilePage"
          meta={[
            { name: 'description', content: 'Description of ProfilePage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ProfilePage.propTypes = {
  profile: PropTypes.object,
  onLoadProfile: PropTypes.func.isRequired,
  onSaveProfile: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadProfile: () => dispatch(),
    onSaveProfile: () => dispatch(),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
