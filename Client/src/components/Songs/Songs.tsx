/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  DropdownItem,
  DropdownMenu,
  Icon,
  OptionsButton,
  SongDetails,
  SongInfo,
  SongItem,
  SongMeta,
  SongTitle,
  SongsContainer,
} from "./SongsStyles";
import { fetchSongsRequest } from "../../features/songs/songsSlice";
import Modal from "../Modal/Modal";
import MusicForm from "../MuiscForm/MusicForm";

const Songs = () => {
  const { songs } = useAppSelector((state) => state.songs);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    if (dropdownOpen === id) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(id);
    }
  };

  const openEditModal = (song: any) => {
    setSelectedSong(song);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedSong(null);
  };

  return (
    <SongsContainer>
      {songs.map((song) => (
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
              <DropdownItem>Delete</DropdownItem>
            </DropdownMenu>
          </OptionsButton>
        </SongItem>
      ))}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <MusicForm
          title="Edit Song"
          handleSubmit={() => {}}
          register={() => {}}
          onSubmit={() => {}}
          errors={{}}
          formType="edit"
          
        />
      </Modal>
    </SongsContainer>
  );
};

export default Songs;
