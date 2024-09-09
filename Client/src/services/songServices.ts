import { Song } from "../types/songTypes";
import api from "./apiConfig";

export interface SongResponse {
  data: Song[];
  status: string;
}
export const fetchSongs = async (): Promise<SongResponse> => {
  try {
    const response = await api.get("/songs");
    return response.data.data.songs;
  } catch (error) {
    console.error("Error fetching songs:", error);
    throw error;
  }
};

interface SongPayload {
  title: string;
  artist: string;
  album: string;
  genre: string;
}
//add a song
export const addSong = async (songData: SongPayload) => {
  try {
    const response = await api.post("/songs", songData);
    return response.data.data.song;
  } catch (error) {
    console.log("Error adding song:", error);
    throw error;
  }
};
