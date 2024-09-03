import { StatsData } from "../types/statsTypes";
import api from "./apiConfig";
export interface StatsResponse {
  data: StatsData;
  status: string;
}
export const fetchStats = async (): Promise<StatsResponse> => {
  try {
    const response = await api.get("/stats");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching stats:", error);
    throw error;
  }
};
