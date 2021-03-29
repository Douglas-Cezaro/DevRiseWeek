import api from "./api";

export const getHousesCall = async (query, offset) => {
  var baseQuery = `/properties/v2/list-for-rent?city=New%20York%20City&state_code=NY&limit=10&offset=${offset}&sort=relevance`;

  if (query) {
    const { sizeMin, sizeMax, priceMin, priceMax, bedsMin, bathsMin } = query;

    if (sizeMin) {
      baseQuery += `&sqtf_min=${sizeMin}`;
    }
    if (sizeMax) {
      baseQuery += `&sqtf_max=${sizeMax}`;
    }

    if (priceMin) {
      baseQuery += `&price_min=${priceMin}`;
    }

    if (priceMax) {
      baseQuery += `&price_max=${priceMax}`;
    }

    if (bedsMin) {
      baseQuery += `&beds_min=${bedsMin}`;
    }

    if (bathsMin) {
      baseQuery += `&baths_min=${bathsMin}`;
    }
  }

  try {
    const result = await api.get(baseQuery);
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
