import toast from "react-hot-toast";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  addFavorite,
  fetchFavorites,
  removeFavorite,
} from "../../services/favoriteServices";
import { Song } from "../../types/songTypes";
import handleSagaError from "../../utils/errorHandlerSaga";
import {
  addFavoriteFailure,
  addFavoriteRequest,
  addFavoriteSuccess,
  fetchFavoritesFailure,
  fetchFavoritesRequest,
  fetchFavoritesSuccess,
  removeFavoriteFailure,
  removeFavoriteRequest,
  removeFavoriteSuccess,
} from "./favoritesSlices";

//worker saga to fetch favorites music
function* fetchFavoritesSaga() {
  try {
    const response: Song[] = yield call(fetchFavorites);
    yield put(fetchFavoritesSuccess(response));
  } catch (error) {
    yield handleSagaError(error, fetchFavoritesFailure);
  }
}

//worker saga to add favorite music
function* addFavoriteSaga(action: ReturnType<typeof addFavoriteRequest>) {
  try {
    const response: Song = yield call(addFavorite, action.payload);
    yield put(addFavoriteSuccess(response));
    toast.success("Song added to favorites");
  } catch (error) {
    yield handleSagaError(error, addFavoriteFailure);
  }
}

//worker saga to remove favorite music
function* removeFavoriteSaga(action: ReturnType<typeof removeFavoriteRequest>) {
  try {
    const response: string = yield call(removeFavorite, action.payload);
    yield put(removeFavoriteSuccess(response));
    toast.success("Song removed from favorites");
  } catch (error) {
    yield handleSagaError(error, removeFavoriteFailure);
  }
}
//watcher saga to watch for fetchFavoritesRequest action
export default function* favoritesSaga() {
  yield takeLatest(fetchFavoritesRequest.type, fetchFavoritesSaga);
  yield takeLatest(addFavoriteRequest.type, addFavoriteSaga);
  yield takeLatest(removeFavoriteRequest.type, removeFavoriteSaga);
}
