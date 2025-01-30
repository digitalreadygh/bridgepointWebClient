export function getStrapiMedia(url) {
  if (!url) {
    throw new Error('URL is required');
  }
  const config = useRuntimeConfig()
  const baseUrl = config.GQL_HOST || 'http://127.0.0.1:1337';
  if (url.startsWith("/")) {
    return `${baseUrl}${url}`;
  }
  return `${baseUrl}/${url}`;
}