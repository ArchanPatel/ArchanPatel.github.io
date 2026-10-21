import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio and its main sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /hi, i'm archan patel/i })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: 'Archan Patel' })).toHaveClass('rounded-full');
  expect(screen.getByRole('heading', { name: /a little about me/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /education/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /let's connect/i })).toBeInTheDocument();
});
