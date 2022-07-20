import { sleep } from "./sleep";

export const fetchData1 = async (): Promise<string> => {
  await sleep(1000);
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`;
};