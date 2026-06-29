const fs = require('fs');

async function fetchLiveHtml() {
  try {
    const res = await fetch('https://flashcabcables.com/cable/lt-ab-cable');
    const html = await res.text();
    // In React, the JS contains the string
    const jsMatch = html.match(/assets\/index-.*?\.js/);
    if (jsMatch) {
      const jsRes = await fetch('https://flashcabcables.com/' + jsMatch[0]);
      const js = await jsRes.text();
      const match = js.match(/.{0,100}Phase Conductor \+ Messenger \(Bare\).{0,100}/g);
      console.log('Matches:', match);
      
      const headMatch = js.match(/<h[3456].*?Phase Conductor \+ Messenger.*?<\/h[3456]>/g);
      console.log('Headings:', headMatch);
      
      const divMatch = js.match(/<div.*?Phase Conductor \+ Messenger.*?<\/div>/g);
      console.log('Divs:', divMatch);
    }
  } catch (err) {
    console.error(err);
  }
}

fetchLiveHtml();
