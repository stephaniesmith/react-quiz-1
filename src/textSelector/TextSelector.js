import React from 'react';

const TextSelector = (body) => {
  const container = body;
  return (
    <label>Enter Text here</label>
    <input>{container}</input>
  );
}

export default TextSelector;
