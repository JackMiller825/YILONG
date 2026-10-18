import { asset } from "../../lib/paths";
import { XIcon } from "./icons";
import { XLink } from "./XLink";

export function SiteHeader() {
  return (
    <header className="nav" id="top">
      <a className="brand" href="#top" aria-label="Yi Long Musk home">
        <img src={asset("/brand/logo-128.png")} alt="" width="44" height="44" />
        <span className="brand-text">Yi Long Musk <em>$YILONG</em></span>
      </a>
      <button className="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false">
        <span /><span /><span />
      </button>
      <nav className="nav-links" aria-label="Main">
        <a href="#edict">The Edict</a>
        <a href="#legend">Legend</a>
        <a href="#portraits">Portraits</a>
        <a href="#archives">Archives</a>
        <a href="#buy">How to Buy</a>
        <XLink className="nav-x" label="Yi Long Musk on X">
          <XIcon />
          <span>Follow</span>
        </XLink>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={asset("/brand/logo-128.png")} alt="" width="40" height="40" />
          <span>Yi Long Musk <em>$YILONG</em></span>
        </div>
        <XLink className="footer-x">
          <XIcon />
          Official X
        </XLink>
        <p className="disclaimer">Parody meme coin. Independent Ethereum project. Not affiliated with the Solana Yi Long Ma token, Yi Long Ma, Elon Musk, Tesla, SpaceX, or X.</p>
        <p className="fineprint">Memecoins are volatile and have no intrinsic value. Nothing here is financial advice. © <span data-year="">2026</span> Yi Long Musk community.</p>
      </div>
    </footer>
  );
}

export function Lightbox() {
  return (
    <div className="lightbox" data-lightbox="" hidden role="dialog" aria-modal="true" aria-label="Media viewer">
      <button className="lb-close" type="button" data-lb-close="" aria-label="Close">×</button>
      <div className="lb-stage" data-lb-stage="" />
    </div>
  );
}
