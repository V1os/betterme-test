// Core
import { getFullApiUrl } from 'instruments';

const url = 'https://api.github.com/search/repositories';
const api = getFullApiUrl(url);

export { api, url };
