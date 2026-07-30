import ScreenView from "@/components/screen-view";
import { ThemedPicker } from "@/components/themed-picker";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Themes } from "@/constants/theme";
import { useAppFont } from "@/contexts/FontContext";
import { useAppTheme } from "@/contexts/ThemeContext";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  const { theme, setTheme } = useAppTheme();
  const { font, setFont } = useAppFont();
  return (
    <ScreenView>
      <ThemedText type="title" style={styles.title}>
        Configurações
      </ThemedText>
      {/* Theme config */}
      <ThemedView style={styles.settingContainer}>
        <ThemedText>Tema</ThemedText>
        <ThemedPicker
          selectedValue={theme}
          onValueChange={(itemValue) => setTheme(itemValue)}
          style={{ width: 120 }}
        >
          {Object.entries(Themes).map(([key, theme]) => (
            <Picker.Item key={key} label={theme.label} value={key} />
          ))}
        </ThemedPicker>
      </ThemedView>
      {/* Font config */}
      <ThemedView style={styles.settingContainer}>
        <ThemedText>Tema</ThemedText>
        <ThemedPicker
          selectedValue={font}
          onValueChange={(itemValue) => setFont(itemValue)}
          style={{ width: 120 }}
        >
          <Picker.Item key="system" label="Sistema" value="system" />
          <Picker.Item key="literata" label="Literata" value="literata" />
          <Picker.Item key="lora" label="Lora" value="lora" />
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
