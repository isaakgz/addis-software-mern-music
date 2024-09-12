import songsSaga from "../features/songs/songsSaga";
import { fork, all } from "redux-saga/effects";
import statusSaga from "../features/stats/statusSaga";
import authSaga from "../features/auth/authSaga";
import favoritesSaga from "../features/favorites/favoritesSaga";

export default function* rootSaga() {
  yield all([
    fork(songsSaga),
    fork(statusSaga),
    fork(authSaga),
    fork(favoritesSaga),
  ]);
}
