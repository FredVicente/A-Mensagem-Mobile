import { ScrollThemedView } from "@/components/scroll-themed-view";
import { ThemedPressable } from "@/components/themed-pressable";
import { ThemedText } from "@/components/themed-text";
import { ThemedTextInput } from "@/components/themed-text-input";
import { BibleBooks } from "@/data/bible-books";
import { useState } from "react";
import { StyleSheet } from "react-native";

type Props = {
  onBookSelect: (book: string) => void;
};

export default function BooksList({ onBookSelect }: Props) {
  const [search, setSearch] = useState("");

  return (
    <ScrollThemedView>
      <ThemedTextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Pesquisar livro"
        style={styles.input}
      />
      <ThemedText type="title" style={styles.title}>
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
            style={styles.button}
          >
            <ThemedText style={styles.buttonText}>{book.title}</ThemedText>
          </ThemedPressable>
        ))}
      <ThemedText
        type="title"
        style={[
          styles.title,
          {
            marginTop: 16,
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
            style={styles.button}
          >
            <ThemedText style={styles.buttonText}>{book.title}</ThemedText>
          </ThemedPressable>
        ))}
    </ScrollThemedView>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 12,
  },
  title: {
    marginBottom: 12,
  },
  button: {
    backgroundColor: "transparent",
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: 18,
  },
});
