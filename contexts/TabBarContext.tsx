import React, { createContext, useContext } from "react";
import {
  SharedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface TabBarContextData {
  tabbarTranslateY: SharedValue<number>;
  hideTabBar: () => void;
  showTabBar: () => void;
}

const TabBarContext = createContext<TabBarContextData>({} as TabBarContextData);

export function TabBarProvider({ children }: { children: React.ReactNode }) {
  // Valor compartilhado do Reanimated (0 = visível, 100 = escondido para baixo)
  const tabbarTranslateY = useSharedValue(0);

  const hideTabBar = () => {
    tabbarTranslateY.value = withTiming(100, { duration: 300 });
  };

  const showTabBar = () => {
    tabbarTranslateY.value = withTiming(0, { duration: 300 });
  };

  return (
    <TabBarContext.Provider
      value={{ tabbarTranslateY, hideTabBar, showTabBar }}
    >
      {children}
    </TabBarContext.Provider>
  );
}

export function useTabBar() {
  return useContext(TabBarContext);
}
