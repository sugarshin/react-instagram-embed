const { INSTAGRAM_ACCESS_TOKEN } = process.env;

if (!INSTAGRAM_ACCESS_TOKEN) {
  throw new Error('INSTAGRAM_ACCESS_TOKEN must be required');
}

export default {
  INSTAGRAM_ACCESS_TOKEN
};
