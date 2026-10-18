export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(urlPath) {
  if (!urlPath) return urlPath;
  if (/^(https?:|data:|#)/.test(urlPath)) return urlPath;
  const normalized = urlPath.startsWith("/") ? urlPath : `/${urlPath}`;
  return `${basePath}${normalized}`;
}

export function srcSet(value) {
  return value
    .split(",")
    .map((part) => {
      const bits = part.trim().split(/\s+/);
      bits[0] = asset(bits[0]);
      return bits.join(" ");
    })
    .join(", ");
}
