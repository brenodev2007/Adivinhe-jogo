import { useEffect, useState } from "react";
import styles from "./app.module.css";
import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { LettersUsed, type LettersUsedProps } from "./components/LettersUsed";
import { WORDS } from "./utils/words";
import type { Challenge } from "./utils/words";

function App() {
  const [score, setScore] = useState(0);
  const [letter, setLetter] = useState("");
  const [lettersUsed, setLetterUsed] = useState<LettersUsedProps[]>([]);
  const [challenge, setChallenge] = useState<Challenge | null>(null);

  const ATTEMP_MARGIN = 5;

  function handleRestartGame() {
    if (!challenge) return;

    const isConfirmed = window.confirm(
      "Você tem certeza que deseja reiniciar?"
    );
    if (isConfirmed) {
      startGame();
    }
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const word = WORDS[index];
    setChallenge(word);
    setLetter("");
    setScore(0);
    setLetterUsed([]);
  }

  function handleConfirm() {
    if (!challenge) return;

    const value = letter.toUpperCase().trim();
    if (!value || value.length !== 1 || !/[A-Z]/.test(value)) {
      return alert("Digite uma letra válida (A-Z).");
    }

    const exists = lettersUsed.find((used) => used.value === value);
    if (exists) {
      return alert("Você já utilizou a letra " + value);
    }

    const hits = challenge.word
      .toUpperCase()
      .split("")
      .filter((char) => char === value).length;

    const correct = hits > 0;
    const currentScore = score + hits;

    setLetterUsed((prevState) => [...prevState, { value, correct }]);
    setScore(currentScore);
    setLetter("");
  }

  function endGame(message: string) {
    alert(message);
    startGame();
  }

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    if (!challenge) return;

    const attempLimit = challenge.word.length + ATTEMP_MARGIN;

    if (score === challenge.word.length) {
      endGame("🎉 Parabéns, você ganhou!");
    } else if (lettersUsed.length >= attempLimit) {
      endGame("😞 Que pena, você perdeu!");
    }
  });

  if (!challenge) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={styles.container}>
      <main>
        <Header
          current={lettersUsed.length}
          max={challenge.word.length + ATTEMP_MARGIN}
          onRestart={handleRestartGame}
        />

        <Tip tip={challenge.tip} />

        <div className={styles.word}>
          {challenge.word.split("").map((char, index) => {
            const found = lettersUsed.find(
              (used) =>
                used.value.toUpperCase() === char.toUpperCase() && used.correct
            );

            return (
              <Letter key={index} value={found ? char.toUpperCase() : ""} />
            );
          })}
        </div>

        <h4>Palpite</h4>

        <div className={styles.gap}>
          <Input
            autoFocus
            maxLength={1}
            placeholder="?"
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button title="Confirmar" onClick={handleConfirm} />
        </div>

        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  );
}

export default App;
