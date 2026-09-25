import { MaterialIcons } from "@expo/vector-icons";
import { Modal, Pressable, ScrollView, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { Themes } from "@/constants/theme";
import { useAppTheme } from "@/contexts/ThemeContext";
import { useFontFamily } from "@/hooks/use-font";
import { useTheme } from "@/hooks/use-theme";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export function ThemeSetting({ visible, onClose }: Props) {
  const { theme, setTheme } = useAppTheme();

  const fontFamily = useFontFamily();
  const surface = useTheme("surface");

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable
          style={[
            styles.sheet,
            {
              backgroundColor: surface,
            },
          ]}
          onPress={(e) => e.stopPropagation()}
        >
          <ThemedText type="subtitle" style={styles.title}>
            Escolha um tema
          </ThemedText>

          <ScrollView
            contentContainerStyle={styles.grid}
            showsVerticalScrollIndicator={false}
          >
            {Object.entries(Themes).map(([key, currentTheme]) => (
              <Pressable
                key={key}
                style={styles.item}
                onPress={() => {
                  setTheme(key as keyof typeof Themes);
                }}
              >
                <View
                  style={[
                    styles.preview,
                    {
                      backgroundColor: currentTheme.background,
                      borderColor: currentTheme.tint,

                      shadowColor: currentTheme.shadow,
                    },
                  ]}
                >
                  {key === theme && (
                    <View
                      style={[
                        styles.selected,
                        {
                          backgroundColor: currentTheme.tint,
                        },
                      ]}
                    >
                      <MaterialIcons
                        name="check"
                        size={14}
                        color={currentTheme.onTint}
                      />
                    </View>
                  )}

                  <ThemedText
                    style={{
                      color: currentTheme.text,
                      fontFamily,
                      fontSize: 28,
                    }}
                  >
                    Aa
                  </ThemedText>
                </View>

                <ThemedText
                  style={[styles.label, key === theme && styles.selectedLabel]}
                >
                  {currentTheme.label}
                </ThemedText>
              </Pressable>
            ))}
          </ScrollView>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  sheet: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    maxHeight: "70%",
  },

  title: {
    textAlign: "center",
    marginBottom: 24,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },

  item: {
    width: 92,
    alignItems: "center",
  },

  preview: {
    width: 90,
    height: 90,
    borderRadius: 16,
    borderWidth: 1,

    justifyContent: "center",
    alignItems: "center",

    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 3,
  },

  selected: {
    position: "absolute",
    top: 6,
    right: 6,

    width: 22,
    height: 22,
    borderRadius: 11,

    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 13,
  },

  selectedLabel: {
    fontWeight: "bold",
  },
});
