import React from "react";
import "./SimpleCard.css";

const SimpleCard = ({ card, keys, handleChoise }) => {
  const handleClick = () => {
    handleChoise(card);
  };

  return (
    <div className="card" key={keys}>
      <img className="front" src={card.src} alt="card front" />
      <img
        className="back"
        src="../img/cover.png"
        onClick={handleClick}
        alt="card back"
      />
    </div>
  );
};

export default SimpleCard;
