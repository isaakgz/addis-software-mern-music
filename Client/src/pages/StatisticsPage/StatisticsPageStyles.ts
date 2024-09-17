import styled from "@emotion/styled";
import { Colors } from "../../components/Songs/SongsStyles";

// Styled components
export const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  background-color: ${Colors.background};
  margin: 0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  border: 1px solid ${Colors.border};
  height: auto;
  min-height: 60vh;
  max-height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0.5rem;
  }
`;

export const TotalStats = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 10px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  padding: 1rem;
  background-color: ${Colors.cardBackground};
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 700px;
`;

export const ChartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ChartDescription = styled.div`
  flex: 1;
  margin-right: 1rem;
  font-size: 1rem;
  color: ${Colors.text};

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    text-align: center;
  }
`;

export const Chart = styled.div`
  flex: 1;
  width: 100%;
`;
