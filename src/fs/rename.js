import { rename as rn, stat } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const oldPath = `${__dirname}/files/wrongFilename.txt`;
  const newPath = `${__dirname}/files/properFilename.md`;

  try {
    await stat(oldPath);
    await rn(oldPath, newPath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
