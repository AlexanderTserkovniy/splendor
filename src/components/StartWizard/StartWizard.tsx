import React, {useCallback} from 'react';
import styles from './StartWizard.module.css';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";

function StartWizard() {
  const dispatch = useAppDispatch();
  const numberOfPlayers = useAppSelector(store => store.startWizardReducer.numberOfPlayers);
  const setPlayersAmount = useCallback((numOfPlayers: Number) => () => {
    dispatch({ type: 'startWizardReducer/numOfPlayers', payload: numOfPlayers });
  }, [dispatch]);

  return (
    <div className={styles.App}>
      <h2>
        How many players will play?
      </h2>
      <ul>
        <li>
          <button onClick={setPlayersAmount(2)}>
            2
          </button>
        </li>
        <li>
          <button onClick={setPlayersAmount(3)}>
            3
          </button>
        </li>
        <li>
          <button onClick={setPlayersAmount(4)}>
            4
          </button>
        </li>
      </ul>

      <h1>Players: { numberOfPlayers }</h1>
    </div>
  );
}

export default StartWizard;
