import { mkdirSync } from 'fs';
import fs from 'fs/promises';
import sharp from 'sharp';
import { folders, repoPath } from './consts.mjs';

async function main() {
  for (const folder of folders) {
    console.log(`Creating tar for ${folder}...`);

    const pngsPath = `${repoPath}/assets/pngs/${folder}`;
    const outputPath = `${repoPath}/assets/pngs-compressed/${folder}`;

    mkdirSync(outputPath);
    const filenames = await fs.readdir(pngsPath);

    let count = 0;
    for (const filename of filenames) {
      console.log(`Converting ${filename} (${++count}/${filenames.length})...`);

      await sharp(`${pngsPath}/${filename}`)
        .resize(150)
        .png({ compressionLevel: 9 })
        .toFile(`${outputPath}/${filename}`);
    }
  }
}

main();
