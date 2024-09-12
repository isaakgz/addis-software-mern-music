import api from "./apiConfig";

export const fetchFavorites = async () => {
  try {
    const response = await api.get("/users/favorites");
    return response.data.data.favorites;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addFavorite = async (songId: string) => {
  try {
    const response = await api.post(`/users/favorites/${songId}`);
    return response.data.data.newFavorite;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const removeFavorite = async (songId: string) => {
  try {
    const response = await api.delete(`/users/favorites/${songId}`);
    return response.data.data.removedFavorite;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
