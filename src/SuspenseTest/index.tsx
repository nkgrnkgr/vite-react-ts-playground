import React from "react";
import { AlwaysSuspend } from "./AlwaysSuspend";

type Props = {
  //
};

const Component: React.FC<Props> = () => {
  return (
    <div>
      This is out of Suspense.
      <React.Suspense fallback={<div>loading...</div>}>
        <AlwaysSuspend />
      </React.Suspense>
    </div>
  );
};

export const SuspenseTest = Component;
