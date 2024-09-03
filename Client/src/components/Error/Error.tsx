/** @jsxImportSource @emotion/react */
import { ErrorContainer, ErrorMessage, RetryButton } from "./ErrorStyles";

//define the ErrorProps interface
interface ErrorProps {
  message: string;
  onRetry?: () => void;
}

function Error({ message, onRetry }: ErrorProps) {
  return (
    <ErrorContainer>
      <ErrorMessage>{message}</ErrorMessage>
      {onRetry && <RetryButton onClick={onRetry}>Retry</RetryButton>}
    </ErrorContainer>
  );
}

export default Error;
