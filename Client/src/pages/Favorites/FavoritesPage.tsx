import styled from "@emotion/styled";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  ButtonContainer,
  Colors,
  FavoriteButton,
  Icon,
  SongDetails,
  SongInfo,
  SongItem,
  SongMeta,
  SongsContainer,
  SongTitle,
} from "../../components/Songs/SongsStyles";

function FavoritesPage() {
  const favSongs = [
    {
      _id: 1,
      title: "Song 1",
      artist: "Artist 1",
      album: "Album 1",
      year: 2021,
      genre: "Pop",
      duration: "3:00",
      cover: "https://via.placeholder.com/150",
    },
    {
      _id: 2,
      title: "Song 2",
      artist: "Artist 2",
      album: "Album 2",
      year: 2021,
      genre: "Pop",
      duration: "3:00",
      cover: "https://via.placeholder.com/150",
    },
    {
      _id: 3,
      title: "Song 3",
      artist: "Artist 3",
      album: "Album 3",
      year: 2021,
      genre: "Pop",
      duration: "3:00",
      cover: "https://via.placeholder.com/150",
    },
    {
      _id: 4,
      title: "Song 3",
      artist: "Artist 3",
      album: "Album 3",
      year: 2021,
      genre: "Pop",
      duration: "3:00",
      cover: "https://via.placeholder.com/150",
    },
    {
      _id: 5,
      title: "Song 3",
      artist: "Artist 3",
      album: "Album 3",
      year: 2021,
      genre: "Pop",
      duration: "3:00",
      cover: "https://via.placeholder.com/150",
    },
  ];

  const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: ${Colors.text};
    margin-bottom: 20px;
    text-align: center;

  `;

  const FavContainer = styled.div`
    padding: 1rem;
    background-color: ${Colors.background};
    margin: 1rem auto;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 800px;
    border: 1px solid ${Colors.border};
    height: auto;
    max-height: 65vh;
    min-height: 50vh;
    overflow-y: auto;
    overflow-x: hidden;
  `;

  return (
    <>
      <Title>Favorites</Title>
      <FavContainer>
        <SongsContainer>
          {favSongs.map((song) => (
            <SongItem key={song._id}>
              <SongDetails>
                <Icon />
                <SongInfo>
                  <SongTitle>{song.title}</SongTitle>
                  <SongMeta>
                    {song.artist} • {song.album} • {song.genre}
                  </SongMeta>
                </SongInfo>
              </SongDetails>
              <ButtonContainer>
                <FavoriteButton>
                  <RiDeleteBinLine />
                </FavoriteButton>
              </ButtonContainer>
            </SongItem>
          ))}
        </SongsContainer>
      </FavContainer>
    </>
  );
}

export default FavoritesPage;
