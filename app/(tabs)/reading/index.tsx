import ScrollScreenView from "@/components/scroll-screen-view";
import { ThemedPressable } from "@/components/themed-pressable";
import { ThemedText } from "@/components/themed-text";
import { BibleBooks } from "@/data/bible-books";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

export default function ReadingScreen() {
  const router = useRouter();

  return (
    <ScrollScreenView>
      <ThemedText type="title" style={styles.title}>
        Antigo Testamento
      </ThemedText>
      {BibleBooks.oldTestament.map((book) => (
        <ThemedPressable
          key={book.normalizedTitle}
          onPress={() => router.push(`/reading/${book.normalizedTitle}`)}
          style={styles.button}
        >
          <ThemedText style={styles.buttonText}>{book.title}</ThemedText>
        </ThemedPressable>
      ))}
      <ThemedText type="title" style={styles.title}>
        Novo Testamento
      </ThemedText>
      {BibleBooks.newTestament.map((book) => (
        <ThemedPressable
          key={book.normalizedTitle}
          onPress={() => router.push(`/reading/${book.normalizedTitle}`)}
          style={styles.button}
        >
          <ThemedText style={styles.buttonText}>{book.title}</ThemedText>
        </ThemedPressable>
      ))}
    </ScrollScreenView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 12,
  },
  button: {
    backgroundColor: "transparent",
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: 18,
  },
});
