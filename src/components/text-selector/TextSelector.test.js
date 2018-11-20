import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('TextSelector Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TextSelector location={{ pathname: '/somepath' }}/>);
  });
  it('renders a Songs component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
