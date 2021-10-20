import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders component text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Components/i);
  expect(linkElement).toBeInTheDocument();
});
