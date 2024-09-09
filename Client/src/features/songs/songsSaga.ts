import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { addSong, fetchSongs } from "../../services/songServices";
import { Song, SongPayload } from "../../types/songTypes";
import handleSagaError from "../../utils/errorHandlerSaga";
import {
  addSongFailure,
  addSongRequest,
  addSongSuccess,
  fetchSongsFailure,
  fetchSongsRequest,
  fetchSongsSuccess
} from "./songsSlice";

// This is a worker saga that fetches songs from the API and dispatches the appropriate action based on the result.
function* fetchSongsSaga() {
  try {
    const response: Song[] = yield call(fetchSongs);
    yield put(fetchSongsSuccess(response));
  } catch (error) {
    yield handleSagaError(error, fetchSongsFailure);
  }
}

// a worker saga to add a song
function* addSongSaga(action: PayloadAction<SongPayload>) {
  try {
    const response: Song = yield call(addSong, action.payload);
    yield put(addSongSuccess(response));
  } catch (error) {
    yield handleSagaError(error, addSongFailure);
  }
}

// This is a watcher saga that watches for fetchSongsRequest actions and calls fetchSongsSaga when it sees one.
export default function* songsSaga() {
  yield takeLatest(fetchSongsRequest.type, fetchSongsSaga);
  yield takeLatest(addSongRequest.type, addSongSaga);
}
