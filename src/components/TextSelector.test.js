import React from 'react';
import TextSelector from './TextSelector';
import render from 'react-test-renderer';

describe('TextSelector Component Test', () => {
  test('TextSelector snapshot', () => {
    expect(render
      .create(<TextSelector />)
      .toJSON()).toMatchSnapshot();
  });
});
