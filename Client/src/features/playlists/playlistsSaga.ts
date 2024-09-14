import { call, put, takeLatest } from "redux-saga/effects";
import {
  addPlaylist,
  addSongToPlaylist,
  deletePlaylist,
  fetchPlaylists,
  removeSongFromPlaylist,
} from "../../services/playlistsServices";
import handleSagaError from "../../utils/errorHandlerSaga";
import {
  addPlaylistFailure,
  addPlaylistRequest,
  addPlaylistSuccess,
  addSongToPlaylistRequest,
  deletePlaylistFailure,
  deletePlaylistRequest,
  deletePlaylistSuccess,
  fetchPlaylistsFailure,
  fetchPlaylistsRequest,
  fetchPlaylistsSuccess,
  removeSongFromPlaylistRequest,
  removeSongFromPlaylistSuccess,
} from "./playlistsSlice";

interface Playlist {
  name: string;
  _id: string;
  songs: string[];
}

//worker saga to handle fetchPlaylistsRequest
function* fetchPlaylistsSaga() {
  try {
    const response: Playlist[] = yield call(fetchPlaylists);
    yield put(fetchPlaylistsSuccess(response));
  } catch (error) {
    yield handleSagaError(error, fetchPlaylistsFailure);
  }
}

//worker saga to handle AddPlaylistRequest
function* addPlaylistSaga(action: ReturnType<typeof addPlaylistRequest>) {
  try {
    const response: Playlist = yield call(addPlaylist, action.payload);
    yield put(addPlaylistSuccess(response));
  } catch (error) {
    yield handleSagaError(error, addPlaylistFailure);
  }
}

//worker saga to add a song to a playlist
function* addSongToPlaylistSaga(
  action: ReturnType<typeof addSongToPlaylistRequest>
) {
  try {
    const { playlistId, songId } = action.payload;
    const response: Playlist = yield call(
      addSongToPlaylist,
      playlistId,
      songId
    );
    yield put(addPlaylistSuccess(response));
  } catch (error) {
    yield handleSagaError(error, addPlaylistFailure);
  }
}

//worker saga to remove songs from a playlist
function* removeSongFromPlaylistSaga(
  action: ReturnType<typeof removeSongFromPlaylistRequest>
) {
  try {
    const { playlistId, songId } = action.payload;
    const response: Playlist = yield call(
      removeSongFromPlaylist,
      playlistId,
      songId
    );
    yield put(removeSongFromPlaylistSuccess(response));
  } catch (error) {
    yield handleSagaError(error, addPlaylistFailure);
  }
}

//worker saga to delete a playlists
function* deletePlaylistSaga(action: ReturnType<typeof deletePlaylistRequest>) {
  try {
    const response: string = yield call(deletePlaylist, action.payload);
    yield put(deletePlaylistSuccess(response));
  } catch (error) {
    yield handleSagaError(error, deletePlaylistFailure);
  }
}

//watcher saga to handle fetchPlaylistsRequest
export default function* playlistsSaga() {
  yield takeLatest(fetchPlaylistsRequest.type, fetchPlaylistsSaga);
  yield takeLatest(addPlaylistRequest.type, addPlaylistSaga);
  yield takeLatest(deletePlaylistRequest.type, deletePlaylistSaga);
  yield takeLatest(addSongToPlaylistRequest.type, addSongToPlaylistSaga);
  yield takeLatest(
    removeSongFromPlaylistRequest.type,
    removeSongFromPlaylistSaga
  );
}
