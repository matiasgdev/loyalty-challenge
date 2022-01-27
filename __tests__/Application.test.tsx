import { screen } from '@testing-library/dom';
import App from '../pages/index';
import { renderWithContext } from '../utils/tests';

describe('Main Application', () => {
  test('should render main title heading', () => {
    renderWithContext(<App />);
    expect(screen.getByRole('heading', { name: 'Tech Zone', level: 1 })).toBeInTheDocument();
  });

  test('should render view alls button', () => {
    renderWithContext(<App />);
    expect(screen.getByText('VIEW ALL PRODUCTS')).toBeInTheDocument();
  });

  test('should render title of products', () => {
    renderWithContext(<App />);
    expect(screen.getByText(/TECH PRODUCTS/i)).toBeInTheDocument()
  });

  test('should Most Recent button to be selected by default', () => {
    renderWithContext(<App />);
    expect(screen.getByRole('button', { name: 'Most Recent'})).not.toBeDisabled();
  });

  test('should All Products option to be showed by default', () => {
    renderWithContext(<App />);
    expect(screen.getByText('All products')).toBeInTheDocument();
  });

});
