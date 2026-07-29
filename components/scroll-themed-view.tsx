import { ScrollView, type ScrollViewProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";

export type ScrollThemedViewProps = ScrollViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ScrollThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ScrollThemedViewProps) {
  const backgroundColor = useThemeColor("background");

  return <ScrollView style={[{ backgroundColor }, style]} {...otherProps} />;
}
