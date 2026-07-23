import { Verse } from "@/components/app/verse";
import ScrollScreenView from "@/components/scroll-screen-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BibleData } from "@/data/index";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

export default function ChapterScreen() {
  const { book, chapter } = useLocalSearchParams<{
    book: string;
    chapter: string;
  }>();

  const chapterNumber = Number(chapter);

  const text = BibleData[book as keyof typeof BibleData][chapterNumber];

  return (
    <ScrollScreenView>
      <ThemedText type="title" style={styles.title}>
        Chapter {chapter} - {book}
      </ThemedText>
      <ThemedView style={styles.textContainer}>
        {text.map((verse) => {
          return <Verse key={verse.number} verse={verse} />;
        })}
      </ThemedView>
    </ScrollScreenView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 16,
  },
  textContainer: {
    gap: 8,
  },
});
