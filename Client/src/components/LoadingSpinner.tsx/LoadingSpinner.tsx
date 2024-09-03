import { MusicIcon, LoaderContainer } from "./LoadingSpinnerStyles";
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
