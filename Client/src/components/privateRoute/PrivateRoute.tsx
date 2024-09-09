import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../store";
import Toast from "../Toast/Toast";

function PrivateRoute() {
  //get the user from the store
  const { user } = useAppSelector((state) => state.auth);

  //if user is not logged in, redirect to the auth page
  return user ? (
    <>
      <Toast />
      <Outlet />
    </>
  ) : (
    <Navigate to="/auth" />
  );
}

export default PrivateRoute;
