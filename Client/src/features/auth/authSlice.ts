import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, SignUpPayload, LoginPayload } from "../../types/userTypes";

// Define an AuthState interface with the following properties:
interface AuthState {
  user: User | null;
  status: "idle" | "loading" | "failed";
  error: string | null;
}

// Define an initialState object with the following properties:
const initialState: AuthState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null,
  status: "idle",
  error: null,
};

// Create a slice with the name "auth" and the following reducers:
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // signUpRequest:
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    signUpRequest(state, _action: PayloadAction<SignUpPayload>) {
      state.status = "loading";
      state.error = null;
    },
    signUpSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.status = "idle";
    },
    signUpFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },

    //logInRequest:
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loginRequest(state, _action: PayloadAction<LoginPayload>) {
      state.status = "loading";
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.status = "idle";
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
    logoutRequest(state) {
      state.user = null;
      localStorage.removeItem("user");
      localStorage.clear();
    },
  },
});

export const {
  signUpFailure,
  signUpRequest,
  signUpSuccess,
  loginFailure,
  loginRequest,
  loginSuccess,
  logoutRequest,
} = authSlice.actions;

export default authSlice.reducer;
