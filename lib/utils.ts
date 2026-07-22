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
