import React from "react";

type Props = {
  //
};

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const Component: React.FC<Props> = () => {
  throw sleep(1000);
};

export const AlwaysSuspend = Component;
