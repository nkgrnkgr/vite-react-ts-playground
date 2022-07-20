import { useRecoilValue } from "recoil";
import { asyncDataSelector } from "../state/AsyncData";

type Props = {
  //
};

const Component: React.FC<Props> = () => {
  const response = useRecoilValue(asyncDataSelector);
  return (
    <div>
      DataLoader
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};
export const DataLoader = Component;
