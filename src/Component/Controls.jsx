import React from 'react';

const Controls = ({ next, prev }) => {
  return (
    <div className="controls">
      <button onClick={prev}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Controls;
