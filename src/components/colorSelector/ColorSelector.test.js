
import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('ColorSelector component', () => {
  it('renders an ColorSelector component', () => {
    const wrapper = shallow(<ColorSelector />);
    expect(wrapper).toMatchSnapshot();
  });
});
