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
    this.props.dispatchSaveProfile(this.props.profile);
  }
  onLoad() {
    this.props.dispatchLoadProfile(this.props.profile);
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
        {this.props.profile.username}
      </div>
    );
  }
}

ProfilePage.propTypes = {
  profile: PropTypes.obj,
  dispatchLoadProfile: PropTypes.func.isRequired,
  dispatchSaveProfile: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchLoadProfile: () => dispatch(),
    dispatchSaveProfile: () => dispatch(),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
