import React from "react";
import Card from "./Card";
import "./GameStyles.css";

export default function GameBoard({
  cards,
  selectedCards,
  guessedWords,
  selectCard,
}) {
  return (
    <section id="AppCards">
      {cards.map((word, index) => (
        <Card
          key={index}
          word={word}
          flipped={selectedCards.includes(word)}
          guessed={guessedWords.includes(word)}
          onClick={() => selectCard(index)}
        />
      ))}
    </section>
  );
}
