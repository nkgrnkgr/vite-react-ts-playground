import { Button } from "@mui/material";
import React, { useState } from "react";
import { SometimeSuspend } from "./SometimeSuspend";

type Props = {
  //
};

const Component: React.FC<Props> = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      This is out of Suspense.
      <React.Suspense fallback={<div>loading...</div>}>
        <SometimeSuspend />
      </React.Suspense>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Add
      </Button>
    </div>
  );
};

export const SuspenseTest = Component;
