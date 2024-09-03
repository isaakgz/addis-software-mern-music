import artistIcon from "../../assets/icons/artist.png";
import { useAppSelector } from "../../store";
import InfoCard from "../InfoCard/InfoCard";

function Artists() {
  //reading the status data from the Redux store
  const { statusData } = useAppSelector((state) => state.statistics);

  return (
    <>
      {statusData &&
        statusData.songsAndAlbumsByArtist.map((artist) => (
          <InfoCard
            key={artist.artist}
            name={artist.artist}
            count={artist.totalSongs}
            imageUrl={artistIcon}
          />
        ))}
    </>
  );
}

export default Artists;
