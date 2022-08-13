import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders work flow', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Workflow/i);
  expect(linkElement).toBeInTheDocument();
});
