import React from "react";
import "./GameStyles.css";

export default function Card({ word, flipped, guessed, onClick }) {
  const cardClass = `AppCard ${flipped ? "flipped" : ""} ${
    guessed ? "guessed" : ""
  }`;
  return (
    <div className={cardClass} onClick={onClick}>
      <div className="AppCardStyled"></div>
      <div className="AppCardValue">{word}</div>
    </div>
  );
}
