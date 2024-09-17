/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaEllipsisV, FaPlay } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import {
  addFavoriteRequest,
  fetchFavoritesRequest,
  removeFavoriteRequest,
} from "../../features/favorites/favoritesSlices";
import {
  addSongToPlaylistRequest,
  fetchPlaylistsRequest,
} from "../../features/playlists/playlistsSlice";
import {
  deleteSongRequest,
  fetchSongsRequest,
  updateSongRequest,
} from "../../features/songs/songsSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { Song } from "../../types/songTypes";
import LoadingSpinner from "../LoadingSpinner.tsx/LoadingSpinner";
import Modal from "../Modal/Modal";
import MusicForm from "../MuiscForm/MusicForm";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import {
  ButtonContainer,
  DropdownItem,
  DropdownMenu,
  FavoriteButton,
  Icon,
  OptionsButton,
  PlayButton,
  SongDetails,
  SongInfo,
  SongItem,
  SongMeta,
  SongsContainer,
  SongTitle,
  SubMenu,
  SubMenuItem,
} from "./SongsStyles";

// Component Definition
const Songs = () => {
  // Redux hooks to dispatch actions and access the song state
  const { songs, status } = useAppSelector((state) => state.songs);
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.favorites);
  const { playlists } = useAppSelector((state) => state.playlists);

  // Local state management for dropdown and modal
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [localFavorites, setLocalFavorites] = useState<string[]>([]);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  // Form hook for handling song updates
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [playerData, setPlayerData] = useState({
    url: "https://cdn-preview-8.dzcdn.net/stream/c-8ffd078d7efe834321a9ec2c1954efdf-1.mp3",
    isPlaying: false,
    title: "sois pas jaloux",
    artist: "Maître Gims",
  });
  // Fetch songs on component mount
  useEffect(() => {
    dispatch(fetchSongsRequest());
    dispatch(fetchFavoritesRequest());
    dispatch(fetchPlaylistsRequest());
  }, [dispatch]);

  // Sync local favorites with redux favorites
  useEffect(() => {
    setLocalFavorites(favorites.map((fav) => fav._id));
  }, [favorites]);

  // Handle dropdown toggle
  const toggleDropdown = (id: string) => {
    setDropdownOpen((prev) => (prev === id ? null : id));
  };

  // Open edit modal with selected song data
  const openEditModal = (song: Song) => {
    setSelectedSong(song);
    setModalOpen(true);
  };

  // Close modal and reset selected song
  const closeModal = () => {
    setModalOpen(false);
    setSelectedSong(null);
  };

  // Close modal if update is successful
  useEffect(() => {
    if (status === "idle") {
      closeModal();
    }
  }, [status]);

  // Submit handler for updating the song
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { title, artist, album, genre, songUrl } = data;
    if (selectedSong?._id) {
      dispatch(
        updateSongRequest({
          title,
          artist,
          album,
          genre,
          _id: selectedSong._id,
          songUrl: songUrl,
        })
      );
    }
    closeModal();
  };

  const handleDelete = (id: string) => {
    // dispatch delete action here
    dispatch(deleteSongRequest(id));
    setDropdownOpen(null);
  };

  const handleFav = (id: string) => {
    if (localFavorites.includes(id)) {
      // Remove from favorites
      dispatch(removeFavoriteRequest(id));
      setLocalFavorites((prev) => prev.filter((favId) => favId !== id));
    } else {
      // Add to favorites
      dispatch(addFavoriteRequest(id));
      setLocalFavorites((prev) => [...prev, id]);
    }
  };

  const handleAddToPlaylist = (playlistId: string, songId: string) => {
    // dispatch add to playlist action here
    dispatch(addSongToPlaylistRequest({ playlistId, songId }));
    setDropdownOpen(null);
    setSubMenuOpen(false);
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
    <SongsContainer>
      {status == "loading" && !songs ? (
        <LoadingSpinner />
      ) : (
        songs.map((song) => {
          const isFavorite = favorites.some((fav) => fav._id === song._id);
          return (
            <SongItem key={song._id}>
              <SongDetails>
                <Icon />
                <SongInfo>
                  <SongTitle>{song.title.toLocaleLowerCase()}</SongTitle>
                  <SongMeta>
                    {song.artist.toLocaleLowerCase()} •{" "}
                    {song.album.toLocaleLowerCase()} • {song.genre}
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
                    handleFav(song._id);
                  }}
                  isFav={isFavorite}
                >
                  <MdFavoriteBorder />
                </FavoriteButton>
                <OptionsButton onClick={() => toggleDropdown(song._id)}>
                  <FaEllipsisV />

                  <DropdownMenu
                    show={dropdownOpen === song._id}
                    onMouseLeave={() => {
                      setDropdownOpen(null);
                      setSubMenuOpen(false);
                    }}
                  >
                    <DropdownItem
                      onClick={() => {
                        openEditModal(song);
                        setDropdownOpen(null);
                      }}
                    >
                      Edit
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        handleDelete(song._id);
                      }}
                    >
                      Delete
                    </DropdownItem>
                    <DropdownItem
                      onMouseEnter={() => {
                        setSubMenuOpen(true);
                      }}
                    >
                      Add to Playlist
                    </DropdownItem>
                    {isSubMenuOpen && (
                      <SubMenu>
                        {playlists.length === 0 && (
                          <SubMenuItem>No playlists found</SubMenuItem>
                        )}
                        {playlists.map((playlist) => (
                          <SubMenuItem
                            key={playlist._id}
                            onClick={() => {
                              handleAddToPlaylist(playlist._id, song._id);
                              setSubMenuOpen(false);
                              setDropdownOpen(null);
                            }}
                          >
                            {playlist.name}
                          </SubMenuItem>
                        ))}
                      </SubMenu>
                    )}
                  </DropdownMenu>
                </OptionsButton>
              </ButtonContainer>
            </SongItem>
          );
        })
      )}

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <MusicForm
            title="Edit Song"
            handleSubmit={handleSubmit}
            register={register}
            onSubmit={onSubmit}
            errors={errors}
            formType="edit"
            defaultValues={selectedSong}
          />
        </Modal>
      )}
      <MusicPlayer playerData={playerData} />
    </SongsContainer>
  );
};
export default Songs;
