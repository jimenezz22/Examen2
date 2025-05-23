import React from "react";
import Header from "./components/Header";
import GameBoard from "./components/Game/GameBoard";
import ControlPanel from "./components/Game/ControlPanel";
import { useGameEngine } from "./hooks/useGameEngine";
import "./styles.css";

export default function App() {
  const { cards, health, guessedWords, selectedCards, selectCard, restart } =
    useGameEngine();

  return (
    <div>
      <Header />
      <main>
        <GameBoard
          cards={cards}
          selectedCards={selectedCards}
          guessedWords={guessedWords}
          selectCard={selectCard}
        />
        <ControlPanel
          health={health}
          guessedWords={guessedWords}
          restart={restart}
        />
      </main>
    </div>
  );
}
