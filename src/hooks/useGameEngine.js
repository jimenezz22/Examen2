import { useState, useEffect, useCallback } from "react";
import { getRandomWords } from "../utils/getRandomWords";
import { shuffle } from "../utils/shuffle";

export function useGameEngine() {
  const [words, setWords] = useState([]);
  const [cards, setCards] = useState([]);
  const [health, setHealth] = useState(5);
  const [selectedCards, setSelectedCards] = useState([]);
  const [guessedWords, setGuessedWords] = useState([]);
  const [gameStopped, setGameStopped] = useState(false);
  const [blockInteraction, setBlockInteraction] = useState(false);

  // Inicializa el juego
  const init = useCallback(async () => {
    const randomWords = await getRandomWords();
    setWords(randomWords);
    const duplicated = [...randomWords, ...randomWords];
    setCards(shuffle(duplicated));
    setHealth(5);
    setGuessedWords([]);
    setSelectedCards([]);
    setGameStopped(false);
    setBlockInteraction(false);
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  // Añade palabra adivinada
  const addGuessedWord = (word) => {
    setGuessedWords((prev) => {
      const updated = [...prev, word];
      if (updated.length === words.length) {
        Toastify({
          text: "Has ganado el juego 😊. Presiona reiniciar para volver a jugar.",
          duration: 3000,
          style: {
            background:
              "linear-gradient(to right,rgb(48, 104, 23),rgb(24, 38, 192))",
          },
        }).showToast();
        setGameStopped(true);
      }
      return updated;
    });
  };

  // Reduce vida
  const reduceHealth = () => {
    setHealth((prev) => {
      const next = prev - 1;
      if (next <= 0) {
        Toastify({
          text: "Has perdido el juego. Presiona reiniciar para volver a intentarlo.",
          duration: 3000,
          style: {
            background:
              "linear-gradient(to right,rgb(176, 0, 0),rgb(201, 103, 61))",
          },
        }).showToast();
        setGameStopped(true);
      }
      return next;
    });
  };

  // Maneja selección de cartas
  const selectCard = (index) => {
    if (blockInteraction || gameStopped) return;

    if (selectedCards.length === 1) {
      setBlockInteraction(true);
      if (cards[index] === selectedCards[0]) {
        addGuessedWord(cards[index]);
        setSelectedCards([]);
        setBlockInteraction(false);
      } else {
        reduceHealth();
        setTimeout(() => {
          setSelectedCards([]);
          setBlockInteraction(false);
        }, 1000);
      }
    } else {
      setSelectedCards([cards[index]]);
    }
  };

  const restart = () => {
    init();
  };

  return {
    cards,
    health,
    guessedWords,
    selectedCards,
    selectCard,
    restart,
    gameStopped,
  };
}
