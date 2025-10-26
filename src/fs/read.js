import { readFile, stat } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const path = `${__dirname}/files/fileToRead.txt`;

  const check = await stat(path).catch(() => { throw new Error('FS operation failed'); });
  if (!check.isFile()) throw new Error('FS operation failed');

  const content = await readFile(path, 'utf-8');
  console.log(content);
};

await read();
