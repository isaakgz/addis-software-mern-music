import Tabs from "../Tabs/Tabs";
import SongsList from "../SongsList/SongsList";

function Songs() {
  const tabs = ["songs", "albums", "artists", "Genres"];

  const songs = ["Song 1", "Song 2", "Song 3"];
  const albums = ["Album 1", "Album 2", "Album 3"];
  const artists = ["Artist 1", "Artist 2", "Artist 3"];
  const genres = ["Genre 1", "Genre 2", "Genre 3"];
  return (
    <>
      <Tabs tabs={tabs}>
        <SongsList items={songs} />
        <SongsList items={albums} />
        <SongsList items={artists} />
        <SongsList items={genres} />
      </Tabs>
    </>
  );
}

export default Songs;
