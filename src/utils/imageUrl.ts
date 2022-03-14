export default function imageUrl(url: string) {
  return new URL(url, import.meta.url).href;
}
