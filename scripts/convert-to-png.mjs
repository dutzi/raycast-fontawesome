import { mkdirSync } from 'fs';
import svgToPng from 'svg-to-png';
import { folders } from './consts.mjs';

async function main() {
  for (const folder of folders) {
    const pngsPath = `/Users/dutzi/projects/raycast/font-awesome/pngs/${folder}`;
    mkdirSync(pngsPath, { recursive: true });
    console.log(`Converting ${folder}...`);
    await svgToPng.convert(`/Users/dutzi/projects/raycast/font-awesome/svgs/${folder}`, pngsPath, { color: 'white' });
  }
}

main();
