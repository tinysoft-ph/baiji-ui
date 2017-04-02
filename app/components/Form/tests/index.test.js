import React from 'react';
import { shallow } from 'enzyme';

import Form from '../index';

const renderComponent = (props = {}) => shallow(
  <Form {...props} />
);

describe('<Form />', () => {
  it('Expect to display a form element', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('form')).toHaveLength(1);
  });

  describe('simulate events', () => {
    it('should submit the form', () => {
      const onSubmit = jest.fn();
      const renderedComponent = renderComponent({
        onSubmit,
      });
      renderedComponent.find('form').simulate('click');
      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
