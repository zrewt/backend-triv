const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const questions = require('./questions');

const getRandomQuestionsByDifficultyAndSport = (difficulty, sport, count) => {
  let filteredQuestions = questions.filter(q => q.difficulty === difficulty);
  
  if (sport !== 'all') {
    filteredQuestions = filteredQuestions.filter(q => q.sport === sport);
  }
  
  const questionsCopy = [...filteredQuestions];
  
  for (let i = questionsCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questionsCopy[i], questionsCopy[j]] = [questionsCopy[j], questionsCopy[i]];
  }
  return questionsCopy.slice(0, count);
};

const getRandomQuestions = (count) => {
  const questionsCopy = [...questions];
  for (let i = questionsCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questionsCopy[i], questionsCopy[j]] = [questionsCopy[j], questionsCopy[i]];
  }
  return questionsCopy.slice(0, count);
};

// Deterministic daily quiz endpoint
function getTodaySeed() {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}-new`;
}

function seededShuffle(array, seed) {
  let arr = array.slice();
  let s = seed.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  for (let i = arr.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

app.get('/api/daily-quiz', (req, res) => {
  const mediumQuestions = questions.filter(q => q.difficulty === 'easy');
  const seed = getTodaySeed();
  const shuffled = seededShuffle(mediumQuestions, seed);
  res.json(shuffled.slice(0, 5));
});

app.get('/api/questions', (req, res) => {
  const count = parseInt(req.query.count) || 5;
  const difficulty = req.query.difficulty;
  const sport = req.query.sport || 'all';
  
  if (difficulty && ['easy', 'medium', 'hard'].includes(difficulty)) {
    const randomQuestions = getRandomQuestionsByDifficultyAndSport(difficulty, sport, count);
    res.json(randomQuestions);
  } else {
    const randomQuestions = getRandomQuestions(count);
    res.json(randomQuestions);
  }
});

app.get('/api/difficulties', (req, res) => {
  res.json(['easy', 'medium', 'hard']);
});
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 