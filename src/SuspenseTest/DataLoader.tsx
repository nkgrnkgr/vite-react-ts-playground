import { fetchData1 } from "./fetchData1";
import { useData } from "./useData";

export const DataLoader: React.FC = () => {
  const data = useData("DataLoader1", fetchData1);

  return (
    <div>
      <div>Data1 is {data}</div>
    </div>
  );
};

export const DataLoader2: React.VFC = () => {
  const data = useData("DataLoader2", fetchData1);
  return (
    <div>
      <div>Data2 is {data}</div>
    </div>
  );
};
