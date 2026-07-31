import { ReadingFont, ReadingFonts } from "@/constants/fonts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

type FontContextType = {
  font: ReadingFont;
  setFont: (font: ReadingFont) => void;
};

const FontContext = createContext<FontContextType>({
  font: "system",
  setFont: () => {},
});

export function FontProvider({ children }: { children: React.ReactNode }) {
  const [font, setFontState] = useState<ReadingFont>("system");

  useEffect(() => {
    async function loadFont() {
      const savedFont = await AsyncStorage.getItem("font");

      if (savedFont && savedFont in ReadingFonts) {
        setFontState(savedFont as ReadingFont);
      }
    }

    loadFont();
  }, []);

  async function setFont(font: ReadingFont) {
    setFontState(font);
    await AsyncStorage.setItem("font", font);
  }

  return (
    <FontContext.Provider value={{ font, setFont }}>
      {children}
    </FontContext.Provider>
  );
}

export function useAppFont() {
  return useContext(FontContext);
}
