import React from 'react';

export default function ColorSelector({ color, backgroundColor, onChange }) {
  const colors = ['black', 'red', 'blue', 'white', 'yellow'].map(color => {
    return <option key={color} value={color}>{color}</option>;
  });

  return (
    <form>
      <label htmlFor="color">Font Color</label>
      <select name="color" defaultValue={color} onChange={onChange}>
        {colors}
      </select>

      <label htmlFor="backgroundColor">Background Color</label>
      <select name="backgroundColor" defaultValue={backgroundColor} onChange={onChange}>
        {colors}
      </select>
    </form>
  );
}
