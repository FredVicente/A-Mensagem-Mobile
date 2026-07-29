/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#FAF8F4",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#18181B",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

export const Themes = {
  light: {
    mode: "light",
    background: "#faf8f4",
    text: "#2f2f2f",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },

  dark: {
    mode: "dark",
    background: "#18181b",
    text: "#e8e8e5",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },

  blue: {
    mode: "light",
    background: "#eaf4fb",
    text: "#1c5e8c",
    tint: "#2b83c6",
    icon: "#5f7e96",
    tabIconDefault: "#5f7e96",
    tabIconSelected: "#2b83c6",
  },

  green: {
    mode: "light",
    background: "#e7efe6",
    text: "#295b38",
    tint: "#4b8f5d",
    icon: "#6c7f71",
    tabIconDefault: "#6c7f71",
    tabIconSelected: "#4b8f5d",
  },

  pink: {
    mode: "light",
    background: "#fdf0fa",
    text: "#ce2780",
    tint: "#e44b9d",
    icon: "#9a7d90",
    tabIconDefault: "#9a7d90",
    tabIconSelected: "#e44b9d",
  },

  lavender: {
    mode: "light",
    background: "#f3eefc",
    text: "#6a43a0",
    tint: "#8b5ed1",
    icon: "#857b96",
    tabIconDefault: "#857b96",
    tabIconSelected: "#8b5ed1",
  },

  nightBlue: {
    mode: "dark",
    background: "#151d2b",
    text: "#dce8f5",
    tint: "#7cb4ff",
    icon: "#8d9cb3",
    tabIconDefault: "#8d9cb3",
    tabIconSelected: "#7cb4ff",
  },

  nightGreen: {
    mode: "dark",
    background: "#131915",
    text: "#bfd9b4",
    tint: "#73c98b",
    icon: "#84938a",
    tabIconDefault: "#84938a",
    tabIconSelected: "#73c98b",
  },

  sepia: {
    mode: "light",
    background: "#f2e7d3",
    text: "#4b3b2a",
    tint: "#a06f3b",
    icon: "#8d8170",
    tabIconDefault: "#8d8170",
    tabIconSelected: "#a06f3b",
  },
};

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
