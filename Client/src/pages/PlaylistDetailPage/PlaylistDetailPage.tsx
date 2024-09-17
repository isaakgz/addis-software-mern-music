import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import {
  Count,
  InfoText,
  Name,
} from "../../components/InfoCard/InfoCardstyles";
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
import { removeSongFromPlaylistRequest } from "../../features/playlists/playlistsSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { Song } from "../../types/songTypes";
import { FavContainer, NoItemsMessage } from "../Favorites/FavoritePageStyle";
import { Button, PlaylistDescription } from "./PlaylistDetailStyles";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import { FaPlay } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

function PlaylistDetailPage() {
  const navigate = useNavigate();
  const [playlistSongs, setPlaylistSongs] = useState<Song[]>([]);
  const { id: playlistId } = useParams();
  const [playerData, setPlayerData] = useState({
    url: "https://cdn-preview-8.dzcdn.net/stream/c-8ffd078d7efe834321a9ec2c1954efdf-1.mp3",
    isPlaying: false,
    title: "sois pas jaloux",
    artist: "Maître Gims",
  });
  useTitle({ title: "Playlist" });
  const { playlists } = useAppSelector((state) => state.playlists);
  const { songs } = useAppSelector((state) => state.songs);
  const dispatch = useAppDispatch();

  const handleRemoveSong = (songId: string) => {
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
  }, [playlists, playlistId, songs, dispatch]);

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
      <Button
        onClick={() => {
          navigate("/playlists");
        }}
      >
        Back to Playlists
      </Button>

      <FavContainer
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SongsContainer>
          <PlaylistDescription>
            <InfoText>
              <Name>Playlist Name</Name>
              <Count>{playlistSongs.length} songs</Count>
            </InfoText>
            <Button onClick={() => navigate("/")}>Add to Playlist</Button>
          </PlaylistDescription>

          {playlistSongs.length > 0 ? (
            playlistSongs.map((song) => (
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
                  <PlayButton
                    onClick={() => handleSongClick(song)}
                    isPlaying={playerData.url === song.songUrl}
                  >
                    <FaPlay />
                  </PlayButton>
                  <FavoriteButton onClick={() => handleRemoveSong(song._id)}>
                    <RiDeleteBinLine />
                  </FavoriteButton>
                </ButtonContainer>
              </SongItem>
            ))
          ) : (
            <NoItemsMessage>No songs in this playlist</NoItemsMessage>
          )}
        </SongsContainer>
        <MusicPlayer playerData={playerData} />
      </FavContainer>
    </>
  );
}

export default PlaylistDetailPage;
