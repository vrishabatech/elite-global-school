/**
 * Image Compression Script
 * Converts large JPG/PNG images to optimized WebP format
 * Run: node scripts/compress-images.mjs
 */

import sharp from "sharp";
import { readdir, stat, mkdir, copyFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

// Directories to process
const DIRS = ["assets", "banner"];

// Max widths for different image types
const MAX_WIDTH_DESKTOP = 1920;
const MAX_WIDTH_MOBILE = 828;
const WEBP_QUALITY = 80;

// Size threshold: only compress files > 200KB
const SIZE_THRESHOLD = 200 * 1024;

async function processDirectory(dirName) {
  const dirPath = path.join(PUBLIC, dirName);
  const backupDir = path.join(PUBLIC, `_backup_${dirName}`);

  let files;
  try {
    files = await readdir(dirPath);
  } catch {
    console.log(`  Skipping ${dirName} (not found)`);
    return;
  }

  const imageFiles = files.filter((f) =>
    /\.(jpg|jpeg|png)$/i.test(f)
  );

  if (imageFiles.length === 0) {
    console.log(`  No JPG/PNG files in ${dirName}`);
    return;
  }

  // Create backup directory
  await mkdir(backupDir, { recursive: true });

  for (const file of imageFiles) {
    const filePath = path.join(dirPath, file);
    const fileStats = await stat(filePath);

    if (fileStats.size < SIZE_THRESHOLD) {
      console.log(`  SKIP (small): ${file} (${(fileStats.size / 1024).toFixed(0)}KB)`);
      continue;
    }

    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    const webpName = `${baseName}.webp`;
    const webpPath = path.join(dirPath, webpName);

    // Determine max width based on filename
    const isMobile = file.toLowerCase().includes("mob");
    const maxWidth = isMobile ? MAX_WIDTH_MOBILE : MAX_WIDTH_DESKTOP;

    try {
      // Backup original
      await copyFile(filePath, path.join(backupDir, file));

      // Get image metadata
      const metadata = await sharp(filePath).metadata();
      const needsResize = metadata.width > maxWidth;

      let pipeline = sharp(filePath);

      if (needsResize) {
        pipeline = pipeline.resize(maxWidth, null, {
          withoutEnlargement: true,
          fit: "inside",
        });
      }

      await pipeline
        .webp({ quality: WEBP_QUALITY, effort: 6 })
        .toFile(webpPath);

      const newStats = await stat(webpPath);
      const savings = ((1 - newStats.size / fileStats.size) * 100).toFixed(1);

      console.log(
        `  ✓ ${file} (${(fileStats.size / 1024).toFixed(0)}KB) → ${webpName} (${(newStats.size / 1024).toFixed(0)}KB) [${savings}% saved]${needsResize ? ` [resized to ${maxWidth}px]` : ""}`
      );
    } catch (err) {
      console.error(`  ✗ Error processing ${file}:`, err.message);
    }
  }
}

console.log("🖼️  Image Compression Script");
console.log("============================\n");

for (const dir of DIRS) {
  console.log(`Processing /${dir}/...`);
  await processDirectory(dir);
  console.log();
}

console.log("✅ Done! Originals backed up to _backup_* directories.");
console.log("   Update component references to use .webp extensions.");
