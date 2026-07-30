import { AllBibleBooks } from "@/data/bible-books";
import { useTheme } from "@/hooks/use-theme";
import { getNextAndPreviousChapter } from "@/lib/utils";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import { ThemedPressable } from "../themed-pressable";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";

type VerseChangerProps = {
  book: string;
  chapter: string;
};

export function VerseChanger({ book, chapter }: VerseChangerProps) {
  const router = useRouter();
  const bookData = AllBibleBooks.find((b) => b.normalizedTitle === book);
  const { previous, next } = getNextAndPreviousChapter(book, Number(chapter));

  const color = useTheme("tint");
  const shadow = useTheme("shadow");
  const background = useTheme("background");

  return (
    <ThemedView
      style={[
        styles.container,
        {
          boxShadow: `2px 2px 10px ${shadow}`,
        },
      ]}
    >
      <ThemedPressable
        style={[
          styles.arrow,
          {
            backgroundColor: background,
          },
        ]}
        onPress={() =>
          router.replace(`/reading/${previous.book}/${previous.chapter}`)
        }
      >
        <ThemedText style={{ color }}>{"<"}</ThemedText>
      </ThemedPressable>
      <ThemedPressable
        style={[
          styles.chapter,
          {
            backgroundColor: background,
          },
        ]}
        onPress={() => router.replace(`/reading`)}
      >
        <ThemedText style={{ color }}>
          {bookData?.title} {chapter}
        </ThemedText>
      </ThemedPressable>
      <ThemedPressable
        style={[
          styles.arrow,
          {
            backgroundColor: background,
          },
        ]}
        onPress={() => router.replace(`/reading/${next.book}/${next.chapter}`)}
      >
        <ThemedText style={{ color }}>{">"}</ThemedText>
      </ThemedPressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    bottom: 52,
    borderRadius: 32,
    overflow: "hidden",
  },
  arrow: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  chapter: {
    padding: 8,
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});
