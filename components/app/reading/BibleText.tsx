import { ScrollThemedView } from "@/components/scroll-themed-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BibleData } from "@/data/index";
import { StyleSheet } from "react-native";
import { Verse } from "../Verse";
import { VerseChanger } from "../VerseChanger";

type Props = {
  book: keyof typeof BibleData;
  chapter: number;
  onNavigate: (book: string | null, chapter: number | null) => void;
};

export default function BibleText({ book, chapter, onNavigate }: Props) {
  const text = BibleData[book][chapter];

  return (
    <ThemedView>
      <ScrollThemedView style={styles.textContainer}>
        <ThemedText type="title" style={styles.title}>
          Capítulo {chapter}
        </ThemedText>
        <ThemedView style={styles.textContainer}>
          {text.map((verse) => {
            return (
              <Verse key={`${book}_${chapter}_${verse.number}`} verse={verse} />
            );
          })}
        </ThemedView>
      </ScrollThemedView>
      <VerseChanger book={book} chapter={chapter} onNavigate={onNavigate} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 16,
  },
  textContainer: {
    gap: 8,
    padding: 6,
    paddingBottom: 32,
  },
});
