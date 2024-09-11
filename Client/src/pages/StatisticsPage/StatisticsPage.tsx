import styled from "@emotion/styled";
import { useEffect } from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import Error from "../../components/Error/Error";
import InfoCard from "../../components/InfoCard/InfoCard";
import LoadingSpinner from "../../components/LoadingSpinner.tsx/LoadingSpinner";
import { Colors } from "../../components/Songs/SongsStyles";
import { fetchStatusRequest } from "../../features/stats/statsSlice";
import { useAppDispatch, useAppSelector } from "../../store";

// Styled components
const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  background-color: ${Colors.background};
  margin: 0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  border: 1px solid ${Colors.border};
  height: auto;
  max-height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0.5rem;
  }
`;

const TotalStats = styled.div`
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

const ChartContainer = styled.div`
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

const ChartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ChartDescription = styled.div`
  flex: 1;
  margin-right: 1rem;
  font-size: 1rem;
  color: ${Colors.text};

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    text-align: center;
  }
`;

const Chart = styled.div`
  flex: 1;
  width: 100%;
`;

const COLORS = ["#6c5ce7", "#00b894", "#fdcb6e", "#e17055"];

// Main component
const StatisticsPage = () => {
  const dispatch = useAppDispatch();
  const { statusData, status, error } = useAppSelector(
    (state) => state.statistics
  );

  useEffect(() => {
    dispatch(fetchStatusRequest());
  }, [dispatch]);

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  if (status === "failed" && error) {
    return (
      <Error message={error} onRetry={() => dispatch(fetchStatusRequest())} />
    );
  }

  const totalData = [
    { name: "Total Songs", value: statusData.totalSongs },
    { name: "Total Artists", value: statusData.totalArtists },
    { name: "Total Albums", value: statusData.totalAlbums },
    { name: "Total Genres", value: statusData.totalGenres },
  ];

  return (
    <>
      <StatsContainer>
        <TotalStats>
          {totalData.map((entry) => (
            <InfoCard key={entry.name} name={entry.name} count={entry.value} />
          ))}
        </TotalStats>

        {/* Songs in Each Genre */}
        <ChartContainer>
          <h2>Songs in Each Genre</h2>
          <ChartWrapper>
            <ChartDescription>
              This chart shows the total number of songs distributed across different genres. The bars represent how many songs exist in each genre, providing a clear view of the genre's popularity.
            </ChartDescription>
            <Chart>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={statusData.songsInEachGenre}>
                  <XAxis dataKey="genre" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="totalSongs" fill={COLORS[2]} />
                </BarChart>
              </ResponsiveContainer>
            </Chart>
          </ChartWrapper>
        </ChartContainer>

        {/* Songs & Albums by Artist */}
        <ChartContainer>
          <h2>Songs & Albums by Artist</h2>
          <ChartWrapper>
            <ChartDescription>
              This chart provides a comparison of how many songs and albums each artist has produced. The two bars represent the number of songs and albums respectively for each artist.
            </ChartDescription>
            <Chart>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={statusData.songsAndAlbumsByArtist}>
                  <XAxis dataKey="artist" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="totalSongs" fill={COLORS[0]} />
                  <Bar dataKey="totalAlbums" fill={COLORS[1]} />
                </BarChart>
              </ResponsiveContainer>
            </Chart>
          </ChartWrapper>
        </ChartContainer>

        {/* Songs in Each Album */}
        <ChartContainer>
          <h2>Songs in Each Album</h2>
          <ChartWrapper>
            <ChartDescription>
              This chart displays how many songs are in each album. It's useful for understanding the volume of content per album and identifying larger collections.
            </ChartDescription>
            <Chart>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={statusData.songsInEachAlbum}>
                  <XAxis dataKey="album" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="totalSongs" fill={COLORS[3]} />
                </BarChart>
              </ResponsiveContainer>
            </Chart>
          </ChartWrapper>
        </ChartContainer>
      </StatsContainer>
    </>
  );
};

export default StatisticsPage;
