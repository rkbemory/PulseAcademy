/* IELTS Academic Writing — 5 sets. Task 1 uses a different visual each time
   (pie chart, line graph, bar chart, table, process diagram); Task 2 is an
   opinion/discussion essay. Live word counter + 60-min timer in the renderer;
   AI band scoring is the Pro feature. Original figures, IELTS-style prompts. */
window.IELTS = window.IELTS || {}; window.IELTS.data = window.IELTS.data || {};

/* --- pie helper: slices = [{pct, fill, tcol, label}] --- */
function ieltsPie(cx, cy, r, slices) {
  var ang = -Math.PI / 2, out = "";
  slices.forEach(function (s) {
    var a1 = ang + s.pct / 100 * 2 * Math.PI;
    var x0 = cx + r * Math.cos(ang), y0 = cy + r * Math.sin(ang);
    var x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    var large = s.pct > 50 ? 1 : 0;
    out += '<path d="M' + cx + ' ' + cy + ' L' + x0.toFixed(1) + ' ' + y0.toFixed(1) + ' A' + r + ' ' + r + ' 0 ' + large + ' 1 ' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' Z" fill="' + s.fill + '" stroke="#fff" stroke-width="1.5"/>';
    var mid = (ang + a1) / 2, lx = cx + r * 0.62 * Math.cos(mid), ly = cy + r * 0.62 * Math.sin(mid);
    out += '<text x="' + lx.toFixed(1) + '" y="' + (ly + 3).toFixed(1) + '" text-anchor="middle" font-size="10" font-weight="700" fill="' + (s.tcol || "#1a1a1a") + '">' + s.pct + '%</text>';
    ang = a1;
  });
  return out;
}
function ieltsLegend(x, y, items) {
  return items.map(function (it, i) {
    var yy = y + i * 17;
    return '<rect x="' + x + '" y="' + (yy - 8) + '" width="11" height="11" fill="' + it.fill + '"/>' +
      '<text x="' + (x + 17) + '" y="' + yy + '" font-size="9.5" fill="#334155">' + it.label + "</text>";
  }).join("");
}

