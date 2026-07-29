import { Theme, Themes } from "@/constants/theme";
import { useAppTheme } from "@/contexts/ThemeContext";

type ThemeKey = keyof Theme;

export function useThemeColor<K extends ThemeKey>(key: K): Theme[K] {
  const { theme } = useAppTheme();

  return Themes[theme][key];
}
