import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders my study', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/this is my study\)\)0\)/i);
  expect(linkElement).toBeInTheDocument();
});
