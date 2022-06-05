import React from 'react';
import { render } from '@testing-library/react';
import Token from './Token';

test('renders basic text', () => {
  const { getByText } = render(
    <Token name="goldJoker" amount={5} />
  );

  expect(getByText("Token: goldJoker")).toBeInTheDocument();
  expect(getByText("Current amount: 5")).toBeInTheDocument();
});
