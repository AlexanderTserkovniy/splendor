import startingGameResourcesService, { ResourcesType } from "../../services/startingGameResources.service";
import {useAppSelector} from "../../redux/hooks";

const Game = ({ startingGameResources }: { startingGameResources: ResourcesType; }) => {
  return (
    <h1>
      Resources: {JSON.stringify(startingGameResources)}
    </h1>
  )
};

const GameInjected = () => {
  const numberOfPlayers = useAppSelector(store => store.startWizardReducer?.numberOfPlayers) as Number;
  const startingGameResources = new startingGameResourcesService(numberOfPlayers);

  return (
    <Game startingGameResources={startingGameResources.get()} />
  )
};

export default GameInjected;