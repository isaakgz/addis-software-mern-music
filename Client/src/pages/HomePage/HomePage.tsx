import { useEffect } from "react";
import Tabs from "../../components/Tabs/Tabs";
import { useAppDispatch } from "../../store";
import { fetchStatusRequest } from "../../features/stats/statsSlice";
import useTitle from "../../hooks/useTitle";

function HomePage() {
  const dispatch = useAppDispatch();
  useTitle({ title: "Home" });

  //fetching the status data when the component mounts
  useEffect(() => {
    dispatch(fetchStatusRequest());
  }, [dispatch]);
  return (
    <>
      <Tabs />
    </>
  );
}

export default HomePage;
