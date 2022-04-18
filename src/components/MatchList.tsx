import { useEffect, useState } from 'preact/hooks';
import { Match, timeAgo } from '../database';
import styles from './MatchList.module.css';

interface Props {
  matches: Match[];
  deleteClicked: (index: number) => void;
}

export default function MatchList(props: Props) {
  return (
    <div className={styles.matchList}>
      {props.matches.map((matchSr, index) => (
        <MatchTemplate deleteClicked={() => props.deleteClicked(index)} key={index} matchIndex={index} matches={props.matches} />
      ))}
    </div>
  )
}

function MatchTemplate (props: { matches: Match[], matchIndex: number, deleteClicked: () => void }) {
  const match = props.matches[props.matchIndex];
  const difference = `${match.difference > 0 ? '+' : ''}${match.difference}`
  return (
    <div className={styles.match}>
      <div className={styles.matchResult + " " + styles[match.matchResult]}>{match.matchResult}</div>
      <div className={styles.matchSr}>{match.sr} SR</div>
      {!!match.difference && <div className={styles.matchDifference}>({difference})</div>}
      <div className={styles.matchTimeAgo}>{timeAgo(match.timestamp)}</div>

      <div className={styles.deleteButton} onClick={props.deleteClicked}>DELETE</div>

    </div>
  )
}