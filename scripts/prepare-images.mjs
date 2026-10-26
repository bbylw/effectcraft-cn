import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const src = "assets-src/screenshots";
const out = "public/images";

const jobs = [
  { input: "hero.png", output: "hero.webp", width: 1920 },
  { input: "graph-editor.png", output: "graph-editor.webp", width: 1920 },
  { input: "effects.png", output: "effects.webp", width: 1920 },
  {
    input: "3d.png",
    output: "3d-canvas.webp",
    extract: { left: 685, top: 201, width: 1030, height: 580 },
  },
  {
    input: "render-queue.png",
    output: "render-queue.webp",
    extract: { left: 0, top: 837, width: 1960, height: 618 },
  },
  {
    input: "effects.png",
    output: "effect-controls.webp",
    extract: { left: 0, top: 87, width: 437, height: 860 },
  },
];

await mkdir(out, { recursive: true });

for (const job of jobs) {
  const input = path.join(src, job.input);
  const output = path.join(out, job.output);
  let image = sharp(input);
  if (job.extract) image = image.extract(job.extract);
  if (job.width) image = image.resize({ width: job.width, withoutEnlargement: true });
  const info = await image.webp({ quality: 84, effort: 5 }).toFile(output);
  console.log(`${job.output}: ${info.width}x${info.height} ${Math.round(info.size / 1024)}KB`);
}

await sharp(path.join(src, "hero.png"))
  .resize(1200, 630, { fit: "cover", position: "center" })
  .jpeg({ quality: 86 })
  .toFile("public/og.jpg");

console.log("og.jpg ready");
