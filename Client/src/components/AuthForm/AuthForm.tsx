import styled from "@emotion/styled";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Ensure it fills the height of the parent container */
  width: 100%;
  padding: 2rem;
  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  color: white;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormTitle = styled.h2`
  margin: 0;
  color: white;
  text-align: center;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 5px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  background-color: #ff6f61;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e65c50;
  }
`;

interface AuthFormProps {
  formType: "login" | "register";
}

function AuthForm({ formType }: AuthFormProps) {
  return (
    <FormContainer>
      <Form>
        <FormTitle>{formType === "login" ? "Login" : "Register"}</FormTitle>
        {formType === "register" && <Input type="text" placeholder="Username" />}
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        {formType === "register" && <Input type="password" placeholder="Confirm Password" />}
        <Button type="submit">{formType === "login" ? "Login" : "Sign Up"}</Button>
      </Form>
    </FormContainer>
  );
}

export default AuthForm;
