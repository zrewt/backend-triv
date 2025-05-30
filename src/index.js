const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// All quiz questions data with difficulty levels
const questions = [
    {
      "question": "Who has made the most three-pointers in NBA history?",
      "correct_answer": "Stephen Curry",
      "incorrect_answers": ["Ray Allen", "Reggie Miller", "James Harden"],
      "difficulty": "easy"
    },
    {
      "question": "How many players are on a soccer team on the field?",
      "correct_answer": "11",
      "incorrect_answers": ["10", "9", "12"],
      "difficulty": "easy"
    },
    {
      "question": "Which sport uses a puck?",
      "correct_answer": "Hockey",
      "incorrect_answers": ["Baseball", "Basketball", "Soccer"],
      "difficulty": "easy"
    },
    {
      "question": "Which MLB team is based in New York?",
      "correct_answer": "New York Yankees",
      "incorrect_answers": ["Chicago Cubs", "Los Angeles Dodgers", "Boston Red Sox"],
      "difficulty": "easy"
    },
    {
      "question": "How many points is a touchdown worth in American football?",
      "correct_answer": "6",
      "incorrect_answers": ["3", "7", "5"],
      "difficulty": "easy"
    },
    {
      "question": "What color card signals a player must leave a soccer game?",
      "correct_answer": "Red",
      "incorrect_answers": ["Yellow", "Blue", "Green"],
      "difficulty": "easy"
    },
    {
      "question": "Which basketball team has won the most NBA championships?",
      "correct_answer": "Boston Celtics",
      "incorrect_answers": ["Golden State Warriors", "Chicago Bulls", "Miami Heat"],
      "difficulty": "easy"
    },
    {
      "question": "Which position throws the ball in baseball?",
      "correct_answer": "Pitcher",
      "incorrect_answers": ["Catcher", "First baseman", "Shortstop"],
      "difficulty": "easy"
    },
    {
      "question": "In what sport would you perform a slam dunk?",
      "correct_answer": "Basketball",
      "incorrect_answers": ["Soccer", "Baseball", "Hockey"],
      "difficulty": "easy"
    },
    {
      "question": "Which country is famous for inventing hockey?",
      "correct_answer": "Canada",
      "incorrect_answers": ["USA", "Russia", "Sweden"],
      "difficulty": "easy"
    },
    {
      "question": "Which player is known as 'The King' in basketball?",
      "correct_answer": "LeBron James",
      "incorrect_answers": ["Michael Jordan", "Kobe Bryant", "Stephen Curry"],
      "difficulty": "easy"
    },
    {
      "question": "Which country has won the most FIFA World Cups?",
      "correct_answer": "Brazil",
      "incorrect_answers": ["Germany", "Italy", "Argentina"],
      "difficulty": "easy"
    },
    {
      "question": "Which baseball team is known for the 'Curse of the Bambino'?",
      "correct_answer": "Boston Red Sox",
      "incorrect_answers": ["New York Yankees", "Chicago White Sox", "Los Angeles Angels"],
      "difficulty": "easy"
    },
    {
      "question": "What shape is a soccer ball?",
      "correct_answer": "Sphere",
      "incorrect_answers": ["Oval", "Cube", "Cylinder"],
      "difficulty": "easy"
    },
    {
      "question": "Which position usually scores goals in hockey?",
      "correct_answer": "Forward",
      "incorrect_answers": ["Goalie", "Defenseman", "Referee"],
      "difficulty": "easy"
    },
    {
      "question": "How many quarters are there in a basketball game?",
      "correct_answer": "4",
      "incorrect_answers": ["2", "3", "5"],
      "difficulty": "easy"
    },
    {
      "question": "Which NFL team has the most Super Bowl wins?",
      "correct_answer": "Pittsburgh Steelers",
      "incorrect_answers": ["Dallas Cowboys", "San Francisco 49ers", "Green Bay Packers"],
      "difficulty": "easy"
    },
    {
      "question": "What is the area called where a batter stands in baseball?",
      "correct_answer": "Batter's box",
      "incorrect_answers": ["Pitcher's mound", "Outfield", "Base path"],
      "difficulty": "easy"
    },
    {
      "question": "Which basketball player wore number 23 for the Bulls?",
      "correct_answer": "Michael Jordan",
      "incorrect_answers": ["Scottie Pippen", "LeBron James", "Dennis Rodman"],
      "difficulty": "easy"
    },
    {
      "question": "What is the name of the trophy awarded to the NHL champion?",
      "correct_answer": "Stanley Cup",
      "incorrect_answers": ["World Series", "Super Bowl", "NBA Finals Trophy"],
      "difficulty": "easy"
    },
    {
      "question": "In soccer, what is it called when a player scores three goals in one game?",
      "correct_answer": "Hat trick",
      "incorrect_answers": ["Triple score", "Goal run", "Scoring spree"],
      "difficulty": "easy"
    },
    {
      "question": "Which MLB player is famous for hitting 762 career home runs?",
      "correct_answer": "Barry Bonds",
      "incorrect_answers": ["Babe Ruth", "Hank Aaron", "Alex Rodriguez"],
      "difficulty": "easy"
    },
    {
      "question": "What is the name of the line where a hockey face-off takes place?",
      "correct_answer": "Face-off circle",
      "incorrect_answers": ["Goal line", "Center line", "Penalty box"],
      "difficulty": "easy"
    },
    {
      "question": "How many downs does an NFL team have to get 10 yards?",
      "correct_answer": "4",
      "incorrect_answers": ["3", "5", "6"],
      "difficulty": "easy"
    },
    {
      "question": "What is the maximum number of players allowed on a basketball court per team?",
      "correct_answer": "5",
      "incorrect_answers": ["6", "7", "4"],
      "difficulty": "easy"
    },
    {
      "question": "Which country is Lionel Messi from?",
      "correct_answer": "Argentina",
      "incorrect_answers": ["Spain", "Brazil", "Portugal"],
      "difficulty": "easy"
    },
    {
      "question": "Which sport is known for a 'home run'?",
      "correct_answer": "Baseball",
      "incorrect_answers": ["Soccer", "Basketball", "Football"],
      "difficulty": "easy"
    },
    {
      "question": "In which sport do players use skates on ice?",
      "correct_answer": "Hockey",
      "incorrect_answers": ["Basketball", "Baseball", "Soccer"],
      "difficulty": "easy"
    },
    {
      "question": "What is a football field also called?",
      "correct_answer": "Gridiron",
      "incorrect_answers": ["Pitch", "Court", "Track"],
      "difficulty": "easy"
    },
    {
      "question": "Which athlete is known for wearing jersey number 7 in football?",
      "correct_answer": "Tom Brady",
      "incorrect_answers": ["Aaron Rodgers", "Joe Montana", "Lamar Jackson"],
      "difficulty": "easy"
    },
    {
      "question": "What is used to hit a baseball?",
      "correct_answer": "Bat",
      "incorrect_answers": ["Stick", "Club", "Paddle"],
      "difficulty": "easy"
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