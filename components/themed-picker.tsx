import { useTheme } from "@/hooks/use-theme";
import { Picker, type PickerProps } from "@react-native-picker/picker";

export type ThemedPickerProps<T> = Omit<
  PickerProps<T>,
  "onValueChange" | "selectedValue"
> & {
  selectedValue?: T;
  onValueChange?: (value: T, index: number) => void;
};

export function ThemedPicker<T>({
  style,
  onValueChange,
  ...otherProps
}: ThemedPickerProps<T>) {
  const color = useTheme("text");

  return (
    <Picker<T>
      style={[{ color }, style]}
      onValueChange={onValueChange}
      dropdownIconColor={color}
      {...otherProps}
    />
  );
}
