import React from 'react';

const Arrow = ({direction, handleSubmit, glyph}) => (
  <div className = {`${direction}`} onClick ={handleSubmit}>{glyph}</div>
);

export default Arrow;