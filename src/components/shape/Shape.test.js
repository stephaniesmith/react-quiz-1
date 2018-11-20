import React from 'react';
import { shallow } from 'enzyme';
import Shape from './Shape';

describe('shape', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Shape
        text={'asdf'}
        fontColor={'black'}
        backgroundColor={'white'}
      />
    );
  });

  it('renders a shape', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
