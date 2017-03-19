import React from 'react';
import { shallow } from 'enzyme';

import Input from '../index';

describe('<Input />', () => {
  it('should render input as children', () => {
    const children = (
      <input />
    );
    const renderedComponent = shallow(
      <Input>
        {children}
      </Input>
    );

    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
