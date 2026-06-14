/* ============================================================
   Pulse for Nurses — Nursing Calculators
   Pure client-side. Each result updates live and shows the working.
   ============================================================ */
(function () {
  function $(id) { return document.getElementById(id); }
  function num(el) { if (!el) return null; var v = parseFloat(el.value); return isNaN(v) ? null : v; }
  function out(id, html) { var e = $(id); if (e) e.innerHTML = html; }
  function round(n, d) { d = d || 0; var f = Math.pow(10, d); return Math.round(n * f) / f; }
  function on(ids, fn) {
    ids.forEach(function (id) {
      var e = $(id);
      if (e) { e.addEventListener("input", fn); e.addEventListener("change", fn); }
    });
    fn();
  }
  function work(s) { return '<span class="calc-work">' + s + "</span>"; }

  /* 1 — IV drip rate (gtt/min) */
  on(["dr-vol", "dr-time", "dr-df"], function () {
    var v = num($("dr-vol")), t = num($("dr-time")), df = parseFloat($("dr-df").value);
    if (v === null || t === null) return out("dr-out", "Enter volume and time…");
    if (t <= 0 || v <= 0) return out("dr-out", "Values must be greater than zero.");
    var g = Math.round((v * df) / t);
    out("dr-out", "<b>" + g + " gtt/min</b>" + work("(" + v + " mL × " + df + " gtt/mL) ÷ " + t + " min"));
  });

  /* 2 — IV flow rate (mL/hr) */
  on(["fr-vol", "fr-time"], function () {
    var v = num($("fr-vol")), t = num($("fr-time"));
    if (v === null || t === null) return out("fr-out", "Enter volume and time…");
    if (t <= 0 || v <= 0) return out("fr-out", "Values must be greater than zero.");
    out("fr-out", "<b>" + round(v / t, 1) + " mL/hr</b>" + work(v + " mL ÷ " + t + " hr"));
  });

  /* 3 — IV infusion time */
  on(["it-vol", "it-rate"], function () {
    var v = num($("it-vol")), r = num($("it-rate"));
    if (v === null || r === null) return out("it-out", "Enter volume and rate…");
    if (r <= 0 || v <= 0) return out("it-out", "Values must be greater than zero.");
    var hrs = v / r, h = Math.floor(hrs), m = Math.round((hrs - h) * 60);
    if (m === 60) { h += 1; m = 0; }
    out("it-out", "<b>" + h + " h " + m + " min</b>" + work(v + " mL ÷ " + r + " mL/hr = " + round(hrs, 2) + " hr"));
  });

  /* 4 — Dosage (D/H × Q) */
  on(["do-d", "do-h", "do-q"], function () {
    var d = num($("do-d")), h = num($("do-h")), q = num($("do-q"));
    if (q === null) q = 1;
    if (d === null || h === null) return out("do-out", "Enter desired and stock strength…");
    if (h <= 0) return out("do-out", "Stock strength must be greater than zero.");
    var amt = (d / h) * q;
    out("do-out", "<b>" + round(amt, 2) + " tablet(s) / mL</b>" + work("(" + d + " ÷ " + h + ") × " + q));
  });

  /* 5 — Weight-based dose (mg/kg) */
  on(["wb-dose", "wb-wt", "wb-div"], function () {
    var dose = num($("wb-dose")), wt = num($("wb-wt")), div = num($("wb-div"));
    if (dose === null || wt === null) return out("wb-out", "Enter dose and weight…");
    if (wt <= 0) return out("wb-out", "Weight must be greater than zero.");
    var total = dose * wt;
    var html = "<b>" + round(total, 2) + " mg</b>" + work(dose + " mg/kg × " + wt + " kg");
    if (div !== null && div > 0) {
      html += '<span class="calc-work">= ' + round(total / div, 2) + " mg per dose (÷ " + div + ")</span>";
    }
    out("wb-out", html);
  });

  /* 6 — Temperature (two-way) */
  (function () {
    var c = $("tc-c"), f = $("tc-f");
    if (!c || !f) return;
    c.addEventListener("input", function () {
      var v = num(c);
      if (v === null) { f.value = ""; out("tc-out", "Type in either box to convert."); return; }
      f.value = round(v * 9 / 5 + 32, 1);
      out("tc-out", "<b>" + round(v, 1) + " °C = " + f.value + " °F</b>");
    });
    f.addEventListener("input", function () {
      var v = num(f);
      if (v === null) { c.value = ""; out("tc-out", "Type in either box to convert."); return; }
      c.value = round((v - 32) * 5 / 9, 1);
      out("tc-out", "<b>" + round(v, 1) + " °F = " + c.value + " °C</b>");
    });
  })();

  /* 7 — Weight (two-way) */
  (function () {
    var kg = $("wt-kg"), lb = $("wt-lb");
    if (!kg || !lb) return;
    kg.addEventListener("input", function () {
      var v = num(kg);
      if (v === null) { lb.value = ""; out("wt-out", "Type in either box to convert."); return; }
      lb.value = round(v * 2.20462, 1);
      out("wt-out", "<b>" + round(v, 2) + " kg = " + lb.value + " lb</b>");
    });
    lb.addEventListener("input", function () {
      var v = num(lb);
      if (v === null) { kg.value = ""; out("wt-out", "Type in either box to convert."); return; }
      kg.value = round(v / 2.20462, 2);
      out("wt-out", "<b>" + round(v, 1) + " lb = " + kg.value + " kg</b>");
    });
  })();

  /* 8 — Unit converter (mass + volume) */
  function conv(valId, fromId, toId, outId, unitWord) {
    on([valId, fromId, toId], function () {
      var v = num($(valId));
      if (v === null) return out(outId, "—");
      var from = parseFloat($(fromId).value), to = parseFloat($(toId).value);
      var r = v * from / to;
      var fu = $(fromId).options[$(fromId).selectedIndex].text;
      var tu = $(toId).options[$(toId).selectedIndex].text;
      out(outId, "<b>" + round(r, 4) + " " + tu + "</b>" + work(v + " " + fu + " = " + round(r, 4) + " " + tu));
    });
  }
  conv("mass-v", "mass-from", "mass-to", "mass-out", "mass");
  conv("vol-v", "vol-from", "vol-to", "vol-out", "volume");
})();
