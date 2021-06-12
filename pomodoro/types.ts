import { ReactNode } from "react";

export type TTimerProps = {
  duration: number; // duration in seconds
};

export type TTimerWithTabLabel = {
  tabLabel: string;
  children: ReactNode;
};

export type TTimerTabProps = {
  items: TTimerWithTabLabel[];
};
