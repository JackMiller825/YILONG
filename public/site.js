(() => {
if (window.__yilongInitialized) return;
window.__yilongInitialized = true;
document.documentElement.classList.add("js");
const CONFIG = JSON.parse(document.body.dataset.tokenConfig || "{}");
const BASE = CONFIG.basePath || "";
const CONTRACT_ADDRESS = /^0x[0-9a-fA-F]{40}$/.test(CONFIG.contractAddress || "") ? CONFIG.contractAddress : "";
const PLACEHOLDER = CONFIG.caPlaceholder || "Coming Soon..";
const LINKS = {
 buy: ca => CONFIG.buyUrl || `https://app.uniswap.org/swap?chain=mainnet&outputCurrency=${ca}`,
 chart: ca => CONFIG.chartUrl || `https://dexscreener.com/ethereum/${ca}`,
 gmgn: () => CONFIG.gmgnUrl || "",
 x: () => CONFIG.xUrl || "",
};
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

function initContract() {
  const ca = (CONTRACT_ADDRESS || "").trim();
  const live = ca.length > 0;

  $$("[data-link-role]").forEach((a) => {
    const role = a.dataset.linkRole;
    const href = live && LINKS[role] ? LINKS[role](ca) : (role === "x" ? LINKS.x() : "");
    if (href) {
      a.href = href;
      a.target = "_blank";
      a.rel = "noopener";
      a.removeAttribute("aria-disabled");
      a.removeAttribute("tabindex");
    } else {
      a.removeAttribute("href");
      a.removeAttribute("target");
      a.setAttribute("aria-disabled", "true");
      a.setAttribute("tabindex", "-1");
      a.addEventListener("click", (e) => e.preventDefault());
    }
  });

  $$("[data-ca-box]").forEach((box) => {
    const val = $("[data-ca-value]", box);
    const btn = $("[data-ca-copy]", box);
    if (!live) {
      val.textContent = PLACEHOLDER;
      btn.disabled = true;
      btn.setAttribute("aria-disabled", "true");
      return;
    }
    val.textContent = ca;
    val.title = ca;
    btn.disabled = false;
    btn.removeAttribute("aria-disabled");
    btn.addEventListener("click", async () => {
      let copied = false;
      try {
        await navigator.clipboard.writeText(ca);
        copied = true;
      } catch {
        const t = document.createElement("textarea");
        t.value = ca;
        document.body.appendChild(t);
        t.select();
        try { copied = document.execCommand("copy"); } catch { copied = false; }
        t.remove();
      }
      btn.textContent = copied ? "Copied!" : "Copy failed";
      setTimeout(() => (btn.textContent = "Copy"), 1600);
    });
  });
}

const lb = $("[data-lightbox]");
const lbStage = $("[data-lb-stage]");
let lastFocus = null;
const pageParts = () => $$("header, main, footer");
function lockScroll(on) {
  document.documentElement.style.overflow = on ? "hidden" : "";
  document.body.style.overflow = on ? "hidden" : "";
}
function setInert(on) {
  pageParts().forEach((el) => {
    if (on) el.setAttribute("inert", "");
    else el.removeAttribute("inert");
  });
}
function openLightbox(node) {
  lastFocus = document.activeElement;
  $$("[data-clip] video").forEach((v) => v.pause());
  lbStage.replaceChildren(node);
  lb.hidden = false;
  lockScroll(true);
  setInert(true);
  $("[data-lb-close]").focus();
}
function closeLightbox() {
  const v = $("video", lbStage);
  if (v) { v.pause(); v.removeAttribute("src"); v.load(); }
  lbStage.replaceChildren();
  lb.hidden = true;
  lockScroll(false);
  setInert(false);
  resumeVisible();
  if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
}
$("[data-lb-close]").addEventListener("click", closeLightbox);
lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lb.hidden) closeLightbox(); });

const visible = new Set();
function tryPlay(v) {
  v.muted = v.dataset.unmuted === "1" ? false : true;
  const p = v.play();
  if (p && p.catch) p.catch(() => { v.muted = true; v.dataset.unmuted = ""; syncSound(v); v.play().catch(() => {}); });
}
function resumeVisible() { if (lb.hidden) visible.forEach(tryPlay); }
function syncSound(v) {
  const btn = $("[data-sound]", v.closest("[data-clip]"));
  if (!btn) return;
  const on = !v.muted;
  btn.classList.toggle("on", on);
  btn.setAttribute("aria-pressed", String(on));
  btn.setAttribute("aria-label", (on ? "Mute " : "Unmute ") + v.getAttribute("aria-label"));
  btn.innerHTML = on ? SOUND_ON : SOUND_OFF;
}
const SOUND_OFF = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.6 3 2.7-2.7-1.4-1.4-2.7 2.7-2.7-2.7-1.4 1.4 2.7 2.7-2.7 2.7 1.4 1.4 2.7-2.7 2.7 2.7 1.4-1.4z"/></svg>';
const SOUND_ON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg>';

