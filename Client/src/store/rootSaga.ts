import songsSaga from "../features/songs/songsSaga";
import { fork, all } from "redux-saga/effects";
import statusSaga from "../features/stats/statusSaga";

export default function* rootSaga() {
  yield all([fork(songsSaga), fork(statusSaga)]);
}
