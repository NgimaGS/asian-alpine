import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { responsiveFontSizes, ThemeProvider, createTheme } from "@mui/material";

export interface ColorMode {
  toggleMode: () => void;
  mode: "light" | "dark";
  isDarkMode: boolean;
  isMobile: boolean;
}

export const ThemeModeContext = createContext<ColorMode>({
  toggleMode: () => {},
  mode: "light",
  isDarkMode: false,
  isMobile: false,
});

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [mode, setMode] = useState<"light" | "dark">(
    isDarkMode ? "dark" : "light"
  );
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  const handleWindowSizeChange = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [handleWindowSizeChange]);

  const toggleMode = useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  }, []);

  const colorMode: ColorMode = {
    toggleMode,
    mode,
    isDarkMode,
    isMobile,
  };

  let theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: isDarkMode ? "#4fc1f8" : "#0F75BD",
        light: "#0F75BD",
        dark: "#4fc1f8",
      },
      secondary: {
        main: "#bd580f",
        light: "#bd580f",
        dark: "#dda135",
      },
      background: {
        default: isDarkMode ? "#141b2d" : "#fcfcfc",
        paper: isDarkMode ? "#1f2a40" : "#f2f0f0",
      },
      text: {
        primary: isDarkMode ? "#fff" : "#707070",
        secondary: isDarkMode ? "#bdbdbd" : "#616161",
      },
      divider: isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)",
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <ThemeModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeContext;
