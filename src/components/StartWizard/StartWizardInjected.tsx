import React, {useCallback, useEffect} from "react";
import store from "../../redux/store";
import startWizardReducer from "./redux/startWizard.reducer";
import StartWizard from "./StartWizard";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";

export type SetPlayersAmount = (numOfPlayers: Number) => (e: React.MouseEvent) => void;

const StartWizardInjected = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const numberOfPlayers = useAppSelector(store => store.startWizardReducer?.numberOfPlayers);
  const setPlayersAmount: SetPlayersAmount = useCallback((numOfPlayers: Number) => () => {
    dispatch({ type: 'startWizardReducer/numOfPlayers', payload: numOfPlayers });
  }, [dispatch]);

  useEffect(() => {
    store.injectReducer('startWizardReducer', startWizardReducer);
  }, []);

  return <StartWizard numberOfPlayers={numberOfPlayers} setPlayersAmount={setPlayersAmount} {...props} />;
}

export default StartWizardInjected;