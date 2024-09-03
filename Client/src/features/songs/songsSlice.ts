import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../../types/songTypes";

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
    fetchSongsRequest(state) {
      state.status = "loading";
      state.error = null;
    },
    fetchSongsSuccess(state, action: PayloadAction<Song[]>) {
      state.songs = action.payload;
      state.status = "idle";
    },
    fetchSongsFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { fetchSongsFailure, fetchSongsRequest, fetchSongsSuccess } =
  songsSlice.actions;

export default songsSlice.reducer;
