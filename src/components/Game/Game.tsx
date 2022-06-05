import {ResourcesType} from "../../services/startingGameResources.service";
import Tokens from "../Tokens/Tokens";

const Game = ({ startingGameResources }: { startingGameResources: ResourcesType; }) => {
  return (
    <>
      <h1>
        Resources: {JSON.stringify(startingGameResources)}
      </h1>
      <Tokens tokens={startingGameResources?.tokens} />
    </>
  )
};

export default Game;