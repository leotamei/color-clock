# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# color-clock
# Dynamic Color Clock Widget

A dynamic digital clock widget built with React, Vite, and `date-fns` for productivity dashboards.

## Features
- Dynamic real-time ticking clock (updates every 1000ms).
- Uses `date-fns` (`v2.30.0`) for date and time formatting.
- Modern frosted-glass UI styling with CSS gradients.

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm

### Installation & Running Locally

1. Clone the repository:
   ```bash
   git clone <your-github-repo-url>
   cd color-clock