export interface SongPayload {
  title: string;
  artist: string;
  album: string;
  genre: string;
  songUrl: string;
}

export interface Song extends SongPayload {
  _id: string;
  // createdAt: string;
}
export interface DeezerSong {
  id: number;
  title: string;
  album: {
    title: string;
  };
  artist: {
    name: string;
  };
  preview: string;
}

export interface Playlist {
  name: string;
  _id: string;
  songs: string[];
}
