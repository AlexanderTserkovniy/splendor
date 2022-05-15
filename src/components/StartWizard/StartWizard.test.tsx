import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import StartWizard from './StartWizard';

test('renders start wizard text', () => {
  const { getByText } = render(
    <Provider store={store}>
      <StartWizard />
    </Provider>
  );

  expect(getByText(/How many players will play?/i)).toBeInTheDocument();
});
