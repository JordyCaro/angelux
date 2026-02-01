# React + Vite + TypeScript Project

A modern web application built with React, TypeScript, and Vite.

## Technology Stack

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - High-quality UI components built on Radix UI
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **TanStack Query** - Data fetching and state management
- **Framer Motion** - Animation library

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
├── public/          # Static assets
├── src/             # Source code
│   ├── components/  # React components
│   ├── hooks/       # Custom React hooks
│   ├── lib/         # Utility functions
│   └── main.tsx     # Application entry point
├── index.html       # HTML template
└── vite.config.ts   # Vite configuration
```

## Development

The development server runs on `http://localhost:5173` by default. The page will automatically reload when you make changes to the code.

## Building for Production

Run `npm run build` to create an optimized production build in the `dist` folder.
