import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('TextSelector Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ColorSelector location={{ pathname: '/somepath' }}/>);
  });
  it('renders a Songs component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
