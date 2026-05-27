const officialLinks = [
  {
    title: "Official volume page",
    label: "Office of the Historian",
    description:
      "Volume XXXII is listed as Central America in the FRUS 1993-2000 subseries.",
    status: "Being Researched",
    href: "https://history.state.gov/historicaldocuments/frus1993-00v32",
  },
  {
    title: "Status of the series",
    label: "Production state",
    description:
      "Use the status page as the source of truth for whether the volume is planned, researched, cleared, or published.",
    status: "Control anchor",
    href: "https://history.state.gov/historicaldocuments/status-of-the-series",
  },
  {
    title: "Clinton digitized records",
    label: "Presidential Library",
    description:
      "Search digitized records in the National Archives Catalog and the Clinton Digital Library before building the pull list.",
    status: "Primary discovery",
    href: "https://www.clintonlibrary.gov/research/search-digitized-records",
  },
  {
    title: "Public Papers",
    label: "GovInfo",
    description:
      "Presidential statements and remarks help pin public chronology, travel, disaster response, and policy framing.",
    status: "Public chronology",
    href: "https://www.govinfo.gov/app/collection/PPP",
  },
];

const countries = [
  {
    name: "Guatemala",
    code: "GTM",
    risk: "High",
    focus: "Peace process, human rights cases, military and intelligence accountability, refugee and asylum pressure.",
    terms: ["Guatemala", "Harbury", "Bamaca", "peace accords"],
  },
  {
    name: "El Salvador",
    code: "SLV",
    risk: "Medium",
    focus: "Post-war consolidation, FMLN integration, justice and police reform, reconstruction assistance.",
    terms: ["El Salvador", "FMLN", "peace accords", "PNC"],
  },
  {
    name: "Honduras",
    code: "HND",
    risk: "High",
    focus: "Regional security, migration, aid, base diplomacy, disaster relief after Hurricane Mitch.",
    terms: ["Honduras", "Soto Cano", "Mitch", "migration"],
  },
  {
    name: "Nicaragua",
    code: "NIC",
    risk: "High",
    focus: "Democratic transition, elections, property claims, demobilization, aid, Sandinista relations.",
    terms: ["Nicaragua", "Chamorro", "Aleman", "property claims"],
  },
  {
    name: "Costa Rica",
    code: "CRI",
    risk: "Medium",
    focus: "Regional diplomacy, democracy promotion, environmental diplomacy, trade and development policy.",
    terms: ["Costa Rica", "regional diplomacy", "environment", "trade"],
  },
  {
    name: "Panama",
    code: "PAN",
    risk: "High",
    focus: "Post-invasion governance, Canal transfer, counterdrug cooperation, security presence, banking controls.",
    terms: ["Panama", "Canal", "Noriega", "counterdrug"],
  },
  {
    name: "Belize",
    code: "BLZ",
    risk: "Medium",
    focus: "Border diplomacy, regional organizations, narcotics transit, environment, Caribbean-facing policy.",
    terms: ["Belize", "Guatemala border", "narcotics", "CARICOM"],
  },
  {
    name: "Regional",
    code: "REG",
    risk: "High",
    focus: "Hurricane Mitch, Summit of the Americas follow-through, migration, counternarcotics, democracy assistance.",
    terms: ["Central America", "Hurricane Mitch", "Summit of the Americas", "AID"],
  },
];

const sources = [
  {
    title: "Clinton Presidential Records",
    type: "Presidential archive",
    description:
      "Memcons, telcons, NSC files, WHORM subject files, schedules, staff files, and FOIA collections.",
    checks: ["Item-level PDF availability", "Collection and OA/ID fields", "Restriction and withdrawal sheets"],
    href: "https://clinton.presidentiallibraries.us/",
  },
  {
    title: "National Archives Catalog",
    type: "Catalog discovery",
    description:
      "Presidential Library Explorer and NAC keyword searches can surface digitized Clinton records and staff-file descriptions.",
    checks: ["NAID", "File unit title", "Digital object count"],
    href: "https://catalog.archives.gov/",
  },
  {
    title: "Presidential Daily Diary",
    type: "Chronology and calls",
    description:
      "Daily Diary file units help verify presidential calls, meetings, movements, and event sequences before checking policy files.",
    checks: ["FOIA tracking number", "OA/ID", "Diary date and entry", "NAID"],
    href: "https://catalog.archives.gov/search?q=%222010-0083-F%22&collectionIdentifier=WJC*",
  },
  {
    title: "GovInfo Public Papers",
    type: "Public chronology",
    description:
      "Public statements, remarks, letters, nominations, and messages supply date anchors and public policy language.",
    checks: ["Event date", "Page range", "Document category"],
    href: "https://www.govinfo.gov/app/collection/PPP",
  },
  {
    title: "Department of State FOIA",
    type: "Agency records",
    description:
      "Cable, briefing, and policy-paper leads for the Bureau of Inter-American Affairs and embassies.",
    checks: ["Release case", "Document date", "Cable identifiers"],
    href: "https://foia.state.gov/searchapp/Search/SubmitSimpleQuery",
  },
  {
    title: "CIA Reading Room",
    type: "Intelligence context",
    description:
      "Use for declassified analytic context and cross-checking human rights, narcotics, and security-policy episodes.",
    checks: ["CREST citation", "Document type", "Sanitized release facts"],
    href: "https://www.cia.gov/readingroom/",
  },
  {
    title: "Official FRUS Series",
    type: "Editorial anchor",
    description:
      "Previous Central America volumes provide source-note practice, chapter precedents, and continuity checks.",
    checks: ["Source-note pattern", "Chapter model", "Cross-volume overlap"],
    href: "https://history.state.gov/historicaldocuments",
  },
];

