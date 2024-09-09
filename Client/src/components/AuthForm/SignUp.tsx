/** @jsxImportSource @emotion/react */

import {
  Button,
  Form,
  FormContainer,
  FormLink,
  FormText,
  FormTitle,
  Input,
  ErrorMessage,
} from "./AuthFormStyles";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../store";
import { clearError, signUpRequest } from "../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const navigate = useNavigate();

  const { error, status, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const password = watch("password");
  const onSubmit = (data: FieldValues) => {
    const { password, username, email } = data;
    dispatch(clearError()); // clear error before making a request
    dispatch(signUpRequest({ username, email, password }));
  };

  
  useEffect(() => {
    toast.dismiss(); // Dismiss any existing toasts
    if (error) {
      toast.error(error);
    } else if (user) {
      toast.success(`Welcome ${user.username}`);
      navigate("/");
      reset();
    } else if (status === "loading") {
      toast.loading("Creating account...");
    }
  }, [user, navigate, error, status, reset]);

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <FormTitle>Register</FormTitle>

        <Input
          type="text"
          placeholder="Username"
          {...register("username", {
            required: "username is required",
            minLength: {
              value: 3,
              message: "username must be at least 3 characters",
            },
            maxLength: {
              value: 10,
              message: "username must be at most 10 characters",
            },
          })}
        />

        {errors.username && (
          <ErrorMessage>{String(errors.username.message)}</ErrorMessage>
        )}
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

        <Input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: "password is required",
            validate: (value) => value === password || "passwords do not match",
          })}
        />

        {errors.confirmPassword && (
          <ErrorMessage>{String(errors.confirmPassword.message)}</ErrorMessage>
        )}
        <Button type="submit">
          {status === "loading" ? "Loading..." : "Register"}
        </Button>
        <FormText>
          Already have an account?
          <Link
            to={"/auth"}
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
              Login
            </FormLink>
          </Link>
        </FormText>
      </Form>
    </FormContainer>
  );
}

export default SignUpForm;
