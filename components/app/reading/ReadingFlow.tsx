import { ThemedView } from "@/components/themed-view";
import { useEffect, useState } from "react";
import { ViewStyle } from "react-native";
import BibleText from "./BibleText";
import BooksList from "./BooksList";
import { ChaptersList } from "./ChaptersList";

type Props = {
  initialBook?: string;
  initialChapter?: number;
  style?: ViewStyle;
  setLastViewedChapter: (book: string, chapter: number) => void;
};

export function ReadingFlow({
  initialBook,
  initialChapter,
  style,
  setLastViewedChapter,
}: Props) {
  const [book, setBook] = useState<string | null>(initialBook ?? null);
  const [chapter, setChapter] = useState<number | null>(initialChapter ?? null);

  useEffect(() => {
    if (book && chapter) {
      setLastViewedChapter(book, chapter);
    }
  }, [chapter]);

  return (
    <ThemedView style={[style, { flex: 1 }]}>
      {book == null ? (
        <BooksList onBookSelect={setBook} />
      ) : chapter == null ? (
        <ChaptersList
          book={book}
          onBack={() => setBook(null)}
          onChapterSelect={setChapter}
        />
      ) : (
        <BibleText
          book={book}
          chapter={chapter}
          onNavigate={(book, chapter) => {
            setBook(book);
            setChapter(chapter);
          }}
        />
      )}
    </ThemedView>
  );
}
