import { FaHeart, FaListAlt, FaMusic } from "react-icons/fa";
import {
  ArrowDown,
  CardContainer,
  CardContent,
  CardText,
  CardTitle,
  IconContainer,
  IconWrapper,
} from "./WellComeCardStyles";
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
