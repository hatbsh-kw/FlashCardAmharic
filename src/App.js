import React, { useState, useEffect } from "react"; // Import useState and useEffect
import AddFlashcard from "./Component/AddFlashcard";
import Controls from "./Component/Controls";
import Flashcard from "./Component/Flashcard";
import './App.css'


const App = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load flashcards from localStorage when the app starts
  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("flashcards"));
    if (storedCards) setFlashcards(storedCards);
  }, []);

  // Save flashcards to localStorage whenever the flashcards state changes
  useEffect(() => {
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
  }, [flashcards]);

  // Navigation Handlers
  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
  };

  // Add Flashcard
  const addFlashcard = (newCard) => {
    setFlashcards([...flashcards, newCard]);
  };

  return (
    <div className="App">
      {flashcards.length > 0 ? (
        <Flashcard data={flashcards[currentIndex]} />
      ) : (
        <p className="par">No flashcards available. Add one below!</p>
      )}
      <Controls next={nextCard} prev={prevCard} />
      <AddFlashcard onAdd={addFlashcard} />
    </div>
  );
};

export default App;