const libraryOverview = [
  {
    value: "4",
    label: "finding-aid PDFs",
    detail: "2013-0185-M Parts 1-4",
  },
  {
    value: "1,290",
    label: "pages reviewed",
    detail: "Text-extracted finding aids",
  },
  {
    value: "657",
    label: "Central America hits",
    detail: "Broad OCR match lines",
  },
  {
    value: "6",
    label: "call-slip batches",
    detail: "Designed for onsite time blocks",
  },
];

const clintonSourceRoot =
  "Source: Clinton Library, Clinton Presidential Records, National Security Council";

function sourceNoteStem(series, ids, folderTitle) {
  const idLabel = /[,;-]/.test(ids) ? "OA/IDs" : "OA/ID";
  return `${clintonSourceRoot}, ${series}, ${idLabel} ${ids}, ${folderTitle}. Folder-title lead from finding aid 2013-0185-M; document-level classification and release markings to be verified onsite.`;
}

const libraryClusters = [
  {
    title: "Panama Decision Spine",
    priority: "Critical",
    focus:
      "Start with interagency decision records before staff files: Panama Canal reversion, residual military presence, Colombia-Panama policy, bases, UXO, and security posture.",
    sourceNotes: [
      sourceNoteStem(
        "Records Management",
        "3906",
        "PC0284 PC Meeting on Panama and Colombia, July 14, 1998",
      ),
      sourceNoteStem(
        "Records Management",
        "4001, 4003, 4004, 3908, 3910, 3898",
        "DC meetings on Panama, 1995-1998",
      ),
      sourceNoteStem(
        "Records Management",
        "4125",
        "PRD-49, Issues Related to U.S. Military Presence and Canal Reversion in Panama, January 5, 1995",
      ),
      sourceNoteStem(
        "Defense Policy",
        "1693, 1831, 1859, 1860, 1864, 2184, 2475, 3355, 3481, 3487, 3584, 3585, 3586, 3595, 3658, 3663, 3826, 3843",
        "Panama files, 1995-2000",
      ),
    ],
    onsite:
      "Call first. If time collapses, PC/DC/PRD folders outrank speech, press, and country background files.",
  },
  {
    title: "Guatemala Human Rights and IOB",
    priority: "Critical",
    focus:
      "Use Nancy Soderberg, intelligence, and democracy/human-rights files to reconstruct Harbury/Bamaca, Sister Ortiz, declassification, and IOB handling.",
    sourceNotes: [
      sourceNoteStem(
        "Staff Director-Soderberg, Nancy",
        "1404",
        "Guatemala-Bamaca Case; Guatemala-IOB; Guatemala-IOB Investigation; Guatemala-Sister Ortiz Case; Guatemala-Bamaca/Devine Case; Guatemala-Document Declassification",
      ),
      sourceNoteStem(
        "Staff Director-Soderberg, Nancy",
        "1405",
        "Honduras; Immigration Issues; Landmines; Latin America-Arms Sales",
      ),
      sourceNoteStem(
        "Intelligence Programs",
        "2479, 2481, 2483, 2513, 2520, 2526",
        "Guatemala; Weekly Meetings-Devine and Roeber; Guatemala-Miscellaneous, 1995; Guatemala-Human Rights Cases Book 1",
      ),
      sourceNoteStem(
        "Democracy/Human Rights-Malley, Robert",
        "793",
        "Guatemala; School of the Americas",
      ),
    ],
    onsite:
      "Treat withdrawal sheets as evidence. Capture every source note field even when documents are closed or partly withdrawn.",
  },
  {
    title: "Hurricane Mitch and 1999 Trip",
    priority: "Critical",
    focus:
      "Tie disaster relief, migration pressure, presidential travel, Honduras/Soto Cano, Guatemala remarks, and regional policy follow-through.",
    sourceNotes: [
      sourceNoteStem(
        "Speechwriting-Widmer, Edward",
        "2189",
        "Central America, February 1999; Guatemala, March 11, 1999; Honduras Soto Cano, March 8, 1999; Hurricane Mitch",
      ),
      sourceNoteStem(
        "Records Management",
        "3622, 3638",
        "Trip Book-POTUS Trip to Central America, March 8-11, 1999",
      ),
      sourceNoteStem(
        "Press-Crowley, Philip J.",
        "3468",
        "POTUS Trip to Nicaragua, El Salvador, Honduras, and Guatemala, March 8-11, 1999",
      ),
      sourceNoteStem(
        "Multilateral and Humanitarian Affairs-Schwartz, Eric",
        "3426, 3429, 3452",
        "Hurricane Mitch; Central America Hurricane Mitch, 1999; POTUS-Central America Trip, 1999",
      ),
    ],
    onsite:
      "Photograph trip-book tables of contents first, then decide which briefing tabs deserve full document capture.",
  },
  {
    title: "Costa Rica Summit and Regional Leaders",
    priority: "High",
    focus:
      "Capture regional summit framing, leader meetings, environment, democracy, and public diplomacy around the 1997 Costa Rica visit and earlier Central American leader engagement.",
    sourceNotes: [
      sourceNoteStem(
        "Speechwriting-Blinken, Antony",
        "3388",
        "Costa Rica-Summit Opening Remarks; Costa Rica-Leaders Lunch Toast; Costa Rica-Summit Press Conference; Costa Rica-Environment Speech; Costa Rica-Embassy Meet and Greet; Costa Rica-State Dinner Toast",
      ),
      sourceNoteStem(
        "Records Management",
        "3625",
        "Trip Book-POTUS Visit to Costa Rica, May 7-9, 1997",
      ),
      sourceNoteStem(
        "Staff Director-Soderberg, Nancy",
        "1416",
        "Central American Presidents Meeting; Central American Leaders Brunch, November 30, 1993",
      ),
      sourceNoteStem("Strategic Planning-Gibney, James", "773", "Costa Rica"),
    ],
    onsite:
      "Use these folders to fill public-facing chronology and identify names for follow-up in NSC staff files.",
  },
  {
    title: "Migration, TPS, NACARA, and Humanitarian Policy",
    priority: "High",
    focus:
      "Track the policy mechanics behind migration, deferred enforced departure, TPS, NACARA, refugee/asylum issues, and relief after Mitch.",
    sourceNotes: [
      sourceNoteStem(
        "Multilateral and Humanitarian Affairs",
        "2980, 3067, 3074, 3075, 3134",
        "Immigration-Nicaragua; Nicaraguans, 1996; Guatemala-Fires, April 2000; Mitch, Hurricane-Expenditures; Honduras and Nicaragua-TPS",
      ),
      sourceNoteStem(
        "Multilateral and Humanitarian Affairs-Schwartz, Eric",
        "3422-3430",
        "Guatemala; El Salvador; Hurricane Mitch, 1998; Central America Hurricane Mitch, 1999; El Salvador-Deferred Enforced Departures",
      ),
      sourceNoteStem(
        "Multilateral and Humanitarian Affairs-Patten, Wendy",
        "3536",
        "El Salvador-Church Women; Central American and Haitian Parity Bill",
      ),
      sourceNoteStem(
        "Multilateral and Humanitarian Affairs-Busby, Scott",
        "1890",
        "TPS for Central America",
      ),
    ],
    onsite:
      "Batch these after the decision records. They are ideal for filling explanatory notes and legal-policy context.",
  },
  {
    title: "El Salvador Accountability and Post-War Files",
    priority: "High",
    focus:
      "Pull churchwomen, Zona Rosa, FMLN, delegation, DED, and post-war implementation folders to keep El Salvador from becoming a thin country lane.",
    sourceNotes: [
      sourceNoteStem(
        "Access Management-Leary, William",
        "3788, 3789",
        "Documents Prepared for El Salvador Churchwomen Case",
      ),
      sourceNoteStem(
        "Staff Director-Soderberg, Nancy",
        "1408",
        "El Salvador-Zona Rosa Declassification, January 1997",
      ),
      sourceNoteStem(
        "Intelligence Programs-Mitchell, Don",
        "3031",
        "El Salvador-Zona Rosa, 1996",
      ),
      sourceNoteStem(
        "Democracy/Human Rights and Multilateral and Humanitarian Affairs",
        "494, 3425, 3430, 3536",
        "El Salvador; El Salvador, 1995; El Salvador-Deferred Enforced Departures; El Salvador-Church Women",
      ),
    ],
    onsite:
      "Pair accountability folders with migration and post-war implementation folders to avoid a case-only narrative.",
  },
  {
    title: "Transnational Threats and International Crime",
    priority: "High",
    focus:
      "Mine the crime, narcotics, corruption, border security, arms trafficking, and country files that may otherwise fall between regional and global volumes.",
    sourceNotes: [
      sourceNoteStem(
        "Transnational Threats-Eddy, Randolph",
        "1497, 1503",
        "Central America; Belize; El Salvador; Guatemala; Nicaragua; Panama II",
      ),
      sourceNoteStem("Transnational Threats-Simon, Steven", "2248", "Panama"),
      sourceNoteStem(
        "Transnational Threats-Rosa, Frederick",
        "4042, 4050, 4067, 4069, 4070",
        "Panama-International Crime; Honduras-International Crime; Nicaragua-International Crime; Central American Summit; Belize-International Crime; Costa Rica-International Crime; El Salvador-International Crime; Guatemala-International Crime; Border Security Review; Human Rights Monitoring and Restrictions",
      ),
      sourceNoteStem(
        "Transnational Threats-Cressey, Roger",
        "3193A",
        "Herzegovina/Guatemala/Peacekeeping",
      ),
    ],
    onsite:
      "Use for gap closure after core diplomatic and trip files. Tag country files that belong in narcotics or counterterrorism companion volumes.",
  },
  {
    title: "Speech, Press, and Public Chronology",
    priority: "Medium",
    focus:
      "Use speechwriting and press files to verify public chronology, trip messaging, and statement provenance before cross-checking GovInfo.",
    sourceNotes: [
      sourceNoteStem(
        "Speechwriting-Widmer, Edward",
        "2189",
        "Central America; Guatemala; Honduras Soto Cano; Hurricane Mitch",
      ),
      sourceNoteStem(
        "Speechwriting-Blinken, Antony",
        "3388",
        "Costa Rica summit and visit sequence",
      ),
      sourceNoteStem(
        "Press-Crowley, Philip J.",
        "103096-103106",
        "Central America-General; Costa Rica; El Salvador; Guatemala; Haiti; Honduras; Mexico; Nicaragua; Panama",
      ),
      sourceNoteStem(
        "Press-Gobush, Matthew",
        "3299",
        "Hurricane Mitch Updates, December 1998",
      ),
    ],
    onsite:
      "Use as a verification layer. Do not let polished remarks consume time before decision records are checked.",
  },
];

