import React from "react";
import { DataLoader } from "./DataLoader";

const Component: React.FC = () => {
  return (
    <div>
      This is out of Suspense.
      <React.Suspense fallback={<div>loading...</div>}>
        <DataLoader />
      </React.Suspense>
    </div>
  );
};

export const SuspenseTest = Component;
