export const ReadingFonts = {
  system: {
    label: "Sistema",
    regular: undefined,
    bold: undefined,
  },

  literata: {
    label: "Literata",
    regular: "Literata_400Regular",
    bold: "Literata_700Bold",
  },

  lora: {
    label: "Lora",
    regular: "Lora_400Regular",
    bold: "Lora_700Bold",
  },
} as const;

export type ReadingFont = keyof typeof ReadingFonts;
