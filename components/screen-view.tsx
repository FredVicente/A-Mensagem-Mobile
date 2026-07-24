import { ThemedView } from "@/components/themed-view";
import type { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

export default function ScreenView({ children }: PropsWithChildren) {
  return <ThemedView style={styles.container}>{children}</ThemedView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 64,
    gap: 8,
    minHeight: "100%",
  },
});
