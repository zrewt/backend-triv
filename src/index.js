const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// All quiz questions data with difficulty levels
const questions = [
  // Soccer Questions
  {
    question: "What is the name of Manchester United's home stadium?",
    correct_answer: "Old Trafford",
    incorrect_answers: ["Anfield", "Emirates Stadium", "Stamford Bridge"],
    difficulty: "easy"
  },
  {
    question: "Which country won the FIFA World Cup in 2022?",
    correct_answer: "Argentina",
    incorrect_answers: ["France", "Brazil", "Portugal"],
    difficulty: "medium"
  },
  {
    question: "How many players are on a soccer team?",
    correct_answer: "11",
    incorrect_answers: ["10", "12", "9"],
    difficulty: "easy"
  },
  {
    question: "Which team has won the most UEFA Champions League titles?",
    correct_answer: "Real Madrid",
    incorrect_answers: ["Barcelona", "Bayern Munich", "AC Milan"],
    difficulty: "medium"
  },
  // Basketball Questions
  {
    question: "Who won the NBA Championship in 2023?",
    correct_answer: "Denver Nuggets",
    incorrect_answers: ["Los Angeles Lakers", "Boston Celtics", "Miami Heat"],
    difficulty: "medium"
  },
  {
    question: "How many points is a three-pointer worth in basketball?",
    correct_answer: "3",
    incorrect_answers: ["2", "4", "1"],
    difficulty: "easy"
  },
  {
    question: "Which team does LeBron James play for?",
    correct_answer: "Los Angeles Lakers",
    incorrect_answers: ["Boston Celtics", "Miami Heat", "Cleveland Cavaliers"],
    difficulty: "easy"
  },
  // Baseball Questions
  {
    question: "How many innings are in a standard baseball game?",
    correct_answer: "9",
    incorrect_answers: ["7", "8", "10"],
    difficulty: "easy"
  },
  {
    question: "Which team won the World Series in 2023?",
    correct_answer: "Texas Rangers",
    incorrect_answers: ["Arizona Diamondbacks", "Houston Astros", "New York Yankees"],
    difficulty: "medium"
  },
  {
    question: "How many players are on a baseball field at once?",
    correct_answer: "9",
    incorrect_answers: ["10", "8", "11"],
    difficulty: "easy"
  },
  // Football Questions
  {
    question: "Which team won the Super Bowl in 2024?",
    correct_answer: "Kansas City Chiefs",
    incorrect_answers: ["San Francisco 49ers", "Baltimore Ravens", "Detroit Lions"],
    difficulty: "medium"
  },
  {
    question: "How many points is a touchdown worth in football?",
    correct_answer: "6",
    incorrect_answers: ["7", "5", "4"],
    difficulty: "easy"
  },
  {
    question: "Which team does Patrick Mahomes play for?",
    correct_answer: "Kansas City Chiefs",
    incorrect_answers: ["San Francisco 49ers", "Baltimore Ravens", "Detroit Lions"],
    difficulty: "easy"
  },
  // Additional Soccer Questions
  {
    question: "Who won the Ballon d'Or in 2023?",
    correct_answer: "Lionel Messi",
    incorrect_answers: ["Erling Haaland", "Kylian Mbappé", "Kevin De Bruyne"],
    difficulty: "medium"
  },
  {
    question: "Which country hosted the 2018 FIFA World Cup?",
    correct_answer: "Russia",
    incorrect_answers: ["France", "Brazil", "Germany"],
    difficulty: "medium"
  },
  // Additional Basketball Questions
  {
    question: "Who is the NBA's all-time leading scorer?",
    correct_answer: "LeBron James",
    incorrect_answers: ["Michael Jordan", "Kareem Abdul-Jabbar", "Kobe Bryant"],
    difficulty: "medium"
  },
  {
    question: "How many teams are in the NBA?",
    correct_answer: "30",
    incorrect_answers: ["28", "32", "26"],
    difficulty: "easy"
  },
  // Additional Baseball Questions
  {
    question: "What is the distance between bases in Major League Baseball?",
    correct_answer: "90 feet",
    incorrect_answers: ["80 feet", "100 feet", "85 feet"],
    difficulty: "hard"
  },
  {
    question: "Who holds the MLB record for most home runs in a career?",
    correct_answer: "Barry Bonds",
    incorrect_answers: ["Babe Ruth", "Hank Aaron", "Alex Rodriguez"],
    difficulty: "hard"
  },
  // Additional Football Questions
  {
    question: "How many Super Bowl rings does Tom Brady have?",
    correct_answer: "7",
    incorrect_answers: ["6", "5", "8"],
    difficulty: "medium"
  },
  {
    question: "Which team has won the most Super Bowls?",
    correct_answer: "New England Patriots",
    incorrect_answers: ["Pittsburgh Steelers", "Dallas Cowboys", "San Francisco 49ers"],
    difficulty: "hard"
  },
  // Tennis Questions
  {
    question: "Who won the 2023 Wimbledon Men's Singles?",
    correct_answer: "Carlos Alcaraz",
    incorrect_answers: ["Novak Djokovic", "Jannik Sinner", "Daniil Medvedev"],
    difficulty: "medium"
  },
  {
    question: "How many Grand Slam tournaments are there in tennis?",
    correct_answer: "4",
    incorrect_answers: ["3", "5", "6"],
    difficulty: "easy"
  },
  // Golf Questions
  {
    question: "Who won the 2023 Masters Tournament?",
    correct_answer: "Jon Rahm",
    incorrect_answers: ["Tiger Woods", "Rory McIlroy", "Scottie Scheffler"],
    difficulty: "medium"
  },
  {
    question: "How many major championships are there in golf?",
    correct_answer: "4",
    incorrect_answers: ["3", "5", "6"],
    difficulty: "easy"
  },
  // Olympic Questions
  {
    question: "Which city hosted the 2020 Summer Olympics?",
    correct_answer: "Tokyo",
    incorrect_answers: ["Paris", "Los Angeles", "London"],
    difficulty: "medium"
  },
  {
    question: "How many Olympic rings are there?",
    correct_answer: "5",
    incorrect_answers: ["4", "6", "7"],
    difficulty: "easy"
  },
  // Hockey Questions
  {
    question: "Which team won the 2023 Stanley Cup?",
    correct_answer: "Vegas Golden Knights",
    incorrect_answers: ["Florida Panthers", "Boston Bruins", "Toronto Maple Leafs"],
    difficulty: "medium"
  },
  {
    question: "How many players are on the ice for each team in hockey?",
    correct_answer: "6",
    incorrect_answers: ["5", "7", "8"],
    difficulty: "easy"
  },
  // Cricket Questions
  {
    question: "Which country won the 2023 Cricket World Cup?",
    correct_answer: "Australia",
    incorrect_answers: ["India", "England", "New Zealand"],
    difficulty: "medium"
  },
  {
    question: "How many players are in a cricket team?",
    correct_answer: "11",
    incorrect_answers: ["10", "12", "9"],
    difficulty: "easy"
  },
  // Formula 1 Questions
  {
    question: "Who won the 2023 Formula 1 World Championship?",
    correct_answer: "Max Verstappen",
    incorrect_answers: ["Lewis Hamilton", "Charles Leclerc", "Lando Norris"],
    difficulty: "medium"
  },
  {
    question: "Which team won the 2023 Formula 1 Constructors' Championship?",
    correct_answer: "Red Bull Racing",
    incorrect_answers: ["Mercedes", "Ferrari", "McLaren"],
    difficulty: "hard"
  }
];

