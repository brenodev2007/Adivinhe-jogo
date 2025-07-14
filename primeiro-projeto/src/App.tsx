import { Header } from "./components/Header";
import styles from "./app.module.css";

function App() {
  function handleRestartGame() {
    alert("Reinicar o Jogo!");
  }

  return (
    <div className={styles.container}>
      <Header current={5} max={10} onRestart={handleRestartGame} />
    </div>
  );
}

export default App;
