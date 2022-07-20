import { Button } from "@mui/material";
import React, { useState } from "react";
import { DataLoader, DataLoader2 } from "./DataLoader";

const Component: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      This is out of Suspense.
      <React.Suspense fallback={<div>loading...</div>}>
        <DataLoader />
        <DataLoader2 />
      </React.Suspense>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        {count}
      </Button>
    </div>
  );
};

export const SuspenseTest = Component;
