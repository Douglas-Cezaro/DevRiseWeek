import api from "./api";

export const getHousesCall = async () => {
  try {
    const result = await api.get(
      `/properties/v2/list-for-rent?city=New%20York%20City&state_code=NY&limit=10&offset=0&sort=relevance`
    );
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
