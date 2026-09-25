import { ScrollThemedView } from "@/components/scroll-themed-view";
import { ThemedPressable } from "@/components/themed-pressable";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { AllBibleBooks } from "@/data/bible-books";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

type Props = {
  book: string;
  onChapterSelect: (chapter: number) => void;
  onBack: () => void;
};

export function ChaptersList({ book, onChapterSelect, onBack }: Props) {
  const bookData = AllBibleBooks.find((b) => b.normalizedTitle === book);
  if (!bookData) return <></>;

  const chapters = Array.from(
    { length: bookData.chaptersCount },
    (_, i) => i + 1,
  );

  const iconColor = useTheme("icon");
  const color = useTheme("tintText");

  return (
    <ScrollThemedView>
      <Pressable style={styles.backButton} onPress={onBack}>
        <MaterialIcons name="chevron-left" size={32} color={iconColor} />
        <ThemedText type="tint">Livros</ThemedText>
      </Pressable>
      <ThemedText type="title" style={styles.title}>
        {bookData.title}
      </ThemedText>
      <ThemedView style={styles.list}>
        {chapters.map((chapter) => (
          <ThemedPressable
            key={chapter}
            onPress={() => onChapterSelect(chapter)}
            style={styles.button}
            filled={false}
          >
            <ThemedText style={[styles.buttonText, { color }]}>
              {chapter}
            </ThemedText>
          </ThemedPressable>
        ))}
      </ThemedView>
    </ScrollThemedView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "tranparent",
    marginBottom: 8,
    left: -8,
  },
  title: {
    marginVertical: 16,
  },
  list: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    flexWrap: "wrap",
  },
  button: {
    height: 62,
    width: 62,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
  },
});
