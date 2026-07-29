import { Verse } from "@/components/app/verse";
import { VerseChanger } from "@/components/app/verseChanger";
import ScreenView from "@/components/screen-view";
import ScrollScreenView from "@/components/scroll-screen-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BibleData } from "@/data/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { StyleSheet } from "react-native";

export default function ChapterScreen() {
  const { book, chapter } = useLocalSearchParams<{
    book: string;
    chapter: string;
  }>();

  // save as last viewed
  useEffect(() => {
    const data = JSON.stringify({
      book,
      chapter,
    });
    AsyncStorage.setItem("lastViewedChapter", data);
  }, []);

  const chapterNumber = Number(chapter);

  const text = BibleData[book as keyof typeof BibleData][chapterNumber];

  return (
    <ScreenView>
      <ScrollScreenView style={styles.textContainer}>
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
      </ScrollScreenView>
      <VerseChanger book={book} chapter={chapter} />
    </ScreenView>
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
