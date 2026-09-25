import { ScrollThemedView } from "@/components/scroll-themed-view";
import { ThemedPressable } from "@/components/themed-pressable";
import { ThemedText } from "@/components/themed-text";
import { ThemedTextInput } from "@/components/themed-text-input";
import { BibleBooks } from "@/data/bible-books";
import { useTheme } from "@/hooks/use-theme";
import { useState } from "react";
import { StyleSheet } from "react-native";

type Props = {
  onBookSelect: (book: string) => void;
};

export default function BooksList({ onBookSelect }: Props) {
  const [search, setSearch] = useState("");

  const shadowColor = useTheme("shadow");

  return (
    <ScrollThemedView>
      <ThemedTextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Pesquisar livro"
        style={styles.input}
      />
      <ThemedText type="tint" style={styles.title}>
        Antigo Testamento
      </ThemedText>
      {BibleBooks.oldTestament
        .filter((b) =>
          b.normalizedTitle.startsWith(search.trim().toLocaleLowerCase()),
        )
        .map((book) => (
          <ThemedPressable
            key={book.normalizedTitle}
            onPress={() => onBookSelect(book.normalizedTitle)}
            style={[styles.button, { borderBottomColor: shadowColor }]}
          >
            <ThemedText style={styles.buttonText}>{book.title}</ThemedText>
          </ThemedPressable>
        ))}

      <ThemedText
        type="tint"
        style={[
          styles.title,
          {
            marginTop: 32,
          },
        ]}
      >
        Novo Testamento
      </ThemedText>
      {BibleBooks.newTestament
        .filter((b) =>
          b.normalizedTitle.startsWith(search.trim().toLocaleLowerCase()),
        )
        .map((book) => (
          <ThemedPressable
            key={book.normalizedTitle}
            onPress={() => onBookSelect(book.normalizedTitle)}
            style={[styles.button, { borderBottomColor: shadowColor }]}
          >
            <ThemedText style={styles.buttonText}>{book.title}</ThemedText>
          </ThemedPressable>
        ))}
    </ScrollThemedView>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 24,
  },
  title: {
    marginBottom: 12,
  },
  button: {
    backgroundColor: "transparent",
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonText: {
    fontSize: 18,
  },
});
