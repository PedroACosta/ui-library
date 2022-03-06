import React from "react";
import { ThemeProvider } from "@emotion/react";
import defaultTheme from "./defaultTheme";
import { ITheme } from "../system.types";

interface IThemeContext {
  themeName: keyof ITheme;
  toggleTheme: () => void;
}

export const SystemThemeContext = React.createContext<IThemeContext>({
  themeName: "light",
  toggleTheme: () => {},
});

type Props = {
  theme?: ITheme;
  children: React.ReactNode;
};

const Theme = ({ theme, children }: Props) => {
  const [themeName, setThemeName] = React.useState<keyof ITheme>("light");
  const themeApplied: ITheme["theme"] = theme ? theme[themeName] : defaultTheme[themeName];

  const toggleTheme = () => {
    if (themeName === "dark") setThemeName("light");
    if (themeName === "light") setThemeName("dark");
  };

  React.useEffect(() => {
    const isPreferedDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (themeName !== "light" && themeName !== "dark") return;
    if (isPreferedDarkScheme) {
      setThemeName("dark");
    } else {
      setThemeName("light");
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (themeName !== "light" && themeName !== "dark") return;
        if (e.matches) {
          setThemeName("dark");
        } else {
          setThemeName("light");
        }
      });
  }, []);

  return (
    <SystemThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={themeApplied}>{children}</ThemeProvider>
    </SystemThemeContext.Provider>
  );
};

export default Theme;
