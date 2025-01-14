import { createContext, useReducer } from "react";
import themeReducer from "../reducers/themeReducer";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { color: "dark", theme: "light" });

  function changeColor(value) {
    dispatch({ type: "CHANGE_COLOR", payload: value });
  }

  function changeTheme(value) {
    dispatch({ type: "CHANGE_THEME", payload: value });
  }

  return <ThemeContext.Provider value={{ ...state, changeColor, changeTheme }}>{children}</ThemeContext.Provider>;
}
