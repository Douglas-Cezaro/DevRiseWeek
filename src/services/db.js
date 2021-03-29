import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITE_KEY = "@FindHouses:Favorites";

export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  } catch (e) {
    console.log(e);
  }
};

export const saveHouseIsFavorite = async (houseId) => {
  const savedFavorites = await getData(FAVORITE_KEY);
  if (savedFavorites) {
    if (savedFavorites.find((h) => h === houseId)) {
      return {
        error: "Imóvel já favoritado",
      };
    }

    savedFavorites.push(houseId);
    await saveData(FAVORITE_KEY, JSON.stringify(savedFavorites));
  } else {
    var newArray = new Array(houseId);
    const arrayFavorites = JSON.stringify(newArray);
    await saveData(FAVORITE_KEY, arrayFavorites);
  }
  return;
};

export const getIfHouseIsFavorite = async (houseId) => {
  const savedFavorites = await getData(FAVORITE_KEY);
  if (savedFavorites) {
    if (savedFavorites.find((h) => h === houseId)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const removeHouseAsFavorite = async (houseId) => {
  const savedFavorites = await getData(FAVORITE_KEY);
  if (savedFavorites) {
    const newSavedFavorite = savedFavorites.filter((h) => h !== houseId);
    await saveData(FAVORITE_KEY, JSON.stringify(newSavedFavorite));
  } else {
    return {
      error: "Imóvel não é favorito",
    };
  }
};
