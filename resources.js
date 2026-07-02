/* Pulse for Nurses — Nursing Resource Hub.
   A curated, categorized, searchable directory of trusted external sites
   (regulators, licensing exams, free research databases, stats learning,
   evidence/guidelines, open-access journals). Static + client-only — no API,
   no cost. Each link opens in a new tab; tags flag Free / Official / BD / Global. */
(function () {
  "use strict";

  var CATEGORIES = [
    {
      id: "regulatory", name: "Regulatory & Professional Bodies", icon: "🏛️",
      blurb: "The councils and associations that register nurses & midwives and set standards.",
      links: [
        { name: "Bangladesh Nursing & Midwifery Council (BNMC)", url: "http://www.bnmc.gov.bd", desc: "The national regulator — registration, licensing, curriculum and exam authority for Bangladesh.", tags: ["Official", "BD"] },
        { name: "Directorate General of Nursing & Midwifery (DGNM)", url: "https://dgnm.gov.bd", desc: "Government directorate for nursing services, posting, and workforce administration.", tags: ["Official", "BD"] },
        { name: "Ministry of Health & Family Welfare (MOHFW)", url: "https://mohfw.gov.bd", desc: "National health ministry — policy, circulars, and health programmes.", tags: ["Official", "BD"] },
        { name: "International Council of Nurses (ICN)", url: "https://www.icn.ch", desc: "Global federation of national nurses associations — standards, advocacy, and the ICN code of ethics.", tags: ["Official", "Global"] },
        { name: "International Confederation of Midwives (ICM)", url: "https://www.internationalmidwives.org", desc: "Global body for midwifery — competencies, standards, and essential-competencies framework.", tags: ["Official", "Global"] },
        { name: "WHO — Nursing & Midwifery", url: "https://www.who.int/health-topics/nursing", desc: "World Health Organization hub for the global nursing & midwifery workforce.", tags: ["Official", "Global"] }
      ]
    },
    {
      id: "exams", name: "Licensing & Registration Exams", icon: "🎓",
      blurb: "Official bodies for NCLEX and international nurse licensure & credential verification.",
      links: [
        { name: "NCSBN — NCLEX", url: "https://www.ncsbn.org/nclex.htm", desc: "The council that owns the NCLEX-RN/PN — the official test plan, candidate bulletin, and rules.", tags: ["Official", "Global"] },
        { name: "NCLEX (Pearson VUE)", url: "https://www.pearsonvue.com/us/en/nclex.html", desc: "Register for and schedule the NCLEX exam.", tags: ["Official", "Global"] },
        { name: "CGFNS International", url: "https://www.cgfns.org", desc: "Credential verification (CES) and certification for nurses migrating to the US and beyond.", tags: ["Official", "Global"] },
        { name: "Prometric", url: "https://www.prometric.com", desc: "Testing provider for many Gulf/HAAD/DHA/MOH and other nursing licensure exams.", tags: ["Official", "Global"] }
      ]
    },
    {
      id: "research", name: "Free Research Databases", icon: "🔬",
      blurb: "Search peer-reviewed evidence — most are free and open to everyone.",
      links: [
        { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov", desc: "The primary biomedical literature database (35M+ citations) from the US NLM.", tags: ["Free", "Global"] },
        { name: "PubMed Central (PMC)", url: "https://www.ncbi.nlm.nih.gov/pmc/", desc: "Free full-text archive of biomedical and life-science journal articles.", tags: ["Free", "Global"] },
        { name: "Cochrane Library", url: "https://www.cochranelibrary.com", desc: "Systematic reviews — the gold standard for evidence-based practice.", tags: ["Free", "Global"] },
        { name: "DOAJ — Directory of Open Access Journals", url: "https://doaj.org", desc: "Index of quality, peer-reviewed, fully open-access journals.", tags: ["Free", "Global"] },
        { name: "Research4Life (HINARI)", url: "https://www.research4life.org", desc: "WHO programme giving low-income countries free/low-cost access to health research.", tags: ["Free", "Global"] },
        { name: "Europe PMC", url: "https://europepmc.org", desc: "Free life-sciences literature with full text and linked data.", tags: ["Free", "Global"] },
        { name: "Google Scholar", url: "https://scholar.google.com", desc: "Broad scholarly search across disciplines with citation tracking.", tags: ["Free", "Global"] },
        { name: "TRIP Database", url: "https://www.tripdatabase.com", desc: "Clinical search engine for evidence-based answers to practice questions.", tags: ["Free", "Global"] }
      ]
    },
    {
      id: "statistics", name: "Statistics & Data-Skills Learning", icon: "📊",
      blurb: "Learn biostatistics and run analyses — free courses and free software.",
      links: [
        { name: "Khan Academy — Statistics & Probability", url: "https://www.khanacademy.org/math/statistics-probability", desc: "Free, structured video course from the basics to inferential statistics.", tags: ["Free", "Global"] },
        { name: "OpenIntro Statistics", url: "https://www.openintro.org", desc: "Free, well-regarded statistics textbooks, videos, and datasets.", tags: ["Free", "Global"] },
        { name: "JASP", url: "https://jasp-stats.org", desc: "Free, open-source statistics software with a friendly interface (SPSS-like).", tags: ["Free", "Global"] },
        { name: "jamovi", url: "https://www.jamovi.org", desc: "Free, open statistical software built for real analysis and teaching.", tags: ["Free", "Global"] },
        { name: "Coursera — Biostatistics (audit free)", url: "https://www.coursera.org/search?query=biostatistics", desc: "University biostatistics courses; audit most for free.", tags: ["Free", "Global"] }
      ]
    },
    {
      id: "guidelines", name: "Evidence & Clinical Guidelines", icon: "📋",
      blurb: "Trusted guidelines and evidence-based practice resources.",
      links: [
        { name: "JBI (Joanna Briggs Institute)", url: "https://jbi.global", desc: "Evidence-based healthcare, systematic-review methods, and best-practice tools.", tags: ["Official", "Global"] },
        { name: "NICE Guidelines (UK)", url: "https://www.nice.org.uk/guidance", desc: "National Institute for Health and Care Excellence — clinical guidance.", tags: ["Free", "Global"] },
        { name: "WHO Guidelines", url: "https://www.who.int/publications/who-guidelines", desc: "WHO clinical and public-health guidelines library.", tags: ["Free", "Global"] },
        { name: "RNAO Best Practice Guidelines", url: "https://rnao.ca/bpg", desc: "Registered Nurses' Association of Ontario — free nursing BPGs.", tags: ["Free", "Global"] },
        { name: "CDC", url: "https://www.cdc.gov", desc: "US Centers for Disease Control — infection control, immunization, and clinical resources.", tags: ["Free", "Global"] }
      ]
    },
    {
      id: "journals", name: "Open-Access Nursing Journals", icon: "📰",
      blurb: "Read and publish nursing research — open-access titles.",
      links: [
        { name: "BMC Nursing", url: "https://bmcnurs.biomedcentral.com", desc: "Peer-reviewed open-access journal covering all areas of nursing.", tags: ["Free", "Global"] },
        { name: "Nursing Open (Wiley)", url: "https://onlinelibrary.wiley.com/journal/20541058", desc: "Open-access journal for nursing and midwifery research.", tags: ["Free", "Global"] },
        { name: "PLOS ONE", url: "https://journals.plos.org/plosone/", desc: "Multidisciplinary open-access journal — widely cited health research.", tags: ["Free", "Global"] },
        { name: "Journal of Advanced Nursing", url: "https://onlinelibrary.wiley.com/journal/13652648", desc: "Leading international nursing research journal (some open-access content).", tags: ["Global"] }
      ]
    }
  ];

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); }
  function host(u) { try { return new URL(u).hostname.replace(/^www\./, ""); } catch (e) { return ""; } }

  function linkCard(l) {
    var tags = (l.tags || []).map(function (t) { return '<span class="res-tag res-tag-' + t.toLowerCase() + '">' + esc(t) + "</span>"; }).join("");
    return '<a class="res-card" href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer">' +
      '<div class="res-card-head"><span class="res-card-name">' + esc(l.name) + "</span>" + tags + "</div>" +
      '<p class="res-card-desc">' + esc(l.desc) + "</p>" +
      '<span class="res-card-host">' + esc(host(l.url)) + " ↗</span></a>";
  }

  function render(query, cat) {
    var root = document.getElementById("resource-root");
    if (!root) return;
    query = (query || "").trim().toLowerCase();
    var html = "", shown = 0;
    CATEGORIES.forEach(function (c) {
      if (cat && cat !== "all" && cat !== c.id) return;
      var links = c.links.filter(function (l) {
        if (!query) return true;
        return (l.name + " " + l.desc + " " + (l.tags || []).join(" ")).toLowerCase().indexOf(query) >= 0;
      });
      if (!links.length) return;
      shown += links.length;
      html += '<section class="res-section"><h2 class="res-h2"><span aria-hidden="true">' + c.icon + "</span> " + esc(c.name) +
        ' <span class="res-count">' + links.length + "</span></h2>" +
        '<p class="res-blurb">' + esc(c.blurb) + "</p>" +
        '<div class="res-grid">' + links.map(linkCard).join("") + "</div></section>";
    });
    if (!shown) html = '<p class="res-empty">No resources match “' + esc(query) + "”. Try another word.</p>";
    root.innerHTML = html;
  }

  function chips() {
    var bar = document.getElementById("resource-chips");
    if (!bar) return;
    var all = '<button class="res-chip is-active" data-cat="all">All</button>';
    var rest = CATEGORIES.map(function (c) { return '<button class="res-chip" data-cat="' + c.id + '">' + c.icon + " " + esc(c.name.split(" ")[0]) + "</button>"; }).join("");
    bar.innerHTML = all + rest;
  }

  function init() {
    chips();
    render("", "all");
    var search = document.getElementById("resource-search");
    var curCat = "all";
    if (search) search.addEventListener("input", function () { render(search.value, curCat); });
    var bar = document.getElementById("resource-chips");
    if (bar) bar.addEventListener("click", function (e) {
      var b = e.target.closest(".res-chip"); if (!b) return;
      curCat = b.getAttribute("data-cat");
      bar.querySelectorAll(".res-chip").forEach(function (x) { x.classList.toggle("is-active", x === b); });
      render(search ? search.value : "", curCat);
    });
  }

  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);
})();
