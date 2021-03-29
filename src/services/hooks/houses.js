import { getHousesCall } from "../call";
import { useHousesStore } from "../stores";

export const useHousesHooks = () => {
  const {
    housesList,
    setHousesList,
    setLoadingHousesList,
    offset,
    setOffset,
    query,
    setQuery,
    finish,
    setFinish,
  } = useHousesStore();

  const onGetHouses = async () => {
    setLoadingHousesList(true);
    const result = await getHousesCall(query, offset);

    if (offset > 0) {
      if (result.properties.length === 0) {
        setFinish(true);
      }
      setHousesList([
        ...housesList,
        ...(result.properties ? result.properties : []),
      ]);
    } else {
      setHousesList(result.properties);
    }

    setLoadingHousesList(false);
    setOffset(offset + 10);
  };

  const onFilterHousesList = async (receivedQuery) => {
    setLoadingHousesList(true);

    if (receivedQuery !== query) {
      setHousesList([]);
    }

    setQuery(receivedQuery);
    const result = await getHousesCall(receivedQuery, offset);
    if (result.properties.length === 0) {
      setFinish(true);
    }
    setHousesList(result.properties ? result.properties : []);

    setLoadingHousesList(false);
  };

  return {
    onGetHouses,
    onFilterHousesList,
  };
};
