import { selector } from "recoil";

const load = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const asyncDataSelector2 = selector({
  key: "ASYNC_DATA_SELECTOR2",
  get: async () => {
    await load(1000);
    return {
      name: "hoge",
    };
  },
});
