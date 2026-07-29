import { useThemeColor } from "@/hooks/use-theme-color";
import { Picker, type PickerProps } from "@react-native-picker/picker";

export type ThemedPickerProps<T> = Omit<
  PickerProps<T>,
  "onValueChange" | "selectedValue"
> & {
  lightColor?: string;
  darkColor?: string;
  selectedValue?: T;
  onValueChange?: (value: T, index: number) => void;
};

export function ThemedPicker<T>({
  style,
  lightColor,
  darkColor,
  onValueChange,
  ...otherProps
}: ThemedPickerProps<T>) {
  const color = useThemeColor("text");

  return (
    <Picker<T>
      style={[{ color }, style]}
      onValueChange={onValueChange}
      dropdownIconColor={color}
      {...otherProps}
    />
  );
}
