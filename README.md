# React + Redux + Typescript + Vite Project

This is a **React 19** project built with **Vite**. It includes Redux for state management, Axios for API requests, and Vitest for testing.

## 🚀 Features

- React 19 + Vite for fast development
- Redux Toolkit for state management
- Axios for API requests
- Vitest & React Testing Library for testing
- Tailwind support for styling

## 📦 Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/samirsarkar/react-redux-typescript
   cd your-repo
   ```

2. **Install dependencies**:
   ```sh
   npm install
   # or
   yarn install
   ```

## 🚀 Running the Project

To start the development server, run:

```sh
npm run dev
# or
yarn dev
```

This will start the Vite development server, typically at `http://localhost:5173/`.

## 🛠 Configuration

### Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_API_BASE_URL=https://jsonplaceholder.typicode.com
```

Modify this URL according to your API configuration.

## 🧪 Running Tests

This project uses **Vitest** for unit testing.

To run the tests, use:

```sh
npm test
# or
yarn test
```

### 🛠 Fixing Common Issues in Tests

- If `vi.mocked` is not working, replace it with `vi.spyOn()`
- Use `waitFor()` when testing async functions

## 🚀 Project Structure

```
📂 src/
 ┣ 📂 api/               # API requests
 ┣ 📂 components/        # Reusable React components
 ┣ 📂 constants/         # Constants
 ┣ 📂 hoc/               # Higher Order Component
 ┣ 📂 hooks/             # Custom React hooks
 ┣ 📂 pages/             # Page components
 ┣ 📂 redux/             # Redux store, slices, actions
 ┣ 📂 routes/            # Routes for all the pages
 ┣ 📂 services/          # Api calls
 ┣ 📂 utils/             # Utility functions
 ┣ 📜 main.tsx           # Entry point
 ┣ 📜 App.tsx            # Root component
```

## 🔥 Build for Production

To create an optimized build:

```sh
npm run build
# or
yarn build
```

The output will be in the `dist/` directory.

## 📝 License

This project is licensed under the **MIT License**.

---

👨‍💻 Happy Coding! 🚀
