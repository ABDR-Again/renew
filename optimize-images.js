const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'assets', 'images');
const outputDir = path.join(__dirname, 'assets', 'optimize');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Error reading input directory:', err);
    return;
  }

  files.forEach(file => {
    // Process only typical image files
    if (!/\.(jpg|jpeg|png|webp|avif)$/i.test(file)) {
      return;
    }

    const inputPath = path.join(inputDir, file);
    const outputFilename = path.parse(file).name.replace(/\s+/g, '_') + '.webp';
    const outputPath = path.join(outputDir, outputFilename);

    // Goal: Convert to WebP and ensure size is under 50KB.
    // We achieve this via aggressive compression and resizing if needed.
    sharp(inputPath)
      .resize({ width: 1200, withoutEnlargement: true }) // reasonable max width
      .webp({ quality: 60, effort: 6 }) // lower quality to keep size small
      .toFile(outputPath)
      .then(info => {
        console.log(`Optimized ${file} -> ${outputFilename} (Size: ${(info.size / 1024).toFixed(2)} KB)`);
        
        // If still over 50KB, user might need to adjust settings or it's a very complex image
        if (info.size > 50 * 1024) {
          console.warn(`Warning: ${outputFilename} is still over 50KB (${(info.size / 1024).toFixed(2)} KB)`);
        }
      })
      .catch(err => {
        console.error(`Error optimizing ${file}:`, err);
      });
  });
});
