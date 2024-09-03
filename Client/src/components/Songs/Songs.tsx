/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import music from "../../assets/icons/music.svg";
import { fetchSongsRequest } from "../../features/songs/songsSlice";
import { fetchStatusRequest } from "../../features/stats/statsSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import Error from "../Error/Error";
import LoadingSpinner from "../LoadingSpinner.tsx/LoadingSpinner";
import { AlbumWrapper, ListContainer, ListIcon, ListItem, TitleWrapper } from "./SongsStyles";

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
