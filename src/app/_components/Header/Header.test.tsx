import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './index';

describe('Header Component', () => {
  test('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('displays the correct title', () => {
    render(<Header />);
    expect(screen.getByText('Test Application')).toBeInTheDocument();
  });

  test('contains navigation links with correct hrefs', () => {
    render(<Header />);
    const blogLink = screen.getByRole('link', { name: 'Blog' });
    const catalogLink = screen.getByRole('link', { name: 'Product Catalog' });

    expect(blogLink).toBeInTheDocument();
    expect(blogLink).toHaveAttribute('href', '/blog');

    expect(catalogLink).toBeInTheDocument();
    expect(catalogLink).toHaveAttribute('href', '/catalog');
  });

  test('links are accessible', () => {
    render(<Header />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('href');
    });
  });
});
