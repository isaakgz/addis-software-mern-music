import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import App from "./App";
import AddMusicPage from "./pages/AddMusicPage/AddMusicPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginForm from "./components/AuthForm/Login";
import SignUpForm from "./components/AuthForm/SignUp";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import FavoritesPage from "./pages/Favorites/FavoritesPage";
import PlaylistsPage from "./pages/PlaylistsPage/PlaylistsPage";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthPage />,
    children: [
      {
        path: "/auth",
        element: <LoginForm />,
      },
      {
        path: "/auth/register",
        element: <SignUpForm />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/add-music",
            element: <AddMusicPage />,
          },
          {
            path: "/favorites",
            element: <FavoritesPage />,
          },
          {
            path: "/playlists",
            element: <PlaylistsPage />,
          },
          {
            path: "/statistics",
            element: <StatisticsPage />,
          },
        ],
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
