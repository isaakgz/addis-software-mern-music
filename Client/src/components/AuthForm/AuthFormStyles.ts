/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.8rem;
  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
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

export const FormTitle = styled.h2`
  margin: 0;
  color: white;
  text-align: center;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Input = styled.input`
  padding: 0.75rem;
  margin: 0;
  border-radius: 5px;
  margin-top: 1rem;
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

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  background-color: #ff6f61;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
  margin-top: 1rem;

  &:hover {
    background-color: #e65c50;
  }
`;

export const FormText = styled.p`
  margin: 0;
  color: white;
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;
`;

export const FormLink = styled.a`
  color: #ff6f61;
  text-decoration: none;
  font-weight: 900;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #e65c50;
  }
`;
export const ErrorMessage = styled.p`
  color: red;
  margin: 0;
  font-size: 0.8rem;
  padding: 0;
  margin-top: 0.2rem;
`;
