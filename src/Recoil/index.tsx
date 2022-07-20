import { Button } from "@mui/material";
import React, { useState } from "react";
import { DataLoader } from "./DataLoader";
import { DataLoader2 } from "./DataLoader2";

type Props = {
  //
};

const Component: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      DataLoader:
      <div>
        <Button variant="contained" onClick={() => setOpen(true)}>
          show
        </Button>
      </div>
      {open && (
        <div style={{ display: "flex" }}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <DataLoader />
          </React.Suspense>
          <React.Suspense fallback={<div>Loading...</div>}>
            <DataLoader2 />
          </React.Suspense>
        </div>
      )}
    </div>
  );
};
export const Recoil = Component;
