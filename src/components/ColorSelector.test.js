import React from 'react';
import ColorSelector from './ColorSelector';
import render from 'react-test-renderer';

describe('Color Selector Test', () => {
  test('ColorSelector snapshot', () => {
    expect(render
      .create(<ColorSelector />)
      .toJSON()).toMatchSnapshot();
  });
});
