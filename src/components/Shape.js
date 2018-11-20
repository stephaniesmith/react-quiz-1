import React from 'react';

export default function ColorSelector({ fontColor, backgroundColor, text }) {
  return (
    <div style={{ background: backgroundColor, color: fontColor }}>{text}</div>
  );
}
