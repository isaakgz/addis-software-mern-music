export interface User {
  _id: string;
  username: string;
  email: string;
}
export interface SignUpPayload {
  username: string;
  email: string;
  password: string;
}
export interface LoginPayload {
    email: string;
    password: string;
  }