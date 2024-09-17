import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import {
  ErrorBox,
  ErrorContainer,
  ErrorDescription,
  ErrorIcon,
  ErrorTitle,
  GoHomeButton,
} from "./ErrorPageStyle";
import useTitle from "../../hooks/useTitle";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  useTitle({ title: "Error" });

  return (
    <ErrorContainer>
      <ErrorBox>
        <ErrorIcon />
        <ErrorTitle>
          {isRouteErrorResponse(error) ? error.status : "500"}
        </ErrorTitle>
        <ErrorDescription>
          {isRouteErrorResponse(error)
            ? error.statusText
            : "Internal Server Error"}
        </ErrorDescription>

        <GoHomeButton onClick={() => navigate("/")}>
          Go to Homepage
        </GoHomeButton>
      </ErrorBox>
    </ErrorContainer>
  );
}

export default ErrorPage;
