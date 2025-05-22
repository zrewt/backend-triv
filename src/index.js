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
  {
    question: "What is the exact height of a standard basketball hoop in feet?",
    correct_answer: "10",
    incorrect_answers: ["9.5", "10.5", "9.75"],
    difficulty: "hard"
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
  {
    question: "What is the exact weight of a standard baseball in ounces?",
    correct_answer: "5-5.25",
    incorrect_answers: ["4.75-5", "5.25-5.5", "5.5-5.75"],
    difficulty: "hard"
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
  {
    question: "What is the exact length of a standard football field in yards?",
    correct_answer: "120",
    incorrect_answers: ["100", "110", "130"],
    difficulty: "hard"
  },
  // Hockey Questions
  {
    question: "Which team won the Stanley Cup in 2023?",
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
  {
    question: "Which player has won the most Stanley Cups?",
    correct_answer: "Henri Richard",
    incorrect_answers: ["Wayne Gretzky", "Mario Lemieux", "Gordie Howe"],
    difficulty: "hard"
  },
  {
    question: "What is the name of the NHL's most valuable player award?",
    correct_answer: "Hart Memorial Trophy",
    incorrect_answers: ["Vezina Trophy", "Art Ross Trophy", "Calder Trophy"],
    difficulty: "medium"
  },
  {
    question: "How many periods are in a standard NHL game?",
    correct_answer: "3",
    incorrect_answers: ["2", "4", "5"],
    difficulty: "easy"
  },
  {
    question: "What is the exact diameter of a hockey puck in inches?",
    correct_answer: "3",
    incorrect_answers: ["2.5", "3.5", "4"],
    difficulty: "hard"
  },
  // Additional Easy Questions
  {
    question: "Which country won the most FIFA World Cups?",
    correct_answer: "Brazil",
    incorrect_answers: ["Germany", "Italy", "Argentina"],
    difficulty: "easy"
  },
  {
    question: "How many players are on a basketball court for each team?",
    correct_answer: "5",
    incorrect_answers: ["6", "4", "7"],
    difficulty: "easy"
  },
  {
    question: "What is the main color of a standard basketball?",
    correct_answer: "Orange",
    incorrect_answers: ["Red", "Yellow", "Brown"],
    difficulty: "easy"
  },
  {
    question: "Which sport uses a 'touchdown' as a scoring method?",
    correct_answer: "Football",
    incorrect_answers: ["Soccer", "Basketball", "Baseball"],
    difficulty: "easy"
  },
  {
    question: "What is the shape of a baseball field?",
    correct_answer: "Diamond",
    incorrect_answers: ["Circle", "Square", "Triangle"],
    difficulty: "easy"
  },
  {
    question: "Which sport uses a 'goal' as a scoring method?",
    correct_answer: "Soccer",
    incorrect_answers: ["Basketball", "Baseball", "Football"],
    difficulty: "easy"
  },
  {
    question: "How many bases are there in baseball?",
    correct_answer: "4",
    incorrect_answers: ["3", "5", "6"],
    difficulty: "easy"
  },
  {
    question: "What is the main equipment used in hockey?",
    correct_answer: "Stick",
    incorrect_answers: ["Bat", "Racket", "Club"],
    difficulty: "easy"
  },
  {
    question: "Which sport uses a 'home run' as a scoring method?",
    correct_answer: "Baseball",
    incorrect_answers: ["Football", "Basketball", "Soccer"],
    difficulty: "easy"
  },
  // Additional Medium Questions
  {
    question: "Who is known as 'The King' in basketball?",
    correct_answer: "LeBron James",
    incorrect_answers: ["Michael Jordan", "Kobe Bryant", "Magic Johnson"],
    difficulty: "medium"
  },
  {
    question: "Which country has won the most Olympic gold medals in basketball?",
    correct_answer: "United States",
    incorrect_answers: ["Russia", "Spain", "Argentina"],
    difficulty: "medium"
  },
  {
    question: "What is the name of the trophy awarded to the NHL champions?",
    correct_answer: "Stanley Cup",
    incorrect_answers: ["Larry O'Brien Trophy", "Vince Lombardi Trophy", "World Series Trophy"],
    difficulty: "medium"
  },
  {
    question: "Which team has won the most NBA championships?",
    correct_answer: "Boston Celtics",
    incorrect_answers: ["Los Angeles Lakers", "Chicago Bulls", "Golden State Warriors"],
    difficulty: "medium"
  },
  {
    question: "What is the name of the NFL's championship game?",
    correct_answer: "Super Bowl",
    incorrect_answers: ["World Series", "Stanley Cup Finals", "NBA Finals"],
    difficulty: "medium"
  },
  {
    question: "Which country has won the most FIFA Women's World Cups?",
    correct_answer: "United States",
    incorrect_answers: ["Germany", "Norway", "Japan"],
    difficulty: "medium"
  },
  {
    question: "What is the name of the MLB's championship series?",
    correct_answer: "World Series",
    incorrect_answers: ["Super Bowl", "Stanley Cup Finals", "NBA Finals"],
    difficulty: "medium"
  },
  {
    question: "Which team has won the most Super Bowls?",
    correct_answer: "New England Patriots",
    incorrect_answers: ["Pittsburgh Steelers", "Dallas Cowboys", "San Francisco 49ers"],
    difficulty: "medium"
  },
  {
    question: "What is the name of the NBA's championship series?",
    correct_answer: "NBA Finals",
    incorrect_answers: ["World Series", "Super Bowl", "Stanley Cup Finals"],
    difficulty: "medium"
  },
  {
    question: "Which country has won the most Olympic gold medals in soccer?",
    correct_answer: "Hungary",
    incorrect_answers: ["Brazil", "Argentina", "Germany"],
    difficulty: "medium"
  },
  // Additional Hard Questions
  {
    question: "What is the exact weight of an NBA basketball in ounces?",
    correct_answer: "22",
    incorrect_answers: ["20", "24", "26"],
    difficulty: "hard"
  },
  {
    question: "What is the exact length of a standard soccer field in meters?",
    correct_answer: "100-130",
    incorrect_answers: ["90-120", "110-140", "80-110"],
    difficulty: "hard"
  },
  {
    question: "What is the exact diameter of a standard baseball in inches?",
    correct_answer: "2.86-2.94",
    incorrect_answers: ["2.76-2.84", "2.96-3.04", "2.66-2.74"],
    difficulty: "hard"
  },
  {
    question: "What is the exact height of a standard soccer goal in feet?",
    correct_answer: "8",
    incorrect_answers: ["7", "9", "10"],
    difficulty: "hard"
  },
  {
    question: "What is the exact weight of a standard football in ounces?",
    correct_answer: "14-15",
    incorrect_answers: ["13-14", "15-16", "12-13"],
    difficulty: "hard"
  },
  {
    question: "What is the exact length of a standard basketball court in feet?",
    correct_answer: "94",
    incorrect_answers: ["84", "104", "74"],
    difficulty: "hard"
  },
  {
    question: "What is the exact width of a standard hockey rink in feet?",
    correct_answer: "85",
    incorrect_answers: ["75", "95", "65"],
    difficulty: "hard"
  },
  {
    question: "What is the exact weight of a standard soccer ball in ounces?",
    correct_answer: "14-16",
    incorrect_answers: ["12-14", "16-18", "10-12"],
    difficulty: "hard"
  },
  {
    question: "What is the exact length of a standard baseball bat in inches?",
    correct_answer: "42",
    incorrect_answers: ["40", "44", "38"],
    difficulty: "hard"
  },
  {
    question: "What is the exact diameter of a standard basketball hoop in inches?",
    correct_answer: "18",
    incorrect_answers: ["16", "20", "22"],
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