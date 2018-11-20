
import React from 'react';
import { shallow } from 'enzyme';
import Shape from './Shape';

describe('Shape component', () => {
  it('renders an Shape component', () => {
    const wrapper = shallow(<Shape />);
    expect(wrapper).toMatchSnapshot();
  });
});
