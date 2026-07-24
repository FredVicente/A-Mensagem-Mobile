import { ScrollThemedView } from "@/components/scroll-themed-view";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import type { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

type ScrollScreenViewProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}>;

export default function ScrollScreenView({
  children,
  style,
  contentContainerStyle,
}: ScrollScreenViewProps) {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <ScrollThemedView
      style={[styles.container, style]}
      contentContainerStyle={[
        { paddingBottom: 32 + tabBarHeight },
        contentContainerStyle,
      ]}
    >
      {children}
    </ScrollThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 64,
    gap: 8,
    minHeight: "100%",
  },
});
