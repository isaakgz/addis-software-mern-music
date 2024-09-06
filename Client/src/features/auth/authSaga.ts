import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { signUp, login, logout } from "../../services/authServices";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  logoutRequest,
  signUpFailure,
  signUpRequest,
  signUpSuccess,
} from "./authSlice";
import { AxiosError } from "axios";
import { User, SignUpPayload, LoginPayload } from "../../types/userTypes";

// worker saga for sign up
function* signUpSaga(action: PayloadAction<SignUpPayload>) {
  try {
    const user: User = yield call(signUp, action.payload);
    yield put(signUpSuccess(user));
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data.message || error.message;
      yield put(signUpFailure(errorMessage));
    } else {
      console.log("unknown error", error);
      yield put(signUpFailure((error as Error).message));
    }
  }
}

// worker saga for login
function* loginSaga(action: PayloadAction<LoginPayload>) {
  try {
    const user: User = yield call(login, action.payload);
    yield put(loginSuccess(user));
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data.message || error.message;
      yield put(loginFailure(errorMessage));
    } else {
      console.log("unknown error", error);
      yield put(loginFailure((error as Error).message));
    }
  }
}

//worker saga for logout
function* logoutSaga() {
  try {
    yield call(logout);
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data.message || error.message;
      yield console.log(errorMessage);
    } else {
      console.log("unknown error", error);
      yield put(loginFailure((error as Error).message));
    }
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
