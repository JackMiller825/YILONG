const HOSTED_API = "https://yilong.103.161.35.238.sslip.io";

export function apiOrigin() {
  if (typeof location === "undefined") return "";
  const host = location.hostname.toLowerCase();
  if (host === "localhost" || host === "127.0.0.1") return "";
  if (host === "jackmiller825.github.io" || host === "yilong.103.161.35.238.sslip.io") return host.endsWith("sslip.io") ? "" : HOSTED_API;
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
