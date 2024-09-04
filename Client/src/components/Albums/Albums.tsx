import { useEffect, useMemo } from "react";
import albumCover from "../../assets/icons/cd-cover (1).png";
import { fetchStatusRequest } from "../../features/stats/statsSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import InfoCard from "../InfoCard/InfoCard";
import Error from "../Error/Error";
import LoadingSpinner from "../LoadingSpinner.tsx/LoadingSpinner";

function Albums() {
  //state  variables and functions to dispatch actions and read data from the Redux store
  const { statusData, status, error } = useAppSelector(
    (state) => state.statistics
  );
  const dispatch = useAppDispatch();

  //fetching the status data when the component mounts
  useEffect(() => {
    dispatch(fetchStatusRequest());
  }, [dispatch]);

  //memoizing the status data to prevent unnecessary re-renders
  const memoizedStatusData = useMemo(() => statusData, [statusData]);

  if (status === "loading") {
    return <LoadingSpinner />;
  } else if (status === "failed" && error) {
    return (
      <Error message={error} onRetry={() => dispatch(fetchStatusRequest())} />
    );
  }
  return (
    <>
      {memoizedStatusData &&
        memoizedStatusData.songsInEachAlbum.map((album) => (
          <InfoCard
            key={album.album}
            name={album.album}
            count={album.totalSongs}
            imageUrl={albumCover}
          />
        ))}
    </>
  );
}

export default Albums;
