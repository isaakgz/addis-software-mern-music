/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {
  Button,
  Form,
  FormContainer,
  FormLink,
  FormText,
  FormTitle,
  Input,
} from "./AuthFormStyles";

function AuthForm() {
  const [formType, setFormType] = useState<"login" | "register">("login");
  return (
    <FormContainer>
      <Form>
        <FormTitle>{formType === "login" ? "Login" : "Register"}</FormTitle>
        {formType === "register" && (
          <Input type="text" placeholder="Username" />
        )}
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        {formType === "register" && (
          <Input type="password" placeholder="Confirm Password" />
        )}
        <Button type="submit">
          {formType === "login" ? "Login" : "Sign Up"}
        </Button>
        <FormText>
          {formType === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <FormLink
            onClick={() =>
              setFormType(formType === "login" ? "register" : "login")
            }
          >
            {formType === "login" ? "Sign Up" : "Login"}
          </FormLink>
        </FormText>
      </Form>
    </FormContainer>
  );
}

export default AuthForm;
