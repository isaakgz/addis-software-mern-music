import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import App from "./App";
import AddMusicPage from "./pages/AddMusicPage/AddMusicPage";
import HomePage from "./pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // default route
        element: <HomePage />,
      },
      {
        path: "/add-music",
        element: <AddMusicPage />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