// Helper function to get random questions by difficulty
const getRandomQuestionsByDifficulty = (difficulty, count) => {
  const filteredQuestions = questions.filter(q => q.difficulty === difficulty);
  const questionsCopy = [...filteredQuestions];
  
  // Fisher-Yates shuffle algorithm
  for (let i = questionsCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questionsCopy[i], questionsCopy[j]] = [questionsCopy[j], questionsCopy[i]];
  }
  return questionsCopy.slice(0, count);
};

// Helper function to get random questions across all difficulties
const getRandomQuestions = (count) => {
  const questionsCopy = [...questions];
  for (let i = questionsCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questionsCopy[i], questionsCopy[j]] = [questionsCopy[j], questionsCopy[i]];
  }
  return questionsCopy.slice(0, count);
};

// Routes
app.get('/api/questions', (req, res) => {
  const count = parseInt(req.query.count) || 5;
  const difficulty = req.query.difficulty;
  
  if (difficulty && ['easy', 'medium', 'hard'].includes(difficulty)) {
    const randomQuestions = getRandomQuestionsByDifficulty(difficulty, count);
    res.json(randomQuestions);
  } else {
    const randomQuestions = getRandomQuestions(count);
    res.json(randomQuestions);
  }
});

// Get available difficulties
app.get('/api/difficulties', (req, res) => {
  res.json(['easy', 'medium', 'hard']);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 