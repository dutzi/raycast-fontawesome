import { createWriteStream } from 'fs';
import fs from 'fs/promises';
import tar from 'tar';
import { folders, repoPath } from './consts.mjs';

async function main() {
  for (const folder of folders) {
    console.log(`Creating tar for ${folder}...`);

    const pngsPath = `./assets/pngs-compressed/${folder}`;

    const filenames = await fs.readdir(pngsPath);

    tar.c({ gzip: false, cwd: pngsPath }, filenames).pipe(createWriteStream(`${repoPath}/assets/tars/${folder}.tar`));
  }
}

main();