const onsitePlan = [
  {
    phase: "Before arrival",
    action:
      "Send a pre-pull list grouped by OA/ID batch. Ask staff which folders are restricted, offsite, oversize, or require special handling.",
  },
  {
    phase: "First morning",
    action:
      "Start with Records Management PC/DC/PRD folders and Soderberg Guatemala folders. These are the highest selection-risk files.",
  },
  {
    phase: "Every folder",
    action:
      "Capture folder title, OA/ID, collection path, restriction sheet, date span, document titles, page counts, and quick inclusion rationale.",
  },
  {
    phase: "End of each day",
    action:
      "Export the photo/log ledger, mark no-hit or closed folders, and reorder the next pull batch around gaps rather than curiosity.",
  },
];

const callSlipBatches = [
  {
    title: "Batch 1 - Decision Records",
    ids: "3906, 4001, 4003, 4004, 3908, 3910, 3898, 4123, 4125",
  },
  {
    title: "Batch 2 - Soderberg Staff Files",
    ids: "1404, 1405, 1408, 1409, 1416",
  },
  {
    title: "Batch 3 - Guatemala and El Salvador Accountability",
    ids: "793, 494, 2479, 2480, 2481, 2483, 2513, 2520, 2526, 3031, 3536, 3788, 3789",
  },
  {
    title: "Batch 4 - Mitch, Migration, and Trip Books",
    ids: "1890, 2980, 3067, 3074, 3075, 3134, 3422-3430, 3452, 3622, 3625, 3638",
  },
  {
    title: "Batch 5 - Panama Defense Policy",
    ids: "1693, 1831, 1859, 1860, 1864, 2184, 2475, 3355, 3481, 3487, 3584, 3585, 3586, 3595, 3658, 3663, 3826, 3843",
  },
  {
    title: "Batch 6 - Transnational Threats and Public Chronology",
    ids: "1497, 1503, 2189, 2248, 3299, 3388, 3468, 4042, 4050, 4067, 4069, 4070, 103096-103106",
  },
];

