import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import LoginPage from '../pages/Authentication/LoginPage';

test('LoginPage renders ReleaseWatcher', () => {
  render(
    <Router>
      <LoginPage />
    </Router>
  );

  const linkElement = screen.getByText(/ReleaseWatcher/i);
  expect(linkElement).toBeInTheDocument();
});
