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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  clearError,
} = songsSlice.actions;

export default songsSlice.reducer;
