import {
  Pressable,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from "react-native";

import { useTheme } from "@/hooks/use-theme";

export type ThemedPressableProps = PressableProps & {
  style?: StyleProp<ViewStyle>;
};

export function ThemedPressable({
  style,
  ...otherProps
}: ThemedPressableProps) {
  const backgroundColor = useTheme("tint");

  return (
    <Pressable
      style={[
        {
          backgroundColor,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}
