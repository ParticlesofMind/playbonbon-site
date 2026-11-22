# playbonbon.com

The public BonBon Studios website: home (games, news, how we work), privacy policy (`/privacy/`) and support (`/support/`). Plain static HTML served by GitHub Pages from `main`; `CNAME` sets the custom domain.

Every store listing links to `https://playbonbon.com/privacy/` and `https://playbonbon.com/support/`. When a game adds a new kind of data (a new SDK, accounts, analytics fields), update the privacy policy in the same change and bump its effective date. Nothing private goes in this repo.

- `img/games/`: real screenshots. Scrub Rush and Run Luke, Run! come from their App Store screenshots (`games/<slug>/store/ios/screenshots` on each game branch); Gutspin, Stomp Street and Fear Frame are frames captured from their builds through `window.__game.moments`. WebP, about 1200 px wide (landscape) or 600 px (portrait).
- `img/lollipop.svg`, `favicon.svg`: the studio lollipop (the spiral Ben picked on Nov 15), drawn from `games/run-luke-run/src/studio-intro/marks.ts`.
- `fonts/`: Nunito, self-hosted (SIL Open Font License), so the site loads nothing from third parties and the privacy policy's "no cookies, analytics or trackers" stays true.
- News lives in `index.html` (`#news`), newest first.
