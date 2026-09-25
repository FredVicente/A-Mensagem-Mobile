import {
  Pressable,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from "react-native";

import { useTheme } from "@/hooks/use-theme";

export type ThemedPressableProps = PressableProps & {
  style?: StyleProp<ViewStyle>;
  filled?: boolean;
};

export function ThemedPressable({
  style,
  filled = true,
  ...otherProps
}: ThemedPressableProps) {
  const tintColor = useTheme("tint");

  if (filled)
    return (
      <Pressable
        style={[
          {
            backgroundColor: tintColor,
          },
          style,
        ]}
        {...otherProps}
      />
    );
  else
    return (
      <Pressable
        style={[
          {
            borderColor: tintColor,
            borderWidth: 1,
          },
          style,
        ]}
        {...otherProps}
      />
    );
}
