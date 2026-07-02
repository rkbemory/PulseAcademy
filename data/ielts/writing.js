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
      figure: '<svg viewBox="0 0 460 250" role="img" aria-label="Process diagram of how ethanol biofuel is produced" font-family="Inter, sans-serif">' +
        (function () {
          var steps = [["1. Plants &", "trees grow"], ["2. Harvesting"], ["3. Pre-", "processing"], ["4. Processing", "to cellulose"], ["5. Add sugars", "& microbes"], ["6. Ethanol", "(biofuel)"]];
          var w = 130, h = 46, out = "";
          var pos = [[12, 40], [165, 40], [318, 40], [318, 160], [165, 160], [12, 160]];
          steps.forEach(function (s, i) {
            var x = pos[i][0], y = pos[i][1];
            out += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="8" fill="#E8F0F4" stroke="#1E5F9C"/>';
            out += '<text x="' + (x + w / 2) + '" y="' + (y + (s.length > 1 ? 20 : 28)) + '" text-anchor="middle" font-size="10" font-weight="600" fill="#123">' + s[0] + "</text>";
            if (s[1]) out += '<text x="' + (x + w / 2) + '" y="' + (y + 34) + '" text-anchor="middle" font-size="10" font-weight="600" fill="#123">' + s[1] + "</text>";
          });
          // row-1 arrows (→)
          out += '<text x="152" y="68" font-size="14" fill="#1E5F9C">→</text><text x="305" y="68" font-size="14" fill="#1E5F9C">→</text>';
          // elbow 3 → 4 (down)
          out += '<path d="M383 86 L383 160" fill="none" stroke="#1E5F9C" stroke-width="1.5" marker-end="url(#ah)"/>';
          // row-2 arrows (←)
          out += '<text x="300" y="188" font-size="14" fill="#1E5F9C">←</text><text x="147" y="188" font-size="14" fill="#1E5F9C">←</text>';
          // ethanol out
          out += '<path d="M12 183 L12 220 L300 220" fill="none" stroke="#B4541E" stroke-width="1.5" marker-end="url(#ah2)"/>';
          out += '<text x="306" y="224" font-size="10" fill="#B4541E">Fuel for vehicles → CO₂</text>';
          out += '<defs><marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1E5F9C"/></marker><marker id="ah2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#B4541E"/></marker></defs>';
          return out;
        })() + "</svg>"
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
      figure: '<svg viewBox="0 0 470 250" role="img" aria-label="Process diagram of how a rain-shadow desert forms" font-family="Inter, sans-serif">' +
        (function () {
          var steps = [["1. Winds", "approach coast"], ["2. Winds pushed", "upwards"], ["3. Moist air", "rises & cools"], ["4. Clouds form,", "rain falls (windward)"], ["5. Dry air crosses", "the mountain"], ["6. Dry winds reach", "inland → desert"]];
          var w = 138, h = 46, out = "", pos = [[8, 34], [166, 34], [324, 34], [324, 150], [166, 150], [8, 150]];
          steps.forEach(function (s, i) {
            var x = pos[i][0], y = pos[i][1];
            out += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="8" fill="#E8F0F4" stroke="#1E5F9C"/>';
            out += '<text x="' + (x + w / 2) + '" y="' + (y + 20) + '" text-anchor="middle" font-size="10" font-weight="600" fill="#123">' + s[0] + "</text>";
            out += '<text x="' + (x + w / 2) + '" y="' + (y + 34) + '" text-anchor="middle" font-size="9.5" fill="#334155">' + s[1] + "</text>";
          });
          out += '<text x="150" y="62" font-size="14" fill="#1E5F9C">→</text><text x="308" y="62" font-size="14" fill="#1E5F9C">→</text>';
          out += '<path d="M393 82 L393 150" fill="none" stroke="#1E5F9C" stroke-width="1.5" marker-end="url(#rs)"/>';
          out += '<text x="308" y="178" font-size="14" fill="#1E5F9C">←</text><text x="150" y="178" font-size="14" fill="#1E5F9C">←</text>';
          out += '<defs><marker id="rs" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1E5F9C"/></marker></defs>';
          return out;
        })() + "</svg>"
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
      figure: '<svg viewBox="0 0 470 250" role="img" aria-label="Process diagram of how bamboo is turned into fabric" font-family="Inter, sans-serif">' +
        (function () {
          var steps = [["1. Bamboo", "is grown"], ["2. Harvested", "& chipped"], ["3. Soaked in", "solution → pulp"], ["4. Pulp pressed", "into sheets"], ["5. Sheets spun", "into yarn"], ["6. Yarn woven", "into fabric"]];
          var w = 138, h = 46, out = "", pos = [[8, 34], [166, 34], [324, 34], [324, 150], [166, 150], [8, 150]];
          steps.forEach(function (s, i) {
            var x = pos[i][0], y = pos[i][1];
            out += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="8" fill="#EAF3DE" stroke="#639922"/>';
            out += '<text x="' + (x + w / 2) + '" y="' + (y + 20) + '" text-anchor="middle" font-size="10" font-weight="600" fill="#123">' + s[0] + "</text>";
            out += '<text x="' + (x + w / 2) + '" y="' + (y + 34) + '" text-anchor="middle" font-size="9.5" fill="#334155">' + s[1] + "</text>";
          });
          out += '<text x="150" y="62" font-size="14" fill="#639922">→</text><text x="308" y="62" font-size="14" fill="#639922">→</text>';
          out += '<path d="M393 82 L393 150" fill="none" stroke="#639922" stroke-width="1.5" marker-end="url(#bb)"/>';
          out += '<text x="308" y="178" font-size="14" fill="#639922">←</text><text x="150" y="178" font-size="14" fill="#639922">←</text>';
          out += '<defs><marker id="bb" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#639922"/></marker></defs>';
          return out;
        })() + "</svg>"
    },
    task2: {
      minWords: 250, timeSuggest: "~40 min",
      prompt: "Some people believe children should begin formal schooling at a very early age, while others think they should not start until they are older. Discuss both views and give your own opinion. Give reasons for your answer and include any relevant examples from your own knowledge or experience."
    }
  }
};
