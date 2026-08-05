import { FontSetting } from "@/components/app/settings/FontSetting";
import { ThemeSetting } from "@/components/app/settings/ThemeSetting";
import ScreenView from "@/components/screen-view";
import { ThemedPressable } from "@/components/themed-pressable";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ReadingFonts } from "@/constants/fonts";
import { Themes } from "@/constants/theme";
import { useAppFont } from "@/contexts/FontContext";
import { useAppTheme } from "@/contexts/ThemeContext";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function SettingsScreen() {
  const { theme } = useAppTheme();
  const { font } = useAppFont();

  const [themeModalVisible, setThemeModalVisible] = useState(false);
  const [fontModalVisible, setFontModalVisible] = useState(false);

  const shadow = useTheme("shadow");
  const iconColor = useTheme("icon");

  return (
    <ScreenView style={styles.screen}>
      <ThemedText type="title" style={styles.title}>
        Configurações
      </ThemedText>

      {/* Theme config */}
      <ThemedView
        style={[
          styles.settingContainer,
          {
            borderBottomColor: shadow,
          },
        ]}
      >
        <ThemedText style={styles.configTitle}>Tema</ThemedText>

        <ThemedPressable
          onPress={() => setThemeModalVisible(true)}
          style={styles.configButton}
        >
          <ThemedText>{Themes[theme].label}</ThemedText>
          <MaterialIcons name="chevron-right" size={22} color={iconColor} />
        </ThemedPressable>
      </ThemedView>

      {/* Font config */}
      <ThemedView
        style={[
          styles.settingContainer,
          {
            borderBottomColor: shadow,
          },
        ]}
      >
        <ThemedText style={styles.configTitle}>Fonte</ThemedText>

        <ThemedPressable
          onPress={() => setFontModalVisible(true)}
          style={styles.configButton}
        >
          <ThemedText>{ReadingFonts[font].label}</ThemedText>
          <MaterialIcons name="chevron-right" size={22} color={iconColor} />
        </ThemedPressable>
      </ThemedView>

      <ThemeSetting
        visible={themeModalVisible}
        onClose={() => setThemeModalVisible(false)}
      />
      <FontSetting
        visible={fontModalVisible}
        onClose={() => setFontModalVisible(false)}
      />
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 24,
  },
  title: {
    marginBottom: 16,
  },
  settingContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,

    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  configTitle: {
    flex: 1,
  },
  configButton: {
    backgroundColor: "transparent",
    textAlign: "left",
    flex: 1,
    flexDirection: "row",
  },
});
