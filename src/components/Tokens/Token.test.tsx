import React from 'react';
import { render } from '@testing-library/react';
import Token from './Token';
import styles from './Token.module.css';

test('renders basic text', () => {
  const { getByText } = render(
    <Token name="goldJoker" amount={5} />
  );

  expect(getByText("Token: goldJoker")).toBeInTheDocument();
  expect(getByText("Current amount: 5")).toBeInTheDocument();
});

test('applies color according to the name', () => {
  const { container } = render(
    <section>
      <Token name="goldJoker" amount={5} />
      <Token name="emerald" amount={5} />
      <Token name="diamond" amount={5} />
      <Token name="sapphire" amount={5} />
      <Token name="onyx" amount={5} />
      <Token name="ruby" amount={5} />
    </section>
  );

  expect(container.querySelector('article')).toHaveClass(styles['color-gold']);
  expect(container.querySelector('article:nth-child(2)')).toHaveClass(styles['color-green']);
  expect(container.querySelector('article:nth-child(3)')).toHaveClass(styles['color-white']);
  expect(container.querySelector('article:nth-child(4)')).toHaveClass(styles['color-blue']);
  expect(container.querySelector('article:nth-child(5)')).toHaveClass(styles['color-brown']);
  expect(container.querySelector('article:nth-child(6)')).toHaveClass(styles['color-red']);
});

test('can be disabled', () => {
  const { container } = render(
    <Token name="goldJoker" amount={5} isAllowedToPick={false} />
  );
  
  expect(container.querySelector('article')).toHaveClass(styles.disabled);
});
