import { createContext, useReducer, useContext } from "react";
import { TDispatch, TSettingsState, TAction } from "../types";

const SettingsContext = createContext<
  Partial<{
    settingsContext: TSettingsState;
    updateSettingsContext: TDispatch;
  }>
>({});

const initialState: TSettingsState = {
  pomodoro: 25,
  short_break: 5,
  long_break: 15,
  color: "#ff4d6e",
};

const settingsContextReducer = (state: TSettingsState, action: TAction) => {
  switch (action.type) {
    case "UPDATE_THEME_STATE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const useSettingsContext = () => useContext(SettingsContext);

export const SettingsContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(settingsContextReducer, initialState);

  return (
    <SettingsContext.Provider
      value={{ settingsContext: state, updateSettingsContext: dispatch }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
