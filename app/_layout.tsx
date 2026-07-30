import { FontProvider } from "@/contexts/FontContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import {
  Literata_400Regular,
  Literata_700Bold,
} from "@expo-google-fonts/literata";
import { Lora_400Regular, Lora_700Bold } from "@expo-google-fonts/lora";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const [loaded] = useFonts({
    Lora_400Regular,
    Lora_700Bold,
    Literata_400Regular,
    Literata_700Bold,
  });

  if (!loaded) return null;

  return (
    <ThemeProvider>
      <FontProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{ presentation: "modal", title: "Modal" }}
          />
        </Stack>
        <StatusBar style="auto" />
      </FontProvider>
    </ThemeProvider>
  );
}
