import sharp from "sharp";

const files = ["fac-1", "fac-5"];
for (const f of files) {
  const src = `public/assets/${f}.jpg`;
  const dst = `public/assets/${f}.webp`;
  await sharp(src).webp({ quality: 80 }).toFile(dst);
  console.log(`✓ ${dst} created`);
}