function initClips() {
  const clips = $$("[data-clip]");
  const videos = clips.map((c) => $("video", c));
  videos.forEach((v) => {
    v.muted = true; v.defaultMuted = true; v.loop = true; v.playsInline = true; v.autoplay = true;
    v.setAttribute("muted", ""); v.setAttribute("playsinline", ""); v.setAttribute("webkit-playsinline", "");
    syncSound(v);
  });
  clips.forEach((c) => {
    const v = $("video", c);
    const btn = $("[data-sound]", c);
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const turnOn = v.muted;
        videos.forEach((o) => { if (o !== v && !o.muted) { o.muted = true; o.dataset.unmuted = ""; syncSound(o); } });
        v.muted = !turnOn; v.dataset.unmuted = turnOn ? "1" : "";
        if (v.paused) tryPlay(v);
        syncSound(v);
      });
      btn.addEventListener("keydown", (e) => e.stopPropagation());
    }
    c.addEventListener("click", (e) => {
      if (e.target.closest("[data-sound]")) return;
      const src = $("source", v).getAttribute("src");
      const big = document.createElement("video");
      big.src = src; big.poster = v.poster; big.controls = true; big.loop = true;
      big.playsInline = true; big.setAttribute("playsinline", "");
      openLightbox(big);
      big.muted = false;
      big.play().catch(() => { big.muted = true; big.play().catch(() => {}); });
    });
    c.setAttribute("role", "button");
    c.setAttribute("tabindex", "0");
    c.addEventListener("keydown", (e) => {
      if (e.target !== c) return;
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); c.click(); }
    });
  });

  if (!("IntersectionObserver" in window)) { videos.forEach(tryPlay); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      const v = en.target;
      if (en.isIntersecting) { visible.add(v); if (lb.hidden) tryPlay(v); }
      else { visible.delete(v); v.pause(); }
    });
  }, { threshold: 0.2, rootMargin: "120px 0px" });
  videos.forEach((v) => io.observe(v));
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) videos.forEach((v) => v.pause()); else resumeVisible();
  });
}

function photoLightbox(id, cap) {
  const img = new Image();
  img.src = `${BASE}/assets/photos/ylm${id}.webp`;
  img.alt = cap;
  openLightbox(img);
}
function initPhotos() {
  $$("[data-photo]").forEach((b) => {
    b.addEventListener("click", () => photoLightbox(b.dataset.photo, $("img", b).alt));
  });
}

function initUnroll() {
  const els = $$("[data-unroll]");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    els.forEach((e) => e.classList.add("open"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("open"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach((e) => io.observe(e));
}

function initNav() {
  const t = $(".nav-toggle");
  const links = $(".nav-links");
  const setOpen = (open) => {
    links.classList.toggle("open", open);
    t.setAttribute("aria-expanded", String(open));
    t.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  t.addEventListener("click", () => setOpen(!links.classList.contains("open")));
  $$("a", links).forEach((a) => a.addEventListener("click", () => setOpen(false)));
}

function trackingRefused() {
  const nav = navigator;
  if (nav.globalPrivacyControl) return true;
  const dnt = nav.doNotTrack || window.doNotTrack;
  return dnt === "1" || dnt === "yes";
}
function analyticsEndpoint(route) {
  const configured = (CONFIG.analyticsOrigin || "").replace(/\/$/, "");
  const host = location.hostname;
  if (configured) return configured + route;
  if (host === "localhost" || host === "127.0.0.1") return route;
  return "";
}
function isDashboard() {
  const path = location.pathname.replace(/\/+$/, "");
  return path.endsWith("/dashboard");
}
function startAnalytics() {
  if (isDashboard() || trackingRefused() || !analyticsEndpoint("/api/analytics/collect")) return;
  let section = (location.hash || "#top").replace("#", "") || "top";
  const utm = new URLSearchParams(location.search);
  function payload(type, eventId, click) {
    return {
      type,
      eventId,
      path: `${location.pathname}${location.search}`,
      section,
      referrer: document.referrer,
      click,
      utmSource: utm.get("utm_source") || undefined,
      utmMedium: utm.get("utm_medium") || undefined,
      utmCampaign: utm.get("utm_campaign") || undefined,
    };
  }
  function post(route, body) {
    const url = analyticsEndpoint(route);
    if (!url) return Promise.resolve(false);
    return fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify(body),
      credentials: CONFIG.analyticsOrigin ? "include" : "same-origin",
      cache: "no-store",
      keepalive: true,
    }).then((response) => response.ok).catch(() => false);
  }
  const pageEventId = crypto.randomUUID();
  post("/api/analytics/collect", payload("pageview", pageEventId)).then((ok) => {
    if (!ok) post("/api/analytics/collect", payload("pageview", pageEventId));
  });
  let heartbeatId = crypto.randomUUID();
  let timer = 0;
  const beat = () => {
    if (document.visibilityState !== "visible") return;
    const id = heartbeatId;
    post("/api/analytics/heartbeat", payload("heartbeat", id)).then((ok) => {
      if (ok) heartbeatId = crypto.randomUUID();
    });
  };
  const arm = () => {
    window.clearInterval(timer);
    if (document.visibilityState !== "visible") return;
    timer = window.setInterval(beat, 30000);
  };
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") { beat(); arm(); }
    else window.clearInterval(timer);
  });
  if (document.visibilityState === "visible") arm();
  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-link-role]");
    if (!link || link.getAttribute("aria-disabled") === "true") return;
    post("/api/analytics/collect", payload("click", crypto.randomUUID(), link.dataset.linkRole));
  });
  const sections = $$("header[id], main section[id]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      const visibleSections = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      const next = visibleSections[0]?.target?.id;
      if (!next || next === section) return;
      section = next;
      post("/api/analytics/collect", payload("section", crypto.randomUUID()));
    }, { threshold: [0.35] });
    sections.forEach((el) => io.observe(el));
  }
}

document.addEventListener("keydown", (e) => {
 if (e.key !== "Tab" || lb.hidden) return;
 const focusable = $$('button, video[controls], a[href], [tabindex="0"]', lb).filter((el) => !el.hasAttribute("disabled"));
 if (!focusable.length) return;
 const first = focusable[0];
 const last = focusable[focusable.length - 1];
 if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
 else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

initContract();
initClips();
initPhotos();
initUnroll();
initNav();
startAnalytics();
$$("[data-year]").forEach((e) => (e.textContent = new Date().getFullYear()));
})();
