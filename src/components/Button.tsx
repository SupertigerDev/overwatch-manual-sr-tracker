import styles from './Button.module.css';
interface Props {
  title: string
  color: string;
  icon?: any
  styles?: JSX.CSSProperties
  onClick?: () => void
}
export default function Button(props: Props) {
  return <div className={styles.button} style={{background: props.color, ...props.styles}} onClick={props.onClick}>
      {props.icon}
      <div className={styles.title}>{props.title}</div>
    </div>
}