# FRUS 1993-2000 Volume XXXII Compiler Workspace

This repository contains a static compiler-facing workspace for
`Foreign Relations of the United States, 1993-2000, Volume XXXII, Central America`.

The Office of the Historian currently lists the volume as `Being Researched`:

https://history.state.gov/historicaldocuments/frus1993-00v32

## Files

- `index.html` - GitHub Pages-ready page shell.
- `styles.css` - responsive page styling.
- `app.js` - data and rendering for the declassified chronology, official anchors, country lanes, source families, and queue filters.
- `assets/central-america-research-map.svg` - local visual asset for the workspace header.

## Clinton Library Finding-Aid Inputs

The onsite research section incorporates OCR/text extraction from these local finding-aid PDFs:

- `/Users/jameswilson/Library/Mobile Documents/com~apple~CloudDocs/2013-0185-M_Part1.pdf`
- `/Users/jameswilson/Library/Mobile Documents/com~apple~CloudDocs/2013-0185-M_Part2.pdf`
- `/Users/jameswilson/Library/Mobile Documents/com~apple~CloudDocs/2013-0185-M_Part3.pdf`
- `/Users/jameswilson/Library/Mobile Documents/com~apple~CloudDocs/2013-0185-M_Part4.pdf`

The PDFs are not committed to this repository. The page keeps only a compact research plan,
call-slip batches, and high-yield folder-title clusters derived from those finding aids.

The displayed source-note stems follow the FRUS order: repository, record collection,
office or series, OA/ID locator, folder title, then a short editorial verification note.

## Declassified Chronology Input

The first section of the page uses the Presidential Daily Diary records surfaced through the National Archives Catalog search:

https://catalog.archives.gov/search?q=%222010-0083-F%22&collectionIdentifier=WJC*

The search returns 59 catalog hits; the page filters the results to the 30 file units whose
FOIA tracking number is `LPWJC 2010-0083-F`, then lists pertinent Central America released
diary entries, calls, meetings, and trip events with NAID references and FRUS-style source-note stems.

## Local Preview

Open `index.html` in a browser. No build step is required.
