import React from 'react';
import Shape from './Shape';
import render from 'react-test-renderer';

describe('Shape test', () => {

  test('Shape snapshot', () => {
    expect(render
      .create(<Shape text="my text" textColor="#FFFFFF" backgroundColor="#000000" />)
      .toJSON()).toMatchSnapshot();
  });

});
