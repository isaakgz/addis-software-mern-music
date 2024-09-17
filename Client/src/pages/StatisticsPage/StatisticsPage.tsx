import { useEffect } from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Error from "../../components/Error/Error";
import InfoCard from "../../components/InfoCard/InfoCard";
import LoadingSpinner from "../../components/LoadingSpinner.tsx/LoadingSpinner";
import { fetchStatusRequest } from "../../features/stats/statsSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  Chart,
  ChartContainer,
  ChartDescription,
  ChartWrapper,
  StatsContainer,
  TotalStats,
} from "./StatisticsPageStyles";
import useTitle from "../../hooks/useTitle";

const COLORS = ["#6c5ce7", "#00b894", "#fdcb6e", "#e17055"];

// Main component
const StatisticsPage = () => {
  const dispatch = useAppDispatch();
  const { statusData, status, error } = useAppSelector(
    (state) => state.statistics
  );
  useTitle({ title: "Statistics" });
  useEffect(() => {
    dispatch(fetchStatusRequest());
  }, [dispatch]);

  const totalData = [
    { name: "Total Songs", value: statusData.totalSongs },
    { name: "Total Artists", value: statusData.totalArtists },
    { name: "Total Albums", value: statusData.totalAlbums },
    { name: "Total Genres", value: statusData.totalGenres },
  ];

  return (
    <>
      <StatsContainer>
        {status === "loading" ? (
          <LoadingSpinner />
        ) : error ? (
          <Error
            message={error}
            onRetry={() => dispatch(fetchStatusRequest())}
          />
        ) : (
          <>
            <TotalStats>
              {totalData.map((entry) => (
                <InfoCard
                  key={entry.name}
                  name={entry.name}
                  count={entry.value}
                />
              ))}
            </TotalStats>

            {/* Songs in Each Genre */}
            <ChartContainer>
              <h2>Songs in Each Genre</h2>
              <ChartWrapper>
                <ChartDescription>
                  This chart shows the total number of songs distributed across
                  different genres. The bars represent how many songs exist in
                  each genre, providing a clear view of the genre's popularity.
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
                  This chart provides a comparison of how many songs and albums
                  each artist has produced. The two bars represent the number of
                  songs and albums respectively for each artist.
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
                  This chart displays how many songs are in each album. It's
                  useful for understanding the volume of content per album and
                  identifying larger collections.
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
          </>
        )}
      </StatsContainer>
    </>
  );
};

export default StatisticsPage;
