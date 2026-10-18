import { asset } from "../../lib/paths";
import { FeaturePhoto } from "./Photo";

export function Edict() {
  return (
    <section className="scroll-section" id="edict" style={{ "--scene": `url('${asset("/assets/scenes/great-wall-sunset.webp")}')` }}>
      <div className="silk-scroll wide" data-unroll="">
        <span className="rod" aria-hidden="true" />
        <div className="silk-body">
          <div className="split">
            <div className="split-text">
              <p className="kicker"><span className="cn">诏</span> The Imperial Edict</p>
              <h2>Hear ye, hear ye, degens of the realm</h2>
              <p>Somewhere beyond the Great Wall, a face appeared that looked <em>suspiciously</em> familiar. The people looked once. They looked twice. Then they made memes.</p>
              <p>Yi Long Musk brings the “Chinese Elon Musk” meme to crypto, mixing internet humor with unmistakable Chinese style. From the Great Wall to the Shanghai skyline, familiar billionaire energy gets a new face—and a name you won’t forget. Built around laughs, memes, and a shared love of the absurd, Yi Long Musk invites everyone along for the ride. Same ambition. Different accent. Pure meme energy.</p>
            </div>
            <FeaturePhoto id="01" figureClass="feature-photo tilt-r" alt="Yi Long Musk in a white spacesuit giving a thumbs up" />
          </div>
          <div className="decree-grid">
            <div className="decree"><span className="num">壹</span><h3>Parody</h3><p>All in good fun. A tribute to lookalike culture, not a claim about anyone.</p></div>
            <div className="decree"><span className="num">贰</span><h3>Community</h3><p>The court is the community. Memes, raids and lanterns, by the people.</p></div>
            <div className="decree"><span className="num">叁</span><h3>On Ethereum</h3><p>An independent Ethereum parody. Same face. Different gas fees.</p></div>
          </div>
        </div>
        <span className="rod" aria-hidden="true" />
      </div>
    </section>
  );
}
