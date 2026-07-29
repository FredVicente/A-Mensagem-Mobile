import { Themes } from "@/constants/theme";
import { useAppTheme } from "@/contexts/ThemeContext";

export function useThemeColor(colorName: keyof typeof Themes.light) {
  const { theme } = useAppTheme();

  return Themes[theme][colorName];
}
