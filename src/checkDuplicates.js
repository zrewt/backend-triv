const fs = require('fs');

const fileContent = fs.readFileSync('index.js', 'utf8');

const questionMatches = [...fileContent.matchAll(/"question":\s*"([^"]+)"/g)];

const questionCounts = {};
const duplicates = [];

questionMatches.forEach(match => {
  const questionText = match[1].trim();
  if (questionCounts[questionText]) {
    questionCounts[questionText]++;
    if (questionCounts[questionText] === 2) {
      duplicates.push(questionText);
    }
  } else {
    questionCounts[questionText] = 1;
  }
});

if (duplicates.length > 0) {
  console.log('🛑 Duplicate questions found:\n');
  duplicates.forEach(q => console.log('- ' + q));
} else {
  console.log('✅ No duplicate questions found.');
}