window.IELTS.data.writing = {
  /* ===== Set 1 — PIE CHART + TABLE ===== */
  "writing-1": {
    task1: {
      minWords: 150, timeSuggest: "~20 min",
      prompt: "The pie chart shows the categories of people who used a university library, and the table shows how satisfied those users were with five aspects of the library's service. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      figure: '<svg viewBox="0 0 400 480" role="img" aria-label="Pie chart of library user categories and a table of user satisfaction" font-family="Inter, sans-serif">' +
        '<text x="200" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#123">Categories of library users</text>' +
        ieltsPie(200, 118, 86, [
          { pct: 44, fill: "#2E5E9E", tcol: "#fff" },
          { pct: 25, fill: "#5A86C0", tcol: "#fff" },
          { pct: 16, fill: "#95B6DE", tcol: "#123" },
          { pct: 8, fill: "#C2D5EC", tcol: "#123" },
          { pct: 7, fill: "#E4ECF6", tcol: "#123" }
        ]) +
        ieltsLegend(60, 228, [
          { fill: "#2E5E9E", label: "Full-time undergraduate (44%)" },
          { fill: "#5A86C0", label: "Full-time postgraduate (25%)" },
          { fill: "#95B6DE", label: "Part-time postgraduate (16%)" },
          { fill: "#C2D5EC", label: "Distance learning (8%)" },
          { fill: "#E4ECF6", label: "Academic staff (7%)" }
        ]) +
        '<text x="200" y="332" text-anchor="middle" font-size="12" font-weight="700" fill="#123">Library user satisfaction (%)</text>' +
        (function () {
          var rows = [["", "Very", "Fairly", "Not"], ["Opening hours", "65", "35", "0"], ["Helpfulness of staff", "95", "5", "0"], ["Availability of books", "50", "40", "10"], ["Availability of journals", "45", "35", "20"], ["Reliability of wi-fi", "48", "33", "19"]];
          var y0 = 344, rh = 21, out = "";
          rows.forEach(function (r, i) {
            var y = y0 + i * rh;
            if (i === 0) out += '<rect x="18" y="' + y + '" width="364" height="' + rh + '" fill="#E8F0F4"/>';
            out += '<text x="26" y="' + (y + 15) + '" font-size="9.5" font-weight="' + (i === 0 ? "700" : "400") + '" fill="#123">' + r[0] + "</text>";
            [1, 2, 3].forEach(function (c) { out += '<text x="' + (222 + (c - 1) * 62) + '" y="' + (y + 15) + '" text-anchor="middle" font-size="9.5" font-weight="' + (i === 0 ? "700" : "400") + '" fill="#334155">' + r[c] + "</text>"; });
          });
          out += '<rect x="18" y="' + y0 + '" width="364" height="' + (rh * rows.length) + '" fill="none" stroke="#B7C2CE"/>';
          [1, 2, 3, 4, 5].forEach(function (i) { out += '<line x1="18" y1="' + (y0 + i * rh) + '" x2="382" y2="' + (y0 + i * rh) + '" stroke="#D8DEE6"/>'; });
          [190, 252, 314].forEach(function (x) { out += '<line x1="' + x + '" y1="' + y0 + '" x2="' + x + '" y2="' + (y0 + rh * rows.length) + '" stroke="#D8DEE6"/>'; });
          return out;
        })() + "</svg>"
    },
    task2: {
      minWords: 250, timeSuggest: "~40 min",
      prompt: "The best way to provide enough homes in large cities is to build tall apartment blocks. To what extent do you agree or disagree with this statement? Give reasons for your answer and include any relevant examples from your own knowledge or experience."
    }
  },

  /* ===== Set 2 — LINE GRAPH ===== */
  "writing-2": {
    task1: {
      minWords: 150, timeSuggest: "~20 min",
      prompt: "The line graph shows the number of jobs (in millions) in four sectors of the economy of one country between 1960 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      figure: '<svg viewBox="0 0 440 250" role="img" aria-label="Line graph of jobs in four economic sectors, 1960 to 2020" font-family="Inter, sans-serif">' +
        '<line x1="44" y1="14" x2="44" y2="196" stroke="#94A3B8"/><line x1="44" y1="196" x2="430" y2="196" stroke="#94A3B8"/>' +
        '<text x="10" y="16" font-size="9" fill="#64748B">m</text>' +
        [0, 5, 10, 15, 20, 25].map(function (v) { var y = 196 - v / 25 * 182; return '<line x1="44" y1="' + y.toFixed(0) + '" x2="430" y2="' + y.toFixed(0) + '" stroke="#EDF1F5"/><text x="40" y="' + (y + 3).toFixed(0) + '" text-anchor="end" font-size="8" fill="#94A3B8">' + v + "</text>"; }).join("") +
        (function () {
          var yr = [70, 190, 310, 420];
          function pts(v) { return v.map(function (n, i) { return yr[i] + "," + (196 - n / 25 * 182).toFixed(0); }).join(" "); }
          return '<polyline fill="none" stroke="#1E5F9C" stroke-width="2.5" points="' + pts([15, 20, 17, 13]) + '"/>' +
            '<polyline fill="none" stroke="#0E7490" stroke-width="2.5" points="' + pts([6, 10, 15, 16]) + '"/>' +
            '<polyline fill="none" stroke="#B4541E" stroke-width="2.5" stroke-dasharray="6 4" points="' + pts([6, 3, 3, 2]) + '"/>' +
            '<polyline fill="none" stroke="#6D28D9" stroke-width="2.5" stroke-dasharray="2 3" points="' + pts([2, 5, 11, 16]) + '"/>';
        })() +
        '<g font-size="9" fill="#334155"><text x="70" y="212" text-anchor="middle">1960</text><text x="190" y="212" text-anchor="middle">1980</text><text x="310" y="212" text-anchor="middle">2000</text><text x="420" y="212" text-anchor="middle">2020</text></g>' +
        '<g font-size="9"><rect x="80" y="228" width="10" height="4" fill="#1E5F9C"/><text x="94" y="234" fill="#334155">Manufacturing</text><rect x="200" y="228" width="10" height="4" fill="#0E7490"/><text x="214" y="234" fill="#334155">Retail</text><rect x="270" y="228" width="10" height="4" fill="#B4541E"/><text x="284" y="234" fill="#334155">Agriculture</text><rect x="360" y="228" width="10" height="4" fill="#6D28D9"/><text x="374" y="234" fill="#334155">Healthcare</text></g>' +
        "</svg>"
    },
    task2: {
      minWords: 250, timeSuggest: "~40 min",
      prompt: "Some people have decided to reduce the number of times they fly every year, or to stop flying altogether. Do you think the environmental benefits of this development outweigh the disadvantages for individuals and businesses? Give reasons for your answer and include any relevant examples from your own knowledge or experience."
    }
  },

  /* ===== Set 3 — BAR CHART ===== */
  "writing-3": {
    task1: {
      minWords: 150, timeSuggest: "~20 min",
      prompt: "The bar chart shows the number of students taking three types of dance class, divided into two age groups. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      figure: '<svg viewBox="0 0 440 250" role="img" aria-label="Bar chart of students in three dance classes by two age groups" font-family="Inter, sans-serif">' +
        '<line x1="70" y1="20" x2="70" y2="190" stroke="#94A3B8"/><line x1="70" y1="190" x2="420" y2="190" stroke="#94A3B8"/>' +
        [0, 100, 200, 300, 400, 500, 600, 700].map(function (v) { var x = 70 + v / 700 * 348; return '<line x1="' + x.toFixed(0) + '" y1="20" x2="' + x.toFixed(0) + '" y2="190" stroke="#EDF1F5"/><text x="' + x.toFixed(0) + '" y="203" text-anchor="middle" font-size="8" fill="#94A3B8">' + v + "</text>"; }).join("") +
        (function () {
          var groups = [["Ballet", 605, 295], ["Tap", 450, 420], ["Modern", 300, 520]];
          var out = "", gy = 34, gh = 52, bh = 18;
          groups.forEach(function (g, i) {
            var y = gy + i * gh;
            out += '<text x="64" y="' + (y + 20) + '" text-anchor="end" font-size="10" fill="#334155">' + g[0] + "</text>";
            out += '<rect x="70" y="' + y + '" width="' + (g[1] / 700 * 348).toFixed(0) + '" height="' + bh + '" fill="#95B6DE"/>';
            out += '<rect x="70" y="' + (y + bh + 2) + '" width="' + (g[2] / 700 * 348).toFixed(0) + '" height="' + bh + '" fill="#2E5E9E"/>';
          });
          return out;
        })() +
        '<g font-size="9"><rect x="150" y="224" width="11" height="11" fill="#95B6DE"/><text x="166" y="233" fill="#334155">Under 11</text><rect x="250" y="224" width="11" height="11" fill="#2E5E9E"/><text x="266" y="233" fill="#334155">Aged 11–16</text></g>' +
        '<text x="245" y="248" text-anchor="middle" font-size="9" fill="#64748B">Number of students</text>' +
        "</svg>"
    },
    task2: {
      minWords: 250, timeSuggest: "~40 min",
      prompt: "Many aspects of the way people dress today are influenced by global fashion trends. How has global fashion become such a strong influence on people's lives? Do you think this is a positive or negative development? Give reasons for your answer and include any relevant examples from your own knowledge or experience."
    }
  },

  /* ===== Set 4 — TABLE ===== */
  "writing-4": {
    task1: {
      minWords: 150, timeSuggest: "~20 min",
      prompt: "The table shows the percentage of households with internet access in four countries in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      figure: '<svg viewBox="0 0 420 210" role="img" aria-label="Table of household internet access by country in 2010 and 2020" font-family="Inter, sans-serif" font-size="12">' +
        '<rect x="10" y="14" width="400" height="30" fill="#E8F0F4"/>' +
        '<g fill="#123" font-weight="700"><text x="22" y="34">Country</text><text x="235" y="34" text-anchor="middle">2010</text><text x="345" y="34" text-anchor="middle">2020</text></g>' +
        (function () {
          var rows = [["Japan", "55", "85"], ["Brazil", "40", "78"], ["India", "20", "60"], ["Nigeria", "12", "50"]];
          var y0 = 44, rh = 34, out = "";
          rows.forEach(function (r, i) {
            var y = y0 + i * rh;
            out += '<text x="22" y="' + (y + 22) + '" fill="#334155">' + r[0] + "</text><text x=\"235\" y=\"" + (y + 22) + '" text-anchor="middle" fill="#334155">' + r[1] + "</text><text x=\"345\" y=\"" + (y + 22) + '" text-anchor="middle" fill="#334155">' + r[2] + "</text>";
          });
          out += '<rect x="10" y="14" width="400" height="' + (30 + rh * rows.length) + '" fill="none" stroke="#B7C2CE"/>';
          for (var i = 0; i <= rows.length; i++) out += '<line x1="10" y1="' + (44 + i * rh) + '" x2="410" y2="' + (44 + i * rh) + '" stroke="#D8DEE6"/>';
          [180, 290].forEach(function (x) { out += '<line x1="' + x + '" y1="14" x2="' + x + '" y2="' + (44 + rh * rows.length) + '" stroke="#D8DEE6"/>'; });
          return out;
        })() + "</svg>"
    },
    task2: {
      minWords: 250, timeSuggest: "~40 min",
      prompt: "In many countries, primary and secondary schools close for two months or more in the summer holidays. What is the value of long school holidays? What are the arguments in favour of shorter school holidays? Give reasons for your answer and include any relevant examples from your own knowledge or experience."
    }
  },

  /* ===== Set 5 — PROCESS DIAGRAM ===== */
  "writing-5": {
    task1: {
      minWords: 150, timeSuggest: "~20 min",
      prompt: "The diagram shows how ethanol, a type of biofuel, is produced from plants. Summarise the information by describing the main stages of the process.",
      /* Pictorial production cycle in the style of real IELTS figures:
         plants → harvest → chipping → cellulose → fermentation → ethanol → car,
         with the CO₂ from the exhaust returning to the plants. */
      figure: '<svg viewBox="0 0 720 430" role="img" aria-label="Illustrated cycle showing how ethanol biofuel is produced from plants and used as vehicle fuel" font-family="Inter, sans-serif">' +
        '<defs>' +
          '<marker id="e5b" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#1E5F9C"/></marker>' +
          '<marker id="e5o" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#D07E2A"/></marker>' +
        '</defs>' +
        '<circle cx="72" cy="72" r="13" fill="#F6C445"/>' +
        '<g stroke="#F6C445" stroke-width="2.5" stroke-linecap="round"><line x1="72" y1="50" x2="72" y2="57"/><line x1="72" y1="87" x2="72" y2="94"/><line x1="50" y1="72" x2="57" y2="72"/><line x1="87" y1="72" x2="94" y2="72"/></g>' +
        '<line x1="66" y1="150" x2="156" y2="150" stroke="#8A6B3F" stroke-width="3" stroke-linecap="round"/>' +
        '<g stroke="#4C8F2F" stroke-width="4" stroke-linecap="round"><line x1="100" y1="150" x2="100" y2="102"/><line x1="122" y1="150" x2="122" y2="92"/><line x1="144" y1="150" x2="144" y2="106"/></g>' +
        '<g fill="#6FAF4C"><ellipse cx="91" cy="108" rx="10" ry="4.5" transform="rotate(-28 91 108)"/><ellipse cx="109" cy="116" rx="10" ry="4.5" transform="rotate(28 109 116)"/><ellipse cx="113" cy="98" rx="10" ry="4.5" transform="rotate(-28 113 98)"/><ellipse cx="131" cy="106" rx="10" ry="4.5" transform="rotate(28 131 106)"/><ellipse cx="135" cy="112" rx="10" ry="4.5" transform="rotate(-28 135 112)"/><ellipse cx="153" cy="120" rx="10" ry="4.5" transform="rotate(28 153 120)"/></g>' +
        '<rect x="322" y="108" width="52" height="22" rx="4" fill="#C23B22"/>' +
        '<rect x="352" y="86" width="24" height="26" rx="3" fill="#D96A4A"/><rect x="356" y="90" width="16" height="12" rx="2" fill="#DCEEFA"/>' +
        '<rect x="330" y="90" width="5" height="18" fill="#55606B"/>' +
        '<circle cx="338" cy="138" r="16" fill="#3A444E"/><circle cx="338" cy="138" r="7" fill="#8B99A6"/>' +
        '<circle cx="388" cy="142" r="10" fill="#3A444E"/><circle cx="388" cy="142" r="4.5" fill="#8B99A6"/>' +
        '<polygon points="578,66 642,66 626,102 594,102" fill="#7A8894"/>' +
        '<rect x="584" y="102" width="52" height="34" rx="4" fill="#98A6B3"/>' +
        '<g fill="#D9B26A"><rect x="560" y="112" width="11" height="7" rx="2" transform="rotate(-18 560 112)"/><rect x="554" y="126" width="11" height="7" rx="2" transform="rotate(14 554 126)"/><rect x="566" y="138" width="11" height="7" rx="2" transform="rotate(-8 566 138)"/></g>' +
        '<path d="M196 108 L280 108" fill="none" stroke="#1E5F9C" stroke-width="3" marker-end="url(#e5b)"/>' +
        '<path d="M440 108 L534 108" fill="none" stroke="#1E5F9C" stroke-width="3" marker-end="url(#e5b)"/>' +
        '<path d="M610 196 L610 226" fill="none" stroke="#1E5F9C" stroke-width="3" marker-end="url(#e5b)"/>' +
        '<rect x="578" y="248" width="64" height="62" rx="4" fill="#B9C7D4"/>' +
        '<ellipse cx="610" cy="248" rx="32" ry="9" fill="#CEDAE4"/>' +
        '<text x="610" y="286" text-anchor="middle" font-size="11" font-weight="800" letter-spacing="1" fill="#26313B">CELLULOSE</text>' +
        '<path d="M326 250 L326 304 Q326 312 336 312 L384 312 Q394 312 394 304 L394 250" fill="#EFE7F8" stroke="#6D28D9" stroke-width="2.5"/>' +
        '<rect x="332" y="270" width="56" height="38" fill="#C9B2E8"/>' +
        '<g fill="#EFE7F8"><circle cx="346" cy="286" r="4"/><circle cx="362" cy="278" r="3.4"/><circle cx="376" cy="292" r="4"/><circle cx="356" cy="300" r="3"/></g>' +
        '<path d="M352 236 L360 252 L368 236" fill="#8FA3B8"/>' +
        '<rect x="84" y="248" width="52" height="64" rx="6" fill="#E0A33C" stroke="#A9761F" stroke-width="2"/>' +
        '<line x1="86" y1="266" x2="134" y2="266" stroke="#A9761F" stroke-width="2"/><line x1="86" y1="296" x2="134" y2="296" stroke="#A9761F" stroke-width="2"/>' +
        '<text x="110" y="285" text-anchor="middle" font-size="10.5" font-weight="800" letter-spacing="1" fill="#5A3D0E">ETHANOL</text>' +
        '<path d="M534 280 L440 280" fill="none" stroke="#1E5F9C" stroke-width="3" marker-end="url(#e5b)"/>' +
        '<path d="M282 280 L196 280" fill="none" stroke="#1E5F9C" stroke-width="3" marker-end="url(#e5b)"/>' +
        '<path d="M110 318 L110 394 L302 394" fill="none" stroke="#1E5F9C" stroke-width="3" marker-end="url(#e5b)"/>' +
        '<path d="M336 386 Q340 370 356 370 L384 370 Q398 370 402 386 Z" fill="#4F82D6"/>' +
        '<rect x="320" y="384" width="92" height="20" rx="8" fill="#2E63B8"/>' +
        '<circle cx="342" cy="406" r="7.5" fill="#22303F"/><circle cx="394" cy="406" r="7.5" fill="#22303F"/>' +
        '<path d="M424 392 L700 392 L700 26 L162 26" fill="none" stroke="#D07E2A" stroke-width="2.5" stroke-dasharray="8 6" marker-end="url(#e5o)"/>' +
        '<text x="446" y="18" font-size="13.5" font-weight="700" fill="#B4541E">CO&#8322; from the exhaust returns to the plants</text>' +
        '<g font-weight="800" font-size="13" text-anchor="middle"><circle cx="110" cy="46" r="12" fill="#1E5F9C"/><text x="110" y="50.5" fill="#fff">1</text><circle cx="360" cy="46" r="12" fill="#1E5F9C"/><text x="360" y="50.5" fill="#fff">2</text><circle cx="610" cy="46" r="12" fill="#1E5F9C"/><text x="610" y="50.5" fill="#fff">3</text><circle cx="610" cy="220" r="12" fill="#1E5F9C"/><text x="610" y="224.5" fill="#fff">4</text><circle cx="360" cy="220" r="12" fill="#1E5F9C"/><text x="360" y="224.5" fill="#fff">5</text><circle cx="110" cy="220" r="12" fill="#1E5F9C"/><text x="110" y="224.5" fill="#fff">6</text></g>' +
        '<g font-size="14.5" font-weight="700" fill="#14304F" text-anchor="middle">' +
          '<text x="110" y="172">Plants and trees grow</text><text x="110" y="189" font-size="12.5" font-weight="500" fill="#41546B">(absorb CO&#8322;)</text>' +
          '<text x="360" y="172">Harvesting</text>' +
          '<text x="610" y="158">Chipped and</text><text x="610" y="175" font-size="12.5" font-weight="500" fill="#41546B">pre-processed</text>' +
          '<text x="610" y="332">Processed into</text><text x="610" y="349" font-size="12.5" font-weight="500" fill="#41546B">cellulose</text>' +
          '<text x="360" y="332">Sugars and microbes</text><text x="360" y="349" font-size="12.5" font-weight="500" fill="#41546B">ferment the mixture</text>' +
          '<text x="110" y="332">Ethanol fuel</text><text x="110" y="349" font-size="12.5" font-weight="500" fill="#41546B">is produced</text>' +
          '<text x="366" y="424" font-size="12.5" font-weight="600" fill="#41546B">Used as vehicle fuel</text>' +
        '</g>' +
        "</svg>"
    },
    task2: {
      minWords: 250, timeSuggest: "~40 min",
      prompt: "Access to clean water is a basic human right, and therefore every home should have a water supply that is provided free of charge. Do you agree or disagree? Give reasons for your answer and include any relevant examples from your own knowledge or experience."
    }
  },

  /* ===== Set 6 — PIE CHART + TABLE (library) ===== */
  "writing-6": {
    task1: {
      minWords: 150, timeSuggest: "~20 min",
      prompt: "The pie chart shows the age profile of the members of a public library, and the table shows the percentage of loans made in each category of material. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      figure: '<svg viewBox="0 0 400 470" role="img" aria-label="Pie chart of library members by age and a table of loans by category" font-family="Inter, sans-serif">' +
        '<text x="200" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#123">Age of library members</text>' +
        ieltsPie(200, 116, 84, [{ pct: 51, fill: "#2E5E9E", tcol: "#fff" }, { pct: 22, fill: "#5A86C0", tcol: "#fff" }, { pct: 15, fill: "#95B6DE", tcol: "#123" }, { pct: 12, fill: "#C2D5EC", tcol: "#123" }]) +
        ieltsLegend(72, 224, [{ fill: "#2E5E9E", label: "Adults 18–64 (51%)" }, { fill: "#5A86C0", label: "Children (22%)" }, { fill: "#95B6DE", label: "Young adults 13–17 (15%)" }, { fill: "#C2D5EC", label: "Adults 65+ (12%)" }]) +
        '<text x="200" y="316" text-anchor="middle" font-size="12" font-weight="700" fill="#123">Total loans by category (%)</text>' +
        (function () {
          var rows = [["Category", "%"], ["Children's fiction", "38"], ["Children's non-fiction", "6"], ["Children's DVDs", "1"], ["Young adults", "2"], ["Adult fiction", "38"], ["Adult non-fiction", "13"], ["Adult audio books", "2"]];
          var y0 = 328, rh = 17, out = "";
          rows.forEach(function (r, i) {
            var y = y0 + i * rh;
            if (i === 0) out += '<rect x="40" y="' + y + '" width="320" height="' + rh + '" fill="#E8F0F4"/>';
            out += '<text x="50" y="' + (y + 13) + '" font-size="9.5" font-weight="' + (i === 0 ? "700" : "400") + '" fill="#123">' + r[0] + "</text>";
            out += '<text x="330" y="' + (y + 13) + '" text-anchor="middle" font-size="9.5" font-weight="' + (i === 0 ? "700" : "400") + '" fill="#334155">' + r[1] + "</text>";
          });
          out += '<rect x="40" y="' + y0 + '" width="320" height="' + (rh * rows.length) + '" fill="none" stroke="#B7C2CE"/>';
          for (var i = 1; i < rows.length; i++) out += '<line x1="40" y1="' + (y0 + i * rh) + '" x2="360" y2="' + (y0 + i * rh) + '" stroke="#D8DEE6"/>';
          out += '<line x1="300" y1="' + y0 + '" x2="300" y2="' + (y0 + rh * rows.length) + '" stroke="#D8DEE6"/>';
          return out;
        })() + "</svg>"
    },
    task2: {
      minWords: 250, timeSuggest: "~40 min",
      prompt: "All university undergraduate courses should include a period of time spent studying abroad or doing a work placement. Do you think the advantages of this would outweigh the disadvantages? Give reasons for your answer and include any relevant examples from your own knowledge or experience."
    }
  },

  /* ===== Set 7 — LINE GRAPH (metal prices) ===== */
  "writing-7": {
    task1: {
      minWords: 150, timeSuggest: "~20 min",
      prompt: "The line graph shows the price index of three metals (iron, nickel and tin) over one year. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      figure: '<svg viewBox="0 0 440 250" role="img" aria-label="Line graph of the price index of iron, nickel and tin over a year" font-family="Inter, sans-serif">' +
        '<line x1="44" y1="14" x2="44" y2="196" stroke="#94A3B8"/><line x1="44" y1="196" x2="430" y2="196" stroke="#94A3B8"/>' +
        [0, 35, 70, 105, 140].map(function (v) { var y = 196 - v / 140 * 182; return '<line x1="44" y1="' + y.toFixed(0) + '" x2="430" y2="' + y.toFixed(0) + '" stroke="#EDF1F5"/><text x="40" y="' + (y + 3).toFixed(0) + '" text-anchor="end" font-size="8" fill="#94A3B8">' + v + "</text>"; }).join("") +
        (function () {
          var xs = [70, 142, 214, 286, 358, 420];
          function pts(v) { return v.map(function (n, i) { return xs[i] + "," + (196 - n / 140 * 182).toFixed(0); }).join(" "); }
          return '<polyline fill="none" stroke="#1E5F9C" stroke-width="2.5" points="' + pts([120, 110, 104, 100, 95, 92]) + '"/>' +
            '<polyline fill="none" stroke="#B4541E" stroke-width="2.5" stroke-dasharray="6 4" points="' + pts([90, 104, 122, 114, 110, 118]) + '"/>' +
            '<polyline fill="none" stroke="#0E7490" stroke-width="2.5" stroke-dasharray="2 3" points="' + pts([100, 101, 100, 103, 105, 104]) + '"/>';
        })() +
        '<g font-size="9" fill="#334155"><text x="70" y="212" text-anchor="middle">Jan</text><text x="142" y="212" text-anchor="middle">Mar</text><text x="214" y="212" text-anchor="middle">May</text><text x="286" y="212" text-anchor="middle">Jul</text><text x="358" y="212" text-anchor="middle">Sep</text><text x="420" y="212" text-anchor="middle">Nov</text></g>' +
        '<g font-size="9"><rect x="120" y="228" width="10" height="4" fill="#1E5F9C"/><text x="134" y="234" fill="#334155">Iron</text><rect x="200" y="228" width="10" height="4" fill="#B4541E"/><text x="214" y="234" fill="#334155">Nickel</text><rect x="290" y="228" width="10" height="4" fill="#0E7490"/><text x="304" y="234" fill="#334155">Tin</text></g>' +
        "</svg>"
    },
    task2: {
      minWords: 250, timeSuggest: "~40 min",
      prompt: "In many countries nowadays, consumers can go to a supermarket and buy food produced all over the world. Do you think this is a positive or negative development? Give reasons for your answer and include any relevant examples from your own knowledge or experience."
    }
  },

  /* ===== Set 8 — PIE + BAR (dance classes) ===== */
  "writing-8": {
    task1: {
      minWords: 150, timeSuggest: "~20 min",
      prompt: "The pie chart shows where young people attend dance classes in one town, and the bar chart shows the number of students taking three types of class by age group. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      figure: '<svg viewBox="0 0 400 500" role="img" aria-label="Pie chart of dance-class locations and a bar chart of class types by age group" font-family="Inter, sans-serif">' +
        '<text x="200" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#123">Location of dance classes</text>' +
        ieltsPie(200, 112, 80, [{ pct: 48, fill: "#2E5E9E", tcol: "#fff" }, { pct: 24, fill: "#5A86C0", tcol: "#fff" }, { pct: 18, fill: "#95B6DE", tcol: "#123" }, { pct: 10, fill: "#C2D5EC", tcol: "#123" }]) +
        ieltsLegend(78, 214, [{ fill: "#2E5E9E", label: "Private studios (48%)" }, { fill: "#5A86C0", label: "School halls, after-school (24%)" }, { fill: "#95B6DE", label: "Community halls & other (18%)" }, { fill: "#C2D5EC", label: "College-based studios (10%)" }]) +
        '<text x="200" y="306" text-anchor="middle" font-size="12" font-weight="700" fill="#123">Types of class, by age (students)</text>' +
        '<line x1="70" y1="322" x2="70" y2="452" stroke="#94A3B8"/><line x1="70" y1="452" x2="376" y2="452" stroke="#94A3B8"/>' +
        [0, 200, 400, 600].map(function (v) { var x = 70 + v / 700 * 300; return '<text x="' + x.toFixed(0) + '" y="464" text-anchor="middle" font-size="8" fill="#94A3B8">' + v + "</text>"; }).join("") +
        (function () {
          var groups = [["Ballet", 605, 295], ["Tap", 450, 420], ["Modern", 300, 520]];
          var out = "", gy = 330, gh = 42, bh = 15;
          groups.forEach(function (g, i) {
            var y = gy + i * gh;
            out += '<text x="64" y="' + (y + 18) + '" text-anchor="end" font-size="9" fill="#334155">' + g[0] + "</text>";
            out += '<rect x="70" y="' + y + '" width="' + (g[1] / 700 * 300).toFixed(0) + '" height="' + bh + '" fill="#95B6DE"/>';
            out += '<rect x="70" y="' + (y + bh + 2) + '" width="' + (g[2] / 700 * 300).toFixed(0) + '" height="' + bh + '" fill="#2E5E9E"/>';
          });
          return out;
        })() +
        '<g font-size="8.5"><rect x="150" y="474" width="10" height="10" fill="#95B6DE"/><text x="164" y="483" fill="#334155">Under 11</text><rect x="250" y="474" width="10" height="10" fill="#2E5E9E"/><text x="264" y="483" fill="#334155">Aged 11–16</text></g>' +
        "</svg>"
    },
    task2: {
      minWords: 250, timeSuggest: "~40 min",
      prompt: "It is important for everyone, including young people, to save money for their future. To what extent do you agree or disagree with this statement? Give reasons for your answer and include any relevant examples from your own knowledge or experience."
    }
  },

  /* ===== Set 9 — PROCESS (rain-shadow desert) ===== */
  "writing-9": {
    task1: {
      minWords: 150, timeSuggest: "~20 min",
      prompt: "The diagram shows how a rain-shadow desert is formed. Summarise the information by describing the main stages of the process.",
      /* Pictorial cross-section in the style of real IELTS process figures:
         sea → moist wind → windward rain → peak → dry leeward air → desert. */
      figure: '<svg viewBox="0 0 720 340" role="img" aria-label="Cross-section diagram showing how a rain-shadow desert forms" font-family="Inter, sans-serif">' +
        '<defs>' +
          '<marker id="rs9b" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#2E7FC2"/></marker>' +
          '<marker id="rs9o" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#D07E2A"/></marker>' +
        '</defs>' +
        '<rect width="720" height="300" fill="#E8F3FB"/>' +
        '<circle cx="664" cy="48" r="24" fill="#F6C445"/>' +
        '<g stroke="#F6C445" stroke-width="3" stroke-linecap="round"><line x1="664" y1="10" x2="664" y2="20"/><line x1="664" y1="76" x2="664" y2="86"/><line x1="626" y1="48" x2="636" y2="48"/><line x1="692" y1="48" x2="702" y2="48"/><line x1="637" y1="21" x2="644" y2="28"/><line x1="684" y1="68" x2="691" y2="75"/><line x1="637" y1="75" x2="644" y2="68"/><line x1="684" y1="28" x2="691" y2="21"/></g>' +
        '<rect x="0" y="300" width="360" height="40" fill="#A8C98A"/>' +
        '<rect x="360" y="300" width="360" height="40" fill="#E9D6A4"/>' +
        '<polygon points="140,300 380,72 630,300" fill="#8FBF6F"/>' +
        '<polygon points="380,72 630,300 380,300" fill="#CBA36F"/>' +
        '<polygon points="380,72 404,101 380,113 356,101" fill="#F5F8FA"/>' +
        '<rect x="0" y="252" width="170" height="48" fill="#5FA7DE"/>' +
        '<path d="M8 262 Q20 256 32 262 T56 262 T80 262" fill="none" stroke="#BBDCF2" stroke-width="2.5" stroke-linecap="round"/>' +
        '<path d="M20 278 Q32 272 44 278 T68 278 T92 278" fill="none" stroke="#BBDCF2" stroke-width="2.5" stroke-linecap="round"/>' +
        '<text x="52" y="296" font-size="13" font-weight="800" letter-spacing="2" fill="#EAF5FC">SEA</text>' +
        '<g fill="#F7FAFC" stroke="#C4D3DE" stroke-width="1.5"><circle cx="232" cy="124" r="16"/><circle cx="251" cy="113" r="19"/><circle cx="271" cy="122" r="15"/><circle cx="250" cy="128" r="17"/></g>' +
        '<g fill="#F7FAFC" stroke="#C4D3DE" stroke-width="1.5"><circle cx="312" cy="97" r="12"/><circle cx="327" cy="90" r="14"/><circle cx="341" cy="97" r="11"/></g>' +
        '<g stroke="#5FA7DE" stroke-width="2.5" stroke-linecap="round"><line x1="228" y1="142" x2="221" y2="162"/><line x1="244" y1="146" x2="237" y2="166"/><line x1="260" y1="146" x2="253" y2="166"/><line x1="276" y1="142" x2="269" y2="162"/><line x1="318" y1="112" x2="311" y2="132"/><line x1="334" y1="112" x2="327" y2="132"/></g>' +
        '<path d="M56 238 C 118 232 160 214 202 186" fill="none" stroke="#2E7FC2" stroke-width="3.5" marker-end="url(#rs9b)"/>' +
        '<path d="M216 196 C 256 168 288 144 314 120" fill="none" stroke="#2E7FC2" stroke-width="3.5" marker-end="url(#rs9b)"/>' +
        '<path d="M406 112 C 462 152 520 212 566 258" fill="none" stroke="#D07E2A" stroke-width="3.5" stroke-dasharray="9 6" marker-end="url(#rs9o)"/>' +
        '<rect x="649" y="262" width="13" height="40" rx="6" fill="#5D9142"/>' +
        '<rect x="633" y="268" width="10" height="20" rx="5" fill="#5D9142"/><rect x="633" y="282" width="18" height="8" rx="4" fill="#5D9142"/>' +
        '<rect x="667" y="258" width="10" height="24" rx="5" fill="#5D9142"/><rect x="659" y="276" width="18" height="8" rx="4" fill="#5D9142"/>' +
        '<g font-weight="800" font-size="13" text-anchor="middle"><circle cx="28" cy="208" r="11" fill="#1E5F9C"/><text x="28" y="212.5" fill="#fff">1</text><circle cx="140" cy="96" r="11" fill="#1E5F9C"/><text x="140" y="100.5" fill="#fff">2</text><circle cx="247" cy="58" r="11" fill="#1E5F9C"/><text x="247" y="62.5" fill="#fff">3</text><circle cx="503" cy="168" r="11" fill="#1E5F9C"/><text x="503" y="172.5" fill="#fff">4</text><circle cx="583" cy="238" r="11" fill="#1E5F9C"/><text x="583" y="242.5" fill="#fff">5</text></g>' +
        '<g font-size="14.5" font-weight="600" fill="#14304F">' +
          '<text x="46" y="203">Moist winds blow</text><text x="46" y="220">in from the sea</text>' +
          '<text x="158" y="91">Air rises</text><text x="158" y="108">and cools</text>' +
          '<text x="265" y="53">Clouds form and rain falls</text><text x="265" y="70">on the windward side</text>' +
          '<text x="521" y="163">Dry air</text><text x="521" y="180">descends</text>' +
          '<text x="601" y="233">Rain shadow:</text><text x="601" y="250">desert forms</text>' +
        '</g>' +
        '<text x="250" y="325" text-anchor="middle" font-size="12" font-weight="800" letter-spacing="1.5" fill="#3E5C2C">WINDWARD SIDE</text>' +
        '<text x="560" y="325" text-anchor="middle" font-size="12" font-weight="800" letter-spacing="1.5" fill="#7A5C28">LEEWARD SIDE</text>' +
        "</svg>"
    },
    task2: {
      minWords: 250, timeSuggest: "~40 min",
      prompt: "Many people believe that social networking sites have had a large negative impact on both individuals and society. To what extent do you agree or disagree? Give reasons for your answer and include any relevant examples from your own knowledge or experience."
    }
  },

  /* ===== Set 10 — PROCESS (bamboo fabric) ===== */
  "writing-10": {
    task1: {
      minWords: 150, timeSuggest: "~20 min",
      prompt: "The diagram shows how fabric is manufactured from bamboo. Summarise the information by describing the main stages of the process.",
      /* Pictorial manufacturing chain in the style of real IELTS figures:
         bamboo grove → chipping → soaking vat → pressing rollers → spinning → woven fabric. */
      figure: '<svg viewBox="0 0 720 400" role="img" aria-label="Illustrated diagram showing how fabric is manufactured from bamboo" font-family="Inter, sans-serif">' +
        '<defs><marker id="bb10" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#639922"/></marker></defs>' +
        '<line x1="72" y1="150" x2="150" y2="150" stroke="#8A6B3F" stroke-width="3" stroke-linecap="round"/>' +
        '<g stroke="#5D9142" stroke-width="7" stroke-linecap="round"><line x1="92" y1="150" x2="92" y2="60"/><line x1="112" y1="150" x2="112" y2="52"/><line x1="132" y1="150" x2="132" y2="66"/></g>' +
        '<g stroke="#3E6B2C" stroke-width="2"><line x1="86" y1="128" x2="98" y2="128"/><line x1="86" y1="102" x2="98" y2="102"/><line x1="86" y1="78" x2="98" y2="78"/><line x1="106" y1="120" x2="118" y2="120"/><line x1="106" y1="92" x2="118" y2="92"/><line x1="106" y1="68" x2="118" y2="68"/><line x1="126" y1="132" x2="138" y2="132"/><line x1="126" y1="106" x2="138" y2="106"/><line x1="126" y1="84" x2="138" y2="84"/></g>' +
        '<g fill="#6FAF4C"><ellipse cx="82" cy="62" rx="11" ry="4" transform="rotate(-30 82 62)"/><ellipse cx="103" cy="50" rx="11" ry="4" transform="rotate(24 103 50)"/><ellipse cx="122" cy="46" rx="11" ry="4" transform="rotate(-24 122 46)"/><ellipse cx="142" cy="62" rx="11" ry="4" transform="rotate(28 142 62)"/></g>' +
        '<rect x="318" y="94" width="50" height="18" rx="9" fill="#B98A4C"/>' +
        '<line x1="330" y1="94" x2="330" y2="112" stroke="#8A6B3F" stroke-width="2"/><line x1="344" y1="94" x2="344" y2="112" stroke="#8A6B3F" stroke-width="2"/><line x1="358" y1="94" x2="358" y2="112" stroke="#8A6B3F" stroke-width="2"/>' +
        '<polygon points="382,64 394,64 380,116 368,116" fill="#8E9AA6"/><rect x="378" y="56" width="20" height="10" rx="4" fill="#5B4A2F"/>' +
        '<g fill="#D9B26A"><rect x="322" y="126" width="12" height="7" rx="2" transform="rotate(-14 322 126)"/><rect x="342" y="132" width="12" height="7" rx="2" transform="rotate(10 342 132)"/><rect x="362" y="126" width="12" height="7" rx="2" transform="rotate(-6 362 126)"/><rect x="352" y="142" width="12" height="7" rx="2" transform="rotate(16 352 142)"/><rect x="330" y="142" width="12" height="7" rx="2" transform="rotate(-20 330 142)"/></g>' +
        '<path d="M576 76 L586 146 L634 146 L644 76" fill="#9FB2BF"/>' +
        '<rect x="583" y="96" width="54" height="44" fill="#BFE3F0"/>' +
        '<path d="M583 96 Q595 90 610 96 T637 96" fill="none" stroke="#8FCBE8" stroke-width="3"/>' +
        '<g fill="#D9B26A"><rect x="592" y="102" width="11" height="6" rx="2" transform="rotate(-10 592 102)"/><rect x="612" y="106" width="11" height="6" rx="2" transform="rotate(12 612 106)"/><rect x="600" y="118" width="11" height="6" rx="2" transform="rotate(-16 600 118)"/></g>' +
        '<path d="M196 104 L280 104" fill="none" stroke="#639922" stroke-width="3" marker-end="url(#bb10)"/>' +
        '<path d="M436 104 L534 104" fill="none" stroke="#639922" stroke-width="3" marker-end="url(#bb10)"/>' +
        '<path d="M610 192 L610 222" fill="none" stroke="#639922" stroke-width="3" marker-end="url(#bb10)"/>' +
        '<rect x="556" y="284" width="108" height="10" rx="3" fill="#F2EAD8" stroke="#C9BC9C" stroke-width="1.5"/>' +
        '<circle cx="592" cy="264" r="15" fill="#7A8894"/><circle cx="592" cy="264" r="5" fill="#CBD5DE"/>' +
        '<circle cx="628" cy="264" r="15" fill="#7A8894"/><circle cx="628" cy="264" r="5" fill="#CBD5DE"/>' +
        '<path d="M534 289 L548 289" fill="none" stroke="#639922" stroke-width="2.5" marker-end="url(#bb10)"/>' +
        '<circle cx="344" cy="276" r="26" fill="none" stroke="#8A5A2B" stroke-width="5"/>' +
        '<g stroke="#8A5A2B" stroke-width="2"><line x1="344" y1="252" x2="344" y2="300"/><line x1="320" y1="276" x2="368" y2="276"/><line x1="327" y1="259" x2="361" y2="293"/><line x1="327" y1="293" x2="361" y2="259"/></g>' +
        '<rect x="384" y="258" width="15" height="36" rx="5" fill="#C9822E"/>' +
        '<g stroke="#E8D6A8" stroke-width="2"><line x1="385" y1="266" x2="398" y2="266"/><line x1="385" y1="274" x2="398" y2="274"/><line x1="385" y1="282" x2="398" y2="282"/></g>' +
        '<path d="M370 270 Q378 262 384 262" fill="none" stroke="#D9C58C" stroke-width="2"/>' +
        '<rect x="78" y="244" width="64" height="16" rx="8" fill="#7FB069"/>' +
        '<rect x="84" y="258" width="52" height="54" fill="#A7CF8C" stroke="#7FB069" stroke-width="1.5"/>' +
        '<g stroke="#7FB069" stroke-width="1"><line x1="93" y1="258" x2="93" y2="312"/><line x1="102" y1="258" x2="102" y2="312"/><line x1="111" y1="258" x2="111" y2="312"/><line x1="120" y1="258" x2="120" y2="312"/><line x1="129" y1="258" x2="129" y2="312"/><line x1="84" y1="268" x2="136" y2="268"/><line x1="84" y1="278" x2="136" y2="278"/><line x1="84" y1="288" x2="136" y2="288"/><line x1="84" y1="298" x2="136" y2="298"/></g>' +
        '<path d="M534 276 L440 276" fill="none" stroke="#639922" stroke-width="3" marker-end="url(#bb10)"/>' +
        '<path d="M288 276 L196 276" fill="none" stroke="#639922" stroke-width="3" marker-end="url(#bb10)"/>' +
        '<g font-weight="800" font-size="13" text-anchor="middle"><circle cx="110" cy="36" r="12" fill="#639922"/><text x="110" y="40.5" fill="#fff">1</text><circle cx="360" cy="36" r="12" fill="#639922"/><text x="360" y="40.5" fill="#fff">2</text><circle cx="610" cy="36" r="12" fill="#639922"/><text x="610" y="40.5" fill="#fff">3</text><circle cx="610" cy="216" r="12" fill="#639922"/><text x="610" y="220.5" fill="#fff">4</text><circle cx="360" cy="216" r="12" fill="#639922"/><text x="360" y="220.5" fill="#fff">5</text><circle cx="110" cy="216" r="12" fill="#639922"/><text x="110" y="220.5" fill="#fff">6</text></g>' +
        '<g font-size="14.5" font-weight="700" fill="#22381A" text-anchor="middle">' +
          '<text x="110" y="176">Bamboo grown</text><text x="110" y="193" font-size="12.5" font-weight="500" fill="#44603A">(reaches full height)</text>' +
          '<text x="360" y="176">Harvested and</text><text x="360" y="193" font-size="12.5" font-weight="500" fill="#44603A">cut into chips</text>' +
          '<text x="610" y="176">Chips soaked in a</text><text x="610" y="193" font-size="12.5" font-weight="500" fill="#44603A">solution to make pulp</text>' +
          '<text x="610" y="330">Pulp pressed</text><text x="610" y="347" font-size="12.5" font-weight="500" fill="#44603A">into thin sheets</text>' +
          '<text x="360" y="330">Sheets spun</text><text x="360" y="347" font-size="12.5" font-weight="500" fill="#44603A">into yarn</text>' +
          '<text x="110" y="330">Yarn woven</text><text x="110" y="347" font-size="12.5" font-weight="500" fill="#44603A">into fabric</text>' +
        '</g>' +
        "</svg>"
    },
    task2: {
      minWords: 250, timeSuggest: "~40 min",
      prompt: "Some people believe children should begin formal schooling at a very early age, while others think they should not start until they are older. Discuss both views and give your own opinion. Give reasons for your answer and include any relevant examples from your own knowledge or experience."
    }
  }
};
