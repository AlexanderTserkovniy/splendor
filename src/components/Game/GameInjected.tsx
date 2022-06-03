import {useAppSelector} from "../../redux/hooks";
import startingGameResourcesService from "../../services/startingGameResources.service";
import Game from "./Game";

const GameInjected = () => {
  const numberOfPlayers = useAppSelector(store => store.startWizardReducer?.numberOfPlayers) as Number;
  const startingGameResources = new startingGameResourcesService(numberOfPlayers);

  return (
    <Game startingGameResources={startingGameResources.get()} />
  )
};
export default GameInjected;