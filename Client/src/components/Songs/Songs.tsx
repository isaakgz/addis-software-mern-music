/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect } from "react";
import music from "../../assets/icons/music.svg";
import { fetchSongsRequest } from "../../features/songs/songsSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import Error from "../Error/Error";
import { fetchStatusRequest } from "../../features/stats/statsSlice";
import LoadingSpinner from "../LoadingSpinner.tsx/LoadingSpinner";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  flex: 1; /* Ensure equal space */
  width: 100%;

  h3 {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    text-align: center;
    margin-left: 0;
    margin-bottom: 1rem;
  }
`;

const AlbumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  flex: 1; /* Ensure equal space */
  margin-bottom: 1rem; /* Add space between AlbumWrapper and GenreWrapper */

  h3 {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const ListIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

function Songs() {
  const { songs, error, status } = useAppSelector((state) => state.songs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  if (status === "loading") {
    return <LoadingSpinner />;
  } else if (status === "failed" && error) {
    return (
      <Error message={error} onRetry={() => dispatch(fetchStatusRequest())} />
    );
  }

  return (
    <ListContainer>
      {songs.map((song) => (
        <ListItem key={song.id}>
          <TitleWrapper>
            <div
              css={css`
                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin: 0;
                padding: 0;

                @media (max-width: 768px) {
                  justify-content: center;
                }
              `}
            >
              <ListIcon src={music} alt="music" />
              <h3>{song.title}</h3>
            </div>
            <p>{song.artist}</p>
          </TitleWrapper>
          <AlbumWrapper>
            <p>Album</p>
            <h3>{song.album}</h3>
          </AlbumWrapper>
          <AlbumWrapper>
            <p>Genre</p>
            <h3>{song.genre}</h3>
          </AlbumWrapper>
        </ListItem>
      ))}
    </ListContainer>
  );
}

export default Songs;
