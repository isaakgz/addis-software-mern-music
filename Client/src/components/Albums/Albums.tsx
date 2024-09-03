import { useEffect } from "react";
import albumCover from "../../assets/icons/cd-cover (1).png";
import { fetchStatusRequest } from "../../features/stats/statsSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import InfoCard from "../InfoCard/InfoCard";
function Albums() {
  const {  statusData } = useAppSelector(
    (state) => state.statistics
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStatusRequest());
  }, [dispatch]);
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
