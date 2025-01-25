import React from 'react';

const Controls = ({ next, prev }) => {
  return (
    <div className="controls">
      <button className='prev' onClick={prev}>Previous</button>
      <button className='next' onClick={next}>Next  </button>
    </div>
  );
};

export default Controls;
