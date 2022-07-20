import { selector } from "recoil";

const load = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const asyncDataSelector3 = selector({
  key: "ASYNC_DATA_SELECTOR3",
  get: async () => {
    await load(1500);
    return {
      name: "fuga",
    };
  },
});
