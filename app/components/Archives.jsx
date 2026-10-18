import { asset } from "../../lib/paths";
import { PhoneClip } from "./Clip";

const REELS = [
  ["reel4", "Yi Long Musk clip IV"],
  ["reel5", "Yi Long Musk clip V"],
  ["reel6", "Yi Long Musk clip VI"],
  ["reel7", "Yi Long Musk clip VII"],
];

export function Archives() {
  return (
    <section className="archives" id="archives" style={{ "--scene": `url('${asset("/assets/scenes/throne-hall.webp")}')` }}>
      <div className="section-head">
        <p className="kicker"><span className="cn">档案</span> Imperial Archives</p>
        <h2>Sealed scrolls of the court</h2>
        <p className="muted">Clips play on their own. Tap the speaker for sound, or tap a clip to open it big.</p>
      </div>
      <div className="phone-wall">
        {REELS.map(([reel, title]) => (
          <PhoneClip key={reel} reel={reel} title={title} />
        ))}
      </div>
    </section>
  );
}
