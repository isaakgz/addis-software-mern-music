import { combineReducers } from "@reduxjs/toolkit";
import songsReducer from "../features/songs/songsSlice";
import statusReducer from "../features/stats/statsSlice";
import authReducer from "../features/auth/authSlice";
import favoriteReducer from "../features/favorites/favoritesSlices"

const rootReducer = combineReducers({
  songs: songsReducer,
  statistics: statusReducer,
  auth: authReducer,
  favorites: favoriteReducer,
});

export default rootReducer;
