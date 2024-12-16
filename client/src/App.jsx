import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MovieList from "./components/MovieList";
import Home from "./pages/Home";
import Header from "./components/Header";
import AddMovie from "./pages/AddMovie";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddGenre from "./pages/AddGenre";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <MovieList />,
        },
        {
          path: "/movie",
          element: <AddMovie />,
        },
        {
          path: "/movie/:id",
          element: <AddMovie />,
        },
        {
          path: "/genre",
          element: <AddGenre />,
        },
      ],
    },
  ]);
  return (
    <div className="h-screen">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
