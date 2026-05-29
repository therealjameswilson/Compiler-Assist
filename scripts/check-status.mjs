import fs from "node:fs/promises";

const STATUS_URL = "https://history.state.gov/historicaldocuments/status-of-the-series";
const SNAPSHOT_PATH = new URL("../data/being-researched.json", import.meta.url);

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "–")
    .replace(/<[^>]+>/g, "")
    .trim();
}

function repoSlug(docId) {
  return docId
    .replace(/^frus/, "frus-")
    .replace(/([0-9]{4}-[0-9]{2})(PubDip|IntelCom|v)/, "$1$2")
    .toLowerCase()
    .replace(/pubdip/g, "pubdip")
    .concat("-assist");
}

function parseBeingResearched(html) {
  const section = html.match(/<h3>Being Researched<\/h3>\s*<ol>([\s\S]*?)<\/ol>/);
  if (!section) {
    throw new Error("Could not locate the Being Researched section on history.state.gov.");
  }
  return [...section[1].matchAll(/href="\/historicaldocuments\/([^"]+)">([\s\S]*?)<\/a>/g)].map(
    (match, index) => ({
      index: index + 1,
      doc_id: match[1],
      title: decodeHtml(match[2]),
      official_url: `https://history.state.gov/historicaldocuments/${match[1]}`,
      repo_slug: repoSlug(match[1]),
    }),
  );
}

function summarizeDiff(snapshot, current) {
  const snapshotById = new Map(snapshot.map((item) => [item.doc_id, item]));
  const currentById = new Map(current.map((item) => [item.doc_id, item]));
  const missing = snapshot.filter((item) => !currentById.has(item.doc_id));
  const added = current.filter((item) => !snapshotById.has(item.doc_id));
  const titleChanges = current
    .filter((item) => snapshotById.has(item.doc_id))
    .filter((item) => snapshotById.get(item.doc_id).title !== item.title)
    .map((item) => ({
      doc_id: item.doc_id,
      snapshot: snapshotById.get(item.doc_id).title,
      current: item.title,
    }));
  const orderChanges = current
    .filter((item, index) => snapshot[index]?.doc_id !== item.doc_id)
    .map((item, index) => ({
      position: index + 1,
      snapshot: snapshot[index]?.doc_id || null,
      current: item.doc_id,
    }));
  return { missing, added, titleChanges, orderChanges };
}

const snapshot = JSON.parse(await fs.readFile(SNAPSHOT_PATH, "utf8"));
const response = await fetch(STATUS_URL, {
  headers: { "user-agent": "Compiler-Assist status checker" },
});

if (!response.ok) {
  throw new Error(`history.state.gov returned ${response.status} ${response.statusText}`);
}

const current = parseBeingResearched(await response.text());
const diff = summarizeDiff(snapshot, current);
const hasDiff =
  diff.missing.length || diff.added.length || diff.titleChanges.length || diff.orderChanges.length;

console.log(`Snapshot count: ${snapshot.length}`);
console.log(`Current count: ${current.length}`);

if (hasDiff) {
  console.error("Being Researched snapshot drift detected:");
  console.error(JSON.stringify(diff, null, 2));
  process.exitCode = 1;
} else {
  console.log("Being Researched snapshot matches history.state.gov.");
}
