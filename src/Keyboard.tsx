import styles from "./Keyboard.module.css";

type KeyboardProps = {
  disabled : boolean
  activeLetter: string[];
  inActiveLetter: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetter,
  inActiveLetter,
  addGuessedLetter,
  disabled = false
}: KeyboardProps) {
  const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px,1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetter.includes (key)
        const isInActive = inActiveLetter.includes(key)


        return (
          <button
            onClick={() => addGuessedLetter(key)}
            key={key}
            disabled={isActive || isInActive || disabled}
            className={`${styles.btn}  ${isActive? styles.active : ''}
            ${isInActive ? styles.inactive : ''}
            `}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
