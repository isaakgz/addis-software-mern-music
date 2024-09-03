import { AxiosError } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchStats, StatsData } from "../../services/api";
import {
    fetchStatusFailure,
    fetchStatusRequest,
    fetchStatusSuccess,
} from "./statsSlice";

function* fetchStatsSaga() {
  try {
    const response: StatsData = yield call(fetchStats);
    yield put(fetchStatusSuccess(response));
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data.message || error.message;
      yield put(fetchStatusFailure(errorMessage));
    } else {
      console.log("unknown error", error);
      yield put(fetchStatusFailure((error as Error).message));
    }
  }
}

export default function* statusSaga() {
  yield takeLatest(fetchStatusRequest.type, fetchStatsSaga);
}
