import { useTabBar } from "@/contexts/TabBarContext";
import { AllBibleBooks } from "@/data/bible-books";
import { useTheme } from "@/hooks/use-theme";
import { getNextAndPreviousChapter } from "@/lib/utils";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { ThemedPressable } from "../themed-pressable";
import { ThemedText } from "../themed-text";

type Props = {
  book: string;
  chapter: number;
  onNavigate: (book: string | null, chapter: number | null) => void;
};

export function VerseChanger({ book, chapter, onNavigate }: Props) {
  const bookData = AllBibleBooks.find((b) => b.normalizedTitle === book);
  const { previous, next } = getNextAndPreviousChapter(book, Number(chapter));

  const color = useTheme("tint");
  const shadow = useTheme("shadow");
  const background = useTheme("background");

  const { tabbarTranslateY } = useTabBar();

  const animatedContainerStyle = useAnimatedStyle(() => {
    const interpolatedBottom = interpolate(
      tabbarTranslateY.value,
      [0, 100],
      [80, 40],
    );

    return {
      bottom: interpolatedBottom,
    };
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          boxShadow: `2px 2px 10px ${shadow}`,
        },
        animatedContainerStyle,
      ]}
    >
      <ThemedPressable
        style={[
          styles.arrow,
          {
            backgroundColor: background,
          },
        ]}
        onPress={() => onNavigate(previous.book, previous.chapter)}
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
        onPress={() => onNavigate(null, null)}
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
        onPress={() => onNavigate(next.book, next.chapter)}
      >
        <ThemedText style={{ color }}>{">"}</ThemedText>
      </ThemedPressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
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
