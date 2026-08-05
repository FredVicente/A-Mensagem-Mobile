import { useTheme } from "@/hooks/use-theme";
import { forwardRef } from "react";
import { ScrollView, type ScrollViewProps } from "react-native";

export const ScrollThemedView = forwardRef<ScrollView, ScrollViewProps>(
  ({ style, ...otherProps }, ref) => {
    const backgroundColor = useTheme("background");

    return (
      <ScrollView
        ref={ref}
        style={[{ backgroundColor }, style]}
        {...otherProps}
      />
    );
  },
);

ScrollThemedView.displayName = "ScrollThemedView";
