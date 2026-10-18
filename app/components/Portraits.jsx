import { asset } from "../../lib/paths";
import { Polaroid } from "./Photo";

const PORTRAITS = [
  ["01", "polaroid big", "-3deg", "Suited up for launch"],
  ["02", "polaroid", "2deg", "Gull-wing greetings"],
  ["03", "polaroid", "-1.5deg", "Command center selfie"],
  ["04", "polaroid", "3deg", "Joyride on the Great Wall"],
  ["05", "polaroid big-lg", "-2deg", "Shanghai nights"],
  ["06", "polaroid", "1.5deg", "Tunnel vision"],
  ["07", "polaroid big", "-2.5deg", "Liftoff, thumbs up"],
  ["08", "polaroid", "2.5deg", "Sunset at the launch tower"],
  ["09", "polaroid", "-1deg", "Robot buddy"],
  ["10", "polaroid big", "3deg", "Semi serious"],
  ["11", "polaroid", "-3deg", "Red ride, golden hour"],
  ["12", "polaroid", "1deg", "A dish with a view"],
];

export function Portraits() {
  return (
    <section className="portrait-hall" id="portraits" style={{ "--scene": `url('${asset("/assets/scenes/sky-lanterns.webp")}')` }}>
      <div className="section-head">
        <p className="kicker"><span className="cn">画像</span> The Portrait Hall</p>
        <h2>Portraits of the doppelgänger</h2>
        <p className="muted">Pinned to the palace walls. Tap any portrait to view it large.</p>
      </div>
      <div className="polaroid-wall" data-polaroids="">
        {PORTRAITS.map(([id, figureClass, rot, caption]) => (
          <Polaroid key={id} id={id} figureClass={figureClass} rot={rot} caption={caption} />
        ))}
      </div>
    </section>
  );
}
