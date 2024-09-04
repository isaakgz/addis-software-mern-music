/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import banner from "../../assets/icons/d2.jpeg";

export const BannerContainer = styled.div`
  background-image: url(${banner});
  background-size: cover; /* Ensures the image covers the entire container */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  width: 100%;
  height: 22vh; /* Adjust height as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
  border-radius: 0.5rem;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 15vh; /* Adjust height for smaller screens */
  }

  @media (max-width: 480px) {
    height: 10vh; /* Adjust height for even smaller screens */
  }
`;

export const BannerText = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: 700;
  background-color: #83778d96;
  border-radius: 0.5rem;
  padding: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem; /* Adjust font size for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; /* Adjust font size for even smaller screens */
  }
`;
