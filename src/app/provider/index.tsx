"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";

import { store } from "@app/store";

type Props = {
  children: ReactNode;
};

export const ProviderStore = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
