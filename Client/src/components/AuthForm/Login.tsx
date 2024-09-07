/** @jsxImportSource @emotion/react */

import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  Button,
  ErrorMessage,
  Form,
  FormContainer,
  FormLink,
  FormText,
  FormTitle,
  Input,
} from "./AuthFormStyles";
import { clearError, loginRequest } from "../../features/auth/authSlice";
import toast from "react-hot-toast";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const { error, status, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const onSubmit = (data: FieldValues) => {
    const { email, password } = data;
    dispatch(clearError()); // clear error before making a request
    dispatch(loginRequest({ email, password }));
  };
  if (error) {
    toast.error(error);
  } else if (user) {
    toast.success("Login successfull");
    reset();
    navigate("/");
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <FormTitle>Login</FormTitle>

        <Input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "invalid email",
            },
          })}
        />
        {errors.email && (
          <ErrorMessage>{String(errors.email.message)}</ErrorMessage>
        )}
        <Input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 6,
              message: "password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <ErrorMessage>{String(errors.password.message)}</ErrorMessage>
        )}

        <Button type="submit">
          {status === "loading" ? "Loading..." : "Login"}
        </Button>
        <FormText>
          Don't have an account?{" "}
          <Link
            to={"/auth/register"}
            style={{
              textDecoration: "none",
            }}
          >
            <FormLink
              onClick={() => {
                reset();
                dispatch(clearError());
              }}
            >
              Sign Up
            </FormLink>
          </Link>
        </FormText>
      </Form>
    </FormContainer>
  );
}

export default LoginForm;
