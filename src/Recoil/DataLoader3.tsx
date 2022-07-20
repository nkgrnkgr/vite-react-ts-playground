import { Skeleton } from "@mui/material";
import { useRecoilValueLoadable } from "recoil";
import { asyncDataSelector2 } from "../state/AsyncData2";

type Props = {
  //
};

const Component: React.FC<Props> = () => {
  const { state, contents } = useRecoilValueLoadable(asyncDataSelector2);
  switch (state) {
    case "loading":
      return (
        <div style={{ flex: 1 }}>
          <Skeleton variant="text" />;
        </div>
      );

    case "hasError":
      throw new Error("has Error");
    default:
      return (
        <div style={{ flex: 1 }}>
          DataLoader3
          <pre>{JSON.stringify(contents, null, 2)}</pre>
        </div>
      );
  }
};
export const DataLoader3 = Component;
