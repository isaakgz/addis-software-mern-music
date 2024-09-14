import { combineReducers } from "@reduxjs/toolkit";
import songsReducer from "../features/songs/songsSlice";
import statusReducer from "../features/stats/statsSlice";
import authReducer from "../features/auth/authSlice";
import favoriteReducer from "../features/favorites/favoritesSlices";
import playlistsReducer from "../features/playlists/playlistsSlice";

const rootReducer = combineReducers({
  songs: songsReducer,
  statistics: statusReducer,
  auth: authReducer,
  favorites: favoriteReducer,
  playlists: playlistsReducer,
});

export default rootReducer;
