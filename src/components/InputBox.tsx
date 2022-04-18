import styles from './InputBox.module.css';
interface Props {
  title: string;
  value: string;
  onInput: (value: string) => void;
}
export default function InputBox(props: Props) {
  return <div className={styles.inputBox}>
    <div className={styles.title}>{props.title}:</div>
    <input inputMode="numeric" className={styles.input} value={props.value} onChange={(e: any) => props.onInput(e.target.value)} />
  </div>
}