import fs from "fs";
import path from "path";

const dataDir = path.resolve("data");
const outputFile = path.resolve("data/index.ts");

let output = `// AUTO-GENERATED FILE. DO NOT EDIT.\n\n`;
output += `import type { Verse } from "@/lib/types";\n\n`;
output += `export const BibleData: Record<string, Record<number, Verse[]>> = {\n`;

for (const testament of fs.readdirSync(dataDir)) {
  const testamentPath = path.join(dataDir, testament);

  if (!fs.statSync(testamentPath).isDirectory()) continue;

  for (const book of fs.readdirSync(testamentPath)) {
    const bookPath = path.join(testamentPath, book);

    if (!fs.statSync(bookPath).isDirectory()) continue;

    output += `  "${book}": {\n`;

    const chapters = fs
      .readdirSync(bookPath)
      .filter((f) => f.endsWith(".json"))
      .sort(
        (a, b) =>
          Number(a.replace(".json", "")) - Number(b.replace(".json", "")),
      );

    for (const chapter of chapters) {
      const number = Number(chapter.replace(".json", ""));

      output += `    ${number}: require("./${testament}/${book}/${chapter}"),\n`;
    }

    output += `  },\n`;
  }
}

output += `};\n`;

fs.writeFileSync(outputFile, output);

console.log(`Generated ${outputFile}`);
