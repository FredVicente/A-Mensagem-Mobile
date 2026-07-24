import { LastViewedChapter } from "@/lib/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

export function useLastViewedChapter() {
  const [lastViewedChapter, setLastViewedChapter] =
    useState<LastViewedChapter | null>(null);

  useFocusEffect(
    useCallback(() => {
      const getValue = async () => {
        const value = await AsyncStorage.getItem("lastViewedChapter");
        if (value) {
          setLastViewedChapter(JSON.parse(value));
        }
      };

      getValue();
    }, []),
  );

  return lastViewedChapter;
}
