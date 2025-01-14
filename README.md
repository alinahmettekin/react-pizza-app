# Pizza Hot App

This is a simple React application built using functional components, hooks, and Context API. The project demonstrates state management, context usage, and API interactions with a focus on simplicity and modular design.

## Features

- **Components**: The app is structured using reusable components for modularity and scalability.
- **State Management**: Utilizes `useState` and `useReducer` hooks for managing component and global states.
- **Context API**: Implements Context API for sharing global state and actions across the app.
- **Custom Hooks**: Includes custom hooks for encapsulating reusable logic.
- **API Integration**: Fetches and posts data to/from a backend server.
- **Lifecycle Management**: Uses `useEffect` for managing side effects.

## Key Concepts

### Components

Components are used to build the UI. Examples include:

- `Header`
- `ItemList`
- `OrderForm`

### Hooks

- **useState**: Manages local state within components.
- **useEffect**: Handles side effects such as fetching data from APIs.
- **useContext**: Accesses global state and actions provided by Context API.
- **Custom Hooks**: Encapsulates reusable logic (e.g., `useFetch`).

### Context API

Context is used to manage global state, such as user data or theme preferences. Reducers handle state updates based on dispatched actions.
