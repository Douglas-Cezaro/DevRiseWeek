import api from "./api";

export const getHousesCall = async (page) => {
  try {
    const result = await api.get(
      `/properties/v2/list-for-rent?city=New%20York%20City&state_code=NY&limit=10&offset=${page}&sort=relevance`
    );

    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getHouseDetails = async (property_id) => {
  try {
    const result = await api.get(
      `properties/v2/detail?property_id=${property_id}`
    );

    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
