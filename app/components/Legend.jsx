import { asset } from "../../lib/paths";
import { PhoneClip } from "./Clip";
import { FeaturePhoto } from "./Photo";
import { XLink } from "./XLink";

export function Legend() {
  return (
    <section className="scroll-section" id="legend" style={{ "--scene": `url('${asset("/assets/scenes/palace-lanterns.webp")}')` }}>
      <div className="silk-scroll wide" data-unroll="">
        <span className="rod" aria-hidden="true" />
        <div className="silk-body">
          <p className="kicker"><span className="cn">传</span> The Legend of the Doppelgänger</p>
          <h2>Two faces. One meme.</h2>
          <div className="alt-row">
            <FeaturePhoto id="05" alt="Yi Long Musk with arms crossed beside a silver truck under the Shanghai skyline" />
            <div className="alt-text">
              <h3>Night falls on the Bund</h3>
              <p>They say every legend has a twin. This one strikes a pose under neon skyscrapers, arms crossed, looking exactly like someone you&apos;ve definitely seen before.</p>
            </div>
          </div>
          <div className="alt-row reverse">
            <PhoneClip reel="reel2" title="Yi Long Musk clip II" />
            <div className="alt-text">
              <h3>The likeness speaks</h3>
              <p>Lookalike culture is an art form. The court keeps the clips rolling and the memes flowing, all in the spirit of parody.</p>
            </div>
          </div>
          <div className="alt-row">
            <FeaturePhoto id="04" alt="Yi Long Musk waving from a red convertible on the Great Wall at sunset" />
            <div className="alt-text">
              <h3>Joyride on the Wall</h3>
              <p>Golden hour, red paint and a mountain range of bricks. Yi Long Musk takes the scenic route, because a dynasty is built one meme at a time.</p>
            </div>
          </div>
          <div className="alt-row reverse">
            <PhoneClip reel="reel3" title="Yi Long Musk clip III" />
            <div className="alt-text">
              <h3>The people&apos;s lookalike</h3>
              <p>A playful nod, a wink across the internet, and a banner for anyone who&apos;s ever been told they look like someone famous.</p>
              <XLink className="btn btn-ghost">Join the court on X</XLink>
            </div>
          </div>
        </div>
        <span className="rod" aria-hidden="true" />
      </div>
    </section>
  );
}
