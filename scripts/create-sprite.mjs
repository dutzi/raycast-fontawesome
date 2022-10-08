import { writeFileSync } from 'fs';
import fs from 'fs/promises';
import Spritesmith from 'spritesmith';
import { promisify } from 'util';
import { folders, repoPath } from './consts.mjs';

const run = promisify(Spritesmith.run);
async function main() {
  for (const folder of folders) {
    console.log(`Creating sprite for ${folder}...`);
    const pngsPath = `${repoPath}/assets/pngs/${folder}`;

    const filenames = await fs.readdir(pngsPath);
    const filepaths = filenames.map((filename) => `${pngsPath}/${filename}`).slice(0, 100);

    const result = await run({ src: filepaths });

    writeFileSync(`./assets/sprites/${folder}.png`, result.image);
    console.log(result);
    writeFileSync(`./assets/sprites/${folder}.coords`, result.coordinates);
    writeFileSync(`./assets/sprites/${folder}.props`, result.properties);
  }
}

main();
