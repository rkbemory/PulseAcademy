/* IELTS Writing — question sets (Academic). Shows Task 1 + Task 2 prompts with a
   live word counter. AI band scoring is the Pro feature. Original prompts. */
window.IELTS = window.IELTS || {}; window.IELTS.data = window.IELTS.data || {};
window.IELTS.data.writing = {
  "writing-1": {
    task1: {
      minWords: 150, timeSuggest: "~20 min",
      prompt: "The chart below shows the number of nurses per 10,000 people in four countries in 2005 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      figure: '<svg viewBox="0 0 460 240" role="img" aria-label="Bar chart: nurses per 10,000 people, 2005 vs 2020, in four countries" font-family="Inter, sans-serif">' +
        '<line x1="40" y1="10" x2="40" y2="200" stroke="#94A3B8"/><line x1="40" y1="200" x2="450" y2="200" stroke="#94A3B8"/>' +
        [ [0,"2005",1],[1,"2020",1] ].map(function(){return "";}).join("") +
        '<text x="8" y="16" font-size="9" fill="#64748B">/10k</text>' +
        // gridlines + y labels 0..120
        [0,30,60,90,120].map(function(v){var y=200-(v/120*185);return '<line x1="40" y1="'+y.toFixed(0)+'" x2="450" y2="'+y.toFixed(0)+'" stroke="#EDF1F5"/><text x="36" y="'+(y+3).toFixed(0)+'" text-anchor="end" font-size="8" fill="#94A3B8">'+v+'</text>';}).join("") +
        // groups: Bangladesh, India, UK, USA  [2005,2020]
        [["Bangladesh",4,7],["India",13,17],["UK",81,88],["USA",98,117]].map(function(g,i){
          var x=60+i*98; var h05=g[1]/120*185, h20=g[2]/120*185;
          return '<rect x="'+x+'" y="'+(200-h05).toFixed(0)+'" width="26" height="'+h05.toFixed(0)+'" fill="#1E5F9C"/>'+
                 '<rect x="'+(x+30)+'" y="'+(200-h20).toFixed(0)+'" width="26" height="'+h20.toFixed(0)+'" fill="#F4B83C"/>'+
                 '<text x="'+(x+28)+'" y="214" text-anchor="middle" font-size="9" fill="#334155">'+g[0]+'</text>';
        }).join("") +
        '<rect x="330" y="6" width="12" height="12" fill="#1E5F9C"/><text x="346" y="16" font-size="9" fill="#334155">2005</text>' +
        '<rect x="386" y="6" width="12" height="12" fill="#F4B83C"/><text x="402" y="16" font-size="9" fill="#334155">2020</text>' +
        '</svg>'
    },
    task2: {
      minWords: 250, timeSuggest: "~40 min",
      prompt: "In many countries there is a serious shortage of qualified nurses. What do you think are the causes of this shortage, and what measures could be taken to solve it? Give reasons for your answer and include any relevant examples from your own knowledge or experience."
    }
  },
  "writing-2": {
    task1: {
      minWords: 150, timeSuggest: "~20 min",
      prompt: "The diagram below shows the recommended hand-washing process in a hospital. Summarise the information by describing the main stages of the process.",
      figure: '<svg viewBox="0 0 480 130" role="img" aria-label="Flow diagram of the six-step hand-washing process" font-family="Inter, sans-serif">' +
        ["Wet hands","Apply soap","Rub palms & fingers","Rinse well","Dry with towel","Turn off tap with towel"].map(function(s,i){
          var x=6+i*79; return '<rect x="'+x+'" y="40" width="70" height="46" rx="8" fill="#E8F0F4" stroke="#1E5F9C"/>'+
            '<text x="'+(x+35)+'" y="60" text-anchor="middle" font-size="8.5" fill="#123">'+ '<tspan x="'+(x+35)+'" dy="0">'+(i+1)+'.</tspan>'+'</text>'+
            '<text x="'+(x+35)+'" y="72" text-anchor="middle" font-size="7.5" fill="#334155">'+s.split(" ").slice(0,2).join(" ")+'</text>'+
            '<text x="'+(x+35)+'" y="82" text-anchor="middle" font-size="7.5" fill="#334155">'+s.split(" ").slice(2).join(" ")+'</text>'+
            (i<5?'<text x="'+(x+76)+'" y="66" font-size="12" fill="#1E5F9C">→</text>':'');
        }).join("") + '</svg>'
    },
    task2: {
      minWords: 250, timeSuggest: "~40 min",
      prompt: "Some people believe that hospitals should spend more money on preventive health education for the public, while others think the money is better spent on treating people who are already ill. Discuss both views and give your own opinion."
    }
  },
  "writing-3": {
    task1: {
      minWords: 150, timeSuggest: "~20 min",
      prompt: "The line graph below shows the number of outpatient visits (in thousands) at three city clinics from 2016 to 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      figure: '<svg viewBox="0 0 460 230" role="img" aria-label="Line graph of outpatient visits at three clinics from 2016 to 2022" font-family="Inter, sans-serif">' +
        '<line x1="44" y1="14" x2="44" y2="188" stroke="#94A3B8"/><line x1="44" y1="188" x2="446" y2="188" stroke="#94A3B8"/>' +
        '<text x="8" y="16" font-size="9" fill="#64748B">000s</text>' +
        '<g font-size="8" fill="#94A3B8">' +
          '<text x="40" y="191" text-anchor="end">0</text><text x="40" y="148" text-anchor="end">20</text><text x="40" y="105" text-anchor="end">40</text><text x="40" y="62" text-anchor="end">60</text><text x="40" y="19" text-anchor="end">80</text>' +
        '</g>' +
        '<g stroke="#EDF1F5"><line x1="44" y1="145" x2="446" y2="145"/><line x1="44" y1="102" x2="446" y2="102"/><line x1="44" y1="59" x2="446" y2="59"/><line x1="44" y1="16" x2="446" y2="16"/></g>' +
        '<polyline fill="none" stroke="#1E5F9C" stroke-width="2.5" points="70,123 195,97 320,68 435,40"/>' +
        '<polyline fill="none" stroke="#0E7490" stroke-width="2.5" points="70,134 195,123 320,127 435,90"/>' +
        '<polyline fill="none" stroke="#B4541E" stroke-width="2.5" points="70,162 195,145 320,112 435,58"/>' +
        '<g font-size="8.5" fill="#334155"><text x="70" y="204" text-anchor="middle">2016</text><text x="195" y="204" text-anchor="middle">2018</text><text x="320" y="204" text-anchor="middle">2020</text><text x="435" y="204" text-anchor="middle">2022</text></g>' +
        '<g font-size="9"><rect x="300" y="6" width="10" height="10" fill="#1E5F9C"/><text x="314" y="15" fill="#334155">North</text><rect x="352" y="6" width="10" height="10" fill="#0E7490"/><text x="366" y="15" fill="#334155">South</text><rect x="404" y="6" width="10" height="10" fill="#B4541E"/><text x="418" y="15" fill="#334155">East</text></g>' +
        '</svg>'
    },
    task2: {
      minWords: 250, timeSuggest: "~40 min",
      prompt: "Nurses are expected to keep learning throughout their careers. Some people think continuing professional education should be compulsory, while others believe it should be left to each individual. Discuss both views and give your own opinion."
    }
  },
  "writing-4": {
    task1: {
      minWords: 150, timeSuggest: "~20 min",
      prompt: "The table below shows the number of registered nurses (in thousands) working in four departments of a national hospital system in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      figure: '<svg viewBox="0 0 460 190" role="img" aria-label="Table of registered nurses by department in 2010 and 2020" font-family="Inter, sans-serif" font-size="12">' +
        '<rect x="10" y="10" width="440" height="32" fill="#E8F0F4"/>' +
        '<g fill="#123" font-weight="500"><text x="22" y="31">Department</text><text x="250" y="31" text-anchor="middle">2010</text><text x="360" y="31" text-anchor="middle">2020</text></g>' +
        '<g fill="#334155">' +
          '<text x="22" y="63">Medical &amp; surgical</text><text x="250" y="63" text-anchor="middle">18</text><text x="360" y="63" text-anchor="middle">27</text>' +
          '<text x="22" y="93">Emergency &amp; critical care</text><text x="250" y="93" text-anchor="middle">9</text><text x="360" y="93" text-anchor="middle">16</text>' +
          '<text x="22" y="123">Maternity &amp; child health</text><text x="250" y="123" text-anchor="middle">12</text><text x="360" y="123" text-anchor="middle">14</text>' +
          '<text x="22" y="153">Community &amp; home care</text><text x="250" y="153" text-anchor="middle">6</text><text x="360" y="153" text-anchor="middle">19</text>' +
        '</g>' +
        '<g stroke="#D8DEE6"><line x1="10" y1="42" x2="450" y2="42"/><line x1="10" y1="72" x2="450" y2="72"/><line x1="10" y1="102" x2="450" y2="102"/><line x1="10" y1="132" x2="450" y2="132"/><line x1="10" y1="162" x2="450" y2="162"/><line x1="200" y1="10" x2="200" y2="162"/><line x1="310" y1="10" x2="310" y2="162"/></g>' +
        '<rect x="10" y="10" width="440" height="152" fill="none" stroke="#B7C2CE"/>' +
        '</svg>'
    },
    task2: {
      minWords: 250, timeSuggest: "~40 min",
      prompt: "In many countries, health workers increasingly prefer to work in large cities rather than rural areas, leaving village clinics short of staff. What do you think are the causes of this trend, and what measures could be taken to address it?"
    }
  },
  "writing-5": {
    task1: {
      minWords: 150, timeSuggest: "~20 min",
      prompt: "The diagram below shows the main stages in collecting and preparing donated blood for patients. Summarise the information by describing the main stages of the process.",
      figure: '<svg viewBox="0 0 480 130" role="img" aria-label="Flow diagram of the blood donation and preparation process" font-family="Inter, sans-serif">' +
        ['Donor screening','Blood collection','Testing for safety','Separation into components','Storage','Issue to patient'].map(function (s, i) {
          var x = 6 + i * 79;
          var w1 = s.split(' ').slice(0, 2).join(' '), w2 = s.split(' ').slice(2).join(' ');
          return '<rect x="' + x + '" y="40" width="70" height="48" rx="8" fill="#E8F0F4" stroke="#1E5F9C"/>' +
            '<text x="' + (x + 35) + '" y="58" text-anchor="middle" font-size="8.5" fill="#123">' + (i + 1) + '.</text>' +
            '<text x="' + (x + 35) + '" y="70" text-anchor="middle" font-size="7.5" fill="#334155">' + w1 + '</text>' +
            '<text x="' + (x + 35) + '" y="80" text-anchor="middle" font-size="7.5" fill="#334155">' + w2 + '</text>' +
            (i < 5 ? '<text x="' + (x + 76) + '" y="66" font-size="12" fill="#1E5F9C">→</text>' : '');
        }).join('') + '</svg>'
    },
    task2: {
      minWords: 250, timeSuggest: "~40 min",
      prompt: "Some people think that in the future, technology such as robots and artificial intelligence will replace many healthcare workers. To what extent do you agree or disagree?"
    }
  }
};
