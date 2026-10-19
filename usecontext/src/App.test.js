import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the blog and logged-in user', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Blog App' })).toBeInTheDocument();
  expect(screen.getByText('Dang')).toBeInTheDocument();
  expect(screen.getByText('Written by Dang')).toBeInTheDocument();
});
