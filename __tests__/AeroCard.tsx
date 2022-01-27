import { screen } from '@testing-library/react';
import AeroCard from '../components/cards/aero-card';
import { theme } from '../theme';
import { renderWithContext } from '../utils/tests';

describe('AeroCard', () => {
  test('should render Add points button', () => {
    renderWithContext(<AeroCard isOpen={true} />);
    expect(screen.getByRole('button', { name: 'Add points' })).toBeInTheDocument();
  });

  test('should render all options points buttons', () => {
    renderWithContext(<AeroCard isOpen={true} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(4);
  });

  test('should option 1000 by default and it has the properly colors', () => {
    renderWithContext(<AeroCard isOpen={true} />);
    const button = screen.getByRole('button', { name: '1000' });
    expect(button).not.toBeDisabled();

    expect(button).toHaveStyle(`background: ${theme.bgColors.brand}`);
    expect(button.firstChild).toHaveStyle(`color: ${theme.colors.white}`);
  });
});
