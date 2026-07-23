import ScreenView from "@/components/screen-view";
import ScrollScreenView from "@/components/scroll-screen-view";
import { ThemedPressable } from "@/components/themed-pressable";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { AllBibleBooks } from "@/data/bible-books";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet } from "react-native";

export default function BookScreen() {
  const { book } = useLocalSearchParams();
  const router = useRouter();

  const bookData = AllBibleBooks.find((b) => b.normalizedTitle === book);

  if (!bookData) {
    return (
      <ScreenView>
        <ThemedText type="title" style={styles.title}>
          Book not found
        </ThemedText>
      </ScreenView>
    );
  }

  const chapters = Array.from(
    { length: bookData.chaptersCount },
    (_, i) => i + 1,
  );

  return (
    <ScrollScreenView>
      <ThemedText type="title" style={styles.title}>
        {bookData.title}
      </ThemedText>
      <ThemedView style={styles.list}>
        {chapters.map((chapter) => (
          <ThemedPressable
            key={chapter}
            onPress={() =>
              router.push(`/reading/${bookData.normalizedTitle}/${chapter}`)
            }
            style={styles.button}
          >
            <ThemedText style={styles.buttonText}>{chapter}</ThemedText>
          </ThemedPressable>
        ))}
      </ThemedView>
    </ScrollScreenView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 16,
  },
  list: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    flexWrap: "wrap",
  },
  button: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 16,
  },
});
