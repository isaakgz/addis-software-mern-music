import toast from "react-hot-toast";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  addSong,
  deleteSong,
  fetchSongs,
  updateSong,
} from "../../services/songServices";
import { Song } from "../../types/songTypes";
import handleSagaError from "../../utils/errorHandlerSaga";
import {
  addSongFailure,
  addSongRequest,
  addSongSuccess,
  deleteSongRequest,
  deleteSongSuccess,
  fetchSongsFailure,
  fetchSongsRequest,
  fetchSongsSuccess,
  updateSongFailure,
  updateSongRequest,
  updateSongSuccess,
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
function* addSongSaga(action: ReturnType<typeof addSongRequest>) {
  try {
    const response: Song = yield call(addSong, action.payload);
    yield put(addSongSuccess(response));
  } catch (error) {
    yield handleSagaError(error, addSongFailure);
  }
}

//worker saga to delete a song
function* deleteSongSaga(action: ReturnType<typeof deleteSongRequest>) {
  try {
    const response: string = yield call(deleteSong, action.payload);
    yield put(deleteSongSuccess(response));
    toast.success("Song deleted successfully!");
  } catch (error) {
    yield handleSagaError(error, fetchSongsFailure);
  }
}

//a worker saga to update a song
function* updateSongSaga(action: ReturnType<typeof updateSongRequest>) {
  try {
    const { _id, ...payload } = action.payload;
    const response: Song = yield call(updateSong, payload, _id);
    yield put(updateSongSuccess(response));
    // Show success toast notification
    toast.success("Song updated successfully!");
  } catch (error) {
    yield handleSagaError(error, updateSongFailure);
  }
}

// This is a watcher saga that watches for fetchSongsRequest actions and calls fetchSongsSaga when it sees one.
export default function* songsSaga() {
  yield takeLatest(fetchSongsRequest.type, fetchSongsSaga);
  yield takeLatest(addSongRequest.type, addSongSaga);
  yield takeLatest(updateSongRequest.type, updateSongSaga);
  yield takeLatest(deleteSongRequest.type, deleteSongSaga);
}
