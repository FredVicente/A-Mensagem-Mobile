import { MaterialIcons } from "@expo/vector-icons";
import { Modal, Pressable, ScrollView, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ReadingFonts } from "@/constants/fonts";
import { useAppFont } from "@/contexts/FontContext";
import { useTheme } from "@/hooks/use-theme";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export function FontSetting({ visible, onClose }: Props) {
  const { font, setFont } = useAppFont();

  const mode = useTheme("mode");
  const background = useTheme("background");
  const text = useTheme("text");
  const tint = useTheme("tint");
  const tintText = useTheme("tintText");
  const shadow = useTheme("shadow");

  const selectedFont = ReadingFonts[font];

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
              backgroundColor: mode === "dark" ? "#242428" : "#ffffff",
            },
          ]}
          onPress={(e) => e.stopPropagation()}
        >
          <ThemedText type="subtitle" style={styles.title}>
            Escolha uma fonte
          </ThemedText>

          <ScrollView
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
          >
            {Object.entries(ReadingFonts).map(([key, currentFont]) => (
              <Pressable
                key={key}
                style={[
                  styles.option,
                  {
                    borderColor: font === key ? tint : shadow,
                  },
                ]}
                onPress={() => setFont(key as keyof typeof ReadingFonts)}
              >
                <ThemedText
                  style={{
                    fontFamily: currentFont.regular,
                    fontSize: 32,
                    color: text,
                  }}
                >
                  Aa
                </ThemedText>

                <ThemedText style={styles.label}>
                  {currentFont.label}
                </ThemedText>

                {font === key && (
                  <View
                    style={[
                      styles.selected,
                      {
                        backgroundColor: tint,
                      },
                    ]}
                  >
                    <MaterialIcons name="check" size={14} color={tintText} />
                  </View>
                )}
              </Pressable>
            ))}
          </ScrollView>
          <View
            style={[
              styles.preview,
              {
                backgroundColor: background,
                borderColor: shadow,
              },
            ]}
          >
            <ThemedText
              style={{
                fontFamily: selectedFont.regular,
                color: text,
                fontSize: 18,
                lineHeight: 30,
              }}
            >
              No princípio criou Deus os céus e a terra.
            </ThemedText>
          </View>
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
    marginBottom: 20,
  },

  preview: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
    marginTop: 24,
  },

  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },

  option: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 18,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
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
    fontSize: 13,
    textAlign: "center",
  },
});
