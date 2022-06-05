import React, {useCallback, useEffect} from "react";
import store from "../../redux/store";
import startWizardReducer from "./redux/startWizard.reducer";
import StartWizard from "./StartWizard";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {useNavigate} from "react-router-dom";

export type SetPlayersAmountType = (numOfPlayers: number) => (e: React.MouseEvent) => void;

const StartWizardInjected = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const numberOfPlayers = useAppSelector(store => store.startWizardReducer?.numberOfPlayers);
  // TODO Move to custom hook
  const navigate = useNavigate();
  const goGame = useCallback(() => navigate("/game"), [navigate]);

  const setPlayersAmount: SetPlayersAmountType = useCallback((numOfPlayers: number) => () => {
    dispatch({ type: 'startWizardReducer/numOfPlayers', payload: numOfPlayers });
    goGame();
  }, [dispatch, goGame]);

  useEffect(() => {
    store.injectReducer('startWizardReducer', startWizardReducer);
  }, []);

  return <StartWizard numberOfPlayers={numberOfPlayers} setPlayersAmount={setPlayersAmount} {...props} />;
}

export default StartWizardInjected;