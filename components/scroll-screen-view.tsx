import { ScrollThemedView } from "@/components/scroll-themed-view";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import type { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

export default function ScrollScreenView({ children }: PropsWithChildren) {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <ScrollThemedView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 32 + tabBarHeight }}
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
