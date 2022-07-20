let dataMap: Map<string, unknown> = new Map();

export const useData = <T>(cacheKey: string, fetcher: () => Promise<T>): T => {
  const cacheData = dataMap.get(cacheKey) as T | undefined;

  if (cacheData === undefined) {
    throw fetcher().then((d) => dataMap.set(cacheKey, d));
  }

  return cacheData;
};
