import genresIcon from "../../assets/icons/music.png";
import { useAppDispatch, useAppSelector } from "../../store";
import InfoCard from "../InfoCard/InfoCard";
import LoadingSpinner from "../LoadingSpinner.tsx/LoadingSpinner";
import Error from "../Error/Error";
import { fetchStatusRequest } from "../../features/stats/statsSlice";

function Genres() {
  //reading the status data from the Redux store
  const { statusData, status, error } = useAppSelector(
    (state) => state.statistics
  );
  const dispatch = useAppDispatch();

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
        statusData.songsInEachGenre.map((genre) => (
          <InfoCard
            key={genre.genre}
            name={genre.genre}
            count={genre.totalSongs}
            imageUrl={genresIcon}
          />
        ))}
    </>
  );
}

export default Genres;
