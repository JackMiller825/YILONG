import { asset, srcSet } from "../../lib/paths";
import { token } from "../../lib/token";
import { PhoneClip } from "./Clip";
import { XIconLink } from "./XLink";

const bannerWebp = srcSet("/brand/banner-768.webp 768w, /brand/banner-1280.webp 1280w, /brand/banner-2172.webp 2172w");
const bannerJpg = srcSet("/brand/banner-768.jpg 768w, /brand/banner-1280.jpg 1280w, /brand/banner-2172.jpg 2172w");
const bannerSizes = "(max-width: 1100px) 94vw, 1040px";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div
        className="hero-bg"
        aria-hidden="true"
        style={{ "--hero-scene": `url('${asset("/assets/scenes/great-wall-sunset.webp")}')` }}
      />
      <p className="hero-seal-top">
        <span className="cn">圣旨</span> By Decree of the Meme Dynasty
      </p>
      <div className="edict">
        <span className="rod rod-top" aria-hidden="true" />
        <div className="edict-silk">
          <div className="banner-frame">
            <picture>
              <source type="image/webp" srcSet={bannerWebp} sizes={bannerSizes} />
              <img
                src={asset("/brand/banner-1280.jpg")}
                srcSet={bannerJpg}
                sizes={bannerSizes}
                width="2172"
                height="724"
                alt="Yi Long Musk banner across the palace, Great Wall, and Shanghai skyline"
              />
            </picture>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">
                Yi Long Musk <span className="ticker">$YILONG</span>
              </h1>
              <p className="tagline">{token.tagline}</p>
              <p className="hero-sub">
                Yi Long Musk brings the “Chinese Elon Musk” meme to crypto, mixing internet humor with unmistakable Chinese style. From the Great Wall to the Shanghai skyline, familiar billionaire energy gets a new face—and a name you won’t forget. Built around laughs, memes, and a shared love of the absurd, Yi Long Musk invites everyone along for the ride. Same ambition. Different accent. Pure meme energy.
              </p>
              <div className="ca-box" data-ca-box="">
                <span className="ca-label">CA</span>
                <code className="ca-value" data-ca-value="">{token.caPlaceholder}</code>
                <button className="ca-copy" type="button" data-ca-copy="" disabled aria-disabled="true" aria-live="polite">Copy</button>
              </div>
              <div className="cta-row">
                <a className="btn btn-gold" data-link-role="buy" href="#" aria-disabled="true" target="_blank" rel="noopener">Buy $YILONG</a>
                <a className="btn btn-red" data-link-role="chart" href="#" aria-disabled="true" target="_blank" rel="noopener">DexTools</a>
                <a className="btn btn-red" data-link-role="gmgn" href="#" aria-disabled="true" target="_blank" rel="noopener">DexScreener</a>
                <XIconLink className="btn btn-ghost"> Official X</XIconLink>
              </div>
            </div>
            <div className="hero-phone">
              <PhoneClip reel="reel1" title="Yi Long Musk clip I" preload="metadata" phoneClass="phone phone-hero" />
            </div>
          </div>
          <span className="vermilion-seal" aria-hidden="true">马斯克</span>
        </div>
        <span className="rod rod-bottom" aria-hidden="true" />
      </div>
    </section>
  );
}
