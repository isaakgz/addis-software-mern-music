import styled from "@emotion/styled";
import { FaExclamationTriangle } from "react-icons/fa";
import { Colors } from "../../components/Songs/SongsStyles";

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem;
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 100%
  ); // Using dark background: ;
`;

export const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: ${Colors.cardBackground}; // Card background
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); // Subtle shadow
  border-radius: 1rem;
  text-align: center;
  max-width: 500px;
  width: 100%;
  border: 1px solid ${Colors.border}; // Light border
`;

export const ErrorIcon = styled(FaExclamationTriangle)`
  color: ${Colors.primary}; // Primary color for the icon
  font-size: 4rem;
  margin-bottom: 1rem;
`;

export const ErrorTitle = styled.h1`
  color: ${Colors.text}; // Primary text color
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

export const ErrorDescription = styled.p`
  color: ${Colors.lightText}; // Light text for description
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

export const GoHomeButton = styled.a`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: ${Colors.primary};
  color: ${Colors.text};
  text-decoration: none;
  font-size: 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.primaryHover};
  }
`;
