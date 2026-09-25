import { ScrollThemedView } from "@/components/scroll-themed-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { AllBibleBooks } from "@/data/bible-books";
import { BibleData } from "@/data/index";
import { useEffect, useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Verse } from "../Verse";
import { VerseChanger } from "../VerseChanger";

type Props = {
  book: keyof typeof BibleData;
  chapter: number;
  onNavigate: (book: string | null, chapter: number | null) => void;
};

export default function BibleText({ book, chapter, onNavigate }: Props) {
  const text = BibleData[book][chapter];
  const bookTitle = AllBibleBooks.find(
    (b) => b.normalizedTitle === book,
  )?.title;

  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: false,
    });
  }, [chapter]);

  return (
    <ThemedView style={styles.container}>
      <ScrollThemedView style={styles.textContainer} ref={scrollRef}>
        <ThemedView>
          <ThemedText type="tint" style={styles.title}>
            {bookTitle?.toUpperCase()}
          </ThemedText>
          <ThemedText type="title" style={styles.title}>
            Capítulo {chapter}
          </ThemedText>
        </ThemedView>
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
  container: {
    paddingVertical: 32,
  },
  title: {
    marginBottom: 16,
    alignSelf: "center",
  },
  textContainer: {
    gap: 8,
    paddingBottom: 64,
  },
});
