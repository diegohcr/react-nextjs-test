# Optimized Blog and Product Catalog Application

## Overview
This project implements an optimized Next.js 14 application that demonstrates efficient server-side rendering, client-side interactions, and performance optimizations.

## Tech Stack
- Next.js 14
- React 18
- TypeScript 5, Tailwind CSS 3
- Zustand 4
- @tanstack/react-query 5

## Features
### Story-001: Optimized Blog Application
- Uses Next.js Server Components for efficient rendering.
- Implements App Router for seamless client-side navigation.
- Utilizes Zustand for state management (favoriting posts with localStorage persistence).

### Story-002: Performant Product Catalog
- Implements data fetching and caching with React Query.
- Supports pagination and infinite scrolling for handling large datasets.
- Applies performance optimizations such as code splitting and memoization.

## Installation and Setup
```sh
git clone https://github.com/diegohcr/react-nextjs-test.git
cd react-nextjs-test
npm install
npm run dev
```
## Test
```sh
npm run test
```

## Build
```sh
npm run build
npm start
```

Application will be available at `http://localhost:3000`

### State Management
- Zustand is chosen for its lightweight and efficient state management capabilities, ensuring minimal re-renders.
- React Query is used for data fetching, reducing redundant API calls and improving caching efficiency.

### Performance Optimizations
- **Code Splitting:** Dynamically loads components to reduce initial page load time.
- **Memoization:** Uses `useMemo` and `useCallback` to prevent unnecessary renders.
- **Infinite Scrolling:** Fetches only required data dynamically to enhance UX and reduce payload size.

## How to Use
- Navigate between `Blog` and `Catalog` using the header.
- In the **Blog**, users can mark posts as favorites (stored persistently using Zustand + localStorage).
- In the **Product Catalog**, users can browse products with infinite scrolling and cached data fetching.

