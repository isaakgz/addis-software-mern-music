import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import {
  ButtonContainer,
  FavoriteButton,
  Icon,
  PlayButton,
  SongDetails,
  SongInfo,
  SongItem,
  SongMeta,
  SongsContainer,
  SongTitle,
} from "../../components/Songs/SongsStyles";
import { removeFavoriteRequest } from "../../features/favorites/favoritesSlices";
import { useAppDispatch, useAppSelector } from "../../store";
import { Song } from "../../types/songTypes";
import { FavContainer, NoItemsMessage, Title } from "./FavoritePageStyle";
import useTitle from "../../hooks/useTitle";

function FavoritesPage() {
  const { favorites: favSongs } = useAppSelector((state) => state.favorites);
  useTitle({ title: "Favorites" });

  const [playerData, setPlayerData] = useState({
    url: "https://cdn-preview-8.dzcdn.net/stream/c-8ffd078d7efe834321a9ec2c1954efdf-1.mp3",
    isPlaying: false,
    title: "sois pas jaloux",
    artist: "Maître Gims",
  });
  const dispatch = useAppDispatch();

  const handelRemoveFavorite = (id: string) => {
    dispatch(removeFavoriteRequest(id));
    setPlayerData((prev) => ({ ...prev, isPlaying: false }));
  };
  const handleSongClick = (song: Song) => {
    if (playerData.url === song.songUrl) {
      setPlayerData((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
    } else {
      setPlayerData({
        url: song.songUrl,
        isPlaying: true,
        title: song.title,
        artist: song.artist,
      });
    }
  };

  return (
    <>
      <Title>Favorites</Title>
      <FavContainer>
        {favSongs.length === 0 ? (
          <NoItemsMessage>
            No favorite songs found. Add some songs to your favorites.
          </NoItemsMessage>
        ) : (
          <SongsContainer>
            {favSongs.map((song) => (
              <SongItem key={song._id}>
                <SongDetails>
                  <Icon />
                  <SongInfo>
                    <SongTitle>{song.title.toLocaleLowerCase()}</SongTitle>
                    <SongMeta>
                      {song.artist.toLocaleLowerCase()} •{" "}
                      {song.album.toLocaleLowerCase()} •{" "}
                      {song.genre.toLocaleLowerCase()}
                    </SongMeta>
                  </SongInfo>
                </SongDetails>
                <ButtonContainer>
                  <PlayButton
                    onClick={() => {
                      handleSongClick(song);
                    }}
                    isPlaying={playerData.url === song.songUrl}
                  >
                    <FaPlay />
                  </PlayButton>
                  <FavoriteButton
                    onClick={() => {
                      handelRemoveFavorite(song._id);
                    }}
                  >
                    <RiDeleteBinLine />
                  </FavoriteButton>
                </ButtonContainer>
              </SongItem>
            ))}
            <MusicPlayer playerData={playerData} />
          </SongsContainer>
        )}
      </FavContainer>
    </>
  );
}

export default FavoritesPage;
