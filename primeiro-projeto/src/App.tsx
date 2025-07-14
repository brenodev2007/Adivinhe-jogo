import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import styles from "./app.module.css";

function App() {
  function handleRestartGame() {
    alert("Reinicar o Jogo!");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />

        <Tip tip="Linguagem de programação dinâmica" />

        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="R" />
          <Letter value="R" />
          <Letter value="R" />
          <Letter value="R" />
        </div>

        <h4>Palpite</h4>

        <div className={styles.gap}>
          <Input autoFocus maxLength={1} placeholder="?"></Input>
          <Button title="Confirmar" />
        </div>
      </main>
    </div>
  );
}

export default App;
