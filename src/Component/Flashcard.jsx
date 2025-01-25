import React, { useState } from 'react';
import '../App.css'

const Flashcard = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`flashcard ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="front">{data.amharic}</div>
      <div className="back">{data.english}</div>
    </div>
  );
};

export default Flashcard;
