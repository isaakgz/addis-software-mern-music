import styled from "@emotion/styled";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const MusicIcon = styled.svg`
  width: 50px;
  height: 50px;
  animation: bounce 1s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
`;
function LoadingSpinner() {
  return (
    <LoaderContainer>
      <MusicIcon viewBox="0 0 24 24">
        <path fill="#09f" d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
      </MusicIcon>
    </LoaderContainer>
  );
}

export default LoadingSpinner;
