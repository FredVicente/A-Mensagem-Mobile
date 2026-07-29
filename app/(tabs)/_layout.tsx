import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Themes } from "@/constants/theme";
import { useAppTheme } from "@/contexts/ThemeContext";

export default function TabLayout() {
  const { theme } = useAppTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Themes[theme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: Themes[theme ?? "light"].background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reading"
        options={{
          title: "Reading",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="book.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="gearshape.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
