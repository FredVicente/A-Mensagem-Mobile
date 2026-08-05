import { ReadingFlow } from "@/components/app/reading/ReadingFlow";
import { ReadingHeader } from "@/components/app/reading/ReadingHeader";
import ScreenView from "@/components/screen-view";
import { ThemedView } from "@/components/themed-view";
import { useLastViewedChapter } from "@/hooks/use-last-viewed-chapter";
import { useTheme } from "@/hooks/use-theme";
import { useState } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";

export default function ReadingScreen() {
  const [parallelMode, setParallelMode] = useState(false);
  const { width, height } = useWindowDimensions();

  const isLandscape = width > height;

  const {
    lastViewedPrimaryChapter,
    lastViewedSecondaryChapter,
    savePrimaryChapter,
    saveSecondaryChapter,
  } = useLastViewedChapter();

  const dividerColor = useTheme("tint");

  return (
    <ScreenView>
      {isLandscape && (
        <ReadingHeader
          parallelMode={parallelMode}
          setParallelMode={setParallelMode}
        />
      )}
      <ThemedView style={styles.container}>
        <ReadingFlow
          initialBook={lastViewedPrimaryChapter?.book}
          initialChapter={lastViewedPrimaryChapter?.chapter}
          setLastViewedChapter={(book, chapter) => {
            savePrimaryChapter({ book, chapter });
          }}
        />
        {parallelMode && isLandscape && (
          <ReadingFlow
            initialBook={lastViewedSecondaryChapter?.book}
            initialChapter={lastViewedSecondaryChapter?.chapter}
            setLastViewedChapter={(book, chapter) => {
              saveSecondaryChapter({ book, chapter });
            }}
            style={{
              borderLeftWidth: StyleSheet.hairlineWidth,
              borderColor: dividerColor,
            }}
          />
        )}
      </ThemedView>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
