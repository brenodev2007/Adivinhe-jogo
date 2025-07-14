import logo from "../../assets/logo.png";
import styles from "./styles.module.css";
import restart from "../../assets/restart.svg";

type Props = {
  current: number;
  max: number;
  onRestart: () => void;
};

export function Header({ current, max, onRestart }: Props) {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />

      <header>
        <span>
          <strong>{current}</strong> de {max} tentativas
        </span>

        <button type="button" onClick={onRestart}>
          <img src={restart} />
        </button>
      </header>
    </div>
  );
}

export default Header;
