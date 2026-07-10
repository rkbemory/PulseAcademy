/* Pulse for Nurses — Nurse CV Builder (Europass-inspired).
   Form on the left, live A4 preview on the right, 3 classic templates,
   reorderable sections, print-to-PDF, and local save/import. No backend. */
(function () {
  "use strict";

  var LS = "pulse:cv:v1";
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var CEFR = ["A1", "A2", "B1", "B2", "C1", "C2"];

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c];
    });
  }
  function el(tag, cls, html) { var n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; }
  function uid() { cvSeq++; return "s" + cvSeq; }
  var cvSeq = 0;
  function mon(v) {                       // "2023-06" -> "Jun 2023"
    if (!v) return "";
    if (v === "present") return "Present";
    var m = String(v).match(/^(\d{4})-(\d{2})/);
    if (!m) return esc(v);
    return MONTHS[parseInt(m[2], 10) - 1] + " " + m[1];
  }
  function range(a, b) {
    var s = mon(a), e = mon(b);
    if (s && e) return s + " – " + e;
    return s || e || "";
  }
  function linkify(u) { return /^https?:\/\//i.test(u) ? u : "https://" + u; }

  /* ---------------- Section schema ---------------- */
  var SCHEMA = {
    summary: {
      label: "Professional Summary", icon: "📝", single: true,
      fields: [{ k: "text", label: "About you (career objective / profile)", type: "textarea", ph: "Dedicated registered nurse with 3 years of ICU experience, seeking to…" }]
    },
    education: {
      label: "Education", icon: "🎓",
      fields: [
        { k: "course", label: "Course / Degree", req: true, ph: "B.Sc. in Nursing" },
        { k: "institute", label: "Institute / University", ph: "College of Nursing, Dhaka" },
        { k: "start", label: "Start", type: "month" },
        { k: "end", label: "End", type: "month", cur: true },
        { k: "grade", label: "CGPA / Result", ph: "CGPA 3.85 / 4.00" },
        { k: "medium", label: "Medium of instruction", ph: "English" },
        { k: "thesis", label: "Thesis / Dissertation (optional)", type: "textarea" }
      ]
    },
    experience: {
      label: "Professional Experience", icon: "💼",
      fields: [
        { k: "role", label: "Role / Designation", req: true, ph: "Staff Nurse" },
        { k: "org", label: "Institute / Organization", ph: "Dhaka Medical College Hospital" },
        { k: "dept", label: "Department / Unit", ph: "ICU" },
        { k: "address", label: "Address", ph: "Dhaka, Bangladesh" },
        { k: "start", label: "Start", type: "month" },
        { k: "end", label: "End", type: "month", cur: true },
        { k: "supervisor", label: "Supervisor (optional)", ph: "Ms. ..." },
        { k: "supPhone", label: "Supervisor phone (optional)" },
        { k: "details", label: "Key responsibilities (optional)", type: "textarea" }
      ]
    },
    license: {
      label: "Professional License", icon: "📜",
      fields: [
        { k: "authority", label: "Licensing authority", req: true, ph: "Bangladesh Nursing & Midwifery Council (BNMC)" },
        { k: "regNo", label: "Registration No. (optional)", ph: "RN-XXXXXX" },
        { k: "start", label: "Issued", type: "month" },
        { k: "end", label: "Valid up to", type: "month", cur: true }
      ]
    },
    languages: {
      label: "Language Skills", icon: "🗣️",
      note: "For your mother tongue, just tick the box. For other languages, rate the five skills on the European (CEFR) scale — A1 (basic) to C2 (mastery).",
      fields: [
        { k: "language", label: "Language", req: true, ph: "English" },
        { k: "mother", label: "Mother tongue", type: "check" },
        { k: "listening", label: "Listening", type: "cefr" },
        { k: "reading", label: "Reading", type: "cefr" },
        { k: "spokenInt", label: "Spoken interaction", type: "cefr" },
        { k: "spokenProd", label: "Spoken production", type: "cefr" },
        { k: "writing", label: "Writing", type: "cefr" },
        { k: "exam", label: "Certificate / exam (optional)", ph: "IELTS 7.5 · OET B" }
      ]
    },
    skills: {
      label: "Skills & Competencies", icon: "🩺", simple: true, addWord: "skill",
      fields: [{ k: "skill", label: "Skill / competency", req: true, ph: "IV cannulation · ECG · Ventilator care · EMR" }]
    },
    training: {
      label: "Training & Courses", icon: "📚",
      fields: [
        { k: "name", label: "Training / Course name", req: true, ph: "Basic Life Support (BLS)" },
        { k: "type", label: "Type", type: "select", options: ["Clinical", "Professional", "Research", "Statistics", "Academic", "Other"] },
        { k: "org", label: "Organization", ph: "..." },
        { k: "start", label: "From", type: "month" },
        { k: "end", label: "To", type: "month" }
      ]
    },
    research: {
      label: "Research Interests", icon: "🔬", simple: true, addWord: "interest",
      fields: [{ k: "interest", label: "Research interest", req: true, ph: "Maternal & child health" }]
    },
    publications: {
      label: "Research / Publications", icon: "📄",
      fields: [
        { k: "title", label: "Title", req: true, ph: "Article / paper title" },
        { k: "journal", label: "Journal / Venue" },
        { k: "date", label: "Published", type: "month" },
        { k: "doi", label: "DOI (optional)", ph: "10.xxxx/xxxxx" },
        { k: "link", label: "Link (optional)", type: "url" }
      ]
    },
    memberships: {
      label: "Networks & Memberships", icon: "🤝",
      fields: [
        { k: "org", label: "Organization", req: true, ph: "Bangladesh Nurses Association" },
        { k: "role", label: "Role / Position", ph: "Member / Executive" },
        { k: "institute", label: "Institute (optional)" },
        { k: "location", label: "Location (optional)" },
        { k: "start", label: "From", type: "month" },
        { k: "end", label: "To", type: "month", cur: true }
      ]
    },
    references: {
      label: "References", icon: "👤",
      fields: [
        { k: "name", label: "Name", req: true, ph: "Prof. Dr. ..." },
        { k: "role", label: "Relationship", type: "select", options: ["Academic Supervisor", "Professional Supervisor", "Colleague", "Other"] },
        { k: "org", label: "Organization / Designation", ph: "Professor, College of Nursing" },
        { k: "address", label: "Address (optional)" },
        { k: "phone", label: "Phone" },
        { k: "email", label: "Email", type: "email" }
      ]
    }
  };
  var SECTION_ORDER = ["summary", "education", "experience", "license", "languages", "skills", "training", "research", "publications", "memberships", "references"];

  /* ---------------- State ---------------- */
  var state;
  function blankItem(type) { var it = {}; SCHEMA[type].fields.forEach(function (f) { it[f.k] = f.type === "check" ? false : ""; }); it._id = uid(); return it; }
  function defaultState() {
    return {
      personal: { name: "", title: "", dob: "", nationality: "", phone: "", email: "", address: "", photo: "", links: [{ label: "LinkedIn", url: "" }] },
      sections: ["summary", "education", "experience", "license", "languages", "skills", "references"].map(function (t) {
        return { _id: uid(), type: t, items: [blankItem(t)] };
      }),
      template: "modern",
      accent: "#14387A",
      declaration: { enabled: false, text: "I hereby declare that the information provided above is true and correct to the best of my knowledge.", showSign: true }
    };
  }
  function load() {
    try { var d = JSON.parse(localStorage.getItem(LS)); if (d && d.personal && Array.isArray(d.sections)) { d.sections.forEach(function (s) { s._id = s._id || uid(); (s.items || []).forEach(function (i) { i._id = i._id || uid(); }); }); return d; } } catch (e) {}
    return defaultState();
  }
  var cvMirrorTimer = null;
  // Signed in → mirror the CV to the account (debounced) so it follows the user
  // across devices. syncProgress adopts the newest copy on sign-in (newest-wins).
  function mirrorCv() {
    if (!(window.PulseAuth && window.PulseAuth.user && window.PulseAuth.saveProgress)) return;
    if (cvMirrorTimer) clearTimeout(cvMirrorTimer);
    cvMirrorTimer = setTimeout(function () { try { window.PulseAuth.saveProgress("cv", "v1", state); } catch (e) {} }, 2500);
  }
  function save() {
    state.updatedAt = Date.now();
    try { localStorage.setItem(LS, JSON.stringify(state)); } catch (e) {}
    mirrorCv();
  }

  /* ---------------- Boot & views ---------------- */
  var rootEl = null, view = "welcome";
  function boot() {
    rootEl = document.getElementById("cv-root");
    if (!rootEl) return;
    state = load();
    renderApp();
  }
  function hasContent() {
    if (state.personal.name || state.personal.title) return true;
    return state.sections.some(function (s) { return s.items.some(has); });
  }
  function renderApp() {
    if (view === "welcome") { renderWelcome(); return; }
    rootEl.innerHTML =
      '<div class="cv-app">' +
        '<div class="cv-editor" id="cv-editor"></div>' +
        '<div class="cv-preview-col">' +
          '<div class="cv-toolbar" id="cv-toolbar"></div>' +
          '<div class="cv-preview" id="cv-preview"></div>' +
        "</div>" +
      "</div>";
    renderEditor();
    renderToolbar();
    renderPreview();
  }
  function featTile(ic, t, d) { return '<div class="cv-feat"><span class="cv-feat-ic">' + ic + "</span><strong>" + esc(t) + "</strong><span>" + esc(d) + "</span></div>"; }
  var ACCENTS = [["#14387A", "Navy"], ["#1E5F9C", "Blue"], ["#0E7490", "Teal"], ["#0F766E", "Green"], ["#6D28D9", "Purple"], ["#B4418E", "Magenta"]];
  function colourSwatches() {
    return '<div class="cv-colours">' + ACCENTS.map(function (a) {
      return '<button type="button" class="cv-swatch' + (state.accent === a[0] ? " is-on" : "") + '" data-c="' + a[0] + '" style="background:' + a[0] + '" title="' + a[1] + '" aria-label="Accent colour ' + a[1] + '"></button>';
    }).join("") + "</div>";
  }
  function tplThumb(id, name) {
    // Render a REAL mini-CV of the sample data in this template & colour, scaled to fit.
    var s = { template: id, accent: state.accent, personal: SAMPLE.personal, sections: SAMPLE.sections, declaration: SAMPLE.declaration };
    return '<button type="button" class="cv-tplcard' + (state.template === id ? " is-on" : "") + '" data-tpl="' + id + '">' +
      '<div class="cv-thumb"><div class="cv-thumb-inner">' + buildCV(s) + "</div></div>" +
      '<span class="cv-tplcard-name">' + esc(name) + '<span class="cv-tplcard-tick">✓</span></span></button>';
  }
  function renderWelcome() {
    var resume = hasContent();
    rootEl.innerHTML =
      '<div class="cv-welcome">' +
        '<div class="cv-welcome-ic">🧾</div>' +
        "<h2>Build your professional Nurse CV</h2>" +
        "<p>Create a clean, standard-format CV in minutes. Fill each section, watch it build live, choose a template, and download a print-ready PDF. Everything stays private on your device — nothing is uploaded.</p>" +
        '<div class="cv-welcome-feats">' +
          featTile("👁️", "Live preview", "See your CV update as you type") +
          featTile("🧩", "Add / remove sections", "Keep only the sections you need") +
          featTile("🗂️", "4 pro templates + colours", "Classic, Modern, Sidebar & Compact") +
          featTile("🔒", "Private & free", "Saved on your device · export PDF") +
        "</div>" +
        '<p class="cv-tplpick-h">Choose a template — you can switch any time</p>' +
        '<div class="cv-tplpick" id="cv-tplpick">' + tplThumb("classic", "Classic") + tplThumb("modern", "Modern") + tplThumb("sidebar", "Sidebar") + tplThumb("compact", "Compact") + "</div>" +
        '<p class="cv-tplpick-h">Accent colour</p>' +
        '<div id="cv-colourpick">' + colourSwatches() + "</div>" +
        '<div class="cv-welcome-actions">' +
          '<button type="button" class="btn btn-primary cv-start">' + (resume ? "Resume editing" : "Start CV Builder") + " →</button>" +
          '<label class="cv-tool cv-load-w">📂 Import a saved CV<input type="file" accept="application/json" hidden></label>' +
          (resume ? '<button type="button" class="cv-tool cv-fresh">Start fresh</button>' : "") +
        "</div>" +
        '<p class="cv-welcome-note">Sections available — Personal info · Professional summary · Education · Experience · Licence · Skills · Languages (CEFR) · Training · Publications · Memberships · References · Declaration.</p>' +
      "</div>";
    function refreshChooser() {
      var pick = document.getElementById("cv-tplpick");
      pick.innerHTML = tplThumb("classic", "Classic") + tplThumb("modern", "Modern") + tplThumb("sidebar", "Sidebar") + tplThumb("compact", "Compact");
      pick.querySelectorAll(".cv-tplcard").forEach(function (b) {
        b.addEventListener("click", function () { state.template = b.getAttribute("data-tpl"); save(); refreshChooser(); });
      });
      var cp = document.getElementById("cv-colourpick");
      cp.innerHTML = colourSwatches();
      cp.querySelectorAll(".cv-swatch").forEach(function (sw) {
        sw.addEventListener("click", function () { state.accent = sw.getAttribute("data-c"); save(); refreshChooser(); });
      });
    }
    refreshChooser();
    rootEl.querySelector(".cv-start").addEventListener("click", function () { view = "editor"; renderApp(); window.scrollTo(0, 0); });
    rootEl.querySelector(".cv-load-w input").addEventListener("change", importJSON);
    var fresh = rootEl.querySelector(".cv-fresh");
    if (fresh) fresh.addEventListener("click", function () { if (confirm("Start a new blank CV? Your current draft will be cleared.")) { state = defaultState(); save(); view = "editor"; renderApp(); } });
  }

  /* ---------------- Toolbar ---------------- */
  function renderToolbar() {
    var t = document.getElementById("cv-toolbar");
    var tpls = [["classic", "Classic"], ["modern", "Modern"], ["sidebar", "Sidebar"], ["compact", "Compact"]];
    t.innerHTML =
      '<div class="cv-tpls-wrap"><span class="cv-tpls-lab">Template:</span><div class="cv-tpls">' + tpls.map(function (x) {
        return '<button type="button" class="cv-tpl' + (state.template === x[0] ? " is-on" : "") + '" data-tpl="' + x[0] + '">' + x[1] + "</button>";
      }).join("") + "</div></div>" +
      '<div class="cv-tools">' +
        '<button type="button" class="cv-tool cv-print">⬇ Download PDF</button>' +
        '<button type="button" class="cv-tool cv-save">💾 Save file</button>' +
        '<label class="cv-tool cv-load">📂 Import<input type="file" accept="application/json" hidden></label>' +
      "</div>";
    t.querySelectorAll(".cv-tpl").forEach(function (b) {
      b.addEventListener("click", function () { state.template = b.getAttribute("data-tpl"); save(); renderToolbar(); renderPreview(); });
    });
    t.querySelector(".cv-print").addEventListener("click", function () { window.print(); });
    t.querySelector(".cv-save").addEventListener("click", downloadJSON);
    t.querySelector(".cv-load input").addEventListener("change", importJSON);
  }
  function downloadJSON() {
    var name = (state.personal.name || "my").split(/\s+/)[0].toLowerCase();
    var blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    var a = el("a"); a.href = URL.createObjectURL(blob); a.download = "pulse-cv-" + name + ".json"; a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }
  function importJSON(e) {
    var f = e.target.files[0]; if (!f) return;
    var r = new FileReader();
    r.onload = function () {
      try { var d = JSON.parse(r.result); if (d && d.personal && Array.isArray(d.sections)) { state = d; state.sections.forEach(function (s) { s._id = s._id || uid(); (s.items || []).forEach(function (i) { i._id = i._id || uid(); }); }); save(); view = "editor"; renderApp(); } }
      catch (err) { alert("That file could not be read as a Pulse CV."); }
    };
    r.readAsText(f);
  }

  function handlePhoto(file) {
    if (!file) return;
    var r = new FileReader();
    r.onload = function () {
      var img = new Image();
      img.onload = function () {
        var max = 360, w = img.width, h = img.height;
        if (w > h && w > max) { h = Math.round(h * max / w); w = max; }
        else if (h > max) { w = Math.round(w * max / h); h = max; }
        var c = el("canvas"); c.width = w; c.height = h;
        c.getContext("2d").drawImage(img, 0, 0, w, h);
        state.personal.photo = c.toDataURL("image/jpeg", 0.85);
        save(); renderEditor(); renderPreview();
      };
      img.onerror = function () { alert("That image could not be read."); };
      img.src = r.result;
    };
    r.readAsDataURL(file);
  }

  /* ---------------- Editor (left) ---------------- */
  function renderEditor() {
    var ed = document.getElementById("cv-editor");
    ed.innerHTML = "";
    ed.appendChild(editorBar());
    ed.appendChild(personalCard());
    ed.appendChild(sectionManagerCard());
    state.sections.forEach(function (sec, i) { ed.appendChild(sectionCard(sec, i)); });
    ed.appendChild(declarationCard());
  }

  function editorBar() {
    var bar = el("div", "cv-ebar");
    var back = el("button", "cv-back-btn", "← Start screen"); back.type = "button";
    back.addEventListener("click", function () { view = "welcome"; renderApp(); window.scrollTo(0, 0); });
    bar.appendChild(back);
    bar.appendChild(el("span", "cv-ebar-hint", "Fill the sections — your CV builds live on the right →"));
    return bar;
  }

  function sectionManagerCard() {
    var card = el("div", "cv-card cv-manage");
    var head = el("div", "cv-card-head");
    head.innerHTML = '<span class="cv-card-title">🧩 Add or remove sections</span><button type="button" class="cv-manage-toggle" aria-expanded="false">Manage ▾</button>';
    card.appendChild(head);
    var body = el("div", "cv-manage-body"); body.hidden = true;
    body.appendChild(el("p", "cv-note", "Tick the sections you want. Use ▲ ▼ on each section below to reorder them."));
    var grid = el("div", "cv-manage-grid");
    SECTION_ORDER.forEach(function (t) {
      var present = state.sections.some(function (s) { return s.type === t; });
      var lab = el("label", "cv-manage-item" + (present ? " is-on" : ""));
      var cb = el("input"); cb.type = "checkbox"; cb.checked = present;
      cb.addEventListener("change", function () {
        if (cb.checked) { state.sections.push({ _id: uid(), type: t, items: [blankItem(t)] }); }
        else { for (var k = 0; k < state.sections.length; k++) { if (state.sections[k].type === t) { state.sections.splice(k, 1); break; } } }
        save(); renderEditor(); renderPreview();
      });
      lab.appendChild(cb); lab.appendChild(el("span", null, SCHEMA[t].icon + " " + esc(SCHEMA[t].label)));
      grid.appendChild(lab);
    });
    body.appendChild(grid);
    card.appendChild(body);
    head.querySelector(".cv-manage-toggle").addEventListener("click", function () {
      var btn = head.querySelector(".cv-manage-toggle"), open = body.hidden;
      body.hidden = !open; btn.setAttribute("aria-expanded", open ? "true" : "false"); btn.textContent = open ? "Manage ▴" : "Manage ▾";
    });
    return card;
  }

  function field(label, node) { var w = el("label", "cv-f"); w.appendChild(el("span", "cv-f-lab", esc(label))); w.appendChild(node); return w; }
  function input(val, oninput, ph, type) {
    var n = el("input", "cv-in"); n.type = type || "text"; n.value = val || ""; if (ph) n.placeholder = ph;
    n.addEventListener("input", function () { oninput(n.value); });
    return n;
  }
  function textarea(val, oninput, ph) {
    var n = el("textarea", "cv-in cv-ta"); n.rows = 2; n.value = val || ""; if (ph) n.placeholder = ph;
    n.addEventListener("input", function () { oninput(n.value); });
    return n;
  }

  function personalCard() {
    var p = state.personal;
    var card = el("div", "cv-card");
    card.appendChild(el("div", "cv-card-head", '<span class="cv-card-title">👤 Personal information</span><span class="cv-card-req">required</span>'));
    var body = el("div", "cv-card-body");
    function set(k) { return function (v) { p[k] = v; save(); renderPreview(); }; }
    // photo
    var prow = el("div", "cv-photo-row");
    prow.appendChild(el("span", "cv-f-lab", "Profile photo (optional)"));
    var pctrl = el("div", "cv-photo-ctrl");
    if (p.photo) { var thumb = el("img", "cv-photo-thumb"); thumb.src = p.photo; thumb.alt = ""; pctrl.appendChild(thumb); }
    var upl = el("label", "cv-add-mini", (p.photo ? "Change" : "Upload") + " photo");
    var fi = el("input"); fi.type = "file"; fi.accept = "image/*"; fi.hidden = true;
    fi.addEventListener("change", function () { handlePhoto(fi.files[0]); });
    upl.appendChild(fi); pctrl.appendChild(upl);
    if (p.photo) { var rmv = el("button", "cv-x", "Remove"); rmv.type = "button"; rmv.addEventListener("click", function () { p.photo = ""; save(); renderEditor(); renderPreview(); }); pctrl.appendChild(rmv); }
    prow.appendChild(pctrl);
    body.appendChild(prow);
    body.appendChild(field("Full name", input(p.name, set("name"), "Sharmin Akter")));
    body.appendChild(field("Professional title / headline", input(p.title, set("title"), "Registered Nurse · BNMC")));
    var grid = el("div", "cv-grid2");
    grid.appendChild(field("Phone", input(p.phone, set("phone"), "+880 1XXX-XXXXXX", "tel")));
    grid.appendChild(field("Email", input(p.email, set("email"), "name@email.com", "email")));
    grid.appendChild(field("Date of birth (optional)", input(p.dob, set("dob"), "", "date")));
    grid.appendChild(field("Nationality (optional)", input(p.nationality, set("nationality"), "Bangladeshi")));
    grid.appendChild(field("Address", input(p.address, set("address"), "Dhaka, Bangladesh")));
    body.appendChild(grid);
    // links
    var lw = el("div", "cv-links");
    lw.appendChild(el("span", "cv-f-lab", "Links (LinkedIn, ORCID, portfolio…)"));
    (p.links || []).forEach(function (lk, i) {
      var row = el("div", "cv-link-row");
      row.appendChild(input(lk.label, function (v) { lk.label = v; save(); renderPreview(); }, "Label"));
      row.appendChild(input(lk.url, function (v) { lk.url = v; save(); renderPreview(); }, "https://…"));
      var del = el("button", "cv-x", "×"); del.type = "button";
      del.addEventListener("click", function () { p.links.splice(i, 1); save(); renderEditor(); renderPreview(); });
      row.appendChild(del);
      lw.appendChild(row);
    });
    var addL = el("button", "cv-add-mini", "+ Add link"); addL.type = "button";
    addL.addEventListener("click", function () { p.links = p.links || []; p.links.push({ label: "", url: "" }); save(); renderEditor(); });
    lw.appendChild(addL);
    body.appendChild(lw);
    card.appendChild(body);
    return card;
  }

  function sectionCard(sec, idx) {
    var def = SCHEMA[sec.type];
    var card = el("div", "cv-card");
    var head = el("div", "cv-card-head");
    head.innerHTML = '<span class="cv-card-title">' + def.icon + " " + esc(def.label) + "</span>";
    var actions = el("span", "cv-card-actions");
    var up = el("button", "cv-ic-btn", "▲"); up.type = "button"; up.title = "Move up"; if (idx === 0) up.disabled = true;
    var down = el("button", "cv-ic-btn", "▼"); down.type = "button"; down.title = "Move down"; if (idx === state.sections.length - 1) down.disabled = true;
    var rm = el("button", "cv-ic-btn cv-ic-del", "🗑"); rm.type = "button"; rm.title = "Remove section";
    up.addEventListener("click", function () { move(idx, -1); });
    down.addEventListener("click", function () { move(idx, 1); });
    rm.addEventListener("click", function () { if (confirm("Remove the “" + def.label + "” section?")) { state.sections.splice(idx, 1); save(); renderEditor(); renderPreview(); } });
    var col = el("button", "cv-ic-btn cv-collapse", "▾"); col.type = "button"; col.title = "Collapse / expand";
    col.addEventListener("click", function () { var c = card.classList.toggle("is-collapsed"); col.textContent = c ? "▸" : "▾"; });
    actions.appendChild(up); actions.appendChild(down); actions.appendChild(rm); actions.appendChild(col);
    head.appendChild(actions);
    card.appendChild(head);

    var body = el("div", "cv-card-body");
    if (def.note) body.appendChild(el("p", "cv-note", esc(def.note)));
    sec.items.forEach(function (it, ii) { body.appendChild(itemBlock(sec, def, it, ii)); });
    if (!def.single) {
      var add = el("button", "cv-add", "+ Add " + (def.addWord || "entry")); add.type = "button";
      add.addEventListener("click", function () { sec.items.push(blankItem(sec.type)); save(); renderEditor(); renderPreview(); });
      body.appendChild(add);
    }
    card.appendChild(body);
    return card;
  }

  function itemBlock(sec, def, it, ii) {
    var blk = el("div", "cv-item");
    if (!def.simple && sec.items.length > 1) {
      var bar = el("div", "cv-item-bar");
      bar.appendChild(el("span", "cv-item-n", "#" + (ii + 1)));
      var del = el("button", "cv-x", "× remove"); del.type = "button";
      del.addEventListener("click", function () { sec.items.splice(ii, 1); save(); renderEditor(); renderPreview(); });
      bar.appendChild(del);
      blk.appendChild(bar);
    }
    var grid = el("div", (def.simple || def.single) ? "cv-grid1" : "cv-grid2");
    def.fields.forEach(function (f) {
      function set(v) { it[f.k] = v; save(); renderPreview(); }
      var node;
      if (f.type === "textarea") { node = field(f.label, textarea(it[f.k], set, f.ph)); node.classList.add("cv-f-wide"); }
      else if (f.type === "cefr") {
        var scf = el("select", "cv-in cv-cefr-sel");
        scf.appendChild(el("option", null, "—"));
        CEFR.forEach(function (o) { var op = el("option", null, o); op.value = o; if (it[f.k] === o) op.selected = true; scf.appendChild(op); });
        scf.addEventListener("change", function () { set(scf.value); });
        node = field(f.label, scf);
      }
      else if (f.type === "select") {
        var sel = el("select", "cv-in");
        sel.appendChild(el("option", null, "— select —"));
        f.options.forEach(function (o) { var op = el("option", null, esc(o)); op.value = o; if (it[f.k] === o) op.selected = true; sel.appendChild(op); });
        sel.addEventListener("change", function () { set(sel.value); });
        node = field(f.label, sel);
      } else if (f.type === "check") {
        var lab = el("label", "cv-check");
        var cb = el("input"); cb.type = "checkbox"; cb.checked = !!it[f.k];
        cb.addEventListener("change", function () { set(cb.checked); });
        lab.appendChild(cb); lab.appendChild(el("span", null, esc(f.label)));
        node = lab;
      } else {
        node = field(f.label, input(it[f.k], set, f.ph, f.type || "text"));
        if (f.cur) {
          var curLab = el("label", "cv-cur");
          var cc = el("input"); cc.type = "checkbox"; cc.checked = it[f.k] === "present";
          cc.addEventListener("change", function () { set(cc.checked ? "present" : ""); renderEditor(); });
          curLab.appendChild(cc); curLab.appendChild(el("span", null, "Present"));
          node.appendChild(curLab);
          if (it[f.k] === "present") { var inp = node.querySelector("input.cv-in"); if (inp) inp.disabled = true; }
        }
      }
      grid.appendChild(node);
    });
    blk.appendChild(grid);
    return blk;
  }

  function move(idx, dir) {
    var j = idx + dir; if (j < 0 || j >= state.sections.length) return;
    var t = state.sections[idx]; state.sections[idx] = state.sections[j]; state.sections[j] = t;
    save(); renderEditor(); renderPreview();
  }

  function addSectionBar() {
    var have = state.sections.map(function (s) { return s.type; });
    var avail = SECTION_ORDER.filter(function (t) { return have.indexOf(t) === -1; });
    var bar = el("div", "cv-addsec");
    if (!avail.length) { bar.innerHTML = '<span class="cv-addsec-none">All sections added.</span>'; return bar; }
    var sel = el("select", "cv-in");
    sel.appendChild(el("option", null, "+ Add a section…"));
    avail.forEach(function (t) { var o = el("option", null, SCHEMA[t].icon + " " + esc(SCHEMA[t].label)); o.value = t; sel.appendChild(o); });
    sel.addEventListener("change", function () {
      if (!sel.value) return;
      state.sections.push({ _id: uid(), type: sel.value, items: [blankItem(sel.value)] });
      save(); renderEditor(); renderPreview();
    });
    bar.appendChild(sel);
    return bar;
  }

  function declarationCard() {
    var d = state.declaration;
    var card = el("div", "cv-card");
    var head = el("div", "cv-card-head");
    head.innerHTML = '<span class="cv-card-title">✍️ Declaration &amp; signature</span>';
    var toggle = el("label", "cv-switch");
    var cb = el("input"); cb.type = "checkbox"; cb.checked = !!d.enabled;
    cb.addEventListener("change", function () { d.enabled = cb.checked; save(); renderEditor(); renderPreview(); });
    toggle.appendChild(cb); toggle.appendChild(el("span", null, "Include"));
    head.appendChild(toggle);
    card.appendChild(head);
    if (d.enabled) {
      var body = el("div", "cv-card-body");
      body.appendChild(field("Declaration text", textarea(d.text, function (v) { d.text = v; save(); renderPreview(); })));
      var sw = el("label", "cv-check");
      var s2 = el("input"); s2.type = "checkbox"; s2.checked = !!d.showSign;
      s2.addEventListener("change", function () { d.showSign = s2.checked; save(); renderPreview(); });
      sw.appendChild(s2); sw.appendChild(el("span", null, "Show signature & date line"));
      body.appendChild(sw);
      card.appendChild(body);
    }
    return card;
  }

  /* ---------------- Preview (right) ---------------- */
  function contactBits(p) {
    var c = [];
    if (p.phone) c.push("📞 " + esc(p.phone));
    if (p.email) c.push("✉ " + esc(p.email));
    if (p.address) c.push("📍 " + esc(p.address));
    if (p.dob) c.push("🎂 " + esc(fmtDOB(p.dob)));
    if (p.nationality) c.push("🌐 " + esc(p.nationality));
    (p.links || []).forEach(function (lk) { if (lk.url) c.push('<a href="' + esc(linkify(lk.url)) + '" target="_blank" rel="noopener">' + esc(lk.label || lk.url) + "</a>"); });
    return c;
  }
  function sectionsHTML(secs) {
    var h = "";
    (secs || []).forEach(function (sec) {
      var body = renderSection(sec);
      if (!body) return;
      h += '<section class="cv-s"><h2 class="cv-s-h">' + esc(SCHEMA[sec.type].label) + "</h2>" + body + "</section>";
    });
    return h;
  }
  function declHTML(st) {
    if (!(st.declaration && st.declaration.enabled)) return "";
    return '<section class="cv-s cv-decl"><h2 class="cv-s-h">Declaration</h2><p>' + esc(st.declaration.text) + "</p>" +
      (st.declaration.showSign ? '<div class="cv-sign"><div><span class="cv-sign-line"></span>Signature</div><div><span class="cv-sign-line"></span>Date</div></div>' : "") + "</section>";
  }
  var SIDE = ["skills", "languages", "research"];   // sections that live in the sidebar template's left column
  function buildCV(st) {
    var p = st.personal, accent = st.accent || "#14387A";
    var nameH = '<h1 class="cv-name">' + (esc(p.name) || '<span class="cv-ph">Your Name</span>') + "</h1>" + (p.title ? '<p class="cv-title">' + esc(p.title) + "</p>" : "");

    if (st.template === "sidebar") {
      var side = (st.sections || []).filter(function (s) { return SIDE.indexOf(s.type) >= 0; });
      var main = (st.sections || []).filter(function (s) { return SIDE.indexOf(s.type) < 0; });
      var cs = contactBits(p);
      return '<article class="cv-paper tpl-sidebar" style="--cv-accent:' + accent + '">' +
        '<aside class="cv-side">' +
          (p.photo ? '<img class="cv-photo" src="' + p.photo + '" alt="">' : "") +
          (cs.length ? '<h2 class="cv-s-h">Contact</h2><div class="cv-side-contact">' + cs.map(function (x) { return "<div>" + x + "</div>"; }).join("") + "</div>" : "") +
          sectionsHTML(side) +
        "</aside>" +
        '<div class="cv-main"><header class="cv-h"><div class="cv-h-text">' + nameH + "</div></header>" +
          sectionsHTML(main) + declHTML(st) +
        "</div></article>";
    }

    var contact = contactBits(p);
    return '<article class="cv-paper tpl-' + esc(st.template) + '" style="--cv-accent:' + accent + '">' +
      '<header class="cv-h' + (p.photo ? " has-photo" : "") + '">' +
        (p.photo ? '<img class="cv-photo" src="' + p.photo + '" alt="">' : "") +
        '<div class="cv-h-text">' + nameH +
          (contact.length ? '<p class="cv-contact">' + contact.map(function (x) { return "<span>" + x + "</span>"; }).join('<span class="cv-sep">·</span>') + "</p>" : "") +
        "</div>" +
      "</header>" +
      sectionsHTML(st.sections) + declHTML(st) +
      "</article>";
  }
  function renderPreview() { document.getElementById("cv-preview").innerHTML = buildCV(state); }

  /* Realistic sample data so template thumbnails show a true mini-CV. */
  var SAMPLE = {
    template: "classic",
    personal: { name: "Sharmin Akter", title: "Registered Nurse · BNMC", phone: "+880 1XXXXXXXXX", email: "sharmin.akter@email.com", address: "Dhaka, Bangladesh", nationality: "Bangladeshi", photo: "", links: [] },
    sections: [
      { type: "summary", items: [{ text: "Compassionate registered nurse with 3 years of ICU experience, seeking international opportunities in critical care." }] },
      { type: "education", items: [{ course: "B.Sc. in Nursing", institute: "College of Nursing, Dhaka", start: "2016-01", end: "2020-12", grade: "CGPA 3.8/4.0", medium: "English" }] },
      { type: "experience", items: [{ role: "Staff Nurse", org: "Dhaka Medical College Hospital", dept: "ICU", start: "2021-02", end: "present", details: "Critical-care nursing, medication administration and patient monitoring." }] },
      { type: "skills", items: [{ skill: "IV cannulation" }, { skill: "ECG" }, { skill: "Ventilator care" }, { skill: "EMR" }] },
      { type: "languages", items: [{ language: "Bengali", mother: true }, { language: "English", listening: "C1", reading: "C1", spokenInt: "B2", spokenProd: "B2", writing: "C1", exam: "IELTS 7.5" }] }
    ],
    declaration: { enabled: false }
  };
  function fmtDOB(v) { var m = String(v).match(/^(\d{4})-(\d{2})-(\d{2})/); return m ? (m[3] + " " + MONTHS[parseInt(m[2], 10) - 1] + " " + m[1]) : v; }

  function has(it) { for (var k in it) { if (k !== "_id" && it[k]) return true; } return false; }
  function renderSection(sec) {
    var items = sec.items.filter(has);
    if (!items.length) return "";
    var t = sec.type;
    if (t === "summary") return '<p class="cv-summary">' + esc(items[0].text).replace(/\n/g, "<br>") + "</p>";
    if (t === "skills") return '<div class="cv-skills">' + items.map(function (i) { return '<span class="cv-skill">' + esc(i.skill) + "</span>"; }).join("") + "</div>";
    if (t === "research") return '<p class="cv-interests">' + items.map(function (i) { return esc(i.interest); }).join(" · ") + "</p>";
    if (t === "languages") return '<ul class="cv-langs">' + items.map(function (i) {
      if (i.mother) return "<li><strong>" + esc(i.language) + "</strong> — Mother tongue" + (i.exam ? ' <span class="cv-mut">(' + esc(i.exam) + ")</span>" : "") + "</li>";
      var sk = [["Listening", i.listening], ["Reading", i.reading], ["Spoken interaction", i.spokenInt], ["Spoken production", i.spokenProd], ["Writing", i.writing]].filter(function (s) { return s[1]; });
      var g = sk.length ? sk.map(function (s) { return esc(s[0]) + " <b>" + esc(s[1]) + "</b>"; }).join('<span class="cv-sep">·</span>') : "";
      return "<li><strong>" + esc(i.language) + "</strong>" + (g ? ' — <span class="cv-cefr">' + g + "</span>" : "") + (i.exam ? ' <span class="cv-mut">· ' + esc(i.exam) + "</span>" : "") + "</li>";
    }).join("") + "</ul>";
    if (t === "references") return '<div class="cv-refs">' + items.map(function (i) {
      var line2 = [i.org, i.address].filter(Boolean).map(esc).join(", ");
      var line3 = [i.phone ? "📞 " + esc(i.phone) : "", i.email ? "✉ " + esc(i.email) : ""].filter(Boolean).join("  ");
      return '<div class="cv-ref"><strong>' + esc(i.name) + "</strong>" + (i.role ? ' <span class="cv-mut">— ' + esc(i.role) + "</span>" : "") +
        (line2 ? "<br>" + line2 : "") + (line3 ? '<br><span class="cv-mut">' + line3 + "</span>" : "") + "</div>";
    }).join("") + "</div>";

    // default entry layout (education / experience / license / training / publications / memberships)
    return items.map(function (i) { return entry(t, i); }).join("");
  }
  function entry(t, i) {
    var title = "", sub = "", meta = [], dates = "", extra = "";
    if (t === "education") { title = i.course; sub = i.institute; dates = range(i.start, i.end); if (i.grade) meta.push(i.grade); if (i.medium) meta.push("Medium: " + i.medium); if (i.thesis) extra = i.thesis; }
    else if (t === "experience") { title = i.role; sub = [i.org, i.dept].filter(Boolean).join(" · "); dates = range(i.start, i.end); if (i.address) meta.push(i.address); if (i.supervisor) meta.push("Supervisor: " + i.supervisor + (i.supPhone ? " (" + i.supPhone + ")" : "")); if (i.details) extra = i.details; }
    else if (t === "license") { title = i.authority; dates = range(i.start, i.end); if (i.regNo) meta.push("Reg. No: " + i.regNo); }
    else if (t === "training") { title = i.name; sub = i.org; dates = range(i.start, i.end); if (i.type) meta.push(i.type); }
    else if (t === "publications") { title = i.title; sub = i.journal; dates = mon(i.date); if (i.doi) meta.push("DOI: " + i.doi); if (i.link) extra = '<a href="' + esc(linkify(i.link)) + '" target="_blank" rel="noopener">' + esc(i.link) + "</a>"; }
    else if (t === "memberships") { title = i.org; sub = [i.role, i.institute].filter(Boolean).join(" · "); dates = range(i.start, i.end); if (i.location) meta.push(i.location); }

    return '<div class="cv-e">' +
      '<div class="cv-e-date">' + (dates ? esc(dates) : "") + "</div>" +
      '<div class="cv-e-body">' +
        '<div class="cv-e-title">' + esc(title) + "</div>" +
        (sub ? '<div class="cv-e-sub">' + esc(sub) + "</div>" : "") +
        (meta.length ? '<div class="cv-e-meta">' + meta.map(esc).join('<span class="cv-sep">·</span>') + "</div>" : "") +
        (extra ? '<div class="cv-e-extra">' + (t === "publications" ? extra : esc(extra)) + "</div>" : "") +
      "</div>" +
    "</div>";
  }

  if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);
})();
