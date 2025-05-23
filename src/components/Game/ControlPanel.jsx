import React from "react";
import HealthDisplay from "./HealthDisplay";
import GuessedWordsList from "./GuessedWordsList";
import RestartButton from "./RestartButton";
import "./GameStyles.css";

export default function ControlPanel({ health, guessedWords, onRestart }) {
  return (
    <section id="AppControlPanel">
      <h2>Vidas:</h2>
      <HealthDisplay health={health} />

      <h2>Parejas encontradas</h2>
      <GuessedWordsList guessedWords={guessedWords} />

      <RestartButton onRestart={onRestart} />
    </section>
  );
}
