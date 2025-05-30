const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// All quiz questions data with difficulty levels
const questions = [
  
    // easy soccer questions
 
    {
      "question": "Which country has won the most FIFA World Cups?",
      "correct_answer": "Brazil",
      "incorrect_answers": ["Germany", "Italy", "Argentina"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "What is the term for when a player scores three goals in a single game?",
      "correct_answer": "Hat trick",
      "incorrect_answers": ["Triple play", "Three-pointer", "Grand slam"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "How many players are on the field for one team during a standard soccer match?",
      "correct_answer": "11",
      "incorrect_answers": ["9", "10", "12"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "What is the name of the area where the goalkeeper can use their hands?",
      "correct_answer": "Penalty box",
      "incorrect_answers": ["Goal area", "Center circle", "Touchline"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "Which part of the body is not allowed to touch the ball in soccer (except for the goalkeeper)?",
      "correct_answer": "Hands",
      "incorrect_answers": ["Head", "Chest", "Feet"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "What is the term for a game that ends with both teams having the same score?",
      "correct_answer": "Draw",
      "incorrect_answers": ["Win", "Loss", "Overtime"],
      "difficulty": "easy",
      "sport": "soccer"
    },

    // easy football questions

    {
      "question": "How many points is a touchdown worth?",
      "correct_answer": "6",
      "incorrect_answers": ["3", "7", "1"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "What is the name of the championship game of the NFL?",
      "correct_answer": "Super Bowl",
      "incorrect_answers": ["World Series", "Stanley Cup", "NBA Finals"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "How many teams are there in the NFL?",
      "correct_answer": "32",
      "incorrect_answers": ["30", "31", "33"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "What is the term for when the defense catches a pass intended for the offense?",
      "correct_answer": "Interception",
      "incorrect_answers": ["Fumble", "Sack", "Touchback"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "Which position throws the football to start a play?",
      "correct_answer": "Quarterback",
      "incorrect_answers": ["Running back", "Wide receiver", "Linebacker"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "What is it called when a player drops the ball after having possession in football?",
      "correct_answer": "Fumble",
      "incorrect_answers": ["Interception", "Sack", "Punt"],
      "difficulty": "easy",
      "sport": "football"
    },

    // easy hockey questions

    {
      "question": "What is the object called that players hit in ice hockey?",
      "correct_answer": "Puck",
      "incorrect_answers": ["Ball", "Disc", "Ring"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "How many periods are there in a standard ice hockey game?",
      "correct_answer": "3",
      "incorrect_answers": ["2", "4", "5"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "What is it called when a player scores three goals in a single hockey game?",
      "correct_answer": "Hat trick",
      "incorrect_answers": ["Triple play", "Three-pointer", "Grand slam"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "Which position is responsible for preventing the puck from entering the net?",
      "correct_answer": "Goalie",
      "incorrect_answers": ["Forward", "Defenseman", "Center"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "What is the name of the trophy awarded to the NHL champion?",
      "correct_answer": "Stanley Cup",
      "incorrect_answers": ["Lombardi Trophy", "World Series Trophy", "Larry O'Brien Trophy"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "Which country is known as the birthplace of ice hockey?",
      "correct_answer": "Canada",
      "incorrect_answers": ["USA", "Russia", "Sweden"],
      "difficulty": "easy",
      "sport": "hockey"
    },

    // easy baseball questions

    {
      "question": "How many bases are there on a baseball field?",
      "correct_answer": "4",
      "incorrect_answers": ["3", "5", "6"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "What is it called when a batter hits the ball out of the park in fair territory?",
      "correct_answer": "Home run",
      "incorrect_answers": ["Triple", "Double", "Single"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "How many players are on the field for one team during a baseball game?",
      "correct_answer": "9",
      "incorrect_answers": ["8", "10", "11"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "What is the term for a pitch that the batter swings at and misses?",
      "correct_answer": "Strike",
      "incorrect_answers": ["Ball", "Foul", "Hit"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "Which position stands behind home plate and catches pitches?",
      "correct_answer": "Catcher",
      "incorrect_answers": ["Pitcher", "Shortstop", "First baseman"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "What is the term for when a batter hits the ball and reaches second base safely?",
      "correct_answer": "Double",
      "incorrect_answers": ["Single", "Triple", "Home run"],
      "difficulty": "easy",
      "sport": "baseball"
    },

    // easy basketball questions

    {
      "question": "How many points is a shot made from beyond the three-point line worth?",
      "correct_answer": "3",
      "incorrect_answers": ["1", "2", "4"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "What is the term for when a player grabs the ball after a missed shot?",
      "correct_answer": "Rebound",
      "incorrect_answers": ["Steal", "Assist", "Block"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "How many players are on the court for one team during a basketball game?",
      "correct_answer": "5",
      "incorrect_answers": ["4", "6", "7"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "What is it called when a player dribbles the ball, stops, and then starts dribbling again?",
      "correct_answer": "Double dribble",
      "incorrect_answers": ["Traveling", "Carrying", "Pivoting"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "Which player is known as 'King James'?",
      "correct_answer": "LeBron James",
      "incorrect_answers": ["Michael Jordan", "Kobe Bryant", "Kevin Durant"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "What is the term for a shot made while being fouled, with the opportunity for an extra free throw?",
      "correct_answer": "And-one",
      "incorrect_answers": ["Double play", "Slam dunk", "Alley-oop"],
      "difficulty": "easy",
      "sport": "basketball"
    },

    // medium soccer questions

    {
      "question": "Which country won the first ever FIFA World Cup in 1930?",
      "correct_answer": "Uruguay",
      "incorrect_answers": ["Brazil", "Italy", "Argentina"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Who is known as the 'King of Football'?",
      "correct_answer": "Pelé",
      "incorrect_answers": ["Diego Maradona", "Lionel Messi", "Cristiano Ronaldo"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which player has won the most FIFA Ballon d’Or awards?",
      "correct_answer": "Lionel Messi",
      "incorrect_answers": ["Cristiano Ronaldo", "Michel Platini", "Johan Cruyff"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which team is known as the 'Red Devils'?",
      "correct_answer": "Manchester United",
      "incorrect_answers": ["Liverpool", "Arsenal", "Chelsea"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Who scored the 'Hand of God' goal in the 1986 World Cup?",
      "correct_answer": "Diego Maradona",
      "incorrect_answers": ["Pelé", "Zinedine Zidane", "Ronaldinho"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which country has won the most World Cups?",
      "correct_answer": "Brazil",
      "incorrect_answers": ["Germany", "Italy", "Argentina"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "What year was the Premier League founded?",
      "correct_answer": "1992",
      "incorrect_answers": ["1988", "1990", "1994"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Who holds the record for the most goals in a single Premier League season?",
      "correct_answer": "Mohamed Salah",
      "incorrect_answers": ["Alan Shearer", "Cristiano Ronaldo", "Harry Kane"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which nation won the Euro 2020 tournament?",
      "correct_answer": "Italy",
      "incorrect_answers": ["England", "France", "Spain"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "What is the maximum number of substitutions allowed in a standard FIFA match?",
      "correct_answer": "Three",
      "incorrect_answers": ["Four", "Five", "Six"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Who scored the fastest goal in World Cup history?",
      "correct_answer": "Hakan Sükür",
      "incorrect_answers": ["Cristiano Ronaldo", "Pelé", "Kylian Mbappé"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which club has won the most UEFA Champions League titles?",
      "correct_answer": "Real Madrid",
      "incorrect_answers": ["AC Milan", "Liverpool", "Bayern Munich"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "What is the name of the award given to the top scorer in a World Cup tournament?",
      "correct_answer": "The Golden Boot",
      "incorrect_answers": ["The Golden Ball", "The Silver Boot", "The Top Scorer Award"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "In what year was the first European Championship held?",
      "correct_answer": "1960",
      "incorrect_answers": ["1956", "1964", "1968"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Who is the only player to win three European Golden Shoes?",
      "correct_answer": "Lionel Messi",
      "incorrect_answers": ["Cristiano Ronaldo", "Thierry Henry", "Luis Suárez"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which team won the first ever Premier League title?",
      "correct_answer": "Manchester United",
      "incorrect_answers": ["Arsenal", "Chelsea", "Blackburn Rovers"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which country is known as the 'Azzurri'?",
      "correct_answer": "Italy",
      "incorrect_answers": ["France", "Spain", "Portugal"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Who is the youngest player to ever play in a FIFA World Cup?",
      "correct_answer": "Norman Whiteside",
      "incorrect_answers": ["Pele", "Kylian Mbappé", "Samuel Eto'o"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "What is the name of the stadium where FC Barcelona plays?",
      "correct_answer": "Camp Nou",
      "incorrect_answers": ["Santiago Bernabéu", "Old Trafford", "Allianz Arena"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Who holds the record for the most international goals in soccer history?",
      "correct_answer": "Cristiano Ronaldo",
      "incorrect_answers": ["Ali Daei", "Lionel Messi", "Pelé"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which player holds the record for the most Premier League appearances?",
      "correct_answer": "Gareth Barry",
      "incorrect_answers": ["Ryan Giggs", "Frank Lampard", "Steven Gerrard"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Who scored the first goal in Premier League history?",
      "correct_answer": "Brian Deane",
      "incorrect_answers": ["Alan Shearer", "Eric Cantona", "Mark Hughes"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "What is the highest number of points achieved by a team in a single Premier League season?",
      "correct_answer": "100 points by Manchester City",
      "incorrect_answers": ["98 points by Liverpool", "95 points by Chelsea", "93 points by Arsenal"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Who is the all-time top scorer in the Premier League?",
      "correct_answer": "Alan Shearer",
      "incorrect_answers": ["Wayne Rooney", "Thierry Henry", "Harry Kane"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which club won the Premier League title in the 2015-2016 season, defying odds of 5000-1?",
      "correct_answer": "Leicester City",
      "incorrect_answers": ["Tottenham Hotspur", "Arsenal", "Manchester City"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Who was the first manager to win the Premier League with two different clubs?",
      "correct_answer": "José Mourinho",
      "incorrect_answers": ["Pep Guardiola", "Carlo Ancelotti", "Arsène Wenger"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which goalkeeper has the most clean sheets in Premier League history?",
      "correct_answer": "Petr Čech",
      "incorrect_answers": ["David De Gea", "Edwin van der Sar", "Peter Schmeichel"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "What was the highest-scoring match in Premier League history?",
      "correct_answer": "Portsmouth vs. Reading (7-4) in 2007",
      "incorrect_answers": ["Manchester United vs. Arsenal (8-2)", "Tottenham vs. Wigan (9-1)", "Liverpool vs. Newcastle (4-3)"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Who was the first non-European manager to win the Premier League?",
      "correct_answer": "Manuel Pellegrini",
      "incorrect_answers": ["Arsène Wenger", "José Mourinho", "Rafael Benítez"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which player won the Premier League Golden Boot in his debut season in 2019-2020?",
      "correct_answer": "Pierre-Emerick Aubameyang",
      "incorrect_answers": ["Mohamed Salah", "Jamie Vardy", "Sadio Mané"],
      "difficulty": "medium",
      "sport": "soccer"
    }
    
    // medium baseball questions
      
];

// Helper function to get random questions by difficulty and sport
const getRandomQuestionsByDifficultyAndSport = (difficulty, sport, count) => {
  let filteredQuestions = questions.filter(q => q.difficulty === difficulty);
  
  if (sport !== 'all') {
    filteredQuestions = filteredQuestions.filter(q => q.sport === sport);
  }
  
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
  const sport = req.query.sport || 'all';
  
  if (difficulty && ['easy', 'medium', 'hard'].includes(difficulty)) {
    const randomQuestions = getRandomQuestionsByDifficultyAndSport(difficulty, sport, count);
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