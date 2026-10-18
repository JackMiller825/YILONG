import { asset } from "../../lib/paths";

export function FeaturePhoto({ id, alt, figureClass = "feature-photo" }) {
  const file = String(id).padStart(2, "0");
  return (
    <figure className={figureClass}>
      <button type="button" className="photo-btn" data-photo={file} aria-label={`View: ${alt}`}>
        <picture>
          <source srcSet={asset(`/assets/photos/ylm${file}.webp`)} type="image/webp" />
          <img src={asset(`/assets/photos/ylm${file}.jpg`)} alt={alt} loading="lazy" width="900" height="900" />
        </picture>
      </button>
    </figure>
  );
}

export function Polaroid({ id, caption, rot, figureClass = "polaroid" }) {
  const file = String(id).padStart(2, "0");
  return (
    <figure className={figureClass} style={{ "--rot": rot }}>
      <button type="button" className="photo-btn" data-photo={file} aria-label={`View: ${caption}`}>
        <span className="pin" aria-hidden="true" />
        <span className="ph">
          <picture>
            <source srcSet={asset(`/assets/photos/ylm${file}.webp`)} type="image/webp" />
            <img src={asset(`/assets/photos/ylm${file}.jpg`)} alt={caption} loading="lazy" width="900" height="900" />
          </picture>
        </span>
        <figcaption>{caption}</figcaption>
      </button>
    </figure>
  );
}
