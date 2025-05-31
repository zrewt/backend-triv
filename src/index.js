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
    },
    
    // medium basketball questions
      
    {
      "question": "Which NBA team has won the most championships?",
      "correct_answer": "Boston Celtics",
      "incorrect_answers": ["Los Angeles Lakers", "Chicago Bulls", "Golden State Warriors"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Who holds the record for the most points scored in a single NBA game?",
      "correct_answer": "Wilt Chamberlain",
      "incorrect_answers": ["Kobe Bryant", "Michael Jordan", "Elgin Baylor"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Which player is known as 'The Answer'?",
      "correct_answer": "Allen Iverson",
      "incorrect_answers": ["Kyrie Irving", "Dwyane Wade", "Derrick Rose"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Who won the NBA MVP award in 2021?",
      "correct_answer": "Nikola Jokić",
      "incorrect_answers": ["Giannis Antetokounmpo", "Stephen Curry", "Joel Embiid"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Which college did Michael Jordan attend?",
      "correct_answer": "University of North Carolina",
      "incorrect_answers": ["Duke University", "UCLA", "Georgetown University"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Who was the first player to be drafted number one overall without playing college or overseas basketball?",
      "correct_answer": "LeBron James",
      "incorrect_answers": ["Dwight Howard", "Kobe Bryant", "Kevin Garnett"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Who was the shortest player in NBA history?",
      "correct_answer": "Muggsy Bogues",
      "incorrect_answers": ["Spud Webb", "Nate Robinson", "Earl Boykins"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Which NBA player was known as 'The Mailman'?",
      "correct_answer": "Karl Malone",
      "incorrect_answers": ["Charles Barkley", "Shaquille O'Neal", "Dennis Rodman"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Which team did Shaquille O'Neal play for when he won his first NBA championship?",
      "correct_answer": "Los Angeles Lakers",
      "incorrect_answers": ["Miami Heat", "Orlando Magic", "Boston Celtics"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Which player has the most career assists in NBA history?",
      "correct_answer": "John Stockton",
      "incorrect_answers": ["Jason Kidd", "Magic Johnson", "Steve Nash"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "What year did the NBA and ABA merge?",
      "correct_answer": "1976",
      "incorrect_answers": ["1972", "1980", "1984"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Which team drafted Dirk Nowitzki?",
      "correct_answer": "Milwaukee Bucks",
      "incorrect_answers": ["Dallas Mavericks", "Phoenix Suns", "San Antonio Spurs"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Who was the first player to average a triple-double for an entire NBA season?",
      "correct_answer": "Oscar Robertson",
      "incorrect_answers": ["Russell Westbrook", "Magic Johnson", "Jason Kidd"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Which NBA player famously scored 81 points in a single game?",
      "correct_answer": "Kobe Bryant",
      "incorrect_answers": ["Michael Jordan", "LeBron James", "Allen Iverson"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Which franchise drafted Giannis Antetokounmpo?",
      "correct_answer": "Milwaukee Bucks",
      "incorrect_answers": ["Chicago Bulls", "Atlanta Hawks", "Detroit Pistons"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Which team drafted Stephen Curry?",
      "correct_answer": "Golden State Warriors",
      "incorrect_answers": ["Charlotte Hornets", "Minnesota Timberwolves", "New York Knicks"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Which NBA player has the most MVP awards?",
      "correct_answer": "Kareem Abdul-Jabbar",
      "incorrect_answers": ["Michael Jordan", "LeBron James", "Bill Russell"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Which team did Vince Carter play the most seasons with?",
      "correct_answer": "Toronto Raptors",
      "incorrect_answers": ["New Jersey Nets", "Atlanta Hawks", "Orlando Magic"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Who holds the record for most blocks in an NBA game?",
      "correct_answer": "Elmore Smith",
      "incorrect_answers": ["Dikembe Mutombo", "Shaquille O'Neal", "Manute Bol"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Who was the first foreign-born player to win NBA MVP?",
      "correct_answer": "Hakeem Olajuwon",
      "incorrect_answers": ["Dirk Nowitzki", "Giannis Antetokounmpo", "Steve Nash"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Which player was nicknamed 'The Big Ticket'?",
      "correct_answer": "Kevin Garnett",
      "incorrect_answers": ["Shaquille O'Neal", "Tim Duncan", "Chris Webber"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Which player won NBA MVP in 2008?",
      "correct_answer": "Kobe Bryant",
      "incorrect_answers": ["LeBron James", "Kevin Garnett", "Dirk Nowitzki"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Which NBA team plays in Madison Square Garden?",
      "correct_answer": "New York Knicks",
      "incorrect_answers": ["Brooklyn Nets", "Chicago Bulls", "Boston Celtics"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Who was the head coach of the Chicago Bulls during their 1990s dynasty?",
      "correct_answer": "Phil Jackson",
      "incorrect_answers": ["Pat Riley", "Gregg Popovich", "Larry Brown"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Who won the 2020 NBA Championship?",
      "correct_answer": "Los Angeles Lakers",
      "incorrect_answers": ["Miami Heat", "Denver Nuggets", "Milwaukee Bucks"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Which player was the 1st overall pick in the 2003 NBA Draft?",
      "correct_answer": "LeBron James",
      "incorrect_answers": ["Carmelo Anthony", "Dwyane Wade", "Chris Bosh"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "What was the first NBA team Yao Ming played for?",
      "correct_answer": "Houston Rockets",
      "incorrect_answers": ["Dallas Mavericks", "Golden State Warriors", "Sacramento Kings"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Which NBA player is known for the famous 'flu game'?",
      "correct_answer": "Michael Jordan",
      "incorrect_answers": ["Scottie Pippen", "Dennis Rodman", "Kobe Bryant"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Which NBA player holds the record for the most career three-pointers made?",
      "correct_answer": "Stephen Curry",
      "incorrect_answers": ["Ray Allen", "James Harden", "Klay Thompson"],
      "difficulty": "medium",
      "sport": "basketball"
    },
    {
      "question": "Which team did Kevin Durant win his first NBA championship with?",
      "correct_answer": "Golden State Warriors",
      "incorrect_answers": ["Oklahoma City Thunder", "Brooklyn Nets", "Phoenix Suns"],
      "difficulty": "medium",
      "sport": "basketball"
    },

    // medium baseball questions 

    {
      "question": "Which MLB team has won the most World Series titles?",
      "correct_answer": "New York Yankees",
      "incorrect_answers": ["Boston Red Sox", "Los Angeles Dodgers", "St. Louis Cardinals"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Who holds the MLB record for most career home runs?",
      "correct_answer": "Barry Bonds",
      "incorrect_answers": ["Hank Aaron", "Babe Ruth", "Alex Rodriguez"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Which team did Jackie Robinson debut with?",
      "correct_answer": "Brooklyn Dodgers",
      "incorrect_answers": ["New York Yankees", "Chicago Cubs", "Boston Red Sox"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Which MLB pitcher has the most career strikeouts?",
      "correct_answer": "Nolan Ryan",
      "incorrect_answers": ["Randy Johnson", "Roger Clemens", "Greg Maddux"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Which team won the 2022 World Series?",
      "correct_answer": "Houston Astros",
      "incorrect_answers": ["Philadelphia Phillies", "Atlanta Braves", "Los Angeles Dodgers"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Which MLB player is known as 'The Kid'?",
      "correct_answer": "Ken Griffey Jr.",
      "incorrect_answers": ["Mike Trout", "Derek Jeter", "Cal Ripken Jr."],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Who was the first player to reach 3,000 career hits?",
      "correct_answer": "Cap Anson",
      "incorrect_answers": ["Ty Cobb", "Pete Rose", "Hank Aaron"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Which MLB team plays at Wrigley Field?",
      "correct_answer": "Chicago Cubs",
      "incorrect_answers": ["Chicago White Sox", "Milwaukee Brewers", "Cincinnati Reds"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Who won the AL MVP award in 2021?",
      "correct_answer": "Shohei Ohtani",
      "incorrect_answers": ["Aaron Judge", "Vladimir Guerrero Jr.", "Mike Trout"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Which MLB player had a record 56-game hitting streak?",
      "correct_answer": "Joe DiMaggio",
      "incorrect_answers": ["Pete Rose", "Ichiro Suzuki", "Cal Ripken Jr."],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Which team drafted Derek Jeter?",
      "correct_answer": "New York Yankees",
      "incorrect_answers": ["Detroit Tigers", "Boston Red Sox", "Los Angeles Dodgers"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "What position did Johnny Bench play?",
      "correct_answer": "Catcher",
      "incorrect_answers": ["First Base", "Outfield", "Pitcher"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Who managed the New York Yankees during their late 1990s dynasty?",
      "correct_answer": "Joe Torre",
      "incorrect_answers": ["Joe Girardi", "Billy Martin", "Lou Piniella"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Which team drafted Bryce Harper?",
      "correct_answer": "Washington Nationals",
      "incorrect_answers": ["Philadelphia Phillies", "New York Mets", "San Francisco Giants"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Who was the last MLB player to win the Triple Crown?",
      "correct_answer": "Miguel Cabrera",
      "incorrect_answers": ["Mike Trout", "Albert Pujols", "Joey Votto"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "What year did MLB introduce the designated hitter rule in the American League?",
      "correct_answer": "1973",
      "incorrect_answers": ["1970", "1980", "1965"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Which MLB player is known for breaking Babe Ruth's home run record?",
      "correct_answer": "Hank Aaron",
      "incorrect_answers": ["Barry Bonds", "Willie Mays", "Alex Rodriguez"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "What team did Babe Ruth start his MLB career with?",
      "correct_answer": "Boston Red Sox",
      "incorrect_answers": ["New York Yankees", "Baltimore Orioles", "Chicago White Sox"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Which player had the most hits in a single MLB season?",
      "correct_answer": "Ichiro Suzuki",
      "incorrect_answers": ["Pete Rose", "Ty Cobb", "Tony Gwynn"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Who threw a perfect game in the 1956 World Series?",
      "correct_answer": "Don Larsen",
      "incorrect_answers": ["Whitey Ford", "Sandy Koufax", "Bob Gibson"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Which team has the oldest stadium in Major League Baseball?",
      "correct_answer": "Boston Red Sox",
      "incorrect_answers": ["Chicago Cubs", "Los Angeles Dodgers", "New York Yankees"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Which team did Mark McGwire play for when he hit 70 home runs in a season?",
      "correct_answer": "St. Louis Cardinals",
      "incorrect_answers": ["Oakland Athletics", "Chicago Cubs", "Los Angeles Dodgers"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Who is the all-time leader in stolen bases?",
      "correct_answer": "Rickey Henderson",
      "incorrect_answers": ["Lou Brock", "Tim Raines", "Maury Wills"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "What year did the Chicago Cubs break their 108-year championship drought?",
      "correct_answer": "2016",
      "incorrect_answers": ["2015", "2017", "2014"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Which pitcher won the most Cy Young Awards?",
      "correct_answer": "Roger Clemens",
      "incorrect_answers": ["Randy Johnson", "Greg Maddux", "Tom Seaver"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Who hit the famous 'Shot Heard 'Round the World' in 1951?",
      "correct_answer": "Bobby Thomson",
      "incorrect_answers": ["Willie Mays", "Joe DiMaggio", "Duke Snider"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Which player holds the record for most career RBIs?",
      "correct_answer": "Hank Aaron",
      "incorrect_answers": ["Babe Ruth", "Barry Bonds", "Alex Rodriguez"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Who was the first unanimous Hall of Fame inductee?",
      "correct_answer": "Mariano Rivera",
      "incorrect_answers": ["Derek Jeter", "Ken Griffey Jr.", "Nolan Ryan"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Which stadium is home to the San Francisco Giants?",
      "correct_answer": "Oracle Park",
      "incorrect_answers": ["Dodger Stadium", "Petco Park", "T-Mobile Park"],
      "difficulty": "medium",
      "sport": "baseball"
    },
    {
      "question": "Who was the manager of the Boston Red Sox during their 2004 World Series win?",
      "correct_answer": "Terry Francona",
      "incorrect_answers": ["Joe Torre", "Tony La Russa", "Dusty Baker"],
      "difficulty": "medium",
      "sport": "baseball"
    },

    // medium hockey questions

    {
      "question": "Which NHL team has won the most Stanley Cups?",
      "correct_answer": "Montreal Canadiens",
      "incorrect_answers": ["Toronto Maple Leafs", "Boston Bruins", "Detroit Red Wings"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Who holds the NHL record for most career goals?",
      "correct_answer": "Alex Ovechkin",
      "incorrect_answers": ["Gordie Howe", "Wayne Gretzky", "Mario Lemieux"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "What is the name of the NHL's championship trophy?",
      "correct_answer": "Stanley Cup",
      "incorrect_answers": ["President's Trophy", "Hart Trophy", "Conn Smythe Trophy"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Which team drafted Sidney Crosby?",
      "correct_answer": "Pittsburgh Penguins",
      "incorrect_answers": ["Toronto Maple Leafs", "Washington Capitals", "Montreal Canadiens"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Which goalie has the most career wins in NHL history?",
      "correct_answer": "Martin Brodeur",
      "incorrect_answers": ["Patrick Roy", "Marc-Andre Fleury", "Henrik Lundqvist"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Who won the Conn Smythe Trophy in 2020?",
      "correct_answer": "Victor Hedman",
      "incorrect_answers": ["Andrei Vasilevskiy", "Brayden Point", "Nikita Kucherov"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Which NHL player is known as 'The Great One'?",
      "correct_answer": "Wayne Gretzky",
      "incorrect_answers": ["Gordie Howe", "Mario Lemieux", "Mark Messier"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Who was the first NHL team to win three consecutive Stanley Cups in the modern era?",
      "correct_answer": "New York Islanders",
      "incorrect_answers": ["Edmonton Oilers", "Montreal Canadiens", "Pittsburgh Penguins"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Which player has the most points in a single NHL season?",
      "correct_answer": "Wayne Gretzky",
      "incorrect_answers": ["Mario Lemieux", "Jaromir Jagr", "Connor McDavid"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Which team won the 2023 Stanley Cup?",
      "correct_answer": "Vegas Golden Knights",
      "incorrect_answers": ["Florida Panthers", "Tampa Bay Lightning", "Colorado Avalanche"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Which country has won the most Olympic gold medals in men's hockey?",
      "correct_answer": "Canada",
      "incorrect_answers": ["Russia", "USA", "Sweden"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "What position did Bobby Orr play?",
      "correct_answer": "Defenseman",
      "incorrect_answers": ["Center", "Goalie", "Right Wing"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Who was the captain of the 2010 Canadian Olympic gold medal hockey team?",
      "correct_answer": "Scott Niedermayer",
      "incorrect_answers": ["Sidney Crosby", "Jonathan Toews", "Jarome Iginla"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Which NHL player is known for the 'Michigan goal' move?",
      "correct_answer": "Mike Legg",
      "incorrect_answers": ["Trevor Zegras", "Connor Bedard", "Auston Matthews"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Which NHL franchise joined the league most recently?",
      "correct_answer": "Seattle Kraken",
      "incorrect_answers": ["Vegas Golden Knights", "Winnipeg Jets", "Columbus Blue Jackets"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Which player was traded for Eric Lindros before he played an NHL game?",
      "correct_answer": "Peter Forsberg",
      "incorrect_answers": ["Joe Sakic", "Teemu Selanne", "Sergei Fedorov"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "What year was the NHL Winter Classic first held?",
      "correct_answer": "2008",
      "incorrect_answers": ["2006", "2010", "2007"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Who was the first NHL player to score 50 goals in 50 games?",
      "correct_answer": "Maurice Richard",
      "incorrect_answers": ["Wayne Gretzky", "Brett Hull", "Mike Bossy"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Which NHL team plays at Madison Square Garden?",
      "correct_answer": "New York Rangers",
      "incorrect_answers": ["New York Islanders", "New Jersey Devils", "Buffalo Sabres"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Who holds the record for most shutouts in NHL history?",
      "correct_answer": "Martin Brodeur",
      "incorrect_answers": ["Dominik Hasek", "Patrick Roy", "Terry Sawchuk"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Which player was the first to score 100 points in a season?",
      "correct_answer": "Phil Esposito",
      "incorrect_answers": ["Wayne Gretzky", "Gordie Howe", "Bobby Hull"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Which NHL team did Wayne Gretzky finish his playing career with?",
      "correct_answer": "New York Rangers",
      "incorrect_answers": ["Los Angeles Kings", "St. Louis Blues", "Edmonton Oilers"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Which NHL team has the nickname 'Broad Street Bullies'?",
      "correct_answer": "Philadelphia Flyers",
      "incorrect_answers": ["New York Rangers", "Boston Bruins", "Chicago Blackhawks"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Who won the Hart Trophy in 2022?",
      "correct_answer": "Auston Matthews",
      "incorrect_answers": ["Connor McDavid", "Leon Draisaitl", "Igor Shesterkin"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Which team has the longest Stanley Cup drought?",
      "correct_answer": "Toronto Maple Leafs",
      "incorrect_answers": ["Buffalo Sabres", "Vancouver Canucks", "Arizona Coyotes"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Which NHL team was previously the Atlanta Thrashers?",
      "correct_answer": "Winnipeg Jets",
      "incorrect_answers": ["Calgary Flames", "Minnesota Wild", "Carolina Hurricanes"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Which player scored the golden goal for Canada in the 2010 Olympics?",
      "correct_answer": "Sidney Crosby",
      "incorrect_answers": ["Jonathan Toews", "Corey Perry", "Jarome Iginla"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "Who was the first European-born NHL captain to win the Stanley Cup?",
      "correct_answer": "Nicklas Lidström",
      "incorrect_answers": ["Peter Forsberg", "Mats Sundin", "Zdeno Chara"],
      "difficulty": "medium",
      "sport": "hockey"
    },
    {
      "question": "What is the minimum number of games in a best-of-seven NHL playoff series?",
      "correct_answer": "4",
      "incorrect_answers": ["5", "6", "7"],
      "difficulty": "medium",
      "sport": "hockey"
    },

    // medium football questions

    {
      "question": "Which NFL quarterback has the most career passing touchdowns?",
      "correct_answer": "Tom Brady",
      "incorrect_answers": ["Peyton Manning", "Drew Brees", "Brett Favre"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which team won the Super Bowl in 2022?",
      "correct_answer": "Los Angeles Rams",
      "incorrect_answers": ["Cincinnati Bengals", "Kansas City Chiefs", "San Francisco 49ers"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Who holds the NFL single-season rushing yards record?",
      "correct_answer": "Eric Dickerson",
      "incorrect_answers": ["Adrian Peterson", "Barry Sanders", "Emmitt Smith"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which NFL team is known as 'America's Team'?",
      "correct_answer": "Dallas Cowboys",
      "incorrect_answers": ["New England Patriots", "Green Bay Packers", "Pittsburgh Steelers"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Who was the MVP of Super Bowl LV?",
      "correct_answer": "Tom Brady",
      "incorrect_answers": ["Patrick Mahomes", "Rob Gronkowski", "Travis Kelce"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which quarterback was drafted first overall in the 2021 NFL Draft?",
      "correct_answer": "Trevor Lawrence",
      "incorrect_answers": ["Zach Wilson", "Trey Lance", "Justin Fields"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which NFL coach has the most Super Bowl wins?",
      "correct_answer": "Bill Belichick",
      "incorrect_answers": ["Chuck Noll", "Bill Walsh", "Don Shula"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which city hosted Super Bowl LVI in 2022?",
      "correct_answer": "Los Angeles",
      "incorrect_answers": ["Miami", "Tampa Bay", "Las Vegas"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "What team did Peyton Manning play for before joining the Denver Broncos?",
      "correct_answer": "Indianapolis Colts",
      "incorrect_answers": ["New York Giants", "Tennessee Titans", "San Diego Chargers"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Who holds the record for most interceptions in a single NFL season?",
      "correct_answer": "Night Train Lane",
      "incorrect_answers": ["Deion Sanders", "Ed Reed", "Rod Woodson"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which wide receiver was known as 'Megatron'?",
      "correct_answer": "Calvin Johnson",
      "incorrect_answers": ["Julio Jones", "Andre Johnson", "Larry Fitzgerald"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Who was the #1 overall pick in the 2020 NFL Draft?",
      "correct_answer": "Joe Burrow",
      "incorrect_answers": ["Tua Tagovailoa", "Chase Young", "Justin Herbert"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which team has the most Super Bowl appearances?",
      "correct_answer": "New England Patriots",
      "incorrect_answers": ["Pittsburgh Steelers", "Dallas Cowboys", "San Francisco 49ers"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Who won the NFL MVP award for the 2022 season?",
      "correct_answer": "Patrick Mahomes",
      "incorrect_answers": ["Josh Allen", "Joe Burrow", "Jalen Hurts"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "What position did Lawrence Taylor play?",
      "correct_answer": "Linebacker",
      "incorrect_answers": ["Defensive End", "Cornerback", "Safety"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which team did Jerry Rice finish his career with?",
      "correct_answer": "Seattle Seahawks",
      "incorrect_answers": ["Oakland Raiders", "San Francisco 49ers", "Denver Broncos"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which running back had a 99-yard touchdown run in 2018?",
      "correct_answer": "Derrick Henry",
      "incorrect_answers": ["Saquon Barkley", "Nick Chubb", "Alvin Kamara"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which team drafted Aaron Rodgers?",
      "correct_answer": "Green Bay Packers",
      "incorrect_answers": ["San Francisco 49ers", "New York Jets", "Minnesota Vikings"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "What is the maximum number of points a team can score on one touchdown play?",
      "correct_answer": "8",
      "incorrect_answers": ["6", "7", "9"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Who is the all-time leader in career sacks in the NFL?",
      "correct_answer": "Bruce Smith",
      "incorrect_answers": ["Reggie White", "Lawrence Taylor", "Michael Strahan"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which team did Brett Favre play for the longest?",
      "correct_answer": "Green Bay Packers",
      "incorrect_answers": ["New York Jets", "Minnesota Vikings", "Atlanta Falcons"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Who was the MVP of Super Bowl LVII?",
      "correct_answer": "Patrick Mahomes",
      "incorrect_answers": ["Jalen Hurts", "Travis Kelce", "Chris Jones"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which NFL team has a dolphin as its mascot?",
      "correct_answer": "Miami Dolphins",
      "incorrect_answers": ["Tampa Bay Buccaneers", "Jacksonville Jaguars", "New York Jets"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which quarterback led the Eagles to a Super Bowl win in 2018?",
      "correct_answer": "Nick Foles",
      "incorrect_answers": ["Carson Wentz", "Jalen Hurts", "Sam Bradford"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which NFL stadium is known as 'Lambeau Field'?",
      "correct_answer": "Green Bay Packers",
      "incorrect_answers": ["Chicago Bears", "Minnesota Vikings", "Detroit Lions"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which team drafted wide receiver Justin Jefferson?",
      "correct_answer": "Minnesota Vikings",
      "incorrect_answers": ["Philadelphia Eagles", "Cincinnati Bengals", "New Orleans Saints"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Who coached the 2007 undefeated Patriots regular season?",
      "correct_answer": "Bill Belichick",
      "incorrect_answers": ["Mike Tomlin", "Andy Reid", "Pete Carroll"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which defensive player won the Heisman Trophy in 1997?",
      "correct_answer": "Charles Woodson",
      "incorrect_answers": ["Deion Sanders", "Brian Urlacher", "Ray Lewis"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Who is the only player to win NFL MVP and Super Bowl MVP in the same season twice?",
      "correct_answer": "Joe Montana",
      "incorrect_answers": ["Tom Brady", "Kurt Warner", "Aaron Rodgers"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which team selected Patrick Mahomes in the NFL Draft?",
      "correct_answer": "Kansas City Chiefs",
      "incorrect_answers": ["Houston Texans", "Chicago Bears", "Cleveland Browns"],
      "difficulty": "medium",
      "sport": "football"
    },
    
    
    
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