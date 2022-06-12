import {ResourcesType} from "../../services/startingGameResources.service";
import Tokens from "../Tokens/Tokens";
import Nobles from "../Nobles/Nobles";

const Game = ({ startingGameResources }: { startingGameResources: ResourcesType; }) => {
  return (
    <>
      <h1>
        Resources: {JSON.stringify(startingGameResources)}
      </h1>
      <Tokens tokens={startingGameResources?.tokens} />
      <Nobles />
    </>
  )
};

export default Game;