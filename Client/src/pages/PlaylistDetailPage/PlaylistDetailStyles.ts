import styled from "@emotion/styled";
import { Colors } from "../../components/Songs/SongsStyles";

export const PlaylistDescription = styled.div`
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

export const Button = styled.button`
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
