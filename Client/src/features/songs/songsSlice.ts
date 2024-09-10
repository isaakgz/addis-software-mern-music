/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song, SongPayload } from "../../types/songTypes";

interface SongsState {
  songs: Song[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: SongsState = {
  songs: [],
  status: "idle",
  error: null,
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    // Action to start fetching songs
    fetchSongsRequest(state) {
      state.status = "loading";
      state.error = null;
    },

    // Action to handle successful fetching of songs
    fetchSongsSuccess(state, action: PayloadAction<Song[]>) {
      state.songs = action.payload;
      state.status = "idle";
    },
    // Action to handle failed fetching of songs
    fetchSongsFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
    // Action to start adding a song

    addSongRequest(state, _action: PayloadAction<SongPayload>) {
      state.status = "loading";
      state.error = null;
    },
    // Action to handle successful addition of a song
    addSongSuccess(state, action: PayloadAction<Song>) {
      state.songs.push(action.payload);
      state.status = "idle";
    },
    // Action to handle failed addition of a song
    addSongFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },

    //action to update a song
    updateSongRequest(state, _action: PayloadAction<Song>) {
      state.status = "loading";
      state.error = null;
    },
    //action to handle successful update of a song
    updateSongSuccess(state, action: PayloadAction<Song>) {
      // Find the index of the song to be updated
      const index = state.songs.findIndex(
        (song) => song._id === action.payload._id
      );

      //check if the song is found and update it
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
      state.status = "idle";

    },
    //action to handle failed update of a song
    updateSongFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },

    //action to delete a song
    deleteSongRequest(state, _action: PayloadAction<string>) {
      state.status = "loading";
      state.error = null;
    },
    //action to handle successful deletion of a song
    deleteSongSuccess(state, action: PayloadAction<string>) {
      state.songs = state.songs.filter((song) => song._id !== action.payload);
      state.status = "idle";
    },
    //action to handle failed deletion of a song
    deleteSongFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
    // Action to clear the error
    clearError(state) {
      state.error = null;
    },
  },
});

export const {
  fetchSongsFailure,
  fetchSongsRequest,
  fetchSongsSuccess,
  addSongFailure,
  addSongRequest,
  addSongSuccess,
  updateSongFailure,
  updateSongRequest,
  updateSongSuccess,
  clearError,
  deleteSongFailure,
  deleteSongRequest,
  deleteSongSuccess,
} = songsSlice.actions;

export default songsSlice.reducer;
