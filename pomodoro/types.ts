import { WithStyles } from "@material-ui/core";
import { Dispatch, ReactNode, SetStateAction } from "react";
import dialogTitleStyles from "./components/settingsModal/common/dialogTitle/dialogTitle.styles";
import settingsModalStyles from "./components/settingsModal/settingsModal.styles";

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

export interface ISettingsModalProps
  extends WithStyles<typeof settingsModalStyles> {
  title: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface ITabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
  className: string;
}

export interface IDialogTitleProps
  extends WithStyles<typeof dialogTitleStyles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

export type TSettingsState = {
  pomodoro: number;
  short_break: number;
  long_break: number;
  color: string;
};

export type TAction = {
  type: "UPDATE_THEME_STATE";
  payload: TSettingsState;
};

export type TDispatch = (action: TAction) => void;
