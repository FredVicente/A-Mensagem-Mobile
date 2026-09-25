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
  shadow: string;
  surface: string;

  text: string;

  tint: string;
  tintText: string;
  onTint: string;

  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
};

export const Themes = {
  light: {
    label: "Claro",
    mode: "light",
    hue: 5,

    background: "#faf8f4",
    surface: "#ffffff",
    shadow: "#d9d4cc",

    text: "#2f2f2f",

    tint: "#9d0208",
    tintText: "#7d3a3d",
    onTint: "#faf8f4",

    icon: "#9d0208",
    tabIconDefault: "#687076",
    tabIconSelected: "#9d0208",
  },

  dark: {
    label: "Escuro",
    mode: "dark",
    hue: 0,

    background: "#18181b",
    surface: "#242428",
    shadow: "#09090b",

    text: "#e8e8e5",

    tint: "#d9484e",
    tintText: "#b86a6e",
    onTint: "#18181b",

    icon: "#c4c4c1",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: "#d9484e",
  },

  blue: {
    label: "Azul",
    mode: "light",
    hue: 205,

    background: "#eaf4fb",
    surface: "#f6fbff",
    shadow: "#cfdfe9",

    text: "#1c5e8c",

    tint: "#2b83c6",
    tintText: "#3f7195",
    onTint: "#eaf4fb",

    icon: "#5f7e96",
    tabIconDefault: "#5f7e96",
    tabIconSelected: "#2b83c6",
  },

  green: {
    label: "Verde",
    mode: "light",
    hue: 137,

    background: "#e7efe6",
    surface: "#f3f8f2",
    shadow: "#cad8c8",

    text: "#295b38",

    tint: "#4b8f5d",
    tintText: "#4d7358",
    onTint: "#e7efe6",

    icon: "#6c7f71",
    tabIconDefault: "#6c7f71",
    tabIconSelected: "#4b8f5d",
  },

  pink: {
    label: "Rosa",
    mode: "light",
    hue: 331,

    background: "#fdf0fa",
    surface: "#fff8fd",
    shadow: "#e6d7e1",

    text: "#ce2780",

    tint: "#e44b9d",
    tintText: "#b95b8d",
    onTint: "#fdf0fa",

    icon: "#9a7d90",
    tabIconDefault: "#9a7d90",
    tabIconSelected: "#e44b9d",
  },

  lavender: {
    label: "Lavanda",
    mode: "light",
    hue: 265,

    background: "#f3eefc",
    surface: "#faf8ff",
    shadow: "#dcd5ea",

    text: "#6a43a0",

    tint: "#8b5ed1",
    tintText: "#765a9d",
    onTint: "#f3eefc",

    icon: "#857b96",
    tabIconDefault: "#857b96",
    tabIconSelected: "#8b5ed1",
  },

  nightBlue: {
    label: "Azul Noturno",
    mode: "dark",
    hue: 214,

    background: "#151d2b",
    surface: "#202a3d",
    shadow: "#0c111a",

    text: "#dce8f5",

    tint: "#7cb4ff",
    tintText: "#6f9bc7",
    onTint: "#151d2b",

    icon: "#c1cfdf",
    tabIconDefault: "#8d9cb3",
    tabIconSelected: "#7cb4ff",
  },

  nightGreen: {
    label: "Verde Noturno",
    mode: "dark",
    hue: 138,

    background: "#131915",
    surface: "#1d2520",
    shadow: "#0b100c",

    text: "#bfd9b4",

    tint: "#73c98b",
    tintText: "#6da17b",
    onTint: "#131915",

    icon: "#b8c8bc",
    tabIconDefault: "#84938a",
    tabIconSelected: "#73c98b",
  },

  sepia: {
    label: "Sépia",
    mode: "light",
    hue: 31,

    background: "#f2e7d3",
    surface: "#faf3e7",
    shadow: "#d8ccb6",

    text: "#4b3b2a",

    tint: "#a06f3b",
    tintText: "#806246",
    onTint: "#f2e7d3",

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
