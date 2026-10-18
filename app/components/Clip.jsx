import { asset } from "../../lib/paths";

export function Clip({ reel, title, preload = "none", className = "clip", hint = true }) {
  return (
    <div className={className} data-clip="" data-title={title}>
      <video autoPlay muted loop playsInline preload={preload} poster={asset(`/assets/video/${reel}.jpg`)} aria-label={title}>
        <source src={asset(`/assets/video/${reel}.mp4`)} type="video/mp4" />
      </video>
      <button className="clip-sound" type="button" data-sound="" aria-label={`Unmute ${title}`} aria-pressed="false" />
      {hint ? <span className="clip-hint" aria-hidden="true">Tap for sound ⤢</span> : null}
    </div>
  );
}

export function PhoneClip({ reel, title, preload = "none", phoneClass = "phone" }) {
  return (
    <div className={phoneClass}>
      <Clip reel={reel} title={title} preload={preload} />
    </div>
  );
}
