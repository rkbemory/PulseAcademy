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
  }
};
