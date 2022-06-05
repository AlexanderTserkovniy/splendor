import {AnyAction, Reducer} from "redux";

const INITIAL_STATE = {
  step: 0,
  numberOfPlayers: null,
};

const startWizardReducer: Reducer = (state: any = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case 'startWizardReducer/numOfPlayers':
      return { ...state, numberOfPlayers: action.payload }
    default:
      return state
  }
};

export default startWizardReducer;

export type StartWizardReducerStoreType = {
  startWizardReducer: {
    step: number;
    numberOfPlayers: null | number;
  }
}
