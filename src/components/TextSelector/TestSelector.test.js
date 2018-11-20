import React from 'react';
import TextSelector from './TextSelector';
import render from 'react-test-renderer';

describe('TextSelector test', () => {

  test('TextSelector snapshot', () => {
    const onChangeFn = jest.fn();
    expect(render
      .create(<TextSelector text="my text" onChange={onChangeFn} />)
      .toJSON()).toMatchSnapshot();
  });

});
