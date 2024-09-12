/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaEllipsisV } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import {
  addFavoriteRequest,
  fetchFavoritesRequest,
  removeFavoriteRequest,
} from "../../features/favorites/favoritesSlices";
import {
  deleteSongRequest,
  fetchSongsRequest,
  updateSongRequest,
} from "../../features/songs/songsSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { Song } from "../../types/songTypes";
import Modal from "../Modal/Modal";
import MusicForm from "../MuiscForm/MusicForm";
import {
  ButtonContainer,
  DropdownItem,
  DropdownMenu,
  FavoriteButton,
  Icon,
  OptionsButton,
  SongDetails,
  SongInfo,
  SongItem,
  SongMeta,
  SongTitle,
  SongsContainer,
} from "./SongsStyles";

// Component Definition
const Songs = () => {
  // Redux hooks to dispatch actions and access the song state
  const { songs, status } = useAppSelector((state) => state.songs);
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.favorites);

  // Local state management for dropdown and modal
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [localFavorites, setLocalFavorites] = useState<string[]>([]);

  // Form hook for handling song updates
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Fetch songs on component mount
  useEffect(() => {
    dispatch(fetchSongsRequest());
    dispatch(fetchFavoritesRequest());
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
    const { title, artist, album, genre } = data;
    if (selectedSong?._id) {
      dispatch(
        updateSongRequest({
          title,
          artist,
          album,
          genre,
          _id: selectedSong._id,
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

  return (
    <SongsContainer>
      {songs.map((song) => {
        const isFavorite = favorites.some((fav) => fav._id === song._id);
        return (
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
                  handleFav(song._id);
                }}
                isFav={isFavorite}
              >
                <MdFavoriteBorder />
              </FavoriteButton>

              <OptionsButton onClick={() => toggleDropdown(song._id)}>
                <FaEllipsisV />
                <DropdownMenu show={dropdownOpen === song._id}>
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
                </DropdownMenu>
              </OptionsButton>
            </ButtonContainer>
          </SongItem>
        );
      })}
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
    </SongsContainer>
  );
};

export default Songs;
