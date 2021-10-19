import {AnyAction} from "redux";

const INITIAL_STATE = {
  step: 0,
  numberOfPlayers: null,
};

const startWizardReducer = (state: any = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case 'startWizardReducer/numOfPlayers':
      return { ...state, numberOfPlayers: action.payload }
    default:
      return state
  }
};

export default startWizardReducer;
