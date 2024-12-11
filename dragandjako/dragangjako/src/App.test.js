import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn isactive', () => {
  render(<App />);
  const linkElement = screen.getByText(/isactive/i);
  expect(linkElement).toBeInTheDocument();
});
