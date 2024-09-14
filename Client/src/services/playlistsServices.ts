import api from "./apiConfig";

export const fetchPlaylists = async () => {
  try {
    const response = await api.get("/users/playlists");
    return response.data.data.playlists;
  } catch (error) {
    console.log("Error fetching playlists:", error);
    throw error;
  }
};

export const addPlaylist = async (playlistName: string) => {
  try {
    const response = await api.post("/users/playlists", { playlistName });
    return response.data.data.playlist;
  } catch (error) {
    console.log("Error adding playlist:", error);
    throw error;
  }
};

export const deletePlaylist = async (playlistId: string) => {
  try {
    const response = await api.delete(`/users/playlists/${playlistId}`);
    return response.data.data.deletedPlaylist;
  } catch (error) {
    console.log("Error deleting playlist:", error);
    throw error;
  }
};

export const fetchPlaylistSongs = async (playlistId: string) => {
  try {
    const response = await api.get(`/users/playlists/${playlistId}`);
    return response.data.data.songs;
  } catch (error) {
    console.log("Error fetching playlist songs:", error);
    throw error;
  }
};

export const addSongToPlaylist = async (playlistId: string, songId: string) => {
  try {
    const response = await api.post(`/users/playlists/${playlistId}/${songId}`);
    return response.data.data.playlists;
  } catch (error) {
    console.log("Error adding song to playlist:", error);
    throw error;
  }
};

export const removeSongFromPlaylist = async (playlistId: string, songId: string) => {
  try {
    const response = await api.delete(
      `/users/playlists/${playlistId}/${songId}`
    );
    return response.data.data.playlists;
  } catch (error) {
    console.log("Error removing song from playlist:", error);
    throw error;
  }
};
