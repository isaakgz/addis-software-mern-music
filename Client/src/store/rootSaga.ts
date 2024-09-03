import songsSaga from "../features/songs/songsSaga";
import { fork, all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    fork(songsSaga),
    //add more sagas here
  ]);
}
