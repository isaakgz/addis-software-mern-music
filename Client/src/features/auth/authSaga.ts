import { call, put, takeLatest } from "redux-saga/effects";
import { login, logout, signUp } from "../../services/authServices";
import { User } from "../../types/userTypes";
import handleSagaError from "../../utils/errorHandlerSaga";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  logoutRequest,
  signUpFailure,
  signUpRequest,
  signUpSuccess,
} from "./authSlice";

// worker saga for sign up
function* signUpSaga(action: ReturnType<typeof signUpRequest>) {
  try {
    const user: User = yield call(signUp, action.payload);
    yield put(signUpSuccess(user));
  } catch (error) {
    yield handleSagaError(error, signUpFailure);
  }
}

// worker saga for login
function* loginSaga(action: ReturnType<typeof loginRequest>) {
  try {
    const user: User = yield call(login, action.payload);
    yield put(loginSuccess(user));
  } catch (error) {
    yield handleSagaError(error, loginFailure);
  }
}

//worker saga for logout
function* logoutSaga() {
  try {
    yield call(logout);
  } catch (error) {
    yield handleSagaError(error, loginFailure);
  }
}

//watcher saga
export default function* authSaga() {
  // takeLatest will only take the latest request
  // if multiple requests are made, it will only take the latest one
  // and cancel the previous ones
  yield takeLatest(signUpRequest.type, signUpSaga);
  yield takeLatest(loginRequest.type, loginSaga);
  yield takeLatest(logoutRequest.type, logoutSaga);
}
