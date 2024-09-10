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
