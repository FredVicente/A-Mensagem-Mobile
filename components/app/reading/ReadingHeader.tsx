import { ThemedView } from "@/components/themed-view";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

type Props = {
  parallelMode: boolean;
  setParallelMode: (value: boolean) => void;
};

export function ReadingHeader({ parallelMode, setParallelMode }: Props) {
  const iconColor = useTheme("icon");
  const tintColor = useTheme("tint");
  return (
    <ThemedView style={styles.header}>
      <Pressable onPress={() => setParallelMode(!parallelMode)}>
        <MaterialIcons
          name="splitscreen"
          size={24}
          color={parallelMode ? tintColor : iconColor}
        />
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 30,
  },
});
