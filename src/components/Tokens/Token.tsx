import cs from 'classnames';
import styles from './Token.module.css';

enum TokenColors {
  goldJoker = 'gold',
  emerald = 'green',
  diamond = 'white',
  sapphire = 'blue',
  onyx = 'brown',
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

const Token = ({ name, amount } : { name: string; amount: number; }) => {
  const color: TokenColors = nameToColor[name];
  return (
    <article className={cs(styles[`color-${color}`])} onClick={() => {alert(`Implement me! ${name} ${amount}`)}}>
      <header>
        <h2>Token: {name}</h2>
        <p>Current amount: {amount}</p>
      </header>
    </article>
  );
};

export default Token;