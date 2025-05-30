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
    } ,
      {
        "question": "Which NBA team drafted Kobe Bryant before he was traded to the Lakers?",
        "correct_answer": "Charlotte Hornets",
        "incorrect_answers": ["Miami Heat", "Phoenix Suns", "Atlanta Hawks"],
        "difficulty": "medium"
      },
      {
        "question": "Which NFL quarterback holds the record for most career passing touchdowns?",
        "correct_answer": "Tom Brady",
        "incorrect_answers": ["Peyton Manning", "Drew Brees", "Aaron Rodgers"],
        "difficulty": "medium"
      },
      {
        "question": "Who won the Ballon d'Or in 2023?",
        "correct_answer": "Lionel Messi",
        "incorrect_answers": ["Erling Haaland", "Kylian Mbappé", "Robert Lewandowski"],
        "difficulty": "medium"
      },
      {
        "question": "Which MLB pitcher threw a perfect game in 2012?",
        "correct_answer": "Felix Hernandez",
        "incorrect_answers": ["Clayton Kershaw", "Justin Verlander", "Max Scherzer"],
        "difficulty": "medium"
      },
      {
        "question": "Which NHL team won the most Stanley Cups in the 20th century?",
        "correct_answer": "Montreal Canadiens",
        "incorrect_answers": ["Toronto Maple Leafs", "Boston Bruins", "New York Rangers"],
        "difficulty": "medium"
      },
      {
        "question": "Which NBA player scored 81 points in a single game?",
        "correct_answer": "Kobe Bryant",
        "incorrect_answers": ["Michael Jordan", "LeBron James", "Kevin Durant"],
        "difficulty": "medium"
      },
      {
        "question": "Which country won the FIFA World Cup in 2018?",
        "correct_answer": "France",
        "incorrect_answers": ["Croatia", "Germany", "Brazil"],
        "difficulty": "medium"
      },
      {
        "question": "How many players are on the ice for one team during even-strength hockey?",
        "correct_answer": "6",
        "incorrect_answers": ["5", "7", "4"],
        "difficulty": "medium"
      },
      {
        "question": "Which MLB team has the most World Series titles?",
        "correct_answer": "New York Yankees",
        "incorrect_answers": ["Boston Red Sox", "St. Louis Cardinals", "Los Angeles Dodgers"],
        "difficulty": "medium"
      },
      {
        "question": "Who won the NBA Finals MVP in 2022?",
        "correct_answer": "Stephen Curry",
        "incorrect_answers": ["Jayson Tatum", "Giannis Antetokounmpo", "Jimmy Butler"],
        "difficulty": "medium"
      },
      {
        "question": "Which soccer player is known for the 'Hand of God' goal?",
        "correct_answer": "Diego Maradona",
        "incorrect_answers": ["Pelé", "Lionel Messi", "Cristiano Ronaldo"],
        "difficulty": "medium"
      },
      {
        "question": "Which position in baseball is number 6 in the scoring system?",
        "correct_answer": "Shortstop",
        "incorrect_answers": ["Second baseman", "Third baseman", "Left fielder"],
        "difficulty": "medium"
      },
      {
        "question": "Which team lost four straight Super Bowls from 1990 to 1993?",
        "correct_answer": "Buffalo Bills",
        "incorrect_answers": ["Minnesota Vikings", "New York Giants", "Cincinnati Bengals"],
        "difficulty": "medium"
      },
      {
        "question": "Which country has won the most Olympic gold medals in men's ice hockey?",
        "correct_answer": "Canada",
        "incorrect_answers": ["Russia", "USA", "Sweden"],
        "difficulty": "medium"
      },
      {
        "question": "What was Michael Jordan's jersey number when he briefly returned in 1995?",
        "correct_answer": "45",
        "incorrect_answers": ["23", "33", "32"],
        "difficulty": "medium"
      },
      {
        "question": "Who is the all-time leader in rushing yards in the NFL?",
        "correct_answer": "Emmitt Smith",
        "incorrect_answers": ["Walter Payton", "Barry Sanders", "Adrian Peterson"],
        "difficulty": "medium"
      },
      {
        "question": "Which team won the 2022 FIFA World Cup?",
        "correct_answer": "Argentina",
        "incorrect_answers": ["France", "Brazil", "Germany"],
        "difficulty": "medium"
      },
      {
        "question": "Who holds the MLB record for most career hits?",
        "correct_answer": "Pete Rose",
        "incorrect_answers": ["Ty Cobb", "Derek Jeter", "Ichiro Suzuki"],
        "difficulty": "medium"
      },
      {
        "question": "Which hockey player has won the most Hart Trophies (MVP)?",
        "correct_answer": "Wayne Gretzky",
        "incorrect_answers": ["Mario Lemieux", "Sidney Crosby", "Mark Messier"],
        "difficulty": "medium"
      },
      {
        "question": "Who was the first overall pick in the 2003 NBA Draft?",
        "correct_answer": "LeBron James",
        "incorrect_answers": ["Carmelo Anthony", "Dwyane Wade", "Chris Bosh"],
        "difficulty": "medium"
      },
      {
        "question": "What soccer team plays at Old Trafford?",
        "correct_answer": "Manchester United",
        "incorrect_answers": ["Chelsea", "Liverpool", "Arsenal"],
        "difficulty": "medium"
      },
      {
        "question": "Which MLB stadium is known as 'The Green Monster'?",
        "correct_answer": "Fenway Park",
        "incorrect_answers": ["Wrigley Field", "Yankee Stadium", "Dodger Stadium"],
        "difficulty": "medium"
      },
      {
        "question": "Which NHL team joined the league in 2021?",
        "correct_answer": "Seattle Kraken",
        "incorrect_answers": ["Vegas Golden Knights", "Columbus Blue Jackets", "Nashville Predators"],
        "difficulty": "medium"
      },
      {
        "question": "Who won the Heisman Trophy in 2023?",
        "correct_answer": "Jayden Daniels",
        "incorrect_answers": ["Caleb Williams", "Bo Nix", "Marvin Harrison Jr."],
        "difficulty": "medium"
      },
      {
        "question": "Which NBA team has the nickname 'The Splash Brothers'?",
        "correct_answer": "Golden State Warriors",
        "incorrect_answers": ["Los Angeles Lakers", "Miami Heat", "Phoenix Suns"],
        "difficulty": "medium"
      },
      {
        "question": "Which club has the most UEFA Champions League titles?",
        "correct_answer": "Real Madrid",
        "incorrect_answers": ["Barcelona", "Bayern Munich", "AC Milan"],
        "difficulty": "medium"
      },
      {
        "question": "Which MLB player broke the single-season home run record in the American League in 2022?",
        "correct_answer": "Aaron Judge",
        "incorrect_answers": ["Shohei Ohtani", "Mike Trout", "Bryce Harper"],
        "difficulty": "medium"
      },
      {
        "question": "Which country hosted the 2022 FIFA World Cup?",
        "correct_answer": "Qatar",
        "incorrect_answers": ["Russia", "USA", "Brazil"],
        "difficulty": "medium"
      },
      {
        "question": "Who scored the 'Golden Goal' for Canada in the 2010 Winter Olympics hockey final?",
        "correct_answer": "Sidney Crosby",
        "incorrect_answers": ["Jonathan Toews", "Corey Perry", "Jarome Iginla"],
        "difficulty": "medium"
      },
      {
        "question": "Which team did the Chicago Bulls beat in the 1996 NBA Finals?",
        "correct_answer": "Seattle SuperSonics",
        "incorrect_answers": ["Utah Jazz", "Houston Rockets", "Portland Trail Blazers"],
        "difficulty": "medium"
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