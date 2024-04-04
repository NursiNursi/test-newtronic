const API_URL = "http://103.183.75.112/api/directory/dataList";

const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`,
      );
    }
    const { data } = await response.json();
    if (!data || data.length === 0) {
      throw new Error("No data available");
    }
    return data[0];
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

export const fetchLogo = async () => {
  try {
    const { logo } = await fetchData();
    if (!logo) {
      throw new Error("No logo available");
    }
    return logo;
  } catch (error) {
    console.error("Error fetching logo:", error.message);
    throw error;
  }
};

export const fetchFeatures = async () => {
  try {
    const { playlist } = await fetchData();
    if (!playlist) {
      throw new Error("No features data available");
    }
    return playlist;
  } catch (error) {
    console.error("Error fetching features:", error.message);
    throw error;
  }
};

export const fetchHero = async () => {
  try {
    return await fetchData();
  } catch (error) {
    console.error("Error fetching hero:", error.message);
    throw error;
  }
};
