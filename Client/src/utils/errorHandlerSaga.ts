import { PayloadAction } from "@reduxjs/toolkit/react";
import { AxiosError } from "axios";
import { put, delay } from "redux-saga/effects";
import { clearError } from "../features/songs/songsSlice";

// Helper function for error handling to avoid repetition
function* handleSagaError(
  error: unknown,
  failureAction: (message: string) => PayloadAction<string>
) {
  if (error instanceof AxiosError) {
    const errorMessage = error.response?.data.message || error.message;
    yield put(failureAction(errorMessage));
  } else {
    console.error("unknown error", error);
    yield put(failureAction((error as Error).message));
  }

  // clear the error after 3 seconds
  yield delay(3000);
  yield put(clearError());
}

export default handleSagaError;
