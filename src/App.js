import { useState } from "react";
import "./App.css";
import SimpleCard from "./components/SimpleCard";

const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];
function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiseOne, setChoiseOne] = useState(null);
  const [choiseTwo, setChoiseTwo] = useState(null);

  // Shuffle cards
  const shuffleCards = () => {
    const shuffleCard = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffleCard);
    setTurns(0);
  };

  // Handle a choise
  const handleChoise = (card) => {
    console.log(card, "card");
    choiseOne ? setChoiseTwo(card) : setChoiseOne(card);
    // Should not check state here B/C state will take time to update
    // Becase over state check fire works before state update
  };

  // reset choises & increase turn
  const resetTurn = () => {
    setChoiseOne(null);
    setChoiseTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  // Compare two selected card first
  if (choiseOne && choiseTwo) {
    if (choiseOne === choiseTwo) {
    } else {
      console.log("It doesn't matched");
    }

    resetTurn();
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SimpleCard keys={card.id} card={card} handleChoise={handleChoise} />
        ))}
        <p>Turns : {turns}</p>
      </div>
    </div>
  );
}

export default App;
