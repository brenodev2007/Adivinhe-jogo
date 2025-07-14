import styles from "./styles.module.css";
import Tipicon from "../../assets/tip.svg";
type Props = {
  tip: string;
};

export function Tip({ tip }: Props) {
  return (
    <div className={styles.tip}>
      <img src={Tipicon}></img>

      <div>
        <h3>Dica</h3>
        <p>{tip}</p>
      </div>
    </div>
  );
}

export default Tip;
