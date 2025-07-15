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
  const [attemps, setScore] = useState(0);
  const [letter, setLetter] = useState("");
  const [lettersUsed, setLetterUsed] = useState<LettersUsedProps[]>([]);
  const [challenge, setChallenge] = useState<Challenge | null>(null);

  function handleRestartGame() {
    alert("Reiniciar o Jogo!");
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const word = WORDS[index];
    setChallenge(word);
    setLetter("");
    setScore(0);
    setLetterUsed([]);
  }

  useEffect(() => {
    startGame();
  }, []);

  if (!challenge) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={attemps} max={10} onRestart={handleRestartGame} />

        <Tip tip="Linguagem de programação dinâmica" />

        <div className={styles.word}>
          {challenge.word.split("").map((_, index) => (
            <Letter key={index} value="" />
          ))}
        </div>

        <h4>Palpite</h4>

        <div className={styles.gap}>
          <Input autoFocus maxLength={1} placeholder="?" />
          <Button title="Confirmar" />
        </div>

        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  );
}

export default App;
