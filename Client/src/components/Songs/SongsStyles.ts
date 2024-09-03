/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;

export const ListItem = styled.div`
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

export const TitleWrapper = styled.div`
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

export const AlbumWrapper = styled.div`
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

export const ListIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
