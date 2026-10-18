export function apiOrigin() {
  if (typeof location === "undefined") return "";
  const host = location.hostname.toLowerCase();
  if (host === "localhost" || host === "127.0.0.1") return "";
  try {
    const config = JSON.parse(document.body?.dataset?.tokenConfig || "{}");
    return String(config.analyticsOrigin || "").replace(/\/$/, "");
  } catch {
    return "";
  }
}

export function apiUrl(path) {
  return `${apiOrigin()}${path}`;
}
