import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('color selector', () => {
  let wrapper;
  beforeEach(() => {
    const onChangeFn = jest.fn();

    wrapper = shallow(
      <ColorSelector
        onChange={onChangeFn}
        fontColor={'black'}
        backgroundColor={'white'}
      />
    );
  });

  it('renders a color selector', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
