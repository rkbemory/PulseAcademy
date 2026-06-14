/* ============================================================
   Pulse for Nurses — Nursing Calculators
   Pure client-side. Each result updates live and shows the working.
   ============================================================ */
(function () {
  /* Left-panel selector: show one calculator at a time in the right pane. */
  (function initTabs() {
    var items = [].slice.call(document.querySelectorAll(".calc-nav-item"));
    var panels = [].slice.call(document.querySelectorAll(".calc-panel"));
    if (!items.length) return;
    function activate(id) {
      items.forEach(function (it) {
        var on = it.getAttribute("data-target") === id;
        it.classList.toggle("is-active", on);
        it.setAttribute("aria-selected", on ? "true" : "false");
      });
      panels.forEach(function (p) { p.classList.toggle("is-active", p.id === id); });
    }
    items.forEach(function (it) {
      it.addEventListener("click", function () { activate(it.getAttribute("data-target")); });
    });
  })();

  /* Simple on-screen calculator */
  (function initSimple() {
    var disp = document.getElementById("sc-disp");
    var keys = document.querySelector("#calc-simple .sc-keys");
    if (!disp || !keys) return;
    var expr = "";
    function render() { disp.textContent = expr ? expr.replace(/\*/g, "×").replace(/\//g, "÷") : "0"; }
    function isOp(c) { return /[+\-*/]/.test(c); }
    keys.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      var act = b.getAttribute("data-act"), val = b.getAttribute("data-val");
      if (act === "clear") { expr = ""; return render(); }
      if (act === "back") { expr = expr.slice(0, -1); return render(); }
      if (act === "eq") {
        var s = expr.replace(/×/g, "*").replace(/÷/g, "/");
        if (!s || !/^[-+*/.()\d\s]+$/.test(s)) return;
        try {
          var r = Function('"use strict";return (' + s + ")")();
          if (!isFinite(r)) { disp.textContent = "Error"; expr = ""; return; }
          expr = String(Math.round(r * 1e8) / 1e8);
          render();
        } catch (_) { disp.textContent = "Error"; expr = ""; }
        return;
      }
      if (val != null) {
        if (isOp(val)) {
          if (expr === "" && val !== "-") return;
          if (isOp(expr.slice(-1))) expr = expr.slice(0, -1);
        }
        expr += val; render();
      }
    });
    render();
  })();

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

  /* 6 — Temperature (Fahrenheit → Celsius) */
  on(["tc-f"], function () {
    var f = num($("tc-f"));
    if (f === null) return out("tc-out", "Enter a Fahrenheit value…");
    out("tc-out", "<b>" + round((f - 32) * 5 / 9, 1) + " °C</b>" + work("(" + f + " °F − 32) × 5/9"));
  });

  /* BMI — sex, cm or ft/in height, WHO category + scale marker */
  (function initBMI() {
    if (!$("bmi-out")) return;
    var sex = "male";
    var seg = document.querySelector("#calc-bmi .bmi-seg");
    if (seg) seg.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      sex = b.getAttribute("data-sex");
      [].slice.call(seg.children).forEach(function (x) { x.classList.toggle("is-on", x === b); });
      compute();
    });
    function heightCm() {
      if ($("bmi-unit") && $("bmi-unit").value === "ftin") {
        var f = num($("bmi-ft")) || 0, i = num($("bmi-in")) || 0;
        var inches = f * 12 + i;
        return inches > 0 ? inches * 2.54 : null;
      }
      return num($("bmi-ht"));
    }
    function cat(b) {
      if (b < 18.5) return "Underweight";
      if (b < 25) return "Normal weight";
      if (b < 30) return "Overweight";
      if (b < 35) return "Obese (class I)";
      if (b < 40) return "Obese (class II)";
      return "Obese (class III)";
    }
    function compute() {
      var w = num($("bmi-wt")), hcm = heightCm(), scale = $("bmi-scale");
      if (w === null || hcm === null) { out("bmi-out", "Enter weight and height…"); if (scale) scale.hidden = true; return; }
      if (w <= 0 || hcm <= 0) { out("bmi-out", "Values must be greater than zero."); if (scale) scale.hidden = true; return; }
      var m = hcm / 100, bmi = w / (m * m);
      out("bmi-out", "<b>" + round(bmi, 1) + " kg/m²</b><span class=\"calc-work\">" + cat(bmi) + " (WHO) · " + (sex === "male" ? "♂ Male" : "♀ Female") + " · height " + round(hcm, 0) + " cm</span>");
      var pos = Math.max(0, Math.min(100, (bmi - 15) / 25 * 100));
      if ($("bmi-marker")) $("bmi-marker").style.left = pos + "%";
      if (scale) scale.hidden = false;
    }
    function toggleUnit() {
      var ft = $("bmi-unit") && $("bmi-unit").value === "ftin";
      if ($("bmi-cm-row")) $("bmi-cm-row").hidden = ft;
      if ($("bmi-ftin-row")) $("bmi-ftin-row").hidden = !ft;
      compute();
    }
    if ($("bmi-unit")) $("bmi-unit").addEventListener("change", toggleUnit);
    on(["bmi-wt", "bmi-ht", "bmi-ft", "bmi-in"], compute);
  })();

  /* Date helpers for menstrual-cycle tools */
  function parseDate(v) {
    if (!v) return null;
    var p = v.split("-");
    if (p.length !== 3) return null;
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    return isNaN(d.getTime()) ? null : d;
  }
  function addDays(d, n) { var r = new Date(d.getTime()); r.setDate(r.getDate() + n); return r; }
  function fmtDate(d) { return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" }); }

  /* Next Period */
  on(["pd-lmp", "pd-cyc"], function () {
    var lmp = parseDate($("pd-lmp").value), cyc = num($("pd-cyc"));
    if (!lmp) return out("pd-out", "Pick your last period date…");
    if (cyc === null || cyc < 20 || cyc > 45) return out("pd-out", "Enter a cycle length between 20 and 45 days.");
    var next = addDays(lmp, cyc), after = addDays(lmp, cyc * 2);
    out("pd-out", "<b>" + fmtDate(next) + "</b><span class=\"calc-work\">Following period: " + fmtDate(after) + " · cycle " + cyc + " days</span>");
  });

  /* Ovulation & fertile window */
  on(["ov-lmp", "ov-cyc"], function () {
    var lmp = parseDate($("ov-lmp").value), cyc = num($("ov-cyc"));
    if (!lmp) return out("ov-out", "Pick your last period date…");
    if (cyc === null || cyc < 20 || cyc > 45) return out("ov-out", "Enter a cycle length between 20 and 45 days.");
    var ov = addDays(lmp, cyc - 14);
    var fStart = addDays(ov, -5), fEnd = addDays(ov, 1);
    out("ov-out", "<b>Ovulation: " + fmtDate(ov) + "</b><span class=\"calc-work\">Fertile window: " + fmtDate(fStart) + " → " + fmtDate(fEnd) + "</span>");
  });

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
