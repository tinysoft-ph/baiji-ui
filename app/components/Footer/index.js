/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Wrapper = styled.footer`
  background-color: green;
  bottom: 0;
  height: 60px;
  left: 0;
  position: fixed;
  width: 100%;
`;

function Footer() {
  return (
    <Wrapper>
      <FormattedMessage {...messages.footer} />
    </Wrapper>
  );
}

Footer.propTypes = {

};

export default Footer;
