import React from 'react';

export default function Shape({ text, color, backgroundColor }) {
  return (
    <div style={{ color, backgroundColor, width: '100px', height: '100px' }}>
      {text}
    </div>
  );
}
