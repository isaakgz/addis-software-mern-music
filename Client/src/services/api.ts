import axios from "axios";

const api = axios.create({
  baseURL: "/api", // This is the base url of the API we configured  set the target url using vite.config.ts
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  genre: string;
  albumImageUrl: string;
}

export const fetchSongs = async (): Promise<Song[]> => {
  const response = await api.get("/songs");
  return response.data.data.songs;
};

interface ArtistData {
  totalSongs: number;
  artist: string;
  totalAlbums: number;
}

interface AlbumData {
  totalSongs: number;
  album: string;
}

interface GenreData {
  totalSongs: number;
  genre: string;
}

export interface StatsData {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
  songsAndAlbumsByArtist: ArtistData[];
  songsInEachAlbum: AlbumData[];
  songsInEachGenre: GenreData[];
}

export interface StatsResponse {
  data: StatsData;
  status: string;
}
export const fetchStats = async (): Promise<StatsResponse> => {
  const response = await api.get("/stats");
  return response.data.data;
};
