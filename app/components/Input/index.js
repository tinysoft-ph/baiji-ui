/**
*
* Input
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';


function Input({
  id,
  placeholder,
  type,
  value,
}) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
    />
  );
}

Input.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Input;
