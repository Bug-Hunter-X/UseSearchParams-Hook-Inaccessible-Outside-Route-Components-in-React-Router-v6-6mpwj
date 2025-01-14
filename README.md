# React Router v6 useSearchParams Hook Accessibility Issue

This repository demonstrates a subtle bug related to the `useSearchParams` hook in React Router v6. The hook, designed for managing URL search parameters, functions unexpectedly when used within components that aren't direct children of route components (`Route`, `Routes`). This results in the hook failing silently, usually returning an empty array or throwing an error.

## Problem Description

The `useSearchParams` hook relies on React Router's context, which is only available within components that are part of the router's rendering tree.  If you use this hook in a deeply nested component that's outside the routing structure, it loses access to this context.

## Solution

The solution involves restructuring your components to ensure the `useSearchParams` hook is always called within a component that's rendered directly or indirectly by a `Route` component. This allows the hook to access the required context and function correctly.

## How to Reproduce

1. Clone this repository.
2. Navigate to the `bug` directory and run `npm install`.
3. Run `npm start` to see the failing implementation.
4. Navigate to the `bugSolution` directory and run `npm install`.
5. Run `npm start` to see the corrected implementation.
