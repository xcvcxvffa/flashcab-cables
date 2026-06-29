const fs = require('fs');

let content = fs.readFileSync('src/data/productData.js', 'utf8');

// Remove Weight header in Table 1
content = content.replace('<th>Weight<br/>(Approx.)</th>', '');

// Remove Weight header in Table 2
content = content.replace('<th rowspan="2">Weight<br/>(Approx.)</th>', '');

// Remove Weight cells in Table 1
// The format is: <td>XX</td><td class="mono-cell">YYY</td><td class="highlight-cell">ZZZ</td>
// We want to remove `<td class="mono-cell">YYY</td>`
// Using regex to match all <td class="mono-cell">...</td>
// Wait, Table 3 has `mono-cell` for Reactance! We only want to remove it for Table 1 and 2.
// Let's do exact replacements for the rows in Table 1 and 2.

const replacements1 = [
  ['<td>6.45</td><td class="mono-cell">139</td>', '<td>6.45</td>'],
  ['<td>6.45</td><td class="mono-cell">278</td>', '<td>6.45</td>'],
  ['<td>6.45</td><td class="mono-cell">170</td>', '<td>6.45</td>'],
  ['<td>6.45</td><td class="mono-cell">371</td>', '<td>6.45</td>'],
  ['<td>6.45</td><td class="mono-cell">202</td>', '<td>6.45</td>'],
  ['<td>6.45</td><td class="mono-cell">466</td>', '<td>6.45</td>'],
  ['<td>7.60</td><td class="mono-cell">286</td>', '<td>7.60</td>'],
  ['<td>7.60</td><td class="mono-cell">667</td>', '<td>7.60</td>'],
  ['<td>9.05</td><td class="mono-cell">391</td>', '<td>9.05</td>'],
  ['<td>9.05</td><td class="mono-cell">899</td>', '<td>9.05</td>'],
  ['<td>10.77</td><td class="mono-cell">526</td>', '<td>10.77</td>'],
  ['<td>10.77</td><td class="mono-cell">1191</td>', '<td>10.77</td>']
];

for (let [oldStr, newStr] of replacements1) {
  content = content.replace(oldStr, newStr);
}

const replacements2 = [
  ['<td>7.5</td><td class="mono-cell">7.0</td><td class="highlight-cell">7.0</td>', '<td>7.5</td><td class="highlight-cell">7.0</td>'],
  ['<td>7.5</td><td class="mono-cell">9.8</td><td class="highlight-cell">9.8</td>', '<td>7.5</td><td class="highlight-cell">9.8</td>'],
  ['<td>7.5</td><td class="mono-cell">14.0</td><td class="highlight-cell">14.0</td>', '<td>7.5</td><td class="highlight-cell">14.0</td>'],
  ['<td>7.5</td><td class="mono-cell">19.7</td><td class="highlight-cell">19.7</td>', '<td>7.5</td><td class="highlight-cell">19.7</td>']
];

for (let [oldStr, newStr] of replacements2) {
  // We should replace all occurrences just in case, but there might be multiple '7.0' ones
  content = content.split(oldStr).join(newStr);
}

fs.writeFileSync('src/data/productData.js', content);
console.log('Removed Weight columns');
