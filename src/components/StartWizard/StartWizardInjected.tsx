import React, {useEffect} from "react";
import store from "../../redux/store";
import startWizardReducer from "./redux/startWizard.reducer";
import StartWizard from "./StartWizard";

const StartWizardInjected = ({ ...props }) => {
  useEffect(() => {
    store.injectReducer('startWizardReducer', startWizardReducer);
  }, []);
  return <StartWizard {...props} />;
}

export default StartWizardInjected;