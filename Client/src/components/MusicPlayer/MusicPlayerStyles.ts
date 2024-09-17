import styled from "@emotion/styled";
import { Colors } from "../Songs/SongsStyles";

export const PlayerWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 10px;
  background-image: linear-gradient(
    45deg,
    hsl(240deg 72% 53%) 0%,
    hsl(309deg 100% 32%) 20%,
    hsl(337deg 100% 33%) 40%,
    hsl(4deg 78% 31%) 60%,
    hsl(33deg 100% 20%) 80%,
    hsl(56deg 63% 17%) 100%
  );
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000; // Ensure it's above other content

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 5px;
  }

  @media (max-width: 480px) {
    bottom: 10px;
    padding: 5px;
  }
`;

export const SongDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  color: ${Colors.text};

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

export const SongTitle = styled.p`
  color: ${Colors.text};
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  text-align: center;
  word-break: break-word; // Handle long titles

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const SongArtist = styled.p`
  color: ${Colors.text};
  font-size: 0.8rem;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
`;