const chronologyOverview = [
  {
    value: "59",
    label: "catalog hits",
    detail: 'NARA search for "2010-0083-F"',
  },
  {
    value: "30",
    label: "matching file units",
    detail: "Filtered to LPWJC 2010-0083-F",
  },
  {
    value: "6",
    label: "pertinent references",
    detail: "Released diary chronology anchors",
  },
  {
    value: "1993-1999",
    label: "date span",
    detail: "Chronology references surfaced so far",
  },
];

const dailyDiaryRoot =
  "Source: Clinton Library, Clinton Presidential Records, Presidential Daily Diary, Ellen McCathran";

function dailyDiarySourceNote(oaId, folderTitle, entryLabel, naid) {
  return `${dailyDiaryRoot}, OA/ID ${oaId}, ${folderTitle}, ${entryLabel}. NARA Catalog NAID ${naid}; FOIA 2010-0083-F; entry-level redactions and release markings verified from the digitized Daily Diary file unit.`;
}

const chronologyItems = [
  {
    title: "Moakley dinner for University of Central America chair",
    date: "April 27, 1993",
    type: "Event",
    countries: ["El Salvador"],
    summary:
      "The released diary records the President attending a dinner honoring Representative J. Joseph Moakley, a fundraiser to endow the John Joseph Moakley Chair at the University of Central America in San Salvador.",
    sourceNote: dailyDiarySourceNote(
      "CF 1982",
      "[Ellen McCathran - Presidential Daily Diary Hardcopy 3/2/93; 3/8/93; 3/12/93; 4/6/93; 4/14/93; 4/27/93; 4/30/93]",
      "diary entry for April 27, 1993",
      "17367492",
    ),
    href: "https://catalog.archives.gov/id/17367492",
  },
  {
    title: "Central American Presidents breakfast",
    date: "November 30, 1993",
    type: "Meeting",
    countries: ["Regional", "Guatemala", "El Salvador", "Honduras", "Nicaragua", "Costa Rica", "Panama", "Belize"],
    summary:
      "The diary records a 9:37 a.m.-12:04 p.m. breakfast meeting with Central American Presidents, an 11:22 a.m. news conference with Guatemalan President Ramiro De Leon Carpio speaking for the group, and an 11:55 a.m. farewell. The appendix lists leaders from El Salvador, Panama, Honduras, Costa Rica, Nicaragua, Guatemala, and Belize.",
    sourceNote: dailyDiarySourceNote(
      "CF 1982",
      "[Ellen McCathran - Presidential Daily Diary Hardcopy 10/6/93; 10/11/93; 10/18/93; 10/26/93; 11/6/93; 11/17/93; 11/18/93; 11/30/93]",
      "diary entries and appendix for November 30, 1993",
      "17368174",
    ),
    href: "https://catalog.archives.gov/id/17368174",
  },
  {
    title: "Panama presidential call",
    date: "October 10, 1994",
    type: "Call",
    countries: ["Panama"],
    summary:
      "At 9:26-9:30 p.m., the President talked on a conference call with Ernesto Perez Balladares, President of Panama, with White House Situation Room personnel and a Department of State interpreter listed on the call.",
    sourceNote: dailyDiarySourceNote(
      "CF 1983",
      "[Ellen McCathran - Presidential Daily Diary Hardcopy 4/5/94; 4/13/94; 4/26/94; 4/29/94; 5/1/94; 5/19/94; 5/23/94; 5/27/94; 6/1/94; 6/9/94; 6/19/94; 7/5/94; 7/15/94; 7/17/94; 8/1/94; 8/6/94; 8/19/94; 9/7/94; 9/16/94; 9/20/94; 9/24/94; 10/5/94; 10/10/94; 10/17/94; 10/25/94; 11/5/94; 11/16/94; 11/17/94; 11/29/94]",
      "diary entry for October 10, 1994",
      "17368177",
    ),
    href: "https://catalog.archives.gov/id/17368177",
  },
  {
    title: "Nicaragua and Honduras calls after Mitch",
    date: "November 7, 1998",
    type: "Call",
    countries: ["Nicaragua", "Honduras"],
    summary:
      "The diary records attempted calls at 6:18 p.m. to Presidents Arnoldo Aleman of Nicaragua and Carlos Roberto Flores of Honduras, then completed conference calls with Aleman at 7:04-7:21 p.m. and Flores at 7:36-7:42 p.m. The diary does not state the subject; the date makes this a Hurricane Mitch chronology lead to verify against relief-policy files.",
    sourceNote: dailyDiarySourceNote(
      "CF 1985",
      "[Ellen McCathran - Presidential Daily Diary Hardcopy 10/7/98; 10/12/98; 10/19/98; 10/27/98; 11/7/98; 11/18/98; 11/19/98; 12/8/98; 12/9/98; 12/24/98]",
      "diary entries for November 7, 1998",
      "17368190",
    ),
    href: "https://catalog.archives.gov/id/17368190",
  },
  {
    title: "Nicaragua trip and President Aleman meetings",
    date: "March 8, 1999",
    type: "Meeting",
    countries: ["Nicaragua"],
    summary:
      "The diary covers the arrival in Managua, the Posoltega visit, a 3:17-3:40 p.m. meeting with President Aleman, and a 3:31-4:21 p.m. meeting with Aleman and Hurricane Mitch survivors.",
    sourceNote: dailyDiarySourceNote(
      "CF 1986",
      "[Ellen McCathran - Presidential Daily Diary Hardcopy 1/11/99; 1/24/99; 1/28/99; 2/6/99; 2/10/99; 2/16/99; 2/25/99; 3/2/99; 3/8/99; 3/12/99]",
      "diary entries for March 8, 1999",
      "17368192",
    ),
    href: "https://catalog.archives.gov/id/17368192",
  },
  {
    title: "El Salvador arrival and Calderon Sol ceremony",
    date: "March 8, 1999",
    type: "Trip event",
    countries: ["El Salvador"],
    summary:
      "The diary records the flight from Managua to San Salvador, the greeting by President Armando Calderon Sol, and a 7:03-7:21 p.m. arrival ceremony before the President overnighted in San Salvador.",
    sourceNote: dailyDiarySourceNote(
      "CF 1986",
      "[Ellen McCathran - Presidential Daily Diary Hardcopy 1/11/99; 1/24/99; 1/28/99; 2/6/99; 2/10/99; 2/16/99; 2/25/99; 3/2/99; 3/8/99; 3/12/99]",
      "diary entries for March 8, 1999",
      "17368192",
    ),
    href: "https://catalog.archives.gov/id/17368192",
  },
];

