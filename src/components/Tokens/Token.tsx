import cs from 'classnames';
import styles from './Token.module.css';

enum TokenColors {
  goldJoker = 'gold',
  emerald = 'green',
  diamond = 'white',
  sapphire = 'blue',
  onyx = 'black',
  ruby = 'red',
}

const nameToColor: { [key: string]: TokenColors; } = {
  goldJoker: TokenColors.goldJoker,
  emerald: TokenColors.emerald,
  diamond: TokenColors.diamond,
  sapphire: TokenColors.sapphire,
  onyx: TokenColors.onyx,
  ruby: TokenColors.ruby,
};

// isAllowedToPick – when user run out of actions from taking the tokens
// e.g.:
// * took 2 of the same type
// * took different 3 tokens
// or user did another action in this turn, so that this action is disabled
const Token = ({ name, amount, isAllowedToPick = true } : { name: string; amount: number; isAllowedToPick?: boolean; }) => {
  const color: TokenColors = nameToColor[name];
  return (
    <article
      className={cs(
        styles.Token,
        styles[`color-${color}`],

        isAllowedToPick === false && styles.disabled
      )}
      onClick={() => {alert(`Implement me! ${name} ${amount}`)}}
    >
      <header>
        <h2>Token: {name}</h2>
        <p>Current amount: {amount}</p>
      </header>
    </article>
  );
};

export default Token;