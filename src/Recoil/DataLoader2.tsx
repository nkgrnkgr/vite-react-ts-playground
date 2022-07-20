import { useRecoilValue } from "recoil";
import { asyncDataSelector2 } from "../state/AsyncData2";

type Props = {
  //
};

const Component: React.FC<Props> = () => {
  const response = useRecoilValue(asyncDataSelector2);
  return (
    <div>
      DataLoader2
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};
export const DataLoader2 = Component;
