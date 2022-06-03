import {ResourcesType} from "../../services/startingGameResources.service";

const Game = ({ startingGameResources }: { startingGameResources: ResourcesType; }) => {
  return (
    <h1>
      Resources: {JSON.stringify(startingGameResources)}
    </h1>
  )
};

export default Game;