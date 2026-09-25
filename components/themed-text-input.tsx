import { TextInput, TextInputProps } from "react-native";

import { useFontFamily } from "@/hooks/use-font";
import { useTheme } from "@/hooks/use-theme";

export function ThemedTextInput(props: TextInputProps) {
  const background = useTheme("surface");
  const text = useTheme("text");
  const shadow = useTheme("shadow");
  const fontFamily = useFontFamily();

  return (
    <TextInput
      {...props}
      style={[
        {
          backgroundColor: background,
          color: text,
          borderColor: shadow,
          borderWidth: 1,
          borderRadius: 6,
          paddingHorizontal: 16,
          paddingVertical: 12,
          fontFamily,
        },
        props.style,
      ]}
      placeholderTextColor={text}
    />
  );
}
