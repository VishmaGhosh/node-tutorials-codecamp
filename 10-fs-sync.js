import { readFileSync, writeFileSync } from "fs";

console.log("start");

const firstFile = readFileSync("./content/first.txt", "utf8");
const secondFile = readFileSync("./content/second.txt", "utf8");

console.log(firstFile, secondFile);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${firstFile},
    ${secondFile}`,
  { flag: "a" },
);

console.log("done with this task");
console.log("starting the next one");
