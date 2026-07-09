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

  /* ABG interpreter */
  function flagVal(v, lo, hi) { return v + " (" + (v < lo ? "low" : v > hi ? "high" : "normal") + ")"; }
  function interpretABG(ph, co2, hco3) {
    var acid = ph < 7.35, alk = ph > 7.45;
    var co2Acid = co2 > 45, co2Alk = co2 < 35;
    var hco3Acid = hco3 < 22, hco3Alk = hco3 > 26;
    var title = "", comp = "";
    if (acid) {
      if (co2Acid && hco3Acid) title = "Mixed respiratory & metabolic acidosis";
      else if (co2Acid) { title = "Respiratory acidosis"; comp = hco3Alk ? "partially compensated" : "uncompensated"; }
      else if (hco3Acid) { title = "Metabolic acidosis"; comp = co2Alk ? "partially compensated" : "uncompensated"; }
      else title = "Acidaemia — review values";
    } else if (alk) {
      if (co2Alk && hco3Alk) title = "Mixed respiratory & metabolic alkalosis";
      else if (co2Alk) { title = "Respiratory alkalosis"; comp = hco3Acid ? "partially compensated" : "uncompensated"; }
      else if (hco3Alk) { title = "Metabolic alkalosis"; comp = co2Acid ? "partially compensated" : "uncompensated"; }
      else title = "Alkalaemia — review values";
    } else {
      if (!co2Acid && !co2Alk && !hco3Acid && !hco3Alk) title = "Normal ABG";
      else {
        var leanAcid = ph < 7.40;
        if (leanAcid) title = co2Acid ? "Fully compensated respiratory acidosis" : hco3Acid ? "Fully compensated metabolic acidosis" : "Compensated disorder";
        else title = co2Alk ? "Fully compensated respiratory alkalosis" : hco3Alk ? "Fully compensated metabolic alkalosis" : "Compensated disorder";
      }
    }
    var detail = "pH " + flagVal(ph, 7.35, 7.45) + " · PaCO₂ " + flagVal(co2, 35, 45) + " · HCO₃⁻ " + flagVal(hco3, 22, 26);
    if (comp) detail = comp.charAt(0).toUpperCase() + comp.slice(1) + " — " + detail;
    return { title: title, detail: detail };
  }
  on(["abg-ph", "abg-co2", "abg-hco3"], function () {
    var ph = num($("abg-ph")), co2 = num($("abg-co2")), hco3 = num($("abg-hco3"));
    if (ph === null || co2 === null || hco3 === null) return out("abg-out", "Enter pH, PaCO₂ and HCO₃⁻…");
    var r = interpretABG(ph, co2, hco3);
    out("abg-out", "<b>" + r.title + "</b><span class=\"calc-work\">" + r.detail + "</span>");
  });

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

  /* Helper for the two sex-toggle calculators (creatinine clearance, IBW) */
  function sexToggle(panelId, onChange) {
    var seg = document.querySelector("#" + panelId + " .bmi-seg");
    var sex = "male";
    if (seg) seg.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      sex = b.getAttribute("data-sex");
      [].slice.call(seg.children).forEach(function (x) { x.classList.toggle("is-on", x === b); });
      onChange();
    });
    return function () { return sex; };
  }

  /* Creatinine clearance (Cockcroft–Gault) */
  (function () {
    if (!$("cr-out")) return;
    var getSex = sexToggle("calc-crcl", compute);
    function compute() {
      var age = num($("cr-age")), wt = num($("cr-wt")), scr = num($("cr-scr"));
      if (age === null || wt === null || scr === null) return out("cr-out", "Enter age, weight and creatinine…");
      if (age <= 0 || wt <= 0 || scr <= 0) return out("cr-out", "Values must be greater than zero.");
      var crcl = ((140 - age) * wt * (getSex() === "female" ? 0.85 : 1)) / (72 * scr);
      var band = crcl >= 90 ? "normal (≥90)" : crcl >= 60 ? "mild ↓ (60–89)" : crcl >= 30 ? "moderate ↓ (30–59)" : crcl >= 15 ? "severe ↓ (15–29)" : "kidney failure (<15)";
      out("cr-out", "<b>" + round(crcl, 1) + " mL/min</b>" + work("Cockcroft–Gault · " + band + " · " + (getSex() === "female" ? "♀ ×0.85" : "♂")));
    }
    on(["cr-age", "cr-wt", "cr-scr"], compute);
  })();

  /* Body surface area (Mosteller) */
  on(["bsa-ht", "bsa-wt"], function () {
    if (!$("bsa-out")) return;
    var h = num($("bsa-ht")), w = num($("bsa-wt"));
    if (h === null || w === null) return out("bsa-out", "Enter height and weight…");
    if (h <= 0 || w <= 0) return out("bsa-out", "Values must be greater than zero.");
    out("bsa-out", "<b>" + round(Math.sqrt(h * w / 3600), 2) + " m²</b>" + work("√(" + h + " cm × " + w + " kg ÷ 3600)"));
  });

  /* Ideal body weight (Devine) */
  (function () {
    if (!$("ibw-out")) return;
    var getSex = sexToggle("calc-ibw", compute);
    function compute() {
      var hcm = num($("ibw-ht"));
      if (hcm === null) return out("ibw-out", "Enter height…");
      if (hcm <= 0) return out("ibw-out", "Height must be greater than zero.");
      var over = Math.max(0, hcm / 2.54 - 60);
      var ibw = (getSex() === "female" ? 45.5 : 50) + 2.3 * over;
      out("ibw-out", "<b>" + round(ibw, 1) + " kg</b>" + work("Devine · " + (getSex() === "female" ? "45.5" : "50") + " + 2.3 × " + round(over, 1) + " in over 5 ft"));
    }
    on(["ibw-ht"], compute);
  })();

  /* Mean arterial pressure */
  on(["map-sbp", "map-dbp"], function () {
    if (!$("map-out")) return;
    var s = num($("map-sbp")), d = num($("map-dbp"));
    if (s === null || d === null) return out("map-out", "Enter systolic and diastolic…");
    if (s <= 0 || d <= 0) return out("map-out", "Values must be greater than zero.");
    var map = (s + 2 * d) / 3;
    var band = map < 65 ? "low — perfusion risk (<65)" : map > 100 ? "high (>100)" : "adequate (65–100)";
    out("map-out", "<b>" + round(map, 0) + " mmHg</b>" + work("(" + s + " + 2 × " + d + ") ÷ 3 · " + band));
  });

  /* Paediatric maintenance fluids (Holliday–Segar 4-2-1) */
  on(["mf-wt"], function () {
    if (!$("mf-out")) return;
    var w = num($("mf-wt"));
    if (w === null) return out("mf-out", "Enter weight…");
    if (w <= 0) return out("mf-out", "Weight must be greater than zero.");
    var rate = w <= 10 ? w * 4 : w <= 20 ? 40 + (w - 10) * 2 : 60 + (w - 20);
    out("mf-out", "<b>" + round(rate, 0) + " mL/hr</b>" + work("= " + round(rate * 24, 0) + " mL/day · Holliday–Segar (4-2-1)"));
  });

  /* Estimated due date (Naegele) */
  on(["edd-lmp"], function () {
    if (!$("edd-out")) return;
    var lmp = parseDate($("edd-lmp").value);
    if (!lmp) return out("edd-out", "Pick the first day of the last menstrual period…");
    var edd = addDays(lmp, 280), today = new Date(); today.setHours(0, 0, 0, 0);
    var days = Math.floor((today - lmp) / 86400000);
    var ga = (days >= 0 && days <= 300) ? (Math.floor(days / 7) + " weeks " + (days % 7) + " days") : "—";
    out("edd-out", "<b>EDD: " + fmtDate(edd) + "</b>" + work("LMP + 280 days (Naegele) · gestational age today: " + ga));
  });

  /* Burns fluid — Parkland */
  on(["pk-wt", "pk-tbsa"], function () {
    if (!$("pk-out")) return;
    var w = num($("pk-wt")), t = num($("pk-tbsa"));
    if (w === null || t === null) return out("pk-out", "Enter weight and % burn (TBSA)…");
    if (w <= 0 || t <= 0) return out("pk-out", "Values must be greater than zero.");
    if (t > 100) return out("pk-out", "% TBSA cannot exceed 100.");
    var total = 4 * w * t, half = total / 2;
    out("pk-out", "<b>" + round(total, 0) + " mL over 24 h</b>" + work("First 8 h: " + round(half, 0) + " mL (" + round(half / 8, 0) + " mL/hr) · Next 16 h: " + round(half, 0) + " mL (" + round(half / 16, 0) + " mL/hr)"));
  });

  /* Corrected calcium */
  on(["cc-ca", "cc-alb"], function () {
    if (!$("cc-out")) return;
    var ca = num($("cc-ca")), alb = num($("cc-alb"));
    if (ca === null || alb === null) return out("cc-out", "Enter measured calcium and albumin…");
    var corr = ca + 0.8 * (4.0 - alb);
    var band = corr < 8.5 ? "low (<8.5)" : corr > 10.5 ? "high (>10.5)" : "normal (8.5–10.5)";
    out("cc-out", "<b>" + round(corr, 1) + " mg/dL</b>" + work(ca + " + 0.8 × (4.0 − " + alb + ") · " + band));
  });

  /* Anion gap */
  on(["ag-na", "ag-cl", "ag-hco3"], function () {
    if (!$("ag-out")) return;
    var na = num($("ag-na")), cl = num($("ag-cl")), hco3 = num($("ag-hco3"));
    if (na === null || cl === null || hco3 === null) return out("ag-out", "Enter Na⁺, Cl⁻ and HCO₃⁻…");
    var ag = na - (cl + hco3);
    var band = ag > 12 ? "high — anion-gap acidosis (>12)" : ag < 3 ? "low (<3)" : "normal (3–11)";
    out("ag-out", "<b>" + round(ag, 1) + " mEq/L</b>" + work(na + " − (" + cl + " + " + hco3 + ") · " + band));
  });

  /* Glasgow Coma Scale */
  on(["gcs-e", "gcs-v", "gcs-m"], function () {
    if (!$("gcs-out")) return;
    var e = num($("gcs-e")), v = num($("gcs-v")), m = num($("gcs-m"));
    if (e === null || v === null || m === null) return out("gcs-out", "Select eye, verbal and motor responses…");
    var t = e + v + m;
    var sev = t >= 13 ? "minor brain injury (13–15)" : t >= 9 ? "moderate (9–12)" : "severe (≤8)";
    out("gcs-out", "<b>GCS " + t + " / 15</b>" + work("E" + e + " V" + v + " M" + m + " · " + sev));
  });
})();
