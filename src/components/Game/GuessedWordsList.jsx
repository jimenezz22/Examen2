import React from "react";
import "./GameStyles.css";

export default function GuessedWordsList({ guessedWords }) {
  return (
    <ul id="gussedWords">
      {guessedWords.map((word, index) => (
        <li key={index}>{word}</li>
      ))}
    </ul>
  );
}
