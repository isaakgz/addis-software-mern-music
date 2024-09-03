import genresIcon from "../../assets/icons/music.png";
import InfoCard from "../InfoCard/InfoCard";

function Genres() {
  return (
    <>
      <InfoCard name="Genres" count={10} imageUrl={genresIcon} />
      <InfoCard name="Genres" count={10} imageUrl={genresIcon} />
      <InfoCard name="Genres" count={10} imageUrl={genresIcon} />
      <InfoCard name="Genres" count={10} imageUrl={genresIcon} />
    </>
  );
}

export default Genres;
