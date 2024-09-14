/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Colors } from "../../components/Songs/SongsStyles";

// Styled components
export const Title = styled.h1`
  color: ${Colors.text};
  margin-bottom: 20px;
  text-align: center;
`;

export const PlaylistsContainer = styled.div`
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

export const PlaylistCard = styled.div`
  background-color: ${Colors.cardBackground};
  padding: 0.75rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-height: 220px;
  max-width: 220px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 160px;
    max-height: 160px;
  }
`;

export const PlaylistTitle = styled.h2`
  color: ${Colors.text};
  margin-bottom: 10px;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const PlaylistActions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 1rem;
  position: relative;
`;

export const OptionButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${Colors.primary};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: ${Colors.primaryDark};
  }
`;

export const CreatePlaylistButton = styled.button`
  background-color: ${Colors.primary};
  color: ${Colors.text};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: ${Colors.primaryHover};
  }
`;

export const DropdownMenu = styled.div<{ isVisible: boolean }>`
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

export const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  color: ${Colors.text};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${Colors.darkHoverBackground};
  }
`;

export const CountText = styled.p`
  color: ${Colors.text};
  font-size: 14px;
  margin-top: 0.5rem;
`;
