import React from 'react';

export default function ColorSelector({
  fontColor,
  backgroundColor,
  onChange
}) {
  return (
    <div>
      <label name="fontColor">Choose a font color:</label>
      <input
        name="fontColor"
        type="color"
        value={fontColor}
        onChange={onChange}
      />
      <label name="backgroundColor">Choose a background color:</label>
      <input
        name="backgroundColor"
        type="color"
        value={backgroundColor}
        onChange={onChange}
      />
    </div>
  );
}
