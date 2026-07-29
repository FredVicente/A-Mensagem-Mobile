import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

import { Themes } from "@/constants/theme";

type Theme = keyof typeof Themes;

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    async function loadTheme() {
      const savedTheme = await AsyncStorage.getItem("theme");

      if (savedTheme && savedTheme in Themes) {
        setThemeState(savedTheme as Theme);
      }
    }

    loadTheme();
  }, []);

  async function setTheme(theme: Theme) {
    setThemeState(theme);
    await AsyncStorage.setItem("theme", theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  return useContext(ThemeContext);
}
