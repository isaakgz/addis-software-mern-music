/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Playlist {
  name: string;
  _id: string;
  songs: string[];
}

interface PlaylistsState {
  playlists: Playlist[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: PlaylistsState = {
  playlists: [],
  status: "idle",
  error: null,
};

const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    fetchPlaylistsRequest(state) {
      state.status = "loading";
      state.error = null;
    },
    fetchPlaylistsSuccess(state, action: PayloadAction<Playlist[]>) {
      state.playlists = action.payload;
      state.status = "idle";
    },
    fetchPlaylistsFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
    addPlaylistRequest(state, _action: PayloadAction<string>) {
      state.status = "loading";
      state.error = null;
    },
    addPlaylistSuccess(state, action: PayloadAction<Playlist>) {
      state.playlists.push(action.payload);
      state.status = "idle";
    },
    addPlaylistFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
    deletePlaylistRequest(state, _action: PayloadAction<string>) {
      state.status = "loading";
      state.error = null;
    },
    deletePlaylistSuccess(state, action: PayloadAction<string>) {
      state.playlists = state.playlists.filter(
        (playlist) => playlist._id !== action.payload
      );
      state.status = "idle";
    },
    deletePlaylistFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
    addSongToPlaylistRequest(
      state,
      _action: PayloadAction<{ playlistId: string; songId: string }>
    ) {
      state.status = "loading";
      state.error = null;
    },
    addSongToPlaylistSuccess(state, action: PayloadAction<Playlist>) {
      state.playlists = state.playlists.map((playlist) =>
        playlist._id === action.payload._id ? action.payload : playlist
      );
      state.status = "idle";
    },
    addSongToPlaylistFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
    removeSongFromPlaylistRequest(
      state,
      _action: PayloadAction<{ playlistId: string; songId: string }>
    ) {
      state.status = "loading";
      state.error = null;
    },
    removeSongFromPlaylistSuccess(state, action: PayloadAction<Playlist>) {
      state.playlists = state.playlists.map((playlist) =>
        playlist._id === action.payload._id ? action.payload : playlist
      );
      state.status = "idle";
    },
    removeSongFromPlaylistFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  fetchPlaylistsRequest,
  fetchPlaylistsFailure,
  fetchPlaylistsSuccess,
  addPlaylistRequest,
  addPlaylistFailure,
  addPlaylistSuccess,
  deletePlaylistFailure,
  deletePlaylistRequest,
  deletePlaylistSuccess,
  addSongToPlaylistFailure,
  addSongToPlaylistRequest,
  addSongToPlaylistSuccess,
  removeSongFromPlaylistFailure,
  removeSongFromPlaylistRequest,
  removeSongFromPlaylistSuccess,
} = playlistsSlice.actions;

export default playlistsSlice.reducer;
