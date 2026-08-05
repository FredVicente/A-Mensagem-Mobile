import { View, type ViewProps } from "react-native";

import { useTheme } from "@/hooks/use-theme";

export function ThemedView({ style, ...otherProps }: ViewProps) {
  const backgroundColor = useTheme("background");

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
