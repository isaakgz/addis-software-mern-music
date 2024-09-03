/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const MusicIcon = styled.svg`
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
