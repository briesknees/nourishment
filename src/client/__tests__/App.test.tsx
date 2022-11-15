import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import App from '../App';
describe('Unit testing React components', () => {
  describe('renders App', () => {
    test('renders App', () => {
      const { getByText } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      expect(getByText(/app/i)).toBeInTheDocument();
    });
  })
});