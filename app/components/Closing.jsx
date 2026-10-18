import { asset } from "../../lib/paths";
import { Clip } from "./Clip";
import { XLink } from "./XLink";

export function Closing() {
  return (
    <section className="closing" id="closing">
      <Clip reel="reel8" title="Yi Long Musk clip VIII" className="closing-video clip" hint={false} />
      <div className="closing-inner">
        <img className="closing-logo" src={asset("/brand/logo-256.png")} alt="Yi Long Musk logo" width="160" height="160" />
        <h2>The dynasty is memeing</h2>
        <p>Light a lantern, follow the court, and spread the likeness.</p>
        <XLink className="btn btn-gold">Follow on X</XLink>
      </div>
    </section>
  );
}
