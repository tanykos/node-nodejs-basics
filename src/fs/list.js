import { readdir, stat } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const path = `${__dirname}/files`;

  const check = await stat(path).catch(() => { throw new Error('FS operation failed'); });
  if (!check.isDirectory()) throw new Error('FS operation failed');

  const files = await readdir(path);
  console.log(files);
};

await list();
