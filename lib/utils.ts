import { AllBibleBooks } from "@/data/bible-books";

export function formatChapterAmountText(chapterAmount: number) {
  return `${chapterAmount} capítulo${chapterAmount > 1 ? "s" : ""}`;
}

export function normalizeText(bookName: string) {
  /**
   * Normalizes a given book name by performing the following operations:
   * 1. Removes all spaces.
   * 2. Converts all characters to lowercase.
   * 3. Applies Unicode normalization (NFD).
   * 4. Removes all diacritic signs from each character.
   *
   * @param bookName - The original book name to normalize.
   * @returns The normalized string.
   */
  return bookName
    .replace(" ", "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function findBookByNormalizedTitle(normalizedTitle: string) {
  return AllBibleBooks.find((book) => book.normalizedTitle === normalizedTitle);
}

export function getNextAndPreviousChapter(book: string, chapter: number) {
  const bookIndex = AllBibleBooks.findIndex((b) => b.normalizedTitle === book);

  if (bookIndex === -1) {
    throw new Error(`Book "${book}" not found.`);
  }

  const currentBook = AllBibleBooks[bookIndex];

  let previous: { book: string; chapter: number };
  let next: { book: string; chapter: number };

  // Previous
  if (chapter > 1) {
    previous = {
      book: currentBook.normalizedTitle,
      chapter: chapter - 1,
    };
  } else {
    const previousBook =
      AllBibleBooks[
        (bookIndex - 1 + AllBibleBooks.length) % AllBibleBooks.length
      ];

    previous = {
      book: previousBook.normalizedTitle,
      chapter: previousBook.chaptersCount,
    };
  }

  // Next
  if (chapter < currentBook.chaptersCount) {
    next = {
      book: currentBook.normalizedTitle,
      chapter: chapter + 1,
    };
  } else {
    const nextBook = AllBibleBooks[(bookIndex + 1) % AllBibleBooks.length];

    next = {
      book: nextBook.normalizedTitle,
      chapter: 1,
    };
  }

  return { previous, next };
}