const queueItems = [
  {
    title: "Snapshot the official volume state",
    country: "Regional",
    source: "Official FRUS Series",
    priority: "Critical",
    query: "frus1993-00v32 Central America status",
    output:
      "Record the title, URL, status, and date checked. Keep this as the standing citation for the dashboard.",
    href: "https://history.state.gov/historicaldocuments/frus1993-00v32",
  },
  {
    title: "Audit Presidential Daily Diary calls and meetings",
    country: "Regional",
    source: "Presidential Daily Diary",
    priority: "High",
    query:
      '"2010-0083-F" AND ("Central American" OR Panama OR Nicaragua OR Honduras OR "El Salvador" OR Guatemala OR Belize)',
    output:
      "Use the chronology section as the first pass, then match each call, meeting, or trip event to NSC, State, Public Papers, and briefing-book records before treating it as selection evidence.",
    href: "https://catalog.archives.gov/search?q=%222010-0083-F%22&collectionIdentifier=WJC*",
  },
  {
    title: "Build the Clinton Library country seed search",
    country: "Regional",
    source: "Clinton Presidential Records",
    priority: "High",
    query: '(Guatemala OR "El Salvador" OR Honduras OR Nicaragua OR "Costa Rica" OR Panama OR Belize)',
    output:
      "Export result counts by collection, item type, date span, and whether a digitized object is available.",
    href: "https://clinton.presidentiallibraries.us/solr-search?q=%28Guatemala%20OR%20%22El%20Salvador%22%20OR%20Honduras%20OR%20Nicaragua%20OR%20%22Costa%20Rica%22%20OR%20Panama%20OR%20Belize%29",
  },
  {
    title: "Harvest Guatemala human-rights and peace leads",
    country: "Guatemala",
    source: "Clinton Presidential Records",
    priority: "High",
    query: '(Guatemala AND (Harbury OR Bamaca OR "peace accords" OR human rights))',
    output:
      "Separate peace-process diplomacy from human-rights accountability and intelligence-related source leads.",
    href: "https://clinton.presidentiallibraries.us/solr-search?q=%28Guatemala%20AND%20%28Harbury%20OR%20Bamaca%20OR%20%22peace%20accords%22%20OR%20human%20rights%29%29",
  },
  {
    title: "Review El Salvador post-war implementation",
    country: "El Salvador",
    source: "Clinton Presidential Records",
    priority: "Medium",
    query: '("El Salvador" AND (FMLN OR "peace accords" OR police OR reconstruction))',
    output:
      "Flag records on implementation problems, security reform, aid, and U.S. diplomatic pressure.",
    href: "https://clinton.presidentiallibraries.us/solr-search?q=%28%22El%20Salvador%22%20AND%20%28FMLN%20OR%20%22peace%20accords%22%20OR%20police%20OR%20reconstruction%29%29",
  },
  {
    title: "Map Hurricane Mitch response files",
    country: "Regional",
    source: "GovInfo Public Papers",
    priority: "High",
    query: '("Hurricane Mitch" OR Mitch) AND (Honduras OR Nicaragua OR "Central America")',
    output:
      "Use public statements to set public chronology, then pursue NSC, USAID, State, and relief-policy records.",
    href: "https://www.govinfo.gov/app/collection/PPP",
  },
  {
    title: "Panama Canal transfer and security posture",
    country: "Panama",
    source: "Clinton Presidential Records",
    priority: "High",
    query: '(Panama AND ("Canal" OR "canal transfer" OR counterdrug OR security))',
    output:
      "Distinguish Canal transfer diplomacy from counternarcotics, banking, and residual security-presence issues.",
    href: "https://clinton.presidentiallibraries.us/solr-search?q=%28Panama%20AND%20%28%22Canal%22%20OR%20%22canal%20transfer%22%20OR%20counterdrug%20OR%20security%29%29",
  },
  {
    title: "Nicaragua elections and property claims",
    country: "Nicaragua",
    source: "National Archives Catalog",
    priority: "High",
    query: 'Nicaragua Clinton Aleman Chamorro "property claims"',
    output:
      "Track electoral diplomacy, transition questions, property claims, and aid conditionality by date.",
    href: "https://catalog.archives.gov/search?q=Nicaragua%20Clinton%20Aleman%20Chamorro%20%22property%20claims%22",
  },
  {
    title: "Honduras basing, aid, migration, and disaster relief",
    country: "Honduras",
    source: "National Archives Catalog",
    priority: "High",
    query: 'Honduras Clinton "Soto Cano" migration Mitch',
    output:
      "Split security and basing records from migration and disaster-relief records.",
    href: "https://catalog.archives.gov/search?q=Honduras%20Clinton%20%22Soto%20Cano%22%20migration%20Mitch",
  },
  {
    title: "Costa Rica regional diplomacy pass",
    country: "Costa Rica",
    source: "Clinton Presidential Records",
    priority: "Medium",
    query: '("Costa Rica" AND (Central America OR trade OR environment OR democracy))',
    output:
      "Pull records where Costa Rica is the diplomatic platform rather than merely a named country.",
    href: "https://clinton.presidentiallibraries.us/solr-search?q=%28%22Costa%20Rica%22%20AND%20%28Central%20America%20OR%20trade%20OR%20environment%20OR%20democracy%29%29",
  },
  {
    title: "Belize border and transit scan",
    country: "Belize",
    source: "Department of State FOIA",
    priority: "Medium",
    query: 'Belize Guatemala border narcotics Clinton',
    output:
      "Check whether Belize appears as a country chapter, regional issue, or background-only source family.",
    href: "https://foia.state.gov/searchapp/Search/SubmitSimpleQuery",
  },
  {
    title: "Agency reading-room cross-check",
    country: "Guatemala",
    source: "CIA Reading Room",
    priority: "High",
    query: 'Guatemala Harbury Bamaca Clinton',
    output:
      "Use released intelligence records only as provenance cross-checks against State and NSC documentary leads.",
    href: "https://www.cia.gov/readingroom/search/site/Guatemala%20Harbury%20Bamaca%20Clinton",
  },
  {
    title: "Previous FRUS Central America continuity check",
    country: "Regional",
    source: "Official FRUS Series",
    priority: "Medium",
    query: "Central America FRUS source notes Reagan Bush Clinton",
    output:
      "Extract source-note conventions and recurring institutions from prior Central America volumes.",
    href: "https://history.state.gov/historicaldocuments",
  },
];

