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
const missingQuestions = [];

// Process each file
filesToCheck.forEach(fileName => {
  try {
    const filePath = path.join(__dirname, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const fileLines = fileContent.split(/\r?\n/);

    // Try to extract the array of questions from the file
    let questionsArray = [];
    let objectStartLines = [];
    try {
      // Use eval in a sandboxed way to get the array (since it's JS, not JSON)
      const module = { exports: {} };
      eval(fileContent + '\nmodule.exports = typeof hockeyQuestions !== "undefined" ? hockeyQuestions : (typeof baseballQuestions !== "undefined" ? baseballQuestions : (typeof footballQuestions !== "undefined" ? footballQuestions : (typeof basketballQuestions !== "undefined" ? basketballQuestions : (typeof soccerQuestions !== "undefined" ? soccerQuestions : []))));');
      questionsArray = module.exports;
      // Find the start line of each question object
      let inArray = false;
      let count = 0;
      fileLines.forEach((line, idx) => {
        if (!inArray && line.includes('[')) inArray = true;
        if (inArray && line.trim().startsWith('{')) {
          objectStartLines.push(idx + 1); // 1-based line number
          count++;
        }
      });
    } catch (e) {
      // fallback: try to match objects manually
      questionsArray = fileContent.split(/\{(?=(?:[^"]*"[^"]*")*[^"]*$)/).slice(1).map(obj => '{' + obj.split('}')[0] + '}');
      questionsArray = questionsArray.map(str => {
        try { return eval('(' + str + ')'); } catch { return null; }
      }).filter(Boolean);
      // fallback: just use every line with a '{' as a possible start
      objectStartLines = fileLines.map((line, idx) => line.trim().startsWith('{') ? idx + 1 : null).filter(x => x);
    }

    questionsArray.forEach((q, idx) => {
      if (!q || typeof q.question !== 'string' || q.question.trim() === '') {
        missingQuestions.push({ file: fileName, index: idx, line: objectStartLines[idx] });
      }
    });

    const questionMatches = [...fileContent.matchAll(/"question":\s*"([^"]*)"/g)];
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
if (missingQuestions.length > 0) {
  console.log('\n⚠️  Questions missing or empty in the following files:');
  missingQuestions.forEach(({ file, index, line }) => {
    if (line) {
      console.log(`- ${file} [question index: ${index}, line: ${line}]`);
    } else {
      console.log(`- ${file} [question index: ${index}]`);
    }
  });
} else {
  console.log('✅ No missing or empty questions found.');
}
