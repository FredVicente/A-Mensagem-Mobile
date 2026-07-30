import { Theme, Themes } from "@/constants/theme";
import { useAppTheme } from "@/contexts/ThemeContext";

type ThemeKey = keyof Theme;

export function useTheme<K extends ThemeKey>(key: K): Theme[K] {
  const { theme } = useAppTheme();

  return Themes[theme][key];
}
