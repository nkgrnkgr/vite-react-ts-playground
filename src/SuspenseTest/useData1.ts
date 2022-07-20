import { fetchData1 } from "./fetchData1";

let dataMap: Map<string, string> = new Map();

export const useData1 = (cacheKey: string): string => {
  const cacheData = dataMap.get(cacheKey);

  if (cacheData === undefined) {
    throw fetchData1().then((d) => dataMap.set(cacheKey, d));
  }

  return cacheData;
};
