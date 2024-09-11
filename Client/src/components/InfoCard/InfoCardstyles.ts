/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #f5f5f5;
  margin: 1rem auto;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 70%;
  max-width: 800px;
  border: 1px solid #f5f5f5;
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h3`
  margin: 0;
  padding: 0;
`;

export const Count = styled.p`
  margin: 0;
  padding: 0;
`;
