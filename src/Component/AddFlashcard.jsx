import React, { useState } from 'react';

const AddFlashcard = ({ onAdd }) => {
  const [amharic, setAmharic] = useState('');
  const [english, setEnglish] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amharic && english) {
      onAdd({ amharic, english });
      setAmharic('');
      setEnglish('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Amharic Word"
        value={amharic}
        onChange={(e) => setAmharic(e.target.value)}
      />
      <input
        type="text"
        placeholder="English Translation"
        value={english}
        onChange={(e) => setEnglish(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddFlashcard;
