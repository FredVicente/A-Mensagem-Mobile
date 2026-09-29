import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Themes } from "@/constants/theme";
import { useTabBar } from "@/contexts/TabBarContext";
import { useAppTheme } from "@/contexts/ThemeContext";
import { Tabs } from "expo-router";
import { BottomTabBar } from "expo-router/build/react-navigation/bottom-tabs";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

export default function TabLayout() {
  const { theme } = useAppTheme();
  const { tabbarTranslateY } = useTabBar();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: tabbarTranslateY.value }],
    };
  });

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Themes[theme ?? "light"].tint,
        tabBarInactiveTintColor: Themes[theme ?? "light"].tabIconDefault,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: Themes[theme ?? "light"].background,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
        },
      }}
      tabBar={(props) => (
        <Animated.View
          style={[
            animatedStyle,
            { position: "absolute", left: 0, right: 0, bottom: 0 },
          ]}
        >
          <BottomTabBar {...props} />
        </Animated.View>
      )}
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
