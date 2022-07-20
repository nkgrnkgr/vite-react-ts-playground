import { selector } from "recoil";

export const asyncDataSelector = selector({
  key: "ASYNC_DATA_SELECTOR",
  get: async () => {
    const response = await fetch("https://pokeapi.co/api/v2");
    const data = await response.json();

    return data;
  },
});
