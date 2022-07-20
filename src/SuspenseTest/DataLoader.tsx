import { Button } from "@mui/material";
import { useMemo, useState } from "react";
import { fetchData1 } from "./fetchData1";
import { sleep } from "./sleep";

export const DataLoader: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string | null>(null);

  const _ = useMemo(() => {
    if (loading) {
      console.log("loading is true");
    }
    return 1;
  }, [loading]);

  if (loading && data === null) {
    throw fetchData1().then(setData);
  }

  return (
    <div>
      <div>Data is {data}</div>
      <Button variant="contained" onClick={() => setLoading(true)}>
        load
      </Button>
    </div>
  );
};
