import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {

  test('renders learn react text', () => {
    render(<App />);
    const element = screen.getByText(/learn react/i);
    expect(element).toBeInTheDocument();
  });

});