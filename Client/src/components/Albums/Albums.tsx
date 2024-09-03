import { useEffect } from "react";
import albumCover from "../../assets/icons/cd-cover (1).png";
import { fetchStatusRequest } from "../../features/stats/statsSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import InfoCard from "../InfoCard/InfoCard";
import Error from "../Error/Error";
import LoadingSpinner from "../LoadingSpinner.tsx/LoadingSpinner";
function Albums() {
  const { statusData, status, error } = useAppSelector(
    (state) => state.statistics
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStatusRequest());
  }, [dispatch]);

  if (status === "loading") {
    return <LoadingSpinner />;
  } else if (status === "failed" && error) {
    return (
      <Error message={error} onRetry={() => dispatch(fetchStatusRequest())} />
    );
  }
  return (
    <>
      {statusData &&
        statusData.songsInEachAlbum.map((album) => (
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
