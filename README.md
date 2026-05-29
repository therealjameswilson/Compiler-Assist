# Compiler Assist

Compiler Assist is the main directory for FRUS Assist pages and compiler research workspaces.

Published target:

<https://therealjameswilson.github.io/Compiler-Assist/>

## Contents

- `index.html`: static directory page with search and era filters
- `assets/compiler-assist-hero.png`: generated hero image asset
- `data/being-researched.json`: checked snapshot of the official Being Researched list
- `scripts/check-status.mjs`: compares the checked snapshot against history.state.gov
- `.github/workflows/status-check.yml`: scheduled drift check for the status snapshot
- 37 official-order FRUS Assist links for every volume listed as Being Researched on history.state.gov as of May 29, 2026
- Research-support links for the Strobe Talbott FOIA Manifest and NARA Scout

Each volume card uses the actual history.state.gov title and links to:

- the generated GitHub Pages assist site
- the generated GitHub repository
- the official history.state.gov volume page

Some cards also include companion workbench links for richer existing research pages.

## Status Sync

Run the drift check locally with:

```sh
node scripts/check-status.mjs
```
