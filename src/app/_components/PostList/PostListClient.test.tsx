import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostListClient from './PostListClient';
import { useFavoritesPostStore } from '../../_stores/useFavoritesPostStore';

jest.mock('../../_stores/useFavoritesPostStore', () => ({
  useFavoritesPostStore: jest.fn(),
}));

describe('PostListClient Component', () => {
  const mockToggleFavorite = jest.fn();
  const mockFavorites = [1];

  beforeEach(() => {
    (useFavoritesPostStore as unknown as jest.Mock).mockReturnValue({
      favorites: mockFavorites,
      toggleFavorite: mockToggleFavorite,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockPosts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
  ];

  test('renders without crashing', () => {
    render(<PostListClient posts={mockPosts} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  test('displays the correct posts', () => {
    render(<PostListClient posts={mockPosts} />);
    mockPosts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });
  });

  test('renders links with correct hrefs', () => {
    render(<PostListClient posts={mockPosts} />);
    mockPosts.forEach((post) => {
      const link = screen.getByRole('link', { name: post.title });
      expect(link).toHaveAttribute('href', `/blog/${post.id}`);
    });
  });

  test('toggles favorite state when button is clicked', () => {
    render(<PostListClient posts={mockPosts} />);
    const favoriteButton = screen.getByText('Unfavorite'); // Post 1 is initially favorited
    fireEvent.click(favoriteButton);
    expect(mockToggleFavorite).toHaveBeenCalledWith(1);

    const unfavoriteButton = screen.getByText('Favorite'); // Post 2 is not favorited
    fireEvent.click(unfavoriteButton);
    expect(mockToggleFavorite).toHaveBeenCalledWith(2);
  });

  test('applies correct styles to favorite buttons', () => {
    render(<PostListClient posts={mockPosts} />);
    const favoritedButton = screen.getByText('Unfavorite');
    const unfavoritedButton = screen.getByText('Favorite');

    expect(favoritedButton).toHaveClass('bg-red-500 text-white');
    expect(unfavoritedButton).toHaveClass('bg-gray-200 text-gray-700');
  });
});
