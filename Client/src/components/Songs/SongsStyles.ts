import styled from "@emotion/styled";
import { FaMusic } from "react-icons/fa";

export const Colors = {
  primary: "#ff6f61",
  primaryHover: "#e65c50",
  background: "rgba(255, 255, 255, 0.1)",
  text: "white",
  border: "rgba(255, 255, 255, 0.5)",
  darkBackground: "#333",
  darkHoverBackground: "#444",
  lightText: "#666",
  lightHoverText: "#333",
  cardBackground: "#444",
  primaryDark: "#e65c50",
};

export const SongsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;
  padding-top: 0;
  overflow-y: auto;
  background-color: ${Colors.background};
  color: ${Colors.text};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const SongItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  background-color: ${Colors.darkBackground};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${Colors.darkHoverBackground};
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
  }
`;

export const SongDetails = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Icon = styled(FaMusic)`
  margin-right: 15px;
  font-size: 24px;
  color: ${Colors.primary};

  @media (max-width: 600px) {
    font-size: 20px;
    margin-right: 10px;
  }
`;

export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SongTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: ${Colors.text};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const SongMeta = styled.div`
  font-size: 14px;
  color: ${Colors.lightText};

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const FavoriteButton = styled.button<{ isFav?: boolean }>`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: ${(props) => (props.isFav ? Colors.primary : Colors.lightText)};
  position: relative;
  &:hover {
    color: ${Colors.primaryHover};
  }

  @media (max-width: 600px) {
    align-self: flex-end;
  }
`;

export const OptionsButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: ${Colors.lightText};
  position: relative;

  &:hover {
    color: ${Colors.lightHoverText};
  }

  @media (max-width: 600px) {
    align-self: flex-end;
  }
`;

export const DropdownMenu = styled.div<{ show: boolean }>`
  position: absolute;
  right: 0;
  top: 100%;
  background-color: ${Colors.darkBackground};
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 100;
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
