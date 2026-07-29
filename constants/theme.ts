/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

export type Theme = {
  label: string;
  mode: "light" | "dark";
  hue: number;
  background: string;
  text: string;
  tint: string;
  tintText: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
};

export const Themes = {
  light: {
    label: "Claro",
    mode: "light",
    hue: 45,
    background: "#faf8f4",
    text: "#2f2f2f",
    tint: "#fff",
    tintText: "#2f2f2f",
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: "#fff",
  },

  dark: {
    label: "Escuro",
    mode: "dark",
    hue: 200,
    background: "#18181b",
    text: "#e8e8e5",
    tint: "#0a7ea4",
    tintText: "#ffffff",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: "#0a7ea4",
  },

  blue: {
    label: "Azul",
    mode: "light",
    hue: 205,
    background: "#eaf4fb",
    text: "#1c5e8c",
    tint: "#2b83c6",
    tintText: "#ffffff",
    icon: "#5f7e96",
    tabIconDefault: "#5f7e96",
    tabIconSelected: "#2b83c6",
  },

  green: {
    label: "Verde",
    mode: "light",
    hue: 137,
    background: "#e7efe6",
    text: "#295b38",
    tint: "#4b8f5d",
    tintText: "#ffffff",
    icon: "#6c7f71",
    tabIconDefault: "#6c7f71",
    tabIconSelected: "#4b8f5d",
  },

  pink: {
    label: "Rosa",
    mode: "light",
    hue: 331,
    background: "#fdf0fa",
    text: "#ce2780",
    tint: "#e44b9d",
    tintText: "#ffffff",
    icon: "#9a7d90",
    tabIconDefault: "#9a7d90",
    tabIconSelected: "#e44b9d",
  },

  lavender: {
    label: "Lavanda",
    mode: "light",
    hue: 265,
    background: "#f3eefc",
    text: "#6a43a0",
    tint: "#8b5ed1",
    tintText: "#ffffff",
    icon: "#857b96",
    tabIconDefault: "#857b96",
    tabIconSelected: "#8b5ed1",
  },

  nightBlue: {
    label: "Azul Noturno",
    mode: "dark",
    hue: 214,
    background: "#151d2b",
    text: "#dce8f5",
    tint: "#7cb4ff",
    tintText: "#15202e",
    icon: "#8d9cb3",
    tabIconDefault: "#8d9cb3",
    tabIconSelected: "#7cb4ff",
  },

  nightGreen: {
    label: "Verde Noturno",
    mode: "dark",
    hue: 138,
    background: "#131915",
    text: "#bfd9b4",
    tint: "#73c98b",
    tintText: "#152016",
    icon: "#84938a",
    tabIconDefault: "#84938a",
    tabIconSelected: "#73c98b",
  },

  sepia: {
    label: "Sépia",
    mode: "light",
    hue: 31,
    background: "#f2e7d3",
    text: "#4b3b2a",
    tint: "#a06f3b",
    tintText: "#ffffff",
    icon: "#8d8170",
    tabIconDefault: "#8d8170",
    tabIconSelected: "#a06f3b",
  },
} satisfies Record<string, Theme>;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
