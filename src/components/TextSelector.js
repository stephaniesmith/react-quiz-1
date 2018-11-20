import React from 'react';

export default function TextSelector({ text, onChange }) {
  return (
    <form>
      <label htmlFor="text">Text</label>
      <input name="text" value={text} onChange={onChange} />
    </form>
  );
}
