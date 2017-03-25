/**
*
* Header
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Banner = styled.header`
  background-color: red;
`;

function Header() {
  return (
    <Banner>
      <FormattedMessage {...messages.title} />
    </Banner>
  );
}

Header.propTypes = {

};

export default Header;
