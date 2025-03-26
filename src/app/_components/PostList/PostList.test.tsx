import { render } from '@testing-library/react';
import PostList, { fetchPosts } from './index';
import PostListClient from './PostListClient';

jest.mock('./PostListClient', () => {
  return {
    __esModule: true,
    default: jest.fn(() => <div data-testid="mock-post-list-client" />),
  };
});

global.fetch = jest.fn();

describe('PostList', () => {
  const mockPosts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchPosts', () => {
    test('fetches posts successfully', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockPosts),
      });

      const result = await fetchPosts();

      expect(global.fetch).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/posts',
      );
      expect(result).toEqual(mockPosts);
    });

    test('throws an error when fetch fails', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
      });

      await expect(fetchPosts()).rejects.toThrow('Failed to fetch posts');
    });
  });

  describe('PostList component', () => {
    test('renders PostListClient with fetched posts', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockPosts),
      });

      const { findByTestId } = render(await PostList());

      expect(PostListClient).toHaveBeenCalledWith({ posts: mockPosts }, {});

      await findByTestId('mock-post-list-client');
    });
  });
});
