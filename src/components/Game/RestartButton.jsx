import React from "react";
import "./GameStyles.css";

export default function RestartButton({ onRestart }) {
  return (
    <button id="restart" onClick={onRestart}>
      Reiniciar
    </button>
  );
}
