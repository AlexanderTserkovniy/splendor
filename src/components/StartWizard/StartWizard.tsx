import React from 'react';
import styles from './StartWizard.module.css';
import {SetPlayersAmount} from "./StartWizardInjected";
import {StartWizardReducerStore} from "./redux/startWizard.reducer";

type StartWizardParams = Pick<StartWizardReducerStore["startWizardReducer"], 'numberOfPlayers'> &
  { setPlayersAmount: SetPlayersAmount };

const StartWizard = ({ setPlayersAmount = () => () => {}, numberOfPlayers } : StartWizardParams) =>
  (
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

      <h1>Players: {numberOfPlayers}</h1>
    </div>
  );

export default StartWizard;
