const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processDirectory(srcDir, destDir, maxWidth, quality, isSequence = false) {
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }

    const files = fs.readdirSync(srcDir);
    let count = 0;

    for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
            const inputPath = path.join(srcDir, file);
            const outputFilename = path.parse(file).name + '.webp';
            const outputPath = path.join(destDir, outputFilename);

            try {
                await sharp(inputPath)
                    .resize(maxWidth, null, { withoutEnlargement: true })
                    .webp({ quality: quality })
                    .toFile(outputPath);
                
                count++;
                if (count % 10 === 0) console.log(`Processed ${count} images in ${path.basename(srcDir)}...`);
            } catch (error) {
                console.error(`Error processing ${file}:`, error);
            }
        }
    }
    console.log(`Finished processing ${count} images in ${path.basename(srcDir)}`);
}

async function main() {
    console.log('Starting optimization...');

    // 1. Restaurant Images
    // Source matches destination because we want to replace/add to same folder, 
    // but the file extension differs so they co-exist for a moment until we switch code.
    const restaurantDir = path.join(process.cwd(), 'public/images/restaurant');
    await processDirectory(restaurantDir, restaurantDir, 1920, 80);

    // 2. Scroll Sequence (Bucket)
    const sequenceDir = path.join(process.cwd(), 'public/images/bucket/sequence');
    // For scroll sequence, using higher quality as requested by user
    await processDirectory(sequenceDir, sequenceDir, 1920, 90, true); 

    console.log('Optimization complete.');
}

main();
