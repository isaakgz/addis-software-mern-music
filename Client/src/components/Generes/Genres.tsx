import genresIcon from "../../assets/icons/music.png";
import { useAppSelector } from "../../store";
import InfoCard from "../InfoCard/InfoCard";

function Genres() {
  const { statusData } = useAppSelector((state) => state.statistics);
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
      {/* <InfoCard name="Genres" count={10} imageUrl={genresIcon} />
      <InfoCard name="Genres" count={10} imageUrl={genresIcon} />
      <InfoCard name="Genres" count={10} imageUrl={genresIcon} />
      <InfoCard name="Genres" count={10} imageUrl={genresIcon} /> */}
    </>
  );
}

export default Genres;
