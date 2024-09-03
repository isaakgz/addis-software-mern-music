import styled from "@emotion/styled";
interface ErrorProps {
  message: string;
  onRetry?: () => void;
}
const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  background-color: #ffe6e6;
  color: #d8000c;
  border: 1px solid #d8000c;
  border-radius: 4px;
  margin: 1rem auto;
  width: 100%;
  max-width: 300px;
`;

const ErrorMessage = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  padding: 0;
`;
const RetryButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #d8000c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a80000;
  }
`;

function Error({ message, onRetry }: ErrorProps) {
  return (
    <ErrorContainer>
      <ErrorMessage>{message}</ErrorMessage>
      {onRetry && <RetryButton onClick={onRetry}>Retry</RetryButton>}
    </ErrorContainer>
  );
}

export default Error;
