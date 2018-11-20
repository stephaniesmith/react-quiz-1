import React from 'react';
import Shape from './Shape';
import render from 'react-test-renderer';

describe('Shape Component Test', () => {
  test('Shape snapshot', () => {
    expect(render
      .create(<Shape />)
      .toJSON()).toMatchSnapshot();
  });
});