const methodCards = [
  {
    title: "Keep selection separate",
    text:
      "The page tracks discovery and evidence readiness. It should not decide which documents belong in the printed volume.",
  },
  {
    title: "Preserve source notes early",
    text:
      "Every promising lead should capture repository, collection, file unit, date, title, release facts, URL, and page extent.",
  },
  {
    title: "Audit by issue and country",
    text:
      "Use country lanes for coverage and issue lanes for cross-border policy such as Mitch, migration, narcotics, and trade.",
  },
  {
    title: "Mark absences explicitly",
    text:
      "No-hit searches matter. Save query strings and result counts so later researchers can tell what has already been checked.",
  },
  {
    title: "Separate public from private",
    text:
      "Public Papers establish chronology and rhetoric; archival records establish policy process, decisions, and diplomatic traffic.",
  },
  {
    title: "Expect cross-volume overlap",
    text:
      "Central America intersects with Cuba, Haiti, Caribbean, North America, South America, narcotics, and global human-rights volumes.",
  },
];

const state = {
  search: "",
  country: "",
  priority: "",
  source: "",
};

const roots = {
  official: document.querySelector("#official-root"),
  countries: document.querySelector("#country-root"),
  sources: document.querySelector("#source-root"),
  libraryOverview: document.querySelector("#library-overview-root"),
  library: document.querySelector("#library-root"),
  onsite: document.querySelector("#onsite-root"),
  batches: document.querySelector("#batch-root"),
  chronologyOverview: document.querySelector("#chronology-overview-root"),
  chronology: document.querySelector("#chronology-root"),
  queue: document.querySelector("#queue-root"),
  method: document.querySelector("#method-root"),
  summary: document.querySelector("#queue-summary"),
};

