import React from 'react';

export default function TextSelector({
  text,
  onChange
}) {
  return (
    <div>
      <label name="text">Text:</label>
      <input
        name="text"
        type="text"
        value={text}
        onChange={onChange}
      />
    </div>
  );
}
