import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import styles from "./app.module.css";

function App() {
  function handleRestartGame() {
    alert("Reinicar o Jogo!");
  }

  return (
    <div className={styles.container}>
      <Header current={5} max={10} onRestart={handleRestartGame} />

      <Tip tip="Linguagem de programação dinâmica" />

      <div className={styles.word}>
        <Letter value="R" />
        <Letter value="R" />
        <Letter value="R" />
        <Letter value="R" />
        <Letter value="R" />
      </div>
    </div>
  );
}

export default App;
