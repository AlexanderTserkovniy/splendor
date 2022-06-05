import { TokensType } from "./Tokens.types";
import Token from "./Token";

const normalizeTokenName = (tokenName: string) => tokenName.replace(/token(s)?/i, '');

const Tokens = ({ tokens } : { tokens: TokensType | undefined }) => {
  return (
    <div>
      {
        tokens && Object.entries(tokens)
          .map(([tokenName, tokenAmount]) => (
            <Token name={normalizeTokenName(tokenName)} amount={tokenAmount} />
          ))
      }
    </div>
  )
};

export default Tokens;