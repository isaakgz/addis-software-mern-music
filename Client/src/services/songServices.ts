import { Song, SongPayload } from "../types/songTypes";
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

//update a song
export const updateSong = async (songData: SongPayload, _id: string) => {
  try {
    const response = await api.put(`/songs/${_id}`, songData);
    return response.data.data.updatedSong;
  } catch (error) {
    console.log("Error updating song:", error);
    throw error;
  }
};

//delete a song
export const deleteSong = async (_id: string) => {
  try {
    const response = await api.delete(`/songs/${_id}`);

    if (response.data.status === "success") {
      return _id;
    } else {
      throw new Error("Failed to delete song");
    }
  } catch (error) {
    console.log("Error deleting song:", error);
    throw error;
  }
};

export const fetchSongSuggestions = async (query: string) => {
  try {
    const response = await api.get("/songs/suggestions", {
      params: {
        query,
      },
    });
    return response.data.data.suggestions;
  } catch (error) {
    console.error("Error fetching song suggestions:", error);
    throw error;
  }
};
