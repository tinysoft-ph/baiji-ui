import React from 'react';
import { shallow } from 'enzyme';

import Button from '../index';

const type = 'submit';
const renderComponent = (props = {}) => shallow(
  <Button type={type} {...props} />
);

describe('<Button />', () => {
  it('should have a type attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('type')).toEqual(type);
  });

  it('Expect to display a button element with submit type', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('button[type="submit"]')).toHaveLength(1);
  });
});
