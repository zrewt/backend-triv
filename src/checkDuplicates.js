const fs = require('fs');
const path = require('path');

// List of files to check
const filesToCheck = [
  'questions/baseball.js',
  'questions/football.js',
  'questions/basketball.js',
  'questions/hockey.js',
  'questions/soccer.js'
];

const questionCounts = {};
const duplicates = [];

// Process each file
filesToCheck.forEach(fileName => {
  try {
    const filePath = path.join(__dirname, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    const questionMatches = [...fileContent.matchAll(/"question":\s*"([^"]+)"/g)];
    
    questionMatches.forEach(match => {
      const questionText = match[1].trim();
      if (questionCounts[questionText]) {
        questionCounts[questionText]++;
        if (questionCounts[questionText] === 2) {
          duplicates.push({
            question: questionText,
            count: questionCounts[questionText]
          });
        }
      } else {
        questionCounts[questionText] = 1;
      }
    });
  } catch (error) {
    console.error(`Error reading file ${fileName}:`, error.message);
  }
});

// Display results
if (duplicates.length > 0) {
  console.log('🛑 Duplicate questions found:\n');
  duplicates.forEach(({ question, count }) => {
    console.log(`- "${question}" (appears ${count} times)`);
  });
} else {
  console.log('✅ No duplicate questions found.');
}
