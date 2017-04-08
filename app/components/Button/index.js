/**
*
* Button
*
*/

import styled from 'styled-components';

const darkBlue = '#025aa5';
const lightBlue = '#0275d8';

const Button = styled.button`
  color: #fff;
  background-color: ${lightBlue};
  border-color: ${lightBlue};
  border: 1px solid transparent;
  border-radius: .25rem;
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25;
  padding: .5rem 1rem;
  transition: all .2s ease-in-out;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;

  &:hover {
    background-color: ${darkBlue};
    border-color: ${darkBlue};
  }
`;

export default Button;
