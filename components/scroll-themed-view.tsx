import { ScrollView, type ScrollViewProps } from "react-native";

import { useTheme } from "@/hooks/use-theme";

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
  const backgroundColor = useTheme("background");

  return <ScrollView style={[{ backgroundColor }, style]} {...otherProps} />;
}
