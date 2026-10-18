# Yi Long Musk / $YILONG

Independent Ethereum parody site. The layout follows the imperial red and gold reference at https://yilongma.live/. It is not affiliated with that Solana token, Yi Long Ma, Elon Musk, Tesla, SpaceX, or X.

Requires Node.js 22 or newer and npm.

## Setup

```bash
npm ci
```

## Development, build, and preview

```bash
npm run dev
npm run build
npm run preview
```

`npm run dev` opens the App Router site at http://localhost:3000.

`npm run build` writes a static export to `out/`. `npm run preview` serves that folder. Do not use `next start` for this export.

GitHub Pages builds the same export with `NEXT_PUBLIC_BASE_PATH=/YILONG`, so the live project site is served from `/YILONG/`. The workflow is `.github/workflows/pages.yml`.

## Launch configuration

Edit `lib/token.js` only:

- `contractAddress` — Ethereum mainnet `0x` address. Leave it empty until you have one. Both contract boxes then show `Coming Soon..`, and copy, buy, chart, and GMGN stay disabled.
- `buyUrl`, `chartUrl`, `gmgnUrl` — optional verified links. When buy or chart is blank and the contract is valid, the site uses Uniswap and DexScreener on Ethereum mainnet.
- `xUrl` and `telegramUrl` — official profiles. Blank social actions stay disabled. No Telegram block is shown.
- `websiteUrl` — canonical HTTPS origin, when you have one.
- `analyticsOrigin` — public origin of the visitor tracker. The live dashboard uses `https://yilong.103.161.35.238.sslip.io`.

Supply is `1,000,000,000`. Tax is `0%`. LP burn and ownership renunciation stay planned until you verify them. Do not mark either as done in `lib/token.js` before that.

## Visitor dashboard

The private dashboard matches the Bye Buy visitor tracker: page views, heartbeats, section changes, CTA clicks, New York time ranges, referrals, campaigns, visit history, IP reveal, CSV export, and password change. People who send Do Not Track or Global Privacy Control are not recorded.

```bash
npm run build
npm run tracker
```

The tracker listens on http://127.0.0.1:4173/ and serves `out/` plus the API. The dashboard is http://127.0.0.1:4173/dashboard/.

The initial password is `NeverSMILE`. It is stored as a hash in `data/` on first launch. `data/` is not committed. Change it from the dashboard after signing in.

`npm run tracker:test` runs the tracker tests.

The public tracker for GitHub Pages is `https://yilong.103.161.35.238.sslip.io`. It accepts requests from `https://jackmiller825.github.io`. `C:\Users\Administrator\tools\caddy\start-yilong.ps1` starts the local process and reloads the HTTPS proxy.

## Brand files

Navigation, closing, and footer use the circular logo. The hero uses the wide banner inside the original frame. Original story portraits and videos stay in place.

- Masters: `public/brand-originals/`
- Logo, banner, mascot, and Telegram banner used by the site: `public/brand/`

## Still needs your input

- Ethereum contract address
- Official X URL
- Telegram URL, if you want it stored for later
- Verified buy, chart, or GMGN URLs if they should differ from the defaults
- Canonical website URL
- Confirmation before LP burn or ownership renunciation is shown as complete
