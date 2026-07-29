import { LampArt } from "@/components/art/lampArt";
import { ThemedPressable } from "@/components/themed-pressable";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useLastViewedChapter } from "@/hooks/use-last-viewed-chapter";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const lastViewedChapter = useLastViewedChapter();

  const buttonTextColor = useThemeColor("tintText");

  return (
    <ThemedView style={styles.container}>
      <LampArt />

      <ThemedView style={styles.verse}>
        <ThemedText style={styles.verseText}>
          Iluminado por tuas palavras, consigo enxergar o caminho
        </ThemedText>
        <ThemedText style={styles.verseReference}>Salmos 119:105</ThemedText>
      </ThemedView>

      <ThemedPressable
        onPress={() => {
          if (lastViewedChapter)
            router.push(
              `/reading/${lastViewedChapter.book}/${lastViewedChapter.chapter}`,
            );
          else router.push("/reading");
        }}
        style={styles.button}
      >
        <ThemedText
          style={{
            color: buttonTextColor,
          }}
        >
          Começar a leitura
        </ThemedText>
      </ThemedPressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 16,
  },
  verse: {
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  verseText: {
    textAlign: "center",
    fontSize: 24,
  },
  verseReference: {
    textAlign: "center",
  },
  button: {
    padding: 8,
    borderRadius: 8,
  },
});
