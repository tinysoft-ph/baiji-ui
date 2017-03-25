import React from 'react';
import { shallow } from 'enzyme';

import Input from '../index';

const type = 'email';
const renderComponent = (props = {}) => shallow(
  <Input type={type} {...props} />
);

describe('<Input />', () => {
  it('should have a type attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('type')).toEqual(type);
  });

  it('should adopt id attribute', () => {
    const id = 'id';
    const renderedComponent = renderComponent({ id });
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should adopt placeholder attribute', () => {
    const placeholder = 'placeholder';
    const renderedComponent = renderComponent({ placeholder });
    expect(renderedComponent.prop('placeholder')).toEqual(placeholder);
  });
});
