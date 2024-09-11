/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState } from "react";
import { FaEllipsisV, FaPlay, FaTrash } from "react-icons/fa";
import { Colors } from "../../components/Songs/SongsStyles";

// Styled components
const Title = styled.h1`
  color: ${Colors.text};
  margin-bottom: 20px;
  text-align: center;
`;

const PlaylistsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background-color: ${Colors.background};
  margin: 1rem auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 60vw;
  border: 1px solid ${Colors.border};
  height: auto;
  max-height: 55vh;
  min-height: 50vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0.5rem;
  }
`;

const PlaylistCard = styled.div`
  background-color: ${Colors.cardBackground};
  padding: 0.75rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 220px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 160px;
  }
`;

const PlaylistTitle = styled.h2`
  color: ${Colors.text};
  margin-bottom: 10px;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const PlaylistActions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 1rem;
  position: relative;
`;

const OptionButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${Colors.primary};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: ${Colors.primaryDark};
  }
`;

const DropdownMenu = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  position: absolute;
  right: 0;
  top: 100%;
  background-color: ${Colors.darkBackground};
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  color: ${Colors.text};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${Colors.darkHoverBackground};
  }
`;

const CountText = styled.p`
  color: ${Colors.text};
  font-size: 14px;
  margin-top: 0.5rem;
`;

// Playlist data
const playlists = [
  {
    _id: 1,
    name: "Playlist 1",
  },
  {
    _id: 2,
    name: "Playlist 2",
  },
  {
    _id: 3,
    name: "Playlist 3",
  },
  {
    _id: 4,
    name: "Playlist 4",
  },
  {
    _id: 5,
    name: "Playlist 5",
  },
  {
    _id: 6,
    name: "Playlist 5",
  },
  {
    _id: 7,
    name: "Playlist 5",
  },
  {
    _id: 8,
    name: "Playlist 5",
  },
  {
    _id: 9,
    name: "Playlist 5",
  },
];

// Component Definition
function PlaylistsPage() {
  const [dropdownVisible, setDropdownVisible] = useState<number | null>(null);

  const handleOpen = (id: number) => {
    // Logic to open playlist
    console.log(id)
  };

  const handleDelete = (id: number) => {
    // Logic to delete playlist
    console.log(id)
  };

  const toggleDropdown = (id: number) => {
    setDropdownVisible(dropdownVisible === id ? null : id);
  };

  return (
    <>
      <Title>Playlists</Title>
      <PlaylistsContainer>
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist._id}>
            <PlaylistTitle>{playlist.name}</PlaylistTitle>
            <CountText>
              10 songs
            </CountText>
              
            <PlaylistActions>
              <OptionButton onClick={() => toggleDropdown(playlist._id)}>
                <FaEllipsisV />
              </OptionButton>
              <DropdownMenu isVisible={dropdownVisible === playlist._id}>
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
    </>
  );
}

export default PlaylistsPage;
