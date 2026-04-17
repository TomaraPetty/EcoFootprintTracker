import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  timeout: 10000,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

apiClient.interceptors.request.use((config) => {
  const requestUrl = config?.url || '';

  // Block accidental token leakage to external origins.
  if (/^https?:\/\//i.test(requestUrl)) {
    const parsedUrl = new URL(requestUrl, window.location.origin);

    if (parsedUrl.origin !== window.location.origin) {
      throw new Error(`Blocked cross-origin API request: ${parsedUrl.origin}`);
    }
  }

  return config;
});

export default apiClient;
