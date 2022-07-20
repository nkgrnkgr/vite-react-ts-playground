import { Button } from "@mui/material";
import React, { useState } from "react";
import { DataLoader } from "./DataLoader";
import { DataLoader2 } from "./DataLoader2";
import { DataLoader3 } from "./DataLoader3";

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
          <React.Suspense fallback={<div>Loading1...</div>}>
            <DataLoader />
          </React.Suspense>
          <React.Suspense fallback={<div>Loading2...</div>}>
            <DataLoader2 />
          </React.Suspense>
          <DataLoader3 />
        </div>
      )}
    </div>
  );
};
export const Recoil = Component;
