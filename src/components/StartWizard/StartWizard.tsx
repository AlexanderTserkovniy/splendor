import React from 'react';
import styles from './StartWizard.module.css';
import {useAppDispatch} from "../../redux/hooks";

function StartWizard() {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.App}>
      <h2>
        How many players will play?
      </h2>
      <ul>
        <li>
          <a href="#2" onClick={() => dispatch({ type: 'startWizardReducer/numOfPlayers', payload: 2 })}>
            2
          </a>
        </li>
        <li>
          <a href="#3">
            3
          </a>
        </li>
        <li>
          <a href="#4">
            4
          </a>
        </li>
      </ul>
    </div>
  );
}

export default StartWizard;
