import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectGuesses.length >= 6;
  const isWinner = wordToGuess.split("").every((letter) =>
    guessedLetters.includes(letter)
  );

const addGuessedLetter = useCallback((letter:string) => {
  if (guessedLetters.includes(letter)|| isLoser || isWinner) return;
    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
}, [guessedLetters,isLoser,isWinner]);


  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault;
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  console.log(wordToGuess);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        margin: "0 auto",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner &&  "Winner ! - Refresh to Try Again"}
          {isLoser &&  "Nice Try ! - Refresh to Try Again"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
        disabled={isWinner || isLoser}
        activeLetter={guessedLetters.filter(letter => wordToGuess.includes(letter))}
        inActiveLetter={incorrectGuesses}
        addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