const controls = {
  search: document.querySelector("#queue-search"),
  country: document.querySelector("#country-filter"),
  priority: document.querySelector("#priority-filter"),
  source: document.querySelector("#source-filter"),
  reset: document.querySelector("#reset-filters"),
  export: document.querySelector("#export-queue"),
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const normalize = (value) => String(value).toLowerCase().trim();

const unique = (items) => [...new Set(items)].sort((a, b) => a.localeCompare(b));

function setStat(id, value) {
  const node = document.querySelector(id);
  if (node) node.textContent = value;
}

function pill(value, extraClass = "") {
  const css = normalize(value).replace(/[^a-z0-9]+/g, "-");
  return `<span class="pill ${css} ${extraClass}">${escapeHtml(value)}</span>`;
}

function renderOfficial() {
  roots.official.innerHTML = officialLinks
    .map(
      (item) => `
        <article class="official-card">
          <p class="kicker">${escapeHtml(item.label)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <div class="meta">
            ${pill(item.status, item.status === "Being Researched" ? "ready" : "")}
          </div>
          <p><a class="inline-link" href="${item.href}" rel="noreferrer">Open source</a></p>
        </article>
      `,
    )
    .join("");
}

function renderCountries() {
  roots.countries.innerHTML = countries
    .map(
      (country) => `
        <article class="country-card">
          <header>
            <div>
              <p class="kicker">${escapeHtml(country.risk)} attention</p>
              <h3>${escapeHtml(country.name)}</h3>
            </div>
            <span class="country-code">${escapeHtml(country.code)}</span>
          </header>
          <p>${escapeHtml(country.focus)}</p>
          <ul>
            ${country.terms.map((term) => `<li>${escapeHtml(term)}</li>`).join("")}
          </ul>
          <div class="meta">${pill(country.risk)}</div>
        </article>
      `,
    )
    .join("");
}

function renderSources() {
  roots.sources.innerHTML = sources
    .map(
      (source) => `
        <article class="source-card">
          <p class="kicker">${escapeHtml(source.type)}</p>
          <h3>${escapeHtml(source.title)}</h3>
          <p>${escapeHtml(source.description)}</p>
          <ul>
            ${source.checks.map((check) => `<li>${escapeHtml(check)}</li>`).join("")}
          </ul>
          <p><a class="inline-link" href="${source.href}" rel="noreferrer">Open repository</a></p>
        </article>
      `,
    )
    .join("");
}

function renderLibrary() {
  roots.libraryOverview.innerHTML = libraryOverview
    .map(
      (item) => `
        <article>
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(item.label)}</span>
          <p>${escapeHtml(item.detail)}</p>
        </article>
      `,
    )
    .join("");

  roots.library.innerHTML = libraryClusters
    .map(
      (cluster) => `
        <article class="library-card">
          <div class="library-card-header">
            <div>
              <p class="kicker">${escapeHtml(cluster.priority)} pull</p>
              <h3>${escapeHtml(cluster.title)}</h3>
            </div>
            ${pill(cluster.priority)}
          </div>
          <p>${escapeHtml(cluster.focus)}</p>
          <p class="source-note-label">Draft source-note stems</p>
          <ul class="source-note-list">
            ${cluster.sourceNotes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}
          </ul>
          <p class="onsite-note"><strong>Onsite move:</strong> ${escapeHtml(cluster.onsite)}</p>
        </article>
      `,
    )
    .join("");

  roots.onsite.innerHTML = `
    <p class="kicker">Time Strategy</p>
    <h3>Use the Library Day as a Decision Machine</h3>
    <ol>
      ${onsitePlan
        .map(
          (item) => `
            <li>
              <strong>${escapeHtml(item.phase)}</strong>
              <span>${escapeHtml(item.action)}</span>
            </li>
          `,
        )
        .join("")}
    </ol>
  `;

  roots.batches.innerHTML = `
    <p class="kicker">Call-Slip Batches</p>
    <h3>Pull in Groups, Not Curiosities</h3>
    <div class="batch-list">
      ${callSlipBatches
        .map(
          (batch) => `
            <article>
              <h4>${escapeHtml(batch.title)}</h4>
              <p>${escapeHtml(batch.ids)}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderChronology() {
  roots.chronologyOverview.innerHTML = chronologyOverview
    .map(
      (item) => `
        <article>
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(item.label)}</span>
          <p>${escapeHtml(item.detail)}</p>
        </article>
      `,
    )
    .join("");

  roots.chronology.innerHTML = chronologyItems
    .map(
      (finding) => `
        <article class="chronology-card">
          <div class="chronology-date-block">
            <span>${escapeHtml(finding.date)}</span>
            ${pill(finding.type)}
          </div>
          <div class="chronology-card-body">
            <h3>${escapeHtml(finding.title)}</h3>
            <p>${escapeHtml(finding.summary)}</p>
            <div class="meta">
              ${finding.countries.map((country) => pill(country)).join("")}
              ${pill("FOIA release")}
              ${pill("Digitized")}
            </div>
            <p class="source-note-label">FRUS-style source note</p>
            <p class="source-note-text">${escapeHtml(finding.sourceNote)}</p>
            <p><a class="inline-link" href="${finding.href}" rel="noreferrer">Open NARA record</a></p>
          </div>
        </article>
      `,
    )
    .join("");
}

function populateFilters() {
  const countryOptions = ["", ...unique(queueItems.map((item) => item.country))];
  const priorityOptions = ["", ...unique(queueItems.map((item) => item.priority))];
  const sourceOptions = ["", ...unique(queueItems.map((item) => item.source))];

  controls.country.innerHTML = countryOptions
    .map((value) => `<option value="${escapeHtml(value)}">${value || "All countries"}</option>`)
    .join("");
  controls.priority.innerHTML = priorityOptions
    .map((value) => `<option value="${escapeHtml(value)}">${value || "All priorities"}</option>`)
    .join("");
  controls.source.innerHTML = sourceOptions
    .map((value) => `<option value="${escapeHtml(value)}">${value || "All sources"}</option>`)
    .join("");
}

function filteredQueue() {
  const needle = normalize(state.search);
  return queueItems.filter((item) => {
    const haystack = normalize(
      [item.title, item.country, item.source, item.priority, item.query, item.output].join(" "),
    );
    return (
      (!needle || haystack.includes(needle)) &&
      (!state.country || item.country === state.country) &&
      (!state.priority || item.priority === state.priority) &&
      (!state.source || item.source === state.source)
    );
  });
}

function renderQueue() {
  const items = filteredQueue();
  roots.summary.textContent = `${items.length} of ${queueItems.length} starter tasks shown.`;
  if (!items.length) {
    roots.queue.innerHTML = `<div class="empty-state">No queue items match the current filters.</div>`;
    return;
  }

  roots.queue.innerHTML = items
    .map(
      (item) => `
        <article class="queue-card">
          <div>
            <div class="meta">
              ${pill(item.country)}
              ${pill(item.priority)}
              ${pill(item.source)}
            </div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.output)}</p>
            <p class="query"><strong>Query:</strong> ${escapeHtml(item.query)}</p>
          </div>
          <div class="queue-actions">
            <a class="link-button" href="${item.href}" rel="noreferrer">Open Search</a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderMethod() {
  roots.method.innerHTML = methodCards
    .map(
      (card) => `
        <article class="method-card">
          <h3>${escapeHtml(card.title)}</h3>
          <p>${escapeHtml(card.text)}</p>
        </article>
      `,
    )
    .join("");
}

function exportCsv() {
  const rows = filteredQueue();
  const headers = ["title", "country", "priority", "source", "query", "output", "href"];
  const csv = [
    headers.join(","),
    ...rows.map((row) =>
      headers
        .map((key) => `"${String(row[key]).replaceAll('"', '""')}"`)
        .join(","),
    ),
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "frus-central-america-queue.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function bindEvents() {
  controls.search.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderQueue();
  });
  controls.country.addEventListener("change", (event) => {
    state.country = event.target.value;
    renderQueue();
  });
  controls.priority.addEventListener("change", (event) => {
    state.priority = event.target.value;
    renderQueue();
  });
  controls.source.addEventListener("change", (event) => {
    state.source = event.target.value;
    renderQueue();
  });
  controls.reset.addEventListener("click", () => {
    state.search = "";
    state.country = "";
    state.priority = "";
    state.source = "";
    controls.search.value = "";
    controls.country.value = "";
    controls.priority.value = "";
    controls.source.value = "";
    renderQueue();
  });
  controls.export.addEventListener("click", exportCsv);
}

function init() {
  setStat("#chronology-count", chronologyItems.length);
  setStat("#country-count", countries.length);
  setStat("#source-count", sources.length);
  setStat("#queue-count", queueItems.length);
  renderOfficial();
  renderCountries();
  renderSources();
  renderChronology();
  renderLibrary();
  populateFilters();
  renderQueue();
  renderMethod();
  bindEvents();
}

init();
