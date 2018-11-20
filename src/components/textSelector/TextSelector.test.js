import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('text selector', () => {
  let wrapper;
  beforeEach(() => {
    const onChangeFn = jest.fn();
    wrapper = shallow(
      <TextSelector
        onChange={onChangeFn}
        text={'asdf'}
      />
    );
  });

  it('renders a text selector', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
