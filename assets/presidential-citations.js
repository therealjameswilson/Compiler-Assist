/* Shared, lazy presidential-record citation resources for existing compiler assists. */
(() => {
  "use strict";
  const script = document.currentScript;
  const base = "https://therealjameswilson.github.io/";
  const resources = {
    bush: {
      name: "Bush 41",
      count: "70,432",
      url: `${base}bush41-nsc-source-notes/`,
      version: "July 2, 2026, 16:42:11 UTC",
      repo: "bush41-nsc-source-notes",
      commit: "906ad0642ad6a87c07744ade84965bd95dda3065",
      description: "All 70,432 canonical entries, including 1,733 Cheney Collection entries. Most are folder citation stems; series and catalog-item leads remain distinct."
    },
    clinton: {
      name: "Clinton",
      count: "42,413",
      url: `${base}clinton-2013-0185-source-notes/`,
      version: "July 7, 2026, 19:54:35 UTC",
      repo: "clinton-2013-0185-source-notes",
      commit: "512bc2e1857d81230e9a92e05707d54f9908a40a",
      description: "All 42,413 finding-aid rows from release 2013-0185-M. Repeated notes remain separate rows, and review flags remain visible."
    }
  };

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function link(text, href) {
    const node = element("a", "pc-resource-link", text);
    node.href = href;
    node.target = "_blank";
    node.rel = "noopener noreferrer";
    return node;
  }

  function fallback() {
    const host = element("section", "pc-resource-host");
    host.dataset.presidentialCitations = "";
    host.append(element("h2", "", "Presidential-record citation resources"));
    host.append(element("p", "", "Search and copy source-note stems. Folder and series matches are not verified document citations."));
    const links = element("p", "");
    links.append(link("Bush 41 citation collection", resources.bush.url), document.createTextNode(" · "), link("Clinton citation collection", resources.clinton.url));
    host.append(links);
    return host;
  }

  function styles() {
    if (document.getElementById("presidential-citation-resource-styles")) return;
    const style = element("style", "");
    style.id = "presidential-citation-resource-styles";
    style.textContent = `
      .pc-resource-host{box-sizing:border-box;max-width:1180px;min-width:0;margin:32px auto;padding:0 20px;color:#243436;font:400 16px/1.55 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;text-align:left;}
      .pc-resource-host *{box-sizing:border-box;}
      .pc-resource-host .pc-resource-desk{margin:0;border:1px solid #cbd6d1;border-radius:8px;background:#fbfcf9;overflow:hidden;}
      .pc-resource-host .pc-resource-summary{display:list-item;cursor:pointer;padding:20px 24px;color:#1c504c;font-weight:700;font-size:1.06rem;line-height:1.45;}
      .pc-resource-host .pc-resource-summary::marker{color:#24645b;}
      .pc-resource-host .pc-resource-subtitle{display:block;margin:5px 0 0 18px;color:#52635f;font-size:.88rem;font-weight:400;}
      .pc-resource-host .pc-resource-content{padding:0 24px 24px;}
      .pc-resource-host p{margin:0 0 14px;max-width:none;}
      .pc-resource-host .pc-resource-caution{padding:13px 15px;border-left:3px solid #9f793a;background:#f3f0e7;color:#37443c;font-size:.92rem;}
      .pc-resource-host .pc-resource-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin:18px 0;}
      .pc-resource-host .pc-resource-card{min-width:0;border:1px solid #d6ded7;border-radius:6px;padding:17px;background:#fff;}
      .pc-resource-host .pc-resource-card h3{margin:0 0 8px;color:#243436;font:700 1.12rem/1.4 system-ui,sans-serif;letter-spacing:normal;}
      .pc-resource-host .pc-resource-card p{font-size:.9rem;color:#53625c;}
      .pc-resource-host .pc-resource-actions{display:flex;flex-wrap:wrap;align-items:center;gap:10px 14px;}
      .pc-resource-host .pc-resource-button{display:inline-block;min-height:44px;margin:0;padding:9px 13px;border:1px solid #24645b;border-radius:5px;background:#24645b;color:white;font:600 .91rem/1.4 system-ui,sans-serif;letter-spacing:normal;cursor:pointer;white-space:normal;text-transform:none;box-shadow:none;}
      .pc-resource-host .pc-resource-button:hover{background:#194e46;color:white;}
      .pc-resource-host .pc-resource-button[aria-pressed="true"]{outline:2px solid #24645b;outline-offset:3px;}
      .pc-resource-host .pc-resource-link{color:#195b68;text-decoration:underline;text-underline-offset:3px;font-size:.9rem;overflow-wrap:anywhere;}
      .pc-resource-host .pc-resource-link:focus-visible,.pc-resource-host button:focus-visible,.pc-resource-host summary:focus-visible{outline:3px solid #bc7b1d;outline-offset:4px;}
      .pc-resource-host .pc-resource-version{margin:0 0 16px;border:0;background:transparent;font-size:.86rem;color:#53625c;}
      .pc-resource-host .pc-resource-version>summary{cursor:pointer;padding:5px 0;color:#365f56;font-weight:600;}
      .pc-resource-host .pc-resource-version p{margin:9px 0;overflow-wrap:anywhere;}
      .pc-resource-host .pc-resource-embed[hidden]{display:none;}
      .pc-resource-host .pc-resource-embed-tools{display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin:15px 0 10px;}
      .pc-resource-host .pc-resource-close{background:#fff;color:#24574f;}
      .pc-resource-host .pc-resource-close:hover{background:#eaf1ed;color:#194e46;}
      .pc-resource-host .pc-resource-status{min-height:1.5em;margin:0 0 9px;font-size:.88rem;color:#52635f;}
      .pc-resource-host .pc-resource-frame{display:block;width:100%;max-width:100%;height:760px;height:78vh;min-height:520px;max-height:960px;border:1px solid #becfc6;border-radius:5px;background:#fff;}
      @media(max-width:640px){.pc-resource-host{margin:24px auto;padding:0 12px;font-size:15px;}.pc-resource-host .pc-resource-summary{padding:17px 16px;}.pc-resource-host .pc-resource-content{padding:0 16px 18px;}.pc-resource-host .pc-resource-grid{grid-template-columns:minmax(0,1fr);}.pc-resource-host .pc-resource-card{padding:14px;}.pc-resource-host .pc-resource-subtitle{margin-left:0;}.pc-resource-host .pc-resource-frame{min-height:500px;}}
      @media print{.pc-resource-host .pc-resource-button,.pc-resource-host .pc-resource-embed{display:none!important;}.pc-resource-host{padding:0;}.pc-resource-host .pc-resource-content{display:block;}.pc-resource-host .pc-resource-desk{border:1px solid #aaa;}}
    `;
    document.head.append(style);
  }

  function init() {
    if (document.querySelector("[data-presidential-citations-ready]")) return;
    let host = document.querySelector("[data-presidential-citations]");
    if (!host) {
      host = fallback();
      const footer = document.querySelector("body > footer");
      if (footer) footer.before(host);
      else {
        const main = document.querySelector("body > main");
        if (main) main.after(host);
        else document.body.append(host);
      }
    }
    const era = host.dataset.citationEra || script?.dataset.era || "both";
    const order = era === "clinton" ? ["clinton", "bush"] : ["bush", "clinton"];
    const desk = element("details", "pc-resource-desk");
    const summary = element("summary", "pc-resource-summary", "Presidential records: search and copy source-note stems");
    summary.append(element("span", "pc-resource-subtitle", "Bush 41 · 70,432 entries   |   Clinton · 42,413 rows"));
    desk.append(summary);
    const content = element("div", "pc-resource-content");
    content.append(element("p", "pc-resource-caution", "Folder and series citation stems are research aids, not final FRUS document citations. Verify the repository, office or series, OA/ID and folder against the specific item. Keep stronger existing item citations and State Department FOIA provenance. A title or date match alone does not establish identity."));
    content.append(element("p", "", "Search the full collections below. Copy the plain Source: line in the source browser, or select its text manually. Citation level, review flags and provenance stay visible separately. An embedded collection loads only when you choose it."));

    const grid = element("div", "pc-resource-grid");
    const buttons = new Map();
    for (const key of order) {
      const resource = resources[key];
      const card = element("div", "pc-resource-card");
      card.append(element("h3", "", `${resource.name} · ${resource.count}`));
      card.append(element("p", "", resource.description));
      const actions = element("div", "pc-resource-actions");
      const button = element("button", "pc-resource-button", `Search ${resource.name} here`);
      button.type = "button";
      button.setAttribute("aria-pressed", "false");
      button.setAttribute("aria-controls", "presidential-citation-browser");
      buttons.set(key, button);
      actions.append(button, link("Open full collection ↗", resource.url));
      card.append(actions);
      grid.append(card);
    }
    content.append(grid);

    const version = element("details", "pc-resource-version");
    version.append(element("summary", "", "Dataset provenance and limits"));
    for (const key of ["bush", "clinton"]) {
      const r = resources[key];
      const line = element("p", "", `${r.name}: ${r.count} entries/rows in the checked input, generated ${r.version}. `);
      line.append(link("Canonical input version", `https://github.com/therealjameswilson/${r.repo}/blob/${r.commit}/data/entries.min.json`));
      version.append(line);
    }
    version.append(element("p", "", "Both sources are primarily finding-aid citation stems. Clinton OA/ID alone is insufficient for a match; collection-level NAIDs are not file-unit identifiers. Availability or release status does not establish the item's original classification. The source browsers may receive later updates; the linked input versions identify this cross-check."));
    if (script?.src) {
      version.append(link("Input hashes and coverage notes", new URL("presidential-citations-sources.json", script.src).href));
    }
    content.append(version);

    const embed = element("div", "pc-resource-embed");
    embed.id = "presidential-citation-browser";
    embed.setAttribute("role", "region");
    embed.setAttribute("aria-label", "Embedded presidential-record citation browser");
    embed.hidden = true;
    const embedTools = element("div", "pc-resource-embed-tools");
    const fullPage = link("Open this collection in a new tab ↗", resources[order[0]].url);
    const close = element("button", "pc-resource-button pc-resource-close", "Close embedded collection");
    close.type = "button";
    const status = element("p", "pc-resource-status");
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    const frameSlot = element("div", "pc-resource-frame-slot");
    embedTools.append(fullPage, close);
    embed.append(embedTools, status, frameSlot);
    content.append(embed);
    desk.append(content);

    let activeKey = null;
    function openCollection(key) {
      const resource = resources[key];
      desk.open = true;
      if (activeKey === key && frameSlot.firstChild) return;
      activeKey = key;
      buttons.forEach((button, name) => button.setAttribute("aria-pressed", String(name === key)));
      embed.hidden = false;
      fullPage.href = resource.url;
      fullPage.textContent = `Open ${resource.name} collection in a new tab ↗`;
      status.textContent = `Opening the ${resource.name} collection. Use the full-page link if embedding is unavailable.`;
      const frame = element("iframe", "pc-resource-frame");
      frame.title = `${resource.name} presidential-record citation collection: search and copy Source lines`;
      frame.setAttribute("allow", "clipboard-write");
      frame.addEventListener("load", () => {
        if (activeKey === key) status.textContent = `${resource.name} browser loaded below. If the collection is not visible, use the full-page link. Copy Source controls include a selectable-text fallback.`;
      }, { once: true });
      frame.src = resource.url;
      frameSlot.replaceChildren(frame);
    }
    buttons.forEach((button, key) => button.addEventListener("click", () => openCollection(key)));
    close.addEventListener("click", () => {
      const previous = activeKey;
      activeKey = null;
      frameSlot.replaceChildren();
      embed.hidden = true;
      buttons.forEach(button => button.setAttribute("aria-pressed", "false"));
      if (previous) buttons.get(previous)?.focus();
    });

    styles();
    host.classList.add("pc-resource-host");
    host.replaceChildren(desk);
    host.dataset.presidentialCitationsReady = "true";
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
