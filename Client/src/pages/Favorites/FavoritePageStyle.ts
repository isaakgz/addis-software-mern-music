import styled from "@emotion/styled";
import { Colors } from "../../components/Songs/SongsStyles";

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: ${Colors.text};
    margin-bottom: 20px;
    text-align: center;
  `;

  export const FavContainer = styled.div`
    

    margin: 1rem auto;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 800px;
    border: 1px solid ${Colors.border};
    height: auto;
    max-height: 50vh;
    min-height: 50vh;
    overflow-y: auto;
    overflow-x: hidden;
  `;

  export const NoItemsMessage = styled.p`
    color: ${Colors.text};
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  `;