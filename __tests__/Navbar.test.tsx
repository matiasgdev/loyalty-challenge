import { screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/navbar';
import { waitFor } from '@testing-library/dom';
import { renderWithContext } from '../utils/tests';

describe('Navbar', () => {
  test('should render the main logo', () => {
    renderWithContext(<Navbar />);
    expect(screen.getByAltText('Aerolab Logo')).toBeInTheDocument();
  });

  test('should render the Aero Coin control and toggle container', async () => {
    renderWithContext(<Navbar />);

    const control = screen.getByRole('button');
    expect(control).toBeInTheDocument();

    fireEvent.click(control);

    await waitFor(() => expect(screen.getByTestId('aero-card')).toBeVisible());
    
    fireEvent.click(control);
    await waitFor(() => expect(screen.getByTestId('aero-card')).not.toBeVisible());

  });

});
