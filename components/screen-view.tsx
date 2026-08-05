import { ThemedView } from "@/components/themed-view";
import type { PropsWithChildren } from "react";
import { StyleSheet, ViewProps } from "react-native";

type ScreenViewProps = PropsWithChildren & ViewProps;

export default function ScreenView({ children, style }: ScreenViewProps) {
  return <ThemedView style={[styles.container, style]}>{children}</ThemedView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    gap: 8,
    minHeight: "100%",
  },
});
