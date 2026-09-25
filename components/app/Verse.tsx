import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useFontFamily } from "@/hooks/use-font";
import { useTheme } from "@/hooks/use-theme";
import { type Verse } from "@/lib/types";
import { StyleSheet } from "react-native";

export function Verse({ verse }: { verse: Verse }) {
  const fontFamily = useFontFamily();
  const fontFamilyBold = useFontFamily("bold");
  const tint = useTheme("tint");

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
          <ThemedText
            style={[
              styles.number,
              {
                color: tint,
                fontFamily: fontFamilyBold,
                fontWeight: "bold",
              },
            ]}
          >
            {verse.number}
          </ThemedText>{" "}
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
    marginVertical: 4,
  },
  number: {
    fontSize: 12,
  },
});
