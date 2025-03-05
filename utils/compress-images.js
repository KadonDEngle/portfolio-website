import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Get the directory name
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define directories
const RAW_IMAGES_DIR = path.join(__dirname, '../raw-images');
const COMPRESSED_IMAGES_DIR = path.join(__dirname, '../src/data/adventure_images');

// Ensure compressed images dir exists
if (!fs.existsSync(COMPRESSED_IMAGES_DIR)) {
    fs.mkdirSync(COMPRESSED_IMAGES_DIR, { recursive: true });
}

// Compress images
const compressImages = async () => {
    const adventures = fs.readdirSync(RAW_IMAGES_DIR);
    for (const adventure of adventures) {
        const adventureDir = path.join(RAW_IMAGES_DIR, adventure);
        const dates = fs.readdirSync(adventureDir);

        for (const date of dates) {
            const dateDir = path.join(adventureDir, date);
            const images = fs.readdirSync(dateDir);

            for (const image of images) {
                const inputPath = path.join(dateDir, image);
                const outputDir = path.join(COMPRESSED_IMAGES_DIR, adventure, date);
                const outputPath = path.join(outputDir, `${path.parse(image).name}.webp`);

                // Ensure output directory exists
                if (!fs.existsSync(outputDir)) {
                    fs.mkdirSync(outputDir, { recursive: true });
                }

                // Compress and convert to WebP
                await sharp(inputPath)
                    .rotate()
                    .resize(1200, 1200, { fit: 'cover' })
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                console.log(`Compressed: ${inputPath} -> ${outputPath}`);
            }
        }
    }

    console.log('Compression complete!');
};

compressImages().catch(err => console.error('Error compressing images:', err));