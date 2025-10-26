export const parseEnv = () => {
  const entries = Object.entries(process.env);
  const rssVars = entries
    .filter(([key]) => key.startsWith('RSS_'))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  console.log(rssVars);
};

parseEnv();
