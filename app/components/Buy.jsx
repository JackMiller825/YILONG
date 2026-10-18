import { asset } from "../../lib/paths";
import { token } from "../../lib/token";
import { FeaturePhoto } from "./Photo";
import { XLink } from "./XLink";

export function Buy() {
  return (
    <section className="scroll-section" id="buy" style={{ "--scene": `url('${asset("/assets/scenes/coins-envelopes.webp")}')` }}>
      <div className="silk-scroll wide" data-unroll="">
        <span className="rod" aria-hidden="true" />
        <div className="silk-body">
          <p className="kicker"><span className="cn">购</span> How to Buy</p>
          <h2>Enter the palace in three steps</h2>
          <div className="split buy-split">
            <ol className="steps">
              <li>
                <span className="lantern-num">1</span>
                <div>
                  <h3>Get an Ethereum wallet</h3>
                  <p>Set up an Ethereum-compatible wallet, such as MetaMask or Rabby. Keep your recovery phrase secret.</p>
                </div>
              </li>
              <li>
                <span className="lantern-num">2</span>
                <div>
                  <h3>Fund it with ETH</h3>
                  <p>Fund it with ETH on Ethereum mainnet and retain ETH for gas.</p>
                </div>
              </li>
              <li>
                <span className="lantern-num">3</span>
                <div>
                  <h3>Swap for $YILONG</h3>
                  <p>Open the verified swap link, confirm the network and official contract, and review the transaction before swapping.</p>
                </div>
              </li>
            </ol>
            <FeaturePhoto id="03" figureClass="feature-photo tilt-l" alt="Yi Long Musk pointing at the camera in front of glowing screens" />
          </div>
          <div className="ca-box" data-ca-box="">
            <span className="ca-label">CA</span>
            <code className="ca-value" data-ca-value="">{token.caPlaceholder}</code>
            <button className="ca-copy" type="button" data-ca-copy="" disabled aria-disabled="true" aria-live="polite">Copy</button>
          </div>
          <div className="cta-row">
            <a className="btn btn-gold" data-link-role="buy" href="#" aria-disabled="true" target="_blank" rel="noopener">Buy on Uniswap</a>
            <a className="btn btn-red" data-link-role="chart" href="#" aria-disabled="true" target="_blank" rel="noopener">DexTools</a>
            <a className="btn btn-red" data-link-role="gmgn" href="#" aria-disabled="true" target="_blank" rel="noopener">Dexscreener</a>
          </div>
          <p className="fineprint">
            Only trust the contract address posted here and on <XLink>Official X</XLink>.
          </p>
        </div>
        <span className="rod" aria-hidden="true" />
      </div>
    </section>
  );
}
