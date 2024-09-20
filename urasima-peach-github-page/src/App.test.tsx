import { render, screen } from '@testing-library/react';
import App from './App';

test('renders UrasimaPeach p', () => {
  render(<App />);
  const pElement = screen.getByText(/UrasimaPeach/i);
  expect(pElement).toBeInTheDocument();
});
