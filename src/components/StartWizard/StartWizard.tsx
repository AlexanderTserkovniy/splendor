import React from 'react';
import styles from './StartWizard.module.css';
import {SetPlayersAmountType} from "./StartWizardInjected";
import {StartWizardReducerStoreType} from "./redux/startWizard.reducer";

type StartWizardParams = Pick<StartWizardReducerStoreType["startWizardReducer"], 'numberOfPlayers'> &
  { setPlayersAmount: SetPlayersAmountType };

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
