import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import App from './App';

test('renders basic text', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Splendor the Board Game/i)).toBeInTheDocument();
  expect(getByText(/Start new game/i)).toBeInTheDocument();
});
