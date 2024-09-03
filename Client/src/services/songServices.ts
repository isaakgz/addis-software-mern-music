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
