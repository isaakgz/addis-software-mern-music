import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StatsData } from "../../types/statsTypes";

interface StatusState {
  status: "idle" | "loading" | "failed";
  error: string | null;
  statusData: StatsData;
}

const initialState: StatusState = {
  status: "idle",
  error: null,
  statusData: {
    totalSongs: 0,
    totalArtists: 0,
    totalAlbums: 0,
    totalGenres: 0,
    songsAndAlbumsByArtist: [],
    songsInEachAlbum: [],
    songsInEachGenre: [],
  },
};

const statusSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    fetchStatusRequest(state) {
      state.status = "loading";
      state.error = null;
    },
    fetchStatusSuccess(state, action: PayloadAction<StatsData>) {
      state.statusData = action.payload;
      state.status = "idle";
    },
    fetchStatusFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { fetchStatusFailure, fetchStatusRequest, fetchStatusSuccess } =
  statusSlice.actions;

export default statusSlice.reducer;
