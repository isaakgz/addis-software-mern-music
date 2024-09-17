/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import { FaEllipsisV, FaPlay, FaTrash } from "react-icons/fa"; // Import icons
import { IoIosAddCircle } from "react-icons/io"; // Import Add Icon
import {
  Button,
  ErrorMessage,
  Form,
  FormTitle,
  Input,
} from "../../components/AuthForm/AuthFormStyles"; // Styled components for forms
import Modal from "../../components/Modal/Modal"; // Modal component
import {
  addPlaylistRequest,
  deletePlaylistRequest,
  fetchPlaylistsRequest,
} from "../../features/playlists/playlistsSlice"; // Redux action to add playlist
import { useAppDispatch, useAppSelector } from "../../store"; // Redux hooks
import {
  Title,
  CreatePlaylistButton,
  PlaylistsContainer,
  PlaylistCard,
  PlaylistTitle,
  CountText,
  PlaylistActions,
  OptionButton,
  DropdownMenu,
  DropdownItem,
} from "./PlaylistsStyles"; // Styled components for Playlists
import { FieldValues, useForm } from "react-hook-form"; // React-hook-form for form management
import toast from "react-hot-toast"; // Notification system
import { useNavigate } from "react-router-dom";

// Component Definition: PlaylistsPage
function PlaylistsPage() {
  // Component state
  const [dropDownOpen, setDropdownOpen] = useState<string | null>(null); // Controls visibility of dropdown for each playlist
  // Controls visibility of dropdown for each playlist
  const [isModalOpen, setModalOpen] = useState(false); // Controls modal visibility

  // React hook form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Redux hooks
  const dispatch = useAppDispatch();
  const { playlists, error, status:playListStat } = useAppSelector(
    (state) => state.playlists
  ); // Get playlists state from Redux

  // Refs to track previous values for status and playlists length
  const previousStatus = useRef(playListStat);
  const previousPlaylistsLength = useRef(playlists.length);

  // useEffect to fetch playlists on component mount
  useEffect(() => {
    dispatch(fetchPlaylistsRequest()); // Dispatch request to fetch playlists
  }, [dispatch]);
  const navigate = useNavigate();

  // useEffect to handle side effects when status or playlists change
  useEffect(() => {
    // Dismiss any existing toasts when status changes
    toast.dismiss();

    // Show error toast if there's an error
    if (error) {
      toast.error(error);
    }

    // Check if a playlist has been successfully created (status is "idle" after creation)
    if (
      playListStat === "idle" &&
      playlists.length > previousPlaylistsLength.current
    ) {
      toast.success("Playlist created successfully");
      previousPlaylistsLength.current = playlists.length; // Update the previous length to the current one
      closeAddModal(); // Close the modal
      reset(); // Reset the form
    }

    // Show loading toast when status transitions to "loading"
    if (status === "loading" && previousStatus.current === "loading") {
      toast.loading("Creating playlist...");
    }

    // Keep track of the current status
    previousStatus.current = playListStat;
  }, [dispatch, error, playListStat, playlists.length, reset]);

  // Event handler to toggle the dropdown visibility for playlist actions
  const toggleDropdown = (id: string) => {
    setDropdownOpen((prev) => (prev === id ? null : id));
  };

  // Event handler to handle opening a playlist (not yet implemented)
  const handleOpen = (id: string) => {
    navigate(`/playlists/${id}`); // Placeholder logic for opening a playlist
  };

  // Event handler to handle adding a playlist (dispatched to redux)
  const handleAddPlaylist = (data: FieldValues) => {
    dispatch(addPlaylistRequest(data.playlistName)); // Dispatch the request to add a playlist
  };

  // Modal open/close handlers
  const openAddModal = () => setModalOpen(true);
  const closeAddModal = () => setModalOpen(false);

  // Event handler to delete a playlist (not yet implemented)
  const handleDelete = (id: string) => {
    dispatch(deletePlaylistRequest(id)); // Dispatch the request to delete a playlist
  };

  return (
    <>
      <Title>Playlists</Title> {/* Page title */}
      <CreatePlaylistButton onClick={openAddModal}>
        <IoIosAddCircle
          style={{
            fontSize: "1.5rem",
            marginRight: "0.5rem",
            verticalAlign: "middle",
          }}
        />
        Create Playlist
      </CreatePlaylistButton>
      {/* Playlist List */}
      <PlaylistsContainer>
        {playlists.length === 0 && <Title>No playlists found</Title>}
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist._id}>
            <PlaylistTitle>{playlist.name}</PlaylistTitle> {/* Playlist name */}
            <CountText>{playlist.songs.length} songs</CountText>{" "}
            {/* Song count */}
            {/* Playlist actions (dropdown for more options) */}
            <PlaylistActions>
              <OptionButton onClick={() => toggleDropdown(playlist._id)}>
                <FaEllipsisV />
              </OptionButton>
              <DropdownMenu isVisible={dropDownOpen === playlist._id}>
                <DropdownItem onClick={() => handleOpen(playlist._id)}>
                  <FaPlay /> Open
                </DropdownItem>
                <DropdownItem onClick={() => handleDelete(playlist._id)}>
                  <FaTrash /> Delete
                </DropdownItem>
              </DropdownMenu>
            </PlaylistActions>
          </PlaylistCard>
        ))}
      </PlaylistsContainer>
      {/* Add Playlist Modal */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeAddModal}>
          <Form
            onSubmit={handleSubmit((data) => handleAddPlaylist(data))}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              gap: "1rem",
            }}
          >
            <FormTitle>Create Playlist</FormTitle>
            <Input
              {...register("playlistName", {
                required: "Playlist name is required",
                minLength: {
                  value: 3,
                  message: "Playlist name must be at least 3 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Playlist name must be at most 10 characters",
                },
              })}
              type="text"
              placeholder="Playlist Name"
            />
            {errors?.playlistName && (
              <ErrorMessage>{String(errors.playlistName.message)}</ErrorMessage>
            )}
            <Button type="submit">Create Playlist</Button>
          </Form>
        </Modal>
      )}
    </>
  );
}

export default PlaylistsPage;
