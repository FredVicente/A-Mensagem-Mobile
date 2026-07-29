import {
  Pressable,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";

export type ThemedPressableProps = PressableProps & {
  style?: StyleProp<ViewStyle>;
};

export function ThemedPressable({
  style,
  ...otherProps
}: ThemedPressableProps) {
  const backgroundColor = useThemeColor("tint");

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
