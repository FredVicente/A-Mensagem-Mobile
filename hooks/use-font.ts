import { ReadingFonts, useAppFont } from "@/contexts/FontContext";

export function useFontFamily() {
  const { font } = useAppFont();

  return ReadingFonts[font];
}
