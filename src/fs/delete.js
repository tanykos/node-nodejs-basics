import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { stat, rm } from 'fs/promises';

const remove = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const path = `${__dirname}/files/fileToRemove.txt`;

  try {
    const exists = await stat(path).then(s => s.isFile()).catch(() => false);
    if (!exists) throw new Error('FS operation failed');

    await rm(path);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();
