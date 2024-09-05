import styled from "@emotion/styled";
import { FaMusic, FaHeart, FaListAlt, FaArrowDown } from "react-icons/fa";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Use full height of the parent container */
  width: 100%;
  color: white;
  padding: 2rem;
  padding-bottom: 0;
  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 0;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1s ease-in-out;
  @media (max-width: 768px) {
    padding: 1rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CardTitle = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  color: white;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 468px) {
    font-size: 1.5rem;
  }
`;

const CardText = styled.p`
  margin: 0;
  color: white;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: white;
`;

const ArrowDown = styled(FaArrowDown)`
  margin-top: 1rem;
  font-size: 2rem;
  cursor: pointer;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

function WellcomeCard() {
  return (
    <CardContainer>
      <CardContent>
        <CardTitle>Welcome to Addis Music</CardTitle>
        <CardText>
          Addis Music is a music management platform that allows you to manage
          your music library.
        </CardText>
        <IconContainer>
          <IconWrapper>
            <FaMusic size={30} />
            <span>Manage Songs</span>
          </IconWrapper>
          <IconWrapper>
            <FaListAlt size={30} />
            <span>Create Playlists</span>
          </IconWrapper>
          <IconWrapper>
            <FaHeart size={30} />
            <span>Favorite Music</span>
          </IconWrapper>
        </IconContainer>
        <ArrowDown />
      </CardContent>
    </CardContainer>
  );
}

export default WellcomeCard;
