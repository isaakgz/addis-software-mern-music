/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import music from "../../assets/icons/music.svg";
import { css } from "@emotion/react";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 5px;
  &:hover {
    background-color: #dddddd92;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0rem;
  h3 {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
    margin-left: 10px;
  }
`;

const AlbumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0rem;
  h3 {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;
const ListIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

interface SongsListProps {
  items: string[];
}
const SongsList = ({ items }: SongsListProps) => {
  return (
    <ListContainer>
      {items.map((item, index) => (
        <ListItem key={index}>
          <TitleWrapper>
            <div
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0;
                padding: 0;
              `}
            >
              <ListIcon src={music} alt="music" />
              <h3>{item}</h3>
            </div>
            <p>artists</p>
          </TitleWrapper>
          <AlbumWrapper>
            <p>Album</p>
            <h3>mkkk</h3>
          </AlbumWrapper>
          <AlbumWrapper>
            <p>Genre</p>
            <h3>ghh</h3>
          </AlbumWrapper>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default SongsList;
