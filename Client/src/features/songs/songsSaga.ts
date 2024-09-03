import { call, put, takeLatest } from "redux-saga/effects";
import { fetchSongs } from "../../services/songServices";
import { Song } from "../../types/songTypes";
import {
  fetchSongsFailure,
  fetchSongsRequest,
  fetchSongsSuccess,
} from "./songsSlice";
import { AxiosError } from "axios";

// This is a worker saga that fetches songs from the API and dispatches the appropriate action based on the result.
function* fetchSongsSaga() {
  try {
    const response: Song[] = yield call(fetchSongs);
    yield put(fetchSongsSuccess(response));
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data.message || error.message;
      yield put(fetchSongsFailure(errorMessage));
    } else {
      console.log("unknown error", error);
      yield put(fetchSongsFailure((error as Error).message));
    }
  }
}

// This is a watcher saga that watches for fetchSongsRequest actions and calls fetchSongsSaga when it sees one.
export default function* songsSaga() {
  yield takeLatest(fetchSongsRequest.type, fetchSongsSaga);
}
