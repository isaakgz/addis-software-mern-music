import styled from "@emotion/styled";
import { RiDeleteBinLine } from "react-icons/ri";
import LoadingSpinner from "../../components/LoadingSpinner.tsx/LoadingSpinner";
import {
  ButtonContainer,
  Colors,
  FavoriteButton,
  Icon,
  SongDetails,
  SongInfo,
  SongItem,
  SongMeta,
  SongsContainer,
  SongTitle,
} from "../../components/Songs/SongsStyles";
import { useAppDispatch, useAppSelector } from "../../store";
import { removeFavoriteRequest } from "../../features/favorites/favoritesSlices";

function FavoritesPage() {
  const { favorites: favSongs, status } = useAppSelector(
    (state) => state.favorites
  );
  const dispatch = useAppDispatch();

  const handelRemoveFavorite = (id: string) => {
    dispatch(removeFavoriteRequest(id));
  };

  const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: ${Colors.text};
    margin-bottom: 20px;
    text-align: center;
  `;

  const FavContainer = styled.div`
    padding: 1rem;
    background-color: ${Colors.background};
    margin: 1rem auto;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 800px;
    border: 1px solid ${Colors.border};
    height: auto;
    max-height: 65vh;
    min-height: 50vh;
    overflow-y: auto;
    overflow-x: hidden;
  `;

  const NoItemsMessage = styled.p`
    color: ${Colors.text};
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  `;

  return (
    <>
      <Title>Favorites</Title>
      <FavContainer>
        {status === "loading" ? (
          <LoadingSpinner />
        ) : favSongs.length === 0 ? (
          <NoItemsMessage>
            No favorite songs found. Add some songs to your favorites.
          </NoItemsMessage>
        ) : (
          <SongsContainer>
            {favSongs.map((song) => (
              <SongItem key={song._id}>
                <SongDetails>
                  <Icon />
                  <SongInfo>
                    <SongTitle>{song.title}</SongTitle>
                    <SongMeta>
                      {song.artist} • {song.album} • {song.genre}
                    </SongMeta>
                  </SongInfo>
                </SongDetails>
                <ButtonContainer>
                  <FavoriteButton
                    onClick={() => {
                      handelRemoveFavorite(song._id);
                    }}
                  >
                    <RiDeleteBinLine />
                  </FavoriteButton>
                </ButtonContainer>
              </SongItem>
            ))}
          </SongsContainer>
        )}
      </FavContainer>
    </>
  );
}

export default FavoritesPage;
