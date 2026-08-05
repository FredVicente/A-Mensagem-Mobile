import { useState } from "react";
import BibleText from "./BibleText";
import BooksList from "./BooksList";
import { ChaptersList } from "./ChaptersList";

type Props = {
  initialBook?: string;
  initialChapter?: number;
};

export function ReadingFlow({ initialBook, initialChapter }: Props) {
  const [book, setBook] = useState<string | null>(initialBook ?? null);
  const [chapter, setChapter] = useState<number | null>(initialChapter ?? null);

  if (book == null) {
    return <BooksList onBookSelect={setBook} />;
  }

  if (chapter == null) {
    return (
      <ChaptersList
        book={book}
        onBack={() => setBook(null)}
        onChapterSelect={setChapter}
      />
    );
  }

  return (
    <BibleText
      book={book}
      chapter={chapter}
      onNavigate={(book, chapter) => {
        setBook(book);
        setChapter(chapter);
      }}
    />
  );
}
