import ScreenView from "@/components/screen-view";
import { ThemedPressable } from "@/components/themed-pressable";
import { ThemedText } from "@/components/themed-text";
import { useLastViewedChapter } from "@/hooks/use-last-viewed-chapter";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const lastViewedChapter = useLastViewedChapter();

  return (
    <ScreenView>
      <ThemedText type="title" style={styles.title}>
        Home
      </ThemedText>

      {lastViewedChapter && (
        <ThemedPressable
          onPress={() => {
            router.push(
              `/reading/${lastViewedChapter.book}/${lastViewedChapter.chapter}`,
            );
          }}
          style={styles.button}
        >
          <ThemedText>Continuar a leitura</ThemedText>
        </ThemedPressable>
      )}
      <ThemedPressable
        onPress={() => {
          router.push("/reading");
        }}
        style={styles.button}
      >
        <ThemedText>Começar a leitura</ThemedText>
      </ThemedPressable>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 16,
  },
  button: {
    padding: 8,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
});
