/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Colors } from "../Songs/SongsStyles";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
 
  margin: 1rem auto;
  border-radius: 5px;
  background-color: ${Colors.darkBackground};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  width: 70%;
  max-width: 800px;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${Colors.darkHoverBackground};
  }
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  color: ${Colors.primary};
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  color: ${Colors.text};
`;

export const Name = styled.h3`
  margin: 0;
  padding: 0;
  color: ${Colors.text};
`;

export const Count = styled.p`
  margin: 0;
  padding: 0;
  color: ${Colors.text};
`;
