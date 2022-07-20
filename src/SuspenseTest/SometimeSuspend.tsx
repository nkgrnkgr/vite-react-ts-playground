import React from "react";
import { sleep } from "./sleep";

type Props = {
  //
};

const Component: React.FC<Props> = () => {
  if (Math.random() < 0.5) {
    throw sleep(1000);
  }

  return <div>Hello</div>;
};

export const SometimeSuspend = Component;
