import { LastViewedChapter } from "@/lib/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

const PRIMARY_KEY = "lastViewedPrimaryChapter";
const SECONDARY_KEY = "lastViewedSecondaryChapter";

export function useLastViewedChapter() {
  const [lastViewedPrimaryChapter, setLastViewedPrimaryChapter] =
    useState<LastViewedChapter | null>(null);

  const [lastViewedSecondaryChapter, setLastViewedSecondaryChapter] =
    useState<LastViewedChapter | null>(null);

  useFocusEffect(
    useCallback(() => {
      const load = async () => {
        const [primary, secondary] = await Promise.all([
          AsyncStorage.getItem(PRIMARY_KEY),
          AsyncStorage.getItem(SECONDARY_KEY),
        ]);

        if (primary) {
          setLastViewedPrimaryChapter(JSON.parse(primary));
        }

        if (secondary) {
          setLastViewedSecondaryChapter(JSON.parse(secondary));
        }
      };

      load();
    }, []),
  );

  const savePrimaryChapter = useCallback(async (chapter: LastViewedChapter) => {
    setLastViewedPrimaryChapter(chapter);

    await AsyncStorage.setItem(PRIMARY_KEY, JSON.stringify(chapter));
  }, []);

  const saveSecondaryChapter = useCallback(
    async (chapter: LastViewedChapter) => {
      setLastViewedSecondaryChapter(chapter);

      await AsyncStorage.setItem(SECONDARY_KEY, JSON.stringify(chapter));
    },
    [],
  );

  return {
    lastViewedPrimaryChapter,
    lastViewedSecondaryChapter,
    savePrimaryChapter,
    saveSecondaryChapter,
  };
}
