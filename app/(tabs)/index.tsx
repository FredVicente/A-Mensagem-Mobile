import { LampArt } from "@/components/art/lampArt";
import { ThemedPressable } from "@/components/themed-pressable";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useFontFamily } from "@/hooks/use-font";
import { useTheme } from "@/hooks/use-theme";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  const buttonTextColor = useTheme("tintText");

  const fontFamily = useFontFamily();

  return (
    <ThemedView style={styles.container}>
      <LampArt />

      <ThemedView style={styles.verse}>
        <ThemedText
          style={[
            styles.verseText,
            {
              fontFamily,
            },
          ]}
        >
          Iluminado por tuas palavras, consigo enxergar o caminho
        </ThemedText>
        <ThemedText
          style={[
            styles.verseReference,
            {
              fontFamily,
            },
          ]}
        >
          Salmos 119:105
        </ThemedText>
      </ThemedView>

      <ThemedPressable
        onPress={() => {
          router.push("/reading");
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
    lineHeight: 30,
  },
  verseReference: {
    textAlign: "center",
  },
  button: {
    padding: 8,
    borderRadius: 8,
  },
});
