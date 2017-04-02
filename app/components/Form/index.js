/**
*
* Form
*
*/

import React from 'react';
import styled from 'styled-components';

const FormDiv = styled.div`
  margin: 0 auto;
  max-width: 500px;
`;

function Form(props) {
  return (
    <FormDiv>
      <form {...props} />
    </FormDiv>
  );
}

export default Form;
