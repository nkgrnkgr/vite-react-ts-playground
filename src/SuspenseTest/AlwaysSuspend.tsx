import React from "react";
import { sleep } from "./sleep";

type Props = {
  //
};

const Component: React.FC<Props> = () => {
  console.log("AlwaysSuspend is rendered");
  throw sleep(1000);
};

export const AlwaysSuspend = Component;
