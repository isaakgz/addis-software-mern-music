// MusicPlayer.tsx
import React from "react";
import ReactPlayer from "react-player";
import styled from "@emotion/styled";
import { Colors } from "../Songs/SongsStyles";

const PlayerWrapper = styled.div`
  position: absolute;
  bottom: 24px;

  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 0, 10px;

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
`;

const SongDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  color: ${Colors.text};
`;
const SongTitle = styled.p`
  color: ${Colors.text};
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  text-align: center;
  word-break: break-word; // Handle long titles
`;
const SongArtist = styled.p`
  color: ${Colors.text};
  font-size: 0.8rem;
  margin: 0;
  text-align: center;
`;

interface MusicPlayer {
  url: string;
  isPlaying: boolean;
  title: string;
  artist: string;
}

interface MusicPlayerProps {
  playerData: MusicPlayer;
}
const MusicPlayer: React.FC<MusicPlayerProps> = ({
  playerData: { url, isPlaying, title, artist },
}: MusicPlayerProps) => {
  return (
    <PlayerWrapper>
      <SongDetails>
        <SongTitle>{title.substring(0, 15)}</SongTitle>
        <SongArtist>{artist.substring(0, 15)}</SongArtist>
      </SongDetails>
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="50px"
        playing={isPlaying}
      />
    </PlayerWrapper>
  );
};

export default MusicPlayer;
