import React from 'react';
import ColorSelector from './ColorSelector';
import render from 'react-test-renderer';

describe('ColorSelector test', () => {

  test('ColorSelector snapshot', () => {
    const onChangeFn = jest.fn();
    expect(render
      .create(<ColorSelector textColor="#FFFFFF" backgroundColor="#000000" onChange={onChangeFn} />)
      .toJSON()).toMatchSnapshot();
  });

});
