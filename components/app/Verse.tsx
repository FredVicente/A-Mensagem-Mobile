import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useFontFamily } from "@/hooks/use-font";
import { type Verse } from "@/lib/types";
import { StyleSheet } from "react-native";

export function Verse({ verse }: { verse: Verse }) {
  const fontFamily = useFontFamily();

  return (
    <ThemedView>
      {verse.title && (
        <ThemedText
          type="subtitle"
          style={{
            fontFamily,
            marginTop: 16,
            marginBottom: 6,
          }}
        >
          {verse.title}
        </ThemedText>
      )}
      <ThemedView style={styles.verse}>
        <ThemedText
          style={{
            fontFamily,
          }}
        >
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
    textAlign: "justify",
  },
  number: {
    fontSize: 10,
  },
});
