import { capitalCase } from 'change-case';
import fs from 'fs/promises';
import { folders } from './consts.mjs';

async function main() {
  const icons = [];
  for (const folder of folders) {
    const pngsPath = `/Users/dutzi/projects/raycast/font-awesome/pngs/${folder}`;
    const files = await fs.readdir(pngsPath);
    icons.push({
      folder: folder,
      icons: files.map((filename) => ({ filename, label: capitalCase(filename.slice(0, -4)) })),
    });
  }
  fs.writeFile('./src/icons.json', JSON.stringify(icons, null, 2));
}

main();
