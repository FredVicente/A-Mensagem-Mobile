import { ReadingFonts } from "@/constants/fonts";
import { useAppFont } from "@/contexts/FontContext";

export function useFontFamily(w: "regular" | "bold" = "regular") {
  const { font } = useAppFont();

  return ReadingFonts[font][w];
}
