/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../../types/songTypes";

interface FavoriteState {
  favorites: Song[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: FavoriteState = {
  favorites: [],
  status: "idle",
  error: null,
};

const favoriteSlices = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    fetchFavoritesRequest(state) {
      state.status = "loading";
      state.error = null;
    },
    fetchFavoritesSuccess(state, action: PayloadAction<Song[]>) {
      state.favorites = action.payload;
      state.status = "idle";
    },
    fetchFavoritesFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.status = "failed";
    },
    addFavoriteRequest(state, _action: PayloadAction<string>) {
      state.status = "loading";
      state.error = null;
    },
    addFavoriteSuccess(state, action: PayloadAction<Song>) {
      state.favorites.push(action.payload);
      state.status = "idle";
    },
    addFavoriteFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.status = "failed";
    },
    removeFavoriteRequest(state, _action: PayloadAction<string>) {
      state.status = "loading";
      state.error = null;
    },
    removeFavoriteSuccess(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter(
        (fav) => fav._id !== action.payload
      );
      state.status = "idle";
    },
    removeFavoriteFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.status = "failed";
    },
  },
});

export const {
  fetchFavoritesFailure,
  fetchFavoritesRequest,
  fetchFavoritesSuccess,
  addFavoriteRequest,
  addFavoriteSuccess,
  addFavoriteFailure,
  removeFavoriteRequest,
  removeFavoriteFailure,
  removeFavoriteSuccess,
} = favoriteSlices.actions;

export default favoriteSlices.reducer;
