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
- 37 official-order FRUS Assist links for every volume listed as Being Researched on history.state.gov as of June 1, 2026
- direct links to each volume's research dataset and gap register
- 23 companion workbench links for richer existing research pages, including the public Clinton NATO expansion document package
- Research and compilation tools: Strobe Talbott FOIA Manifest, NARA Scout, the searchable October 30, 2026 State FOIA release index, and the George H. W. Bush Presidential Daily File catalog
- A Citation Notes navigation link for the Clinton and Bush 41 finding-aid helpers; their folder/series matches are leads, not document-level citations

Each volume card uses the actual history.state.gov title and links to:

- the generated GitHub Pages assist site
- the volume research dataset
- the volume gap register
- the generated GitHub repository
- the official history.state.gov volume page

Some cards also include companion workbench links for richer existing research pages.

## Status Sync

Run the drift check locally with:

```sh
node scripts/check-status.mjs
```
