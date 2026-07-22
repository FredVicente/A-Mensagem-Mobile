import ScreenView from "@/components/screen-view";
import { ThemedPicker } from "@/components/themed-picker";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useAppTheme } from "@/contexts/ThemeContext";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  const { theme, setTheme } = useAppTheme();
  return (
    <ScreenView>
      <ThemedText type="title" style={styles.title}>
        Configurações
      </ThemedText>
      <ThemedView style={styles.settingContainer}>
        <ThemedText>Tema</ThemedText>
        <ThemedPicker
          selectedValue={theme}
          onValueChange={(itemValue) => setTheme(itemValue)}
          style={{ width: 120 }}
        >
          <Picker.Item label="Claro" value="light" />
          <Picker.Item label="Escuro" value="dark" />
        </ThemedPicker>
      </ThemedView>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 16,
  },
  settingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
