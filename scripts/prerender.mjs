import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const entry = path.resolve("dist-ssr/entry-server.js");
const { render } = await import(pathToFileURL(entry).href);

const html = await readFile("dist/index.html", "utf8");
const marker = '<div id="root"></div>';

if (!html.includes(marker)) {
  throw new Error("Prerender failed: root marker not found in dist/index.html");
}

const app = render();
await writeFile("dist/index.html", html.replace(marker, `<div id="root">${app}</div>`));

console.log(`Prerendered ${app.length} bytes into dist/index.html`);
