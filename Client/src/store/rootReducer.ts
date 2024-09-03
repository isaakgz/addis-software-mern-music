import { combineReducers } from "@reduxjs/toolkit";
import songsReducer from "../features/songs/songsSlice";
import statusReducer from "../features/stats/statsSlice";

const rootReducer = combineReducers({
  songs: songsReducer,
  statistics: statusReducer,
});

export default rootReducer;
