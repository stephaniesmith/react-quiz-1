import React from 'react';
import { shallow } from 'enzyme';
import Shape from './Shape';

describe('Shape', () => {
  it('renders Shape', () => {
    const wrapper = shallow(<Shape />);
    expect(wrapper).toMatchSnapshot();
  });
});
