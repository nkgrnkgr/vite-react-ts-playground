import { atom, useRecoilState } from "recoil";

export const useCount = (id: number) => {
  const countState = atom({
    key: `Count:${id}`,
    default: 0,
  });

  const [count, setCount] = useRecoilState(countState);

  return {
    count,
    setCount,
  };
};
