import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import {
  Count,
  InfoText,
  Name,
} from "../../components/InfoCard/InfoCardstyles";
import LoadingSpinner from "../../components/LoadingSpinner.tsx/LoadingSpinner";
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
import { useAppDispatch, useAppSelector } from "../../store";
import { Song } from "../../types/songTypes";
import { removeSongFromPlaylistRequest } from "../../features/playlists/playlistsSlice";

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

const NoItemsMessage = styled.p`
  color: ${Colors.text};
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const PlaylistDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  justify-content: space-between;
  margin: 1rem auto;
  border-radius: 5px;
  background-color: ${Colors.darkBackground};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  width: 80%;

  transition: background-color 0.3s ease;
`;

const Button = styled.button`
  background-color: ${Colors.primary};
  color: ${Colors.text};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${Colors.primaryDark};
  }
`;

function PlaylistDetailPage() {
  const navigate = useNavigate();
  const [playlistSongs, setPlaylistSongs] = useState<Song[]>([]);
  const { id: playlistId } = useParams();

  const { playlists } = useAppSelector((state) => state.playlists);
  const { songs } = useAppSelector((state) => state.songs);
  const dispatch = useAppDispatch();

  const handelRemoveSong = (songId: string) => {
    if (playlistId) {
      dispatch(removeSongFromPlaylistRequest({ playlistId, songId }));
      setPlaylistSongs((prevSongs) =>
        prevSongs.filter((song) => song._id !== songId)
      );
    }
  };
  

  useEffect(() => {
    const playlist = playlists.find((playlist) => playlist._id === playlistId);

    if (playlist) {
      const songInPlaylist = songs.filter((song) =>
        playlist.songs.includes(song._id)
      );
      setPlaylistSongs(songInPlaylist);
    }

    // }
  }, [playlists, playlistId, songs, dispatch]);

  return (
    <>
      <Button
        onClick={() => {
          navigate("/playlists");
        }}
      >
        Back to Playlists
      </Button>

      <FavContainer>
        {status === "loading" ? (
          <LoadingSpinner />
        ) : playlistSongs.length === 0 ? (
          <NoItemsMessage>
            No favorite songs found. Add some songs to your favorites.
          </NoItemsMessage>
        ) : (
          <SongsContainer>
            <PlaylistDescription>
              <InfoText>
                <Name>Playlist Name</Name>
                <Count>{playlistSongs.length} songs</Count>
              </InfoText>
              <Button>Add to Playlist</Button>
            </PlaylistDescription>
            {playlistSongs.map((song) => (
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
                  <FavoriteButton
                    onClick={() => {
                      handelRemoveSong(song._id);
                    }}
                  >
                    <RiDeleteBinLine />
                  </FavoriteButton>
                </ButtonContainer>
              </SongItem>
            ))}
          </SongsContainer>
        )}
      </FavContainer>
    </>
  );
}

export default PlaylistDetailPage;
