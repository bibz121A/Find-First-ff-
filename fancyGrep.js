const fs = require("fs");

const filename = process.argv[2];
const searchWord = process.argv[3];
const limit = Number(process.argv[4]);

const content = fs.readFileSync(filename, "utf8");
const lines = content.split("\n");
const matches = lines.filter(line => line.includes(searchWord));
const results = matches.slice(0, limit);

console.log(results.join("\n"));
