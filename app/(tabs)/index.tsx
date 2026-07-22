import ScreenView from "@/components/screen-view";
import { ThemedPressable } from "@/components/themed-pressable";
import { ThemedText } from "@/components/themed-text";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ScreenView>
      <ThemedText type="title" style={styles.title}>
        Home
      </ThemedText>

      <ThemedPressable
        onPress={() => {
          router.push("/reading");
        }}
        style={styles.button}
      >
        <ThemedText>Começar a leitura</ThemedText>
      </ThemedPressable>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 16,
  },
  button: {
    padding: 8,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
});
