import React from "react";
import ReactPlayer from "react-player";

import {
  PlayerWrapper,
  SongArtist,
  SongDetails,
  SongTitle,
} from "./MusicPlayerStyles";

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
