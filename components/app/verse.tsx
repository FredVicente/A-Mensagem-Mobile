import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { type Verse } from "@/lib/types";
import { StyleSheet } from "react-native";

export function Verse({ verse }: { verse: Verse }) {
  return (
    <ThemedView>
      {verse.title && <ThemedText type="subtitle">{verse.title}</ThemedText>}
      <ThemedView style={styles.verse}>
        <ThemedText>
          <ThemedText style={styles.number}>{verse.number}</ThemedText>{" "}
          {verse.content}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  verse: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 4,
  },
  number: {
    fontSize: 10,
  },
});
