import fs from "fs";

const src = "dist/index.html";
const dest = "dist/404.html";

fs.copyFileSync(src, dest);
console.log("404.html created from index.html");
