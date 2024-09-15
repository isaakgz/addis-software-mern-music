export interface SongPayload {
  title: string;
  artist: string;
  album: string;
  genre: string;
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
}
