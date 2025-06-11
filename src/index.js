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
      "question": "What is the name of the field where soccer is played?",
      "correct_answer": "Pitch",
      "incorrect_answers": ["Court", "Rink", "Diamond"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "Which player is known for the famous goal celebration 'Siu'?",
      "correct_answer": "Cristiano Ronaldo",
      "incorrect_answers": ["Neymar", "Kylian Mbappé", "Erling Haaland"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "How long is a standard professional soccer match?",
      "correct_answer": "90 minutes",
      "incorrect_answers": ["60 minutes", "80 minutes", "100 minutes"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "What is the name of the world governing body of soccer?",
      "correct_answer": "FIFA",
      "incorrect_answers": ["UEFA", "NBA", "NHL"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "Which country does Neymar represent?",
      "correct_answer": "Brazil",
      "incorrect_answers": ["Spain", "Portugal", "Argentina"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "How many goals is a hat trick?",
      "correct_answer": "3",
      "incorrect_answers": ["2", "4", "5"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "Which country is famous for the nickname 'La Roja'?",
      "correct_answer": "Spain",
      "incorrect_answers": ["Chile", "Mexico", "Italy"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "What footwear is worn during soccer matches?",
      "correct_answer": "Cleats",
      "incorrect_answers": ["Sneakers", "Boots", "Slippers"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "Which famous Argentine played for both Barcelona and PSG?",
      "correct_answer": "Lionel Messi",
      "incorrect_answers": ["Sergio Aguero", "Carlos Tevez", "Di Maria"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "How many points is a win worth in a soccer league table?",
      "correct_answer": "3",
      "incorrect_answers": ["2", "4", "1"],
      "difficulty": "easy",
      "sport": "soccer"
    },    
    {
      "question": "Which player scored the most goals in a single UEFA Champions League season?",
      "correct_answer": "Cristiano Ronaldo",
      "incorrect_answers": ["Lionel Messi", "Robert Lewandowski", "Ruud van Nistelrooy"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "Which team won the UEFA Champions League in 2020?",
      "correct_answer": "Bayern Munich",
      "incorrect_answers": ["Paris Saint-Germain", "Liverpool", "Manchester City"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "Who scored the fastest goal in UEFA Champions League history?",
      "correct_answer": "Roy Makaay",
      "incorrect_answers": ["Paolo Maldini", "Gareth Bale", "Alexandre Pato"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "Which club won the UEFA Champions League in their debut season?",
      "correct_answer": "Nottingham Forest",
      "incorrect_answers": ["Aston Villa", "Marseille", "Chelsea"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "Which team made a 6–1 comeback vs PSG in 2017?",
      "correct_answer": "FC Barcelona",
      "incorrect_answers": ["Real Madrid", "Manchester United", "Bayern Munich"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "Which English team was the first to win the Champions League?",
      "correct_answer": "Manchester United",
      "incorrect_answers": ["Liverpool", "Nottingham Forest", "Chelsea"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "Which country has had the most different Champions League finalists?",
      "correct_answer": "England",
      "incorrect_answers": ["Germany", "Italy", "Spain"],
      "difficulty": "easy",
      "sport": "soccer"
    },
    {
      "question": "Which goalkeeper has made the most Champions League appearances?",
      "correct_answer": "Iker Casillas",
      "incorrect_answers": ["Manuel Neuer", "Gianluigi Buffon", "Petr Čech"],
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
        "question": "What is the term for when a player scores three goals in a single game?",
        "correct_answer": "Hat-trick",
        "incorrect_answers": ["Triple play", "Goalie trick", "Three-pointer"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "What is the name of the international soccer tournament held every four years?",
        "correct_answer": "FIFA World Cup",
        "incorrect_answers": ["UEFA Champions League", "Copa America", "Gold Cup"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which part of the body is a soccer player not allowed to use to touch the ball, except the goalkeeper?",
        "correct_answer": "Hands",
        "incorrect_answers": ["Head", "Chest", "Feet"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "What color card does a referee show to a player who must leave the field for misconduct?",
        "correct_answer": "Red",
        "incorrect_answers": ["Yellow", "Blue", "Green"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which country hosted the 2018 FIFA World Cup?",
        "correct_answer": "Russia",
        "incorrect_answers": ["Brazil", "Germany", "South Africa"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "What is the term for restarting play when the ball goes out over the sideline?",
        "correct_answer": "Throw-in",
        "incorrect_answers": ["Corner kick", "Goal kick", "Penalty kick"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which player is known as 'The King of Football'?",
        "correct_answer": "Pelé",
        "incorrect_answers": ["Maradona", "Messi", "Ronaldo"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "What is the name of the English soccer league's top division?",
        "correct_answer": "Premier League",
        "incorrect_answers": ["Championship", "League One", "La Liga"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which country is known as 'The Three Lions' in soccer?",
        "correct_answer": "England",
        "incorrect_answers": ["France", "Germany", "Italy"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "What is the maximum number of substitutions allowed per team in a standard FIFA match?",
        "correct_answer": "5",
        "incorrect_answers": ["3", "4", "6"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which position is responsible for defending the goal?",
        "correct_answer": "Goalkeeper",
        "incorrect_answers": ["Striker", "Midfielder", "Defender"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "What is awarded when a player is fouled inside the opponent's penalty area?",
        "correct_answer": "Penalty kick",
        "incorrect_answers": ["Corner kick", "Free kick", "Throw-in"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which country won the 2014 FIFA World Cup?",
        "correct_answer": "Germany",
        "incorrect_answers": ["Argentina", "Brazil", "Spain"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "What is the term for a match that ends with both teams having the same score?",
        "correct_answer": "Draw",
        "incorrect_answers": ["Win", "Loss", "Overtime"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which player is famous for the 'Hand of God' goal?",
        "correct_answer": "Diego Maradona",
        "incorrect_answers": ["Pelé", "Lionel Messi", "Cristiano Ronaldo"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "What is the name of the European club competition for top teams?",
        "correct_answer": "UEFA Champions League",
        "incorrect_answers": ["Europa League", "Premier League", "La Liga"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which country is known as 'La Albiceleste'?",
        "correct_answer": "Argentina",
        "incorrect_answers": ["Brazil", "Spain", "Italy"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "What is the term for a kick taken from the corner of the field?",
        "correct_answer": "Corner kick",
        "incorrect_answers": ["Free kick", "Penalty kick", "Throw-in"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which player has won the most Ballon d'Or awards?",
        "correct_answer": "Lionel Messi",
        "incorrect_answers": ["Cristiano Ronaldo", "Pelé", "Zinedine Zidane"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "What is the term for the start or restart of play from the center circle?",
        "correct_answer": "Kick-off",
        "incorrect_answers": ["Throw-in", "Goal kick", "Corner kick"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which country is known for the 'Samba' style of soccer?",
        "correct_answer": "Brazil",
        "incorrect_answers": ["Spain", "Argentina", "Italy"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "What is the name of the soccer position that primarily scores goals?",
        "correct_answer": "Striker",
        "incorrect_answers": ["Goalkeeper", "Defender", "Midfielder"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which country hosted the 2010 FIFA World Cup?",
        "correct_answer": "South Africa",
        "incorrect_answers": ["Brazil", "Germany", "Russia"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "What is the term for when the ball crosses the goal line between the goalposts?",
        "correct_answer": "Goal",
        "incorrect_answers": ["Offside", "Corner", "Throw-in"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which country is known as 'Les Bleus' in soccer?",
        "correct_answer": "France",
        "incorrect_answers": ["Italy", "Germany", "Spain"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "What is the term for a pass that leads directly to a goal?",
        "correct_answer": "Assist",
        "incorrect_answers": ["Cross", "Dribble", "Tackle"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which player is known for the 'Bicycle Kick' goal?",
        "correct_answer": "Cristiano Ronaldo",
        "incorrect_answers": ["Lionel Messi", "Pelé", "Neymar"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which country won the first FIFA World Cup in 1930?",
        "correct_answer": "Uruguay",
        "incorrect_answers": ["Brazil", "Germany", "Argentina"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which team is known as the 'Red Devils'?",
        "correct_answer": "Manchester United",
        "incorrect_answers": ["Liverpool", "Arsenal", "Chelsea"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which player opened a museum in Portugal in 2014 to display his trophies?",
        "correct_answer": "Cristiano Ronaldo",
        "incorrect_answers": ["Luis Figo", "Eusébio", "Deco"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "What is awarded if a goalkeeper holds the ball for more than 6 seconds?",
        "correct_answer": "An indirect free kick",
        "incorrect_answers": ["A penalty kick", "A corner kick", "A goal kick"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which Premier League club is nicknamed 'The Gunners'?",
        "correct_answer": "Arsenal",
        "incorrect_answers": ["Chelsea", "Tottenham Hotspur", "Manchester City"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "What determines who starts with the ball in a soccer match?",
        "correct_answer": "A coin flip",
        "incorrect_answers": ["Team ranking", "Home team advantage", "Referee's decision"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which country hosted the 2022 FIFA World Cup?",
        "correct_answer": "Qatar",
        "incorrect_answers": ["Russia", "USA", "Japan"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which soccer star had his own H&M underwear line?",
        "correct_answer": "David Beckham",
        "incorrect_answers": ["Cristiano Ronaldo", "Neymar", "Zlatan Ibrahimović"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which player received the Golden Ball award in the 2014 World Cup?",
        "correct_answer": "Lionel Messi",
        "incorrect_answers": ["Thomas Müller", "James Rodríguez", "Arjen Robben"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which soccer player has the most followers on Instagram as of 2023?",
        "correct_answer": "Cristiano Ronaldo",
        "incorrect_answers": ["Lionel Messi", "Neymar", "Kylian Mbappé"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "What are the two lines that run the length of the field called?",
        "correct_answer": "Touch lines",
        "incorrect_answers": ["Goal lines", "Penalty lines", "Halfway lines"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Who scored five goals in a single World Cup match for Russia?",
        "correct_answer": "Oleg Salenko",
        "incorrect_answers": ["Andrey Arshavin", "Dmitri Alenichev", "Roman Pavlyuchenko"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which two countries allegedly went to war partially over a soccer match?",
        "correct_answer": "El Salvador and Honduras",
        "incorrect_answers": ["Argentina and Brazil", "Germany and Netherlands", "Iran and Iraq"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Who won the first two FIFA Women's World Player of the Year Awards?",
        "correct_answer": "Mia Hamm",
        "incorrect_answers": ["Abby Wambach", "Marta", "Birgit Prinz"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "In which stadium did the U.S. Women's National Team win their fourth Olympic gold medal in 2012?",
        "correct_answer": "Wembley Stadium",
        "incorrect_answers": ["Old Trafford", "Stamford Bridge", "Emirates Stadium"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which legendary soccer player wrote the autobiography 'My Life in Football'?",
        "correct_answer": "Kevin Keegan",
        "incorrect_answers": ["David Beckham", "Steven Gerrard", "Frank Lampard"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which soccer player wrote the Jamie Johnson football novels for kids?",
        "correct_answer": "Dan Freedman",
        "incorrect_answers": ["Michael Owen", "Gary Lineker", "Alan Shearer"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Who coached the U.S. Women's National Team to victory in the 2015 FIFA Women's World Cup?",
        "correct_answer": "Jill Ellis",
        "incorrect_answers": ["Pia Sundhage", "April Heinrichs", "Tony DiCicco"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which U.S. Men's National Team goalkeeper set a tournament record with 15 saves in a match against Belgium in the 2014 FIFA World Cup?",
        "correct_answer": "Tim Howard",
        "incorrect_answers": ["Brad Guzan", "Kasey Keller", "Brad Friedel"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which famous soccer player retired from international play after the 2014 FIFA World Cup, playing his final match against Ecuador?",
        "correct_answer": "Landon Donovan",
        "incorrect_answers": ["Clint Dempsey", "Michael Bradley", "Jozy Altidore"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which ancient game resembling modern soccer was played in China?",
        "correct_answer": "Cuju",
        "incorrect_answers": ["Kemari", "Episkyros", "Harpastum"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "When was the Cambridge Rules, influential in the development of association football, first drawn up?",
        "correct_answer": "1848",
        "incorrect_answers": ["1836", "1859", "1872"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "During which year was the first official international football match played?",
        "correct_answer": "1872",
        "incorrect_answers": ["1857", "1890", "1902"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which is the oldest football competition in the world?",
        "correct_answer": "FA Cup",
        "incorrect_answers": ["Copa Libertadores", "FIFA World Cup", "UEFA Champions League"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Where is the headquarters of FIFA located?",
        "correct_answer": "Zurich, Switzerland",
        "incorrect_answers": ["Paris, France", "London, England", "Berlin, Germany"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "Which country’s women’s national team has won the most FIFA Women’s World Cup titles?",
        "correct_answer": "United States",
        "incorrect_answers": ["Germany", "Japan", "Brazil"],
        "difficulty": "easy",
        "sport": "soccer"
      },
      {
        "question": "What is the name of the award given to the top goalscorer in the FIFA World Cup?",
        "correct_answer": "The Golden Boot",
        "incorrect_answers": ["The Golden Ball", "The Silver Boot", "The Bronze Boot"],
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
      "question": "Which NFL team has a lightning bolt as its logo?",
      "correct_answer": "Los Angeles Chargers",
      "incorrect_answers": ["New York Jets", "Dallas Cowboys", "Seattle Seahawks"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "How many teams make the NFL playoffs each year?",
      "correct_answer": "14",
      "incorrect_answers": ["12", "16", "10"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "Which NFL player is known for the 'Gronk Spike'?",
      "correct_answer": "Rob Gronkowski",
      "incorrect_answers": ["Tom Brady", "Travis Kelce", "George Kittle"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "What color is the penalty flag in the NFL?",
      "correct_answer": "Yellow",
      "incorrect_answers": ["Red", "White", "Blue"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "How many yards is a football field (excluding end zones)?",
      "correct_answer": "100",
      "incorrect_answers": ["110", "90", "80"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "Which city do the Dallas Cowboys play in?",
      "correct_answer": "Arlington",
      "incorrect_answers": ["Dallas", "Houston", "San Antonio"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "Which NFL team has a star on its helmet?",
      "correct_answer": "Dallas Cowboys",
      "incorrect_answers": ["Patriots", "Giants", "Eagles"],
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
    {
      "question": "What is the name of the trophy awarded to the Super Bowl winner?",
      "correct_answer": "Vince Lombardi Trophy",
      "incorrect_answers": ["Heisman Trophy", "Stanley Cup", "Commissioner's Trophy"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "Which NFL team is known for having a star logo on their helmet?",
      "correct_answer": "Dallas Cowboys",
      "incorrect_answers": ["New England Patriots", "New York Giants", "Green Bay Packers"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "What is the term for when the quarterback is tackled behind the line of scrimmage?",
      "correct_answer": "Sack",
      "incorrect_answers": ["Interception", "Fumble", "Safety"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "Which NFL team is based in Miami?",
      "correct_answer": "Dolphins",
      "incorrect_answers": ["Buccaneers", "Jaguars", "Panthers"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "What is the maximum number of players allowed on the field per team during play?",
      "correct_answer": "11",
      "incorrect_answers": ["10", "12", "9"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "Which position is primarily responsible for catching passes?",
      "correct_answer": "Wide Receiver",
      "incorrect_answers": ["Linebacker", "Running Back", "Defensive End"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "What is the term for a kick after a touchdown worth one point?",
      "correct_answer": "Extra Point",
      "incorrect_answers": ["Field Goal", "Safety", "Two-Point Conversion"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "Which NFL team is known as 'The Steel Curtain'?",
      "correct_answer": "Pittsburgh Steelers",
      "incorrect_answers": ["Chicago Bears", "Detroit Lions", "Cleveland Browns"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "What is the name of the NFL team based in Seattle?",
      "correct_answer": "Seahawks",
      "incorrect_answers": ["Eagles", "Falcons", "Ravens"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "Which player is known for the 'Immaculate Reception'?",
      "correct_answer": "Franco Harris",
      "incorrect_answers": ["Terry Bradshaw", "Lynn Swann", "John Stallworth"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "What is the term for a defensive player catching a pass intended for the offense?",
      "correct_answer": "Interception",
      "incorrect_answers": ["Fumble", "Sack", "Touchback"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "Which NFL team has a lightning bolt on their helmet?",
      "correct_answer": "Los Angeles Chargers",
      "incorrect_answers": ["Tennessee Titans", "Buffalo Bills", "Indianapolis Colts"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "What is the name of the NFL team based in Denver?",
      "correct_answer": "Broncos",
      "incorrect_answers": ["Cowboys", "Texans", "Chiefs"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "Which position snaps the ball to the quarterback?",
      "correct_answer": "Center",
      "incorrect_answers": ["Guard", "Tackle", "Linebacker"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "What is the term for a kick that is not returned and results in the ball being placed at the 25-yard line?",
      "correct_answer": "Touchback",
      "incorrect_answers": ["Fair Catch", "Punt", "Onside Kick"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "Which NFL team is known for the 'Lambeau Leap'?",
      "correct_answer": "Green Bay Packers",
      "incorrect_answers": ["Minnesota Vikings", "Chicago Bears", "Detroit Lions"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "What is the term for a defensive player tackling the quarterback behind the line of scrimmage?",
      "correct_answer": "Sack",
      "incorrect_answers": ["Interception", "Fumble", "Safety"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "Which NFL team is based in Atlanta?",
      "correct_answer": "Falcons",
      "incorrect_answers": ["Panthers", "Saints", "Buccaneers"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "What is the term for a score worth three points?",
      "correct_answer": "Field Goal",
      "incorrect_answers": ["Touchdown", "Safety", "Extra Point"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "Which NFL team is known as 'Big Blue'?",
      "correct_answer": "New York Giants",
      "incorrect_answers": ["New York Jets", "Buffalo Bills", "Dallas Cowboys"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "What is the term for when the offense fails to advance 10 yards in four downs?",
      "correct_answer": "Turnover on Downs",
      "incorrect_answers": ["Fumble", "Interception", "Safety"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "Which NFL team is based in Arizona?",
      "correct_answer": "Cardinals",
      "incorrect_answers": ["Raiders", "Rams", "Chargers"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "What is the term for a play where the quarterback hands the ball to a running back?",
      "correct_answer": "Rushing Play",
      "incorrect_answers": ["Passing Play", "Punt", "Kickoff"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "Which NFL team has a pirate ship in their stadium?",
      "correct_answer": "Tampa Bay Buccaneers",
      "incorrect_answers": ["Las Vegas Raiders", "New Orleans Saints", "Miami Dolphins"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "What is the term for a kick that attempts to regain possession immediately after scoring?",
      "correct_answer": "Onside Kick",
      "incorrect_answers": ["Punt", "Fair Catch", "Touchback"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "Which NFL team is based in Baltimore?",
      "correct_answer": "Ravens",
      "incorrect_answers": ["Colts", "Redskins", "Eagles"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "What is the term for a defensive player tackling the ball carrier in their own end zone?",
      "correct_answer": "Safety",
      "incorrect_answers": ["Touchdown", "Sack", "Interception"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "Which NFL team is known for the 'Who Dat' chant?",
      "correct_answer": "New Orleans Saints",
      "incorrect_answers": ["Atlanta Falcons", "Carolina Panthers", "Tampa Bay Buccaneers"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "What is the term for a pass caught by the offense?",
      "correct_answer": "Completion",
      "incorrect_answers": ["Interception", "Fumble", "Sack"],
      "difficulty": "easy",
      "sport": "football"
    },
    {
      "question": "Which NFL team is based in Cincinnati?",
      "correct_answer": "Bengals",
      "incorrect_answers": ["Browns", "Steelers", "Colts"],
      "difficulty": "easy",
      "sport": "football"
    },

    // easy hockey questions

    {
      "question": "What trophy is awarded to the NHL champion?",
      "correct_answer": "Stanley Cup",
      "incorrect_answers": ["Grey Cup", "World Cup", "Memorial Cup"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "Which team won the Stanley Cup in 2024?",
      "correct_answer": "Vegas Golden Knights",
      "incorrect_answers": ["Florida Panthers", "Colorado Avalanche", "Edmonton Oilers"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "How many teams compete for the Stanley Cup in the NHL playoffs?",
      "correct_answer": "16",
      "incorrect_answers": ["12", "8", "20"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "Which player has the most career Stanley Cup wins?",
      "correct_answer": "Henri Richard",
      "incorrect_answers": ["Wayne Gretzky", "Jean Béliveau", "Maurice Richard"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "Which NHL team is based in Toronto?",
      "correct_answer": "Maple Leafs",
      "incorrect_answers": ["Canucks", "Oilers", "Senators"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "In what month is the Stanley Cup usually awarded?",
      "correct_answer": "June",
      "incorrect_answers": ["March", "September", "December"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "What is engraved on the Stanley Cup?",
      "correct_answer": "Names of the winning team members",
      "incorrect_answers": ["Score of the final game", "Year only", "Team logo"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "Which NHL team plays home games at Madison Square Garden?",
      "correct_answer": "New York Rangers",
      "incorrect_answers": ["Islanders", "Devils", "Flyers"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "What country has won the most Stanley Cups by teams?",
      "correct_answer": "Canada",
      "incorrect_answers": ["USA", "Russia", "Sweden"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "What is the name of the professional ice hockey league in North America?",
      "correct_answer": "NHL",
      "incorrect_answers": ["MLB", "NFL", "NBA"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "correct_answer": "Maple Leafs",
      "incorrect_answers": ["Canadiens", "Senators", "Oilers"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "How many players are on the ice for one team in standard play (not including the goalie)?",
      "correct_answer": "5",
      "incorrect_answers": ["6", "4", "3"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "What do you call a score in hockey?",
      "correct_answer": "Goal",
      "incorrect_answers": ["Touchdown", "Run", "Basket"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "Which NHL team has a penguin as its mascot?",
      "correct_answer": "Pittsburgh Penguins",
      "incorrect_answers": ["Chicago Blackhawks", "Boston Bruins", "Buffalo Sabres"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "What surface is a hockey game played on?",
      "correct_answer": "Ice",
      "incorrect_answers": ["Grass", "Wood", "Concrete"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "Which country has produced the most NHL players?",
      "correct_answer": "Canada",
      "incorrect_answers": ["USA", "Russia", "Sweden"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "What piece of equipment is used to hit the puck?",
      "correct_answer": "Hockey stick",
      "incorrect_answers": ["Bat", "Racket", "Club"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "What is the object players try to shoot into the net?",
      "correct_answer": "Puck",
      "incorrect_answers": ["Ball", "Disk", "Coin"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "Which NHL team is based in Chicago?",
      "correct_answer": "Blackhawks",
      "incorrect_answers": ["Kings", "Rangers", "Capitals"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "Who guards the goal in hockey?",
      "correct_answer": "Goalie",
      "incorrect_answers": ["Defender", "Catcher", "Striker"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "What happens when a team has more players on the ice due to a penalty?",
      "correct_answer": "Power play",
      "incorrect_answers": ["Offside", "Face-off", "Timeout"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "Which NHL team is based in New York and wears blue?",
      "correct_answer": "Rangers",
      "incorrect_answers": ["Islanders", "Devils", "Bruins"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "What is the penalty for fighting in hockey called?",
      "correct_answer": "Major penalty",
      "incorrect_answers": ["Minor penalty", "Offside", "Icing"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "What is it called when a player shoots the puck into the net three times in one game?",
      "correct_answer": "Hat trick",
      "incorrect_answers": ["Triple score", "Goal trio", "Net trick"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "Which NHL team is based in Boston?",
      "correct_answer": "Bruins",
      "incorrect_answers": ["Flyers", "Devils", "Lightning"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "What do fans traditionally throw on the ice after a hat trick?",
      "correct_answer": "Hats",
      "incorrect_answers": ["Gloves", "Pucks", "Scarves"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "Which NHL team is based in Las Vegas?",
      "correct_answer": "Golden Knights",
      "incorrect_answers": ["Sharks", "Kings", "Avalanche"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "What is it called when the puck crosses the two blue lines without touching anyone?",
      "correct_answer": "Icing",
      "incorrect_answers": ["Offside", "Clearing", "Dumping"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "Which NHL team plays in Montreal?",
      "correct_answer": "Canadiens",
      "incorrect_answers": ["Senators", "Flames", "Jets"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "What do the letters NHL stand for?",
      "correct_answer": "National Hockey League",
      "incorrect_answers": ["National Hockey Lads", "North Hockey League", "New Hockey League"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "How many periods are in a hockey game?",
      "correct_answer": "3",
      "incorrect_answers": ["2", "4", "5"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "What is it called when a game is tied and goes beyond regular time?",
      "correct_answer": "Overtime",
      "incorrect_answers": ["Shootout", "Extra period", "Replay"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "Which city is home to the NHL team named the Flyers?",
      "correct_answer": "Philadelphia",
      "incorrect_answers": ["Buffalo", "Pittsburgh", "Detroit"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "Who wears the 'C' on their jersey in hockey?",
      "correct_answer": "Captain",
      "incorrect_answers": ["Coach", "Center", "Catcher"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "What’s the name of the blue painted area in front of the goal?",
      "correct_answer": "Goal crease",
      "incorrect_answers": ["Goal zone", "Net area", "Shot zone"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "What is the name of the NHL team in Vancouver?",
      "correct_answer": "Canucks",
      "incorrect_answers": ["Oilers", "Flames", "Jets"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "Which NHL team is based in Detroit?",
      "correct_answer": "Red Wings",
      "incorrect_answers": ["Maple Leafs", "Sabres", "Panthers"],
      "difficulty": "easy",
      "sport": "hockey"
    },
    {
      "question": "Which NHL team has a logo of a winged wheel?",
      "correct_answer": "Detroit Red Wings",
      "incorrect_answers": ["Chicago Blackhawks", "St. Louis Blues", "New Jersey Devils"],
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
      "incorrect_answers": ["Triple", "Double", "Base hit"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "Which city is home to the Yankees?",
      "correct_answer": "New York",
      "incorrect_answers": ["Boston", "Chicago", "Los Angeles"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "What is the area called where pitchers warm up?",
      "correct_answer": "Bullpen",
      "incorrect_answers": ["Dugout", "On-deck circle", "Outfield"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "What do you call a player who hits the ball and runs all the way to third base?",
      "correct_answer": "Triple",
      "incorrect_answers": ["Double", "Single", "Home run"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "Which league do the Boston Red Sox play in?",
      "correct_answer": "American League",
      "incorrect_answers": ["National League", "Pacific League", "Atlantic League"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "Who wears the chest protector, mask, and shin guards?",
      "correct_answer": "Catcher",
      "incorrect_answers": ["Pitcher", "Shortstop", "Umpire"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "What is the term for three outs in a row by a pitcher?",
      "correct_answer": "Strikeout the side",
      "incorrect_answers": ["Triple play", "Clean inning", "Flyout"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "Which team is based in Chicago and wears blue and white?",
      "correct_answer": "Chicago Cubs",
      "incorrect_answers": ["White Sox", "Brewers", "Cardinals"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "What is the small area in front of home plate called?",
      "correct_answer": "Batter's box",
      "incorrect_answers": ["On-deck circle", "Bullpen", "Outfield"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "Which team plays at Dodger Stadium?",
      "correct_answer": "Los Angeles Dodgers",
      "incorrect_answers": ["Angels", "Giants", "Padres"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "What is it called when a pitcher throws four balls?",
      "correct_answer": "Walk",
      "incorrect_answers": ["Strikeout", "Foul", "Hit-by-pitch"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "How many players are on the field for one team during play?",
      "correct_answer": "9",
      "incorrect_answers": ["8", "10", "11"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "What does RBI stand for?",
      "correct_answer": "Runs Batted In",
      "incorrect_answers": ["Run Base Interval", "Runners Batting In", "Return Before Inning"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "What color is typically used for the baseball stitching?",
      "correct_answer": "Red",
      "incorrect_answers": ["Blue", "Black", "Green"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "Which team is based in Atlanta?",
      "correct_answer": "Braves",
      "incorrect_answers": ["Marlins", "Nationals", "Rays"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "Who hits after the leadoff batter?",
      "correct_answer": "Second batter",
      "incorrect_answers": ["Cleanup", "Pitcher", "Catcher"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "What is the term for a score in baseball?",
      "correct_answer": "Run",
      "incorrect_answers": ["Goal", "Point", "Hit"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "Which position plays between second and third base?",
      "correct_answer": "Shortstop",
      "incorrect_answers": ["First baseman", "Catcher", "Right fielder"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "What happens when a ball is hit and caught without touching the ground?",
      "correct_answer": "Out",
      "incorrect_answers": ["Strike", "Walk", "Safe"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "Which player usually pitches the ball?",
      "correct_answer": "Pitcher",
      "incorrect_answers": ["Catcher", "First baseman", "Shortstop"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "Which part of the bat do players try to hit with?",
      "correct_answer": "Sweet spot",
      "incorrect_answers": ["Handle", "End cap", "Grip"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "How many innings are in a standard professional baseball game?",
      "correct_answer": "9",
      "incorrect_answers": ["7", "10", "12"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "Which player is known for hitting 762 home runs?",
      "correct_answer": "Barry Bonds",
      "incorrect_answers": ["Hank Aaron", "Babe Ruth", "Alex Rodriguez"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "Which team is known as the 'Bronx Bombers'?",
      "correct_answer": "New York Yankees",
      "incorrect_answers": ["Mets", "Red Sox", "Dodgers"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "Which league is the St. Louis Cardinals part of?",
      "correct_answer": "National League",
      "incorrect_answers": ["American League", "Central League", "Atlantic League"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "What is it called when a batter strikes out three times in one game?",
      "correct_answer": "Hat trick",
      "incorrect_answers": ["Triple play", "Cycle", "No-hitter"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "What shape is the baseball field?",
      "correct_answer": "Diamond",
      "incorrect_answers": ["Square", "Circle", "Triangle"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "What do you call a pitch that is hit but lands outside the lines?",
      "correct_answer": "Foul ball",
      "incorrect_answers": ["Wild pitch", "Error", "Out"],
      "difficulty": "easy",
      "sport": "baseball"
    },
    {
      "question": "What do fans call it when a batter hits for a single, double, triple, and home run in one game?",
      "correct_answer": "Cycle",
      "incorrect_answers": ["Hat trick", "Sweep", "Grand Slam"],
      "difficulty": "easy",
      "sport": "baseball"
    },

    // easy basketball questions

    {
      "question": "Who has made the most three-pointers in NBA history?",
      "correct_answer": "Stephen Curry",
      "incorrect_answers": ["Ray Allen", "Reggie Miller", "James Harden"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "Which team is based in Los Angeles and wears purple and gold?",
      "correct_answer": "Los Angeles Lakers",
      "incorrect_answers": ["Clippers", "Warriors", "Kings"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "How many players are on the court for each team in basketball?",
      "correct_answer": "5",
      "incorrect_answers": ["6", "4", "7"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "What is the term for when a player scores, gets a rebound, and assist 10+ times each in one game?",
      "correct_answer": "Triple-double",
      "incorrect_answers": ["Hat trick", "Double play", "Quad-double"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "Which NBA team plays in Chicago?",
      "correct_answer": "Bulls",
      "incorrect_answers": ["Celtics", "Nets", "Heat"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "What is the line called that gives 3 points if a basket is made beyond it?",
      "correct_answer": "Three-point line",
      "incorrect_answers": ["Free-throw line", "Paint", "Baseline"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "Which player is often nicknamed 'King James'?",
      "correct_answer": "LeBron James",
      "incorrect_answers": ["Kevin Durant", "Michael Jordan", "Kobe Bryant"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "What city are the Golden State Warriors based in?",
      "correct_answer": "San Francisco",
      "incorrect_answers": ["Los Angeles", "Seattle", "Portland"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "What is a shot made from the free-throw line worth?",
      "correct_answer": "1 point",
      "incorrect_answers": ["2 points", "3 points", "It varies"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "Which team does Giannis Antetokounmpo play for?",
      "correct_answer": "Milwaukee Bucks",
      "incorrect_answers": ["Lakers", "Heat", "Raptors"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "Which player wore the number 23 for the Chicago Bulls?",
      "correct_answer": "Michael Jordan",
      "incorrect_answers": ["Scottie Pippen", "LeBron James", "Dennis Rodman"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "What is it called when a player jumps and slams the ball into the hoop?",
      "correct_answer": "Dunk",
      "incorrect_answers": ["Layup", "Alley-oop", "Block"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "Which NBA team is based in Miami?",
      "correct_answer": "Heat",
      "incorrect_answers": ["Magic", "Hornets", "Nets"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "Which former player is known for saying 'Practice?' in an interview rant?",
      "correct_answer": "Allen Iverson",
      "incorrect_answers": ["Shaquille O'Neal", "Kobe Bryant", "Kevin Garnett"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "How many quarters are in an NBA game?",
      "correct_answer": "4",
      "incorrect_answers": ["2", "3", "5"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "Which NBA player was known as 'The Black Mamba'?",
      "correct_answer": "Kobe Bryant",
      "incorrect_answers": ["LeBron James", "Michael Jordan", "Dwyane Wade"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "What is it called when a player misses and grabs their own rebound?",
      "correct_answer": "Offensive rebound",
      "incorrect_answers": ["Defensive rebound", "Second shot", "Self-pass"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "Which NBA team has a leprechaun in its logo?",
      "correct_answer": "Boston Celtics",
      "incorrect_answers": ["New York Knicks", "Toronto Raptors", "Philadelphia 76ers"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "Which team plays in Madison Square Garden?",
      "correct_answer": "New York Knicks",
      "incorrect_answers": ["Brooklyn Nets", "Boston Celtics", "Chicago Bulls"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "What color is typically used for a basketball?",
      "correct_answer": "Orange",
      "incorrect_answers": ["Brown", "Black", "Red"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "Who is known for the 'Sky Hook' shot?",
      "correct_answer": "Kareem Abdul-Jabbar",
      "incorrect_answers": ["Shaquille O'Neal", "Hakeem Olajuwon", "Tim Duncan"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "Which player is known for breaking backboards with dunks?",
      "correct_answer": "Shaquille O'Neal",
      "incorrect_answers": ["Kobe Bryant", "Dwight Howard", "Zion Williamson"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "Which player won the NBA dunk contest in 2016?",
      "correct_answer": "Zach LaVine",
      "incorrect_answers": ["Aaron Gordon", "Vince Carter", "Blake Griffin"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "What is the restricted area under the hoop called?",
      "correct_answer": "Paint",
      "incorrect_answers": ["Key", "Circle", "Block zone"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "What is a violation for taking too many steps without dribbling?",
      "correct_answer": "Traveling",
      "incorrect_answers": ["Double dribble", "Carrying", "Jump ball"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "Who is known for wearing number 30 on the Warriors?",
      "correct_answer": "Stephen Curry",
      "incorrect_answers": ["Klay Thompson", "Draymond Green", "Jordan Poole"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "Which country did Luka Dončić come from?",
      "correct_answer": "Slovenia",
      "incorrect_answers": ["Serbia", "Croatia", "Lithuania"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "Which NBA team has a bear mascot named 'Grizz'?",
      "correct_answer": "Memphis Grizzlies",
      "incorrect_answers": ["Minnesota Timberwolves", "Utah Jazz", "Denver Nuggets"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "Which NBA team used to be based in Seattle?",
      "correct_answer": "SuperSonics",
      "incorrect_answers": ["Trail Blazers", "Jazz", "Kings"],
      "difficulty": "easy",
      "sport": "basketball"
    },
    {
      "question": "What is a shot made while jumping and releasing at the peak called?",
      "correct_answer": "Jump shot",
      "incorrect_answers": ["Layup", "Fadeaway", "Hook"],
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
      "question": "Which soccer team is known as 'The Gunners'?",
      "correct_answer": "Arsenal",
      "incorrect_answers": ["Chelsea", "Manchester United", "Tottenham"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Who won the FIFA Women's World Cup in 2019?",
      "correct_answer": "USA",
      "incorrect_answers": ["Netherlands", "Germany", "Japan"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which country has the most Ballon d'Or winners?",
      "correct_answer": "Argentina",
      "incorrect_answers": ["France", "Germany", "Brazil"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which team won the Premier League in the 2022–23 season?",
      "correct_answer": "Manchester City",
      "incorrect_answers": ["Liverpool", "Arsenal", "Chelsea"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Who scored the winning goal in the 2014 FIFA World Cup Final?",
      "correct_answer": "Mario Götze",
      "incorrect_answers": ["Thomas Müller", "Miroslav Klose", "Toni Kroos"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which player wore the number 10 shirt for France in the 1998 World Cup?",
      "correct_answer": "Zinedine Zidane",
      "incorrect_answers": ["Thierry Henry", "Didier Deschamps", "Patrick Vieira"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which national team is known as the 'Three Lions'?",
      "correct_answer": "England",
      "incorrect_answers": ["Scotland", "Wales", "Germany"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which African nation won the Africa Cup of Nations in 2021?",
      "correct_answer": "Senegal",
      "incorrect_answers": ["Egypt", "Cameroon", "Algeria"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which player won the 2022 FIFA World Cup Golden Ball?",
      "correct_answer": "Lionel Messi",
      "incorrect_answers": ["Kylian Mbappé", "Luka Modric", "Julian Alvarez"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which country did Luka Modric lead to a World Cup final?",
      "correct_answer": "Croatia",
      "incorrect_answers": ["Serbia", "Bosnia", "Slovenia"],
      "difficulty": "medium",
      "sport": "soccer"
    },    
    {
      "question": "Which club has lost the most UEFA Champions League finals?",
      "correct_answer": "Juventus",
      "incorrect_answers": ["Bayern Munich", "AC Milan", "Benfica"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which player won the Champions League with Ajax, Real Madrid, and AC Milan?",
      "correct_answer": "Clarence Seedorf",
      "incorrect_answers": ["Cristiano Ronaldo", "Samuel Eto'o", "Zlatan Ibrahimović"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Who scored the winning goal in the 1999 Champions League final?",
      "correct_answer": "Ole Gunnar Solskjær",
      "incorrect_answers": ["Teddy Sheringham", "David Beckham", "Ryan Giggs"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which club appeared in the most finals without winning the title?",
      "correct_answer": "Valencia",
      "incorrect_answers": ["Arsenal", "Stade de Reims", "Bayer Leverkusen"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Who has scored the most goals in Champions League finals?",
      "correct_answer": "Alfredo Di Stéfano",
      "incorrect_answers": ["Cristiano Ronaldo", "Lionel Messi", "Raúl"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which team scored the most goals in a single Champions League season?",
      "correct_answer": "Barcelona",
      "incorrect_answers": ["Real Madrid", "Liverpool", "Bayern Munich"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which player has the most assists in Champions League history?",
      "correct_answer": "Lionel Messi",
      "incorrect_answers": ["Cristiano Ronaldo", "Xavi", "Iniesta"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which club won the 2012 UEFA Champions League?",
      "correct_answer": "Chelsea",
      "incorrect_answers": ["Bayern Munich", "Manchester United", "Real Madrid"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "What stadium is known as the 'Theatre of Dreams'?",
      "correct_answer": "Old Trafford",
      "incorrect_answers": ["Santiago Bernabéu", "Camp Nou", "Allianz Arena"],
      "difficulty": "medium",
      "sport": "soccer"
    },
    {
      "question": "Which team defeated Barcelona 8–2 in 2020?",
      "correct_answer": "Bayern Munich",
      "incorrect_answers": ["Liverpool", "Real Madrid", "Manchester City"],
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
        "question": "Who won the Conn Smythe Trophy in the 2023 Stanley Cup Finals?",
        "correct_answer": "Jonathan Marchessault",
        "incorrect_answers": ["Jack Eichel", "Sergei Bobrovsky", "Matthew Tkachuk"],
        "difficulty": "medium",
        "sport": "hockey"
      },
      {
        "question": "Which team completed a reverse sweep in the 2010 playoffs?",
        "correct_answer": "Philadelphia Flyers",
        "incorrect_answers": ["Boston Bruins", "Chicago Blackhawks", "Pittsburgh Penguins"],
        "difficulty": "medium",
        "sport": "hockey"
      },
      {
        "question": "Who was the first American team to win the Stanley Cup?",
        "correct_answer": "Seattle Metropolitans",
        "incorrect_answers": ["Boston Bruins", "New York Rangers", "Chicago Blackhawks"],
        "difficulty": "medium",
        "sport": "hockey"
      },
      {
        "question": "What is the name of the NHL playoff MVP award?",
        "correct_answer": "Conn Smythe Trophy",
        "incorrect_answers": ["Hart Memorial Trophy", "Vezina Trophy", "Art Ross Trophy"],
        "difficulty": "medium",
        "sport": "hockey"
      },
      {
        "question": "Which team won the 2019 Stanley Cup Final?",
        "correct_answer": "St. Louis Blues",
        "incorrect_answers": ["Boston Bruins", "Tampa Bay Lightning", "San Jose Sharks"],
        "difficulty": "medium",
        "sport": "hockey"
      },
      {
        "question": "Who scored the series-winning goal in overtime of the 2010 Stanley Cup Final?",
        "correct_answer": "Patrick Kane",
        "incorrect_answers": ["Jonathan Toews", "Duncan Keith", "Marian Hossa"],
        "difficulty": "medium",
        "sport": "hockey"
      },
      {
        "question": "What is the fewest number of games required to win the Stanley Cup?",
        "correct_answer": "16",
        "incorrect_answers": ["12", "14", "18"],
        "difficulty": "medium",
        "sport": "hockey"
      },
      {
        "question": "Which goalie had the longest shutout streak in a single postseason?",
        "correct_answer": "Jean-Sebastien Giguere",
        "incorrect_answers": ["Martin Brodeur", "Patrick Roy", "Dominik Hasek"],
        "difficulty": "medium",
        "sport": "hockey"
      },
      {
        "question": "Which team lost the Stanley Cup Finals four years in a row from 1980 to 1983?",
        "correct_answer": "Philadelphia Flyers",
        "incorrect_answers": ["Buffalo Sabres", "Minnesota North Stars", "Vancouver Canucks"],
        "difficulty": "medium",
        "sport": "hockey"
      },
      {
        "question": "Which team did Wayne Gretzky never win a Stanley Cup with?",
        "correct_answer": "Los Angeles Kings",
        "incorrect_answers": ["Edmonton Oilers", "None", "Calgary Flames"],
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
      "question": "Which player was the first overall pick in the 2024 NFL Draft?",
      "correct_answer": "Caleb Williams",
      "incorrect_answers": ["Drake Maye", "Jayden Daniels", "Bo Nix"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which coach led the Steelers to four Super Bowl wins?",
      "correct_answer": "Chuck Noll",
      "incorrect_answers": ["Bill Cowher", "Mike Tomlin", "Don Shula"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which NFL player famously wore jersey number 18 for the Colts?",
      "correct_answer": "Peyton Manning",
      "incorrect_answers": ["Andrew Luck", "Johnny Unitas", "Tom Brady"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which team did the New England Patriots defeat in Super Bowl LIII?",
      "correct_answer": "Los Angeles Rams",
      "incorrect_answers": ["Atlanta Falcons", "Philadelphia Eagles", "Seattle Seahawks"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "What college did Patrick Mahomes attend?",
      "correct_answer": "Texas Tech",
      "incorrect_answers": ["Texas A&M", "Oklahoma", "LSU"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Who was the MVP of Super Bowl LV?",
      "correct_answer": "Tom Brady",
      "incorrect_answers": ["Patrick Mahomes", "Rob Gronkowski", "Leonard Fournette"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which team drafted J.J. Watt in 2011?",
      "correct_answer": "Houston Texans",
      "incorrect_answers": ["Green Bay Packers", "Pittsburgh Steelers", "Arizona Cardinals"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "Which team has the most Super Bowl appearances?",
      "correct_answer": "New England Patriots",
      "incorrect_answers": ["Pittsburgh Steelers", "San Francisco 49ers", "Dallas Cowboys"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "What is the name of the NFL's championship trophy?",
      "correct_answer": "Vince Lombardi Trophy",
      "incorrect_answers": ["George Halas Trophy", "Heisman Trophy", "Walter Payton Trophy"],
      "difficulty": "medium",
      "sport": "football"
    },
    {
      "question": "What is the maximum number of players on the field per team during a play?",
      "correct_answer": "11",
      "incorrect_answers": ["10", "12", "9"],
      "difficulty": "medium",
      "sport": "football"
    },    
      {
        "question": "Which team has appeared in four Super Bowls but never held a lead?",
        "correct_answer": "Minnesota Vikings",
        "incorrect_answers": ["Buffalo Bills", "Cincinnati Bengals", "Atlanta Falcons"],
        "difficulty": "medium",
        "sport": "football"
      },
      {
        "question": "Who was the first wide receiver to win Super Bowl MVP?",
        "correct_answer": "Lynn Swann",
        "incorrect_answers": ["Jerry Rice", "Julian Edelman", "Hines Ward"],
        "difficulty": "medium",
        "sport": "football"
      },
      {
        "question": "Which Super Bowl had the first halftime show featuring a pop star?",
        "correct_answer": "Super Bowl XXV",
        "incorrect_answers": ["Super Bowl XX", "Super Bowl XXX", "Super Bowl XL"],
        "difficulty": "medium",
        "sport": "football"
      },
      {
        "question": "Which team recorded the first shutout in Super Bowl history?",
        "correct_answer": "No team has ever recorded a shutout in Super Bowl history.",
        "incorrect_answers": ["Baltimore Ravens", "Chicago Bears", "New York Giants"],
        "difficulty": "medium",
        "sport": "football"
      },
      {
        "question": "Which player has the most career Super Bowl touchdowns?",
        "correct_answer": "Jerry Rice",
        "incorrect_answers": ["Rob Gronkowski", "Emmitt Smith", "Franco Harris"],
        "difficulty": "medium",
        "sport": "football"
      },
      {
        "question": "Which city hosted the first Super Bowl played indoors?",
        "correct_answer": "New Orleans",
        "incorrect_answers": ["Detroit", "Houston", "Atlanta"],
        "difficulty": "medium",
        "sport": "football"
      },
      {
        "question": "Which Super Bowl had the smallest attendance?",
        "correct_answer": "Super Bowl LV",
        "incorrect_answers": ["Super Bowl I", "Super Bowl XX", "Super Bowl XL"],
        "difficulty": "medium",
        "sport": "football"
      },
      {
        "question": "Who was the first player to win consecutive Super Bowl MVPs?",
        "correct_answer": "Bart Starr",
        "incorrect_answers": ["Terry Bradshaw", "Joe Montana", "Tom Brady"],
        "difficulty": "medium",
        "sport": "football"
      },
      {
        "question": "Which team scored the fewest points in a Super Bowl game?",
        "correct_answer": "Miami Dolphins",
        "incorrect_answers": ["Los Angeles Rams", "New York Giants", "Baltimore Ravens"],
        "difficulty": "medium",
        "sport": "football"
      },
      {
        "question": "Which player has played in the most Super Bowls?",
        "correct_answer": "Tom Brady",
        "incorrect_answers": ["Jerry Rice", "Peyton Manning", "Ben Roethlisberger"],
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
    
    // hard questions

    // hard soccer questions

    {
      "question": "Who is the only player to win the UEFA Champions League with three different clubs?",
      "correct_answer": "Clarence Seedorf",
      "incorrect_answers": ["Cristiano Ronaldo", "Zlatan Ibrahimović", "David Beckham"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which club won the first ever UEFA Champions League in 1992–93?",
      "correct_answer": "Marseille",
      "incorrect_answers": ["AC Milan", "Barcelona", "Real Madrid"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Who was the top scorer in the UEFA Champions League 2020–21 season?",
      "correct_answer": "Erling Haaland",
      "incorrect_answers": ["Robert Lewandowski", "Karim Benzema", "Kylian Mbappé"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which nation did Ferenc Puskás represent internationally?",
      "correct_answer": "Hungary",
      "incorrect_answers": ["Poland", "Austria", "Czech Republic"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Who managed Greece when they won Euro 2004?",
      "correct_answer": "Otto Rehhagel",
      "incorrect_answers": ["Fernando Santos", "Luis Aragones", "Marcello Lippi"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which country hosted the 1962 FIFA World Cup?",
      "correct_answer": "Chile",
      "incorrect_answers": ["Brazil", "Italy", "Mexico"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "What year did the back-pass rule come into effect?",
      "correct_answer": "1992",
      "incorrect_answers": ["1986", "1994", "2000"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which goalkeeper scored a goal from open play in the Premier League for Stoke City?",
      "correct_answer": "Asmir Begović",
      "incorrect_answers": ["David de Gea", "Joe Hart", "Petr Čech"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which country won the FIFA Confederations Cup in 2017?",
      "correct_answer": "Germany",
      "incorrect_answers": ["Portugal", "Chile", "Brazil"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which club has the most UEFA Europa League titles?",
      "correct_answer": "Sevilla",
      "incorrect_answers": ["Inter Milan", "Liverpool", "Atletico Madrid"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    { 
      "question": "Who was the first African player to win the Ballon d'Or?",
      "correct_answer": "George Weah",
      "incorrect_answers": ["Samuel Eto'o", "Didier Drogba", "Abedi Pele"],
      "difficulty": "hard",
      "sport": "soccer"
    },    
    {
      "question": "Which club has won more Champions League titles than their own domestic league titles?",
      "correct_answer": "Nottingham Forest",
      "incorrect_answers": ["Aston Villa", "Hamburger SV", "Steaua Bucharest"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which player holds the record for most minutes played in UCL history?",
      "correct_answer": "Iker Casillas",
      "incorrect_answers": ["Cristiano Ronaldo", "Xavi", "Paolo Maldini"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which country has had the most different teams play in the Champions League?",
      "correct_answer": "Germany",
      "incorrect_answers": ["England", "Spain", "Italy"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Who managed Porto to Champions League victory in 2004?",
      "correct_answer": "José Mourinho",
      "incorrect_answers": ["Rafa Benitez", "Carlo Ancelotti", "Louis van Gaal"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which player scored a hat-trick in the fastest time in UCL history?",
      "correct_answer": "Bafétimbi Gomis",
      "incorrect_answers": ["Cristiano Ronaldo", "Raheem Sterling", "Robert Lewandowski"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which team won the Champions League with the youngest starting XI in a final?",
      "correct_answer": "Ajax (1995)",
      "incorrect_answers": ["Manchester United (1999)", "Barcelona (2006)", "Porto (2004)"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Who is the youngest scorer in Champions League history?",
      "correct_answer": "Ansu Fati",
      "incorrect_answers": ["Cesc Fàbregas", "Bojan Krkić", "Martin Ødegaard"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which club won the first edition of the European Cup?",
      "correct_answer": "Real Madrid",
      "incorrect_answers": ["Benfica", "AC Milan", "Reims"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which referee has officiated the most UCL finals?",
      "correct_answer": "Pierluigi Collina",
      "incorrect_answers": ["Howard Webb", "Mark Clattenburg", "Felix Brych"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "What is the highest-scoring UCL match of all time?",
      "correct_answer": "Borussia Dortmund 8–4 Legia Warsaw",
      "incorrect_answers": ["Barcelona 7–1 Bayer Leverkusen", "Bayern 7–2 Tottenham", "Real Madrid 6–3 Anderlecht"],
      "difficulty": "hard",
      "sport": "soccer"
    },    
    {
      "question": "Which country has appeared in the most FIFA World Cup finals without ever winning?",
      "correct_answer": "Netherlands",
      "incorrect_answers": ["Croatia", "Hungary", "Sweden"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Who was the top scorer of the 1998 FIFA World Cup?",
      "correct_answer": "Davor Šuker",
      "incorrect_answers": ["Ronaldo", "Zinedine Zidane", "Gabriel Batistuta"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which African country was the first to reach the quarterfinals of the World Cup?",
      "correct_answer": "Cameroon",
      "incorrect_answers": ["Senegal", "Nigeria", "Ghana"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which club won the first-ever UEFA Champions League (under that name) in 1993?",
      "correct_answer": "Marseille",
      "incorrect_answers": ["AC Milan", "Barcelona", "Ajax"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Who scored the 'Hand of God' goal?",
      "correct_answer": "Diego Maradona",
      "incorrect_answers": ["Pelé", "Lionel Messi", "Zico"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which manager has won the most UEFA Champions League titles?",
      "correct_answer": "Carlo Ancelotti",
      "incorrect_answers": ["Zinedine Zidane", "Pep Guardiola", "Bob Paisley"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which country won the first ever European Championship (Euro) in 1960?",
      "correct_answer": "Soviet Union",
      "incorrect_answers": ["Yugoslavia", "West Germany", "France"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "What was the first club Lionel Messi scored against in the Champions League?",
      "correct_answer": "Panathinaikos",
      "incorrect_answers": ["Chelsea", "Arsenal", "AC Milan"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which country has the most Copa América titles?",
      "correct_answer": "Uruguay",
      "incorrect_answers": ["Brazil", "Argentina", "Chile"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Who was the first goalkeeper to win the Ballon d'Or?",
      "correct_answer": "Lev Yashin",
      "incorrect_answers": ["Gianluigi Buffon", "Iker Casillas", "Dino Zoff"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which team eliminated Brazil from the 2010 FIFA World Cup?",
      "correct_answer": "Netherlands",
      "incorrect_answers": ["Germany", "Spain", "Argentina"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which English club was banned from European competition for five years after the Heysel disaster?",
      "correct_answer": "Liverpool",
      "incorrect_answers": ["Manchester United", "Leeds United", "Arsenal"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which player scored in every round of the 2001/02 UEFA Champions League?",
      "correct_answer": "Ruud van Nistelrooy",
      "incorrect_answers": ["Raúl", "Zidane", "Hernán Crespo"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which country has won the most FIFA U-20 World Cups?",
      "correct_answer": "Argentina",
      "incorrect_answers": ["Brazil", "Nigeria", "Portugal"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Who was the first African player to win the Ballon d'Or?",
      "correct_answer": "George Weah",
      "incorrect_answers": ["Didier Drogba", "Samuel Eto'o", "Abedi Pele"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which German club has won the second most Bundesliga titles after Bayern Munich?",
      "correct_answer": "Borussia Dortmund",
      "incorrect_answers": ["Hamburg", "Werder Bremen", "Schalke 04"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "What year did Italy last win the World Cup?",
      "correct_answer": "2006",
      "incorrect_answers": ["1994", "1982", "2010"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which stadium hosted the 2002 World Cup Final?",
      "correct_answer": "International Stadium Yokohama",
      "incorrect_answers": ["Seoul World Cup Stadium", "Tokyo National Stadium", "Osaka Nagai Stadium"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Who is the youngest player to score in a World Cup match?",
      "correct_answer": "Pelé",
      "incorrect_answers": ["Kylian Mbappé", "Lionel Messi", "Michael Owen"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which club won the treble in the 1998–99 season?",
      "correct_answer": "Manchester United",
      "incorrect_answers": ["Barcelona", "AC Milan", "Inter Milan"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Who is the all-time top scorer in the Africa Cup of Nations?",
      "correct_answer": "Samuel Eto'o",
      "incorrect_answers": ["Didier Drogba", "Hossam Hassan", "Roger Milla"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which club has won the most UEFA Europa League titles?",
      "correct_answer": "Sevilla",
      "incorrect_answers": ["Inter Milan", "Juventus", "Liverpool"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Who scored the winning goal in the 2014 World Cup Final?",
      "correct_answer": "Mario Götze",
      "incorrect_answers": ["Thomas Müller", "Miroslav Klose", "Mesut Özil"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which Brazilian club did Neymar play for before moving to Europe?",
      "correct_answer": "Santos",
      "incorrect_answers": ["Flamengo", "Palmeiras", "Corinthians"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Who was the manager of Spain during their 2010 World Cup victory?",
      "correct_answer": "Vicente del Bosque",
      "incorrect_answers": ["Luis Aragonés", "Julen Lopetegui", "Luis Enrique"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which club has the most Ligue 1 titles?",
      "correct_answer": "Saint-Étienne",
      "incorrect_answers": ["Paris Saint-Germain", "Marseille", "Lyon"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Which country hosted the 1986 FIFA World Cup?",
      "correct_answer": "Mexico",
      "incorrect_answers": ["Italy", "Argentina", "Spain"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "What is the nickname of the South Korean national football team?",
      "correct_answer": "Taegeuk Warriors",
      "incorrect_answers": ["Samurai Blue", "Dragons", "Red Demons"],
      "difficulty": "hard",
      "sport": "soccer"
    },
    {
      "question": "Who scored the most goals in the 2022 FIFA World Cup?",
      "correct_answer": "Kylian Mbappé",
      "incorrect_answers": ["Lionel Messi", "Olivier Giroud", "Richarlison"],
      "difficulty": "hard",
      "sport": "soccer"
    },

    // hard baseball questions

    {
      "question": "Who holds the MLB record for most career sacrifice hits?",
      "correct_answer": "Eddie Collins",
      "incorrect_answers": ["Ty Cobb", "Babe Ruth", "Pete Rose"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Which pitcher threw the only perfect game in a World Series?",
      "correct_answer": "Don Larsen",
      "incorrect_answers": ["Sandy Koufax", "Roy Halladay", "Cy Young"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Which MLB player holds the record for most career hits without ever making an All-Star team?",
      "correct_answer": "Damion Easley",
      "incorrect_answers": ["Placido Polanco", "Julio Franco", "Rafael Palmeiro"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Who was the first African American manager in Major League Baseball?",
      "correct_answer": "Frank Robinson",
      "incorrect_answers": ["Dusty Baker", "Willie Mays", "Jackie Robinson"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Which team drafted Tom Brady in the 2000 MLB Draft?",
      "correct_answer": "Montreal Expos",
      "incorrect_answers": ["Detroit Tigers", "Boston Red Sox", "San Francisco Giants"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Who was the first player to hit 50 home runs and steal 50 bases in a single season across their career?",
      "correct_answer": "Barry Bonds",
      "incorrect_answers": ["Willie Mays", "Alex Rodriguez", "Ken Griffey Jr."],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "What year was the designated hitter rule introduced in the American League?",
      "correct_answer": "1973",
      "incorrect_answers": ["1975", "1971", "1980"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Which MLB team was the last to integrate racially?",
      "correct_answer": "Boston Red Sox",
      "incorrect_answers": ["New York Yankees", "Philadelphia Phillies", "Cincinnati Reds"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Who is the only player to win an MVP award in both the American and National Leagues?",
      "correct_answer": "Frank Robinson",
      "incorrect_answers": ["Barry Bonds", "Alex Rodriguez", "Albert Pujols"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Which pitcher has the most career strikeouts in MLB history?",
      "correct_answer": "Nolan Ryan",
      "incorrect_answers": ["Randy Johnson", "Roger Clemens", "Greg Maddux"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Who holds the MLB record for most grand slams in a career?",
      "correct_answer": "Alex Rodriguez",
      "incorrect_answers": ["Manny Ramirez", "Lou Gehrig", "Barry Bonds"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Who was the youngest player to hit 500 career home runs?",
      "correct_answer": "Alex Rodriguez",
      "incorrect_answers": ["Ken Griffey Jr.", "Jimmie Foxx", "Mickey Mantle"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Who is the only pitcher in MLB history to win a Cy Young Award in four different decades?",
      "correct_answer": "Nolan Ryan",
      "incorrect_answers": ["Tom Seaver", "Roger Clemens", "Greg Maddux"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Which MLB stadium has the deepest center field?",
      "correct_answer": "Coors Field",
      "incorrect_answers": ["Oracle Park", "Comerica Park", "Minute Maid Park"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Which player hit a home run in his first MLB at-bat and also in his final MLB at-bat?",
      "correct_answer": "Paul Konerko",
      "incorrect_answers": ["David Ortiz", "Ted Williams", "Albert Pujols"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Which MLB player has the most career postseason home runs?",
      "correct_answer": "Manny Ramirez",
      "incorrect_answers": ["Derek Jeter", "David Ortiz", "Jose Altuve"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Who was the first MLB player to have his number retired?",
      "correct_answer": "Lou Gehrig",
      "incorrect_answers": ["Babe Ruth", "Ty Cobb", "Joe DiMaggio"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Which player was famously traded for himself in MLB?",
      "correct_answer": "Harry Chiti",
      "incorrect_answers": ["David Cone", "Bobby Bonilla", "Dick Allen"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Which player has the most career walks in MLB history?",
      "correct_answer": "Barry Bonds",
      "incorrect_answers": ["Babe Ruth", "Ted Williams", "Rickey Henderson"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Which team won the most games in a single regular MLB season?",
      "correct_answer": "Seattle Mariners",
      "incorrect_answers": ["New York Yankees", "Chicago Cubs", "Oakland Athletics"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "What is the longest hitting streak in MLB history?",
      "correct_answer": "56 games",
      "incorrect_answers": ["44 games", "41 games", "52 games"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Which team has the most World Series losses?",
      "correct_answer": "New York Yankees",
      "incorrect_answers": ["Boston Red Sox", "Los Angeles Dodgers", "Chicago Cubs"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Which player has hit the most leadoff home runs in MLB history?",
      "correct_answer": "Rickey Henderson",
      "incorrect_answers": ["Ichiro Suzuki", "Craig Biggio", "Alfonso Soriano"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Which MLB pitcher threw a no-hitter on LSD?",
      "correct_answer": "Dock Ellis",
      "incorrect_answers": ["Vida Blue", "Ferguson Jenkins", "Dwight Gooden"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Which player was the first to reach 3,000 hits and 500 home runs?",
      "correct_answer": "Willie Mays",
      "incorrect_answers": ["Hank Aaron", "Rafael Palmeiro", "Alex Rodriguez"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Who was the last pitcher to throw a perfect game in the MLB (as of 2025)?",
      "correct_answer": "Félix Hernández",
      "incorrect_answers": ["Matt Cain", "Roy Halladay", "Dallas Braden"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Which player hit four home runs in a single game most recently?",
      "correct_answer": "J.D. Martinez",
      "incorrect_answers": ["Josh Hamilton", "Shawn Green", "Scooter Gennett"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "What is the maximum number of batters a pitcher can face in a 9-inning perfect game?",
      "correct_answer": "27",
      "incorrect_answers": ["26", "28", "25"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Which team holds the longest losing streak in MLB history?",
      "correct_answer": "Louisville Colonels",
      "incorrect_answers": ["Philadelphia Phillies", "Cleveland Spiders", "Baltimore Orioles"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    {
      "question": "Who was the first relief pitcher inducted into the Hall of Fame?",
      "correct_answer": "Hoyt Wilhelm",
      "incorrect_answers": ["Rollie Fingers", "Goose Gossage", "Dennis Eckersley"],
      "difficulty": "hard",
      "sport": "baseball"
    },
    
    // hard basketball questions

    {
      "question": "Who was the first player in NBA history to record a quadruple-double?",
      "correct_answer": "Nate Thurmond",
      "incorrect_answers": ["Hakeem Olajuwon", "David Robinson", "Wilt Chamberlain"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Which player holds the record for most technical fouls in NBA history?",
      "correct_answer": "Rasheed Wallace",
      "incorrect_answers": ["Dennis Rodman", "Draymond Green", "Charles Barkley"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Which team drafted Kobe Bryant in 1996 before trading him to the Lakers?",
      "correct_answer": "Charlotte Hornets",
      "incorrect_answers": ["New Jersey Nets", "Philadelphia 76ers", "Boston Celtics"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Who is the only player in NBA history to win MVP, Finals MVP, and All-Star MVP in the same season?",
      "correct_answer": "Shaquille O'Neal",
      "incorrect_answers": ["Michael Jordan", "LeBron James", "Tim Duncan"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Which player recorded the only 20-20-20 game (points, rebounds, assists) in NBA history?",
      "correct_answer": "Wilt Chamberlain",
      "incorrect_answers": ["Russell Westbrook", "Oscar Robertson", "Magic Johnson"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Which coach has the most losses in NBA history?",
      "correct_answer": "Lenny Wilkens",
      "incorrect_answers": ["Don Nelson", "Rick Adelman", "Jerry Sloan"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Which team was the first to win back-to-back NBA championships?",
      "correct_answer": "Minneapolis Lakers",
      "incorrect_answers": ["Boston Celtics", "Chicago Bulls", "New York Knicks"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Who holds the record for most points in a single NBA quarter?",
      "correct_answer": "Klay Thompson",
      "incorrect_answers": ["Kobe Bryant", "Devin Booker", "Stephen Curry"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Which NBA player once scored 100 points in a single game?",
      "correct_answer": "Wilt Chamberlain",
      "incorrect_answers": ["Kobe Bryant", "Michael Jordan", "Elgin Baylor"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Who was the youngest NBA player to reach 10,000 career points?",
      "correct_answer": "LeBron James",
      "incorrect_answers": ["Kevin Durant", "Kobe Bryant", "Michael Jordan"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Which NBA player had a signature move known as the 'Sky Hook'?",
      "correct_answer": "Kareem Abdul-Jabbar",
      "incorrect_answers": ["Hakeem Olajuwon", "Tim Duncan", "Shaquille O'Neal"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Who was the first foreign-born player to win the NBA MVP award?",
      "correct_answer": "Hakeem Olajuwon",
      "incorrect_answers": ["Dirk Nowitzki", "Giannis Antetokounmpo", "Steve Nash"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "What team did Shaquille O'Neal finish his NBA career with?",
      "correct_answer": "Boston Celtics",
      "incorrect_answers": ["Miami Heat", "Phoenix Suns", "Cleveland Cavaliers"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Who holds the record for most career personal fouls in the NBA?",
      "correct_answer": "Kareem Abdul-Jabbar",
      "incorrect_answers": ["Karl Malone", "Hakeem Olajuwon", "Charles Oakley"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Which NBA team was the last to integrate and have a Black player on its roster?",
      "correct_answer": "Boston Celtics",
      "incorrect_answers": ["New York Knicks", "Chicago Bulls", "Washington Wizards"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Which player holds the record for most missed field goals in NBA history?",
      "correct_answer": "Kobe Bryant",
      "incorrect_answers": ["Allen Iverson", "Michael Jordan", "Karl Malone"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Who was the first high school player to be drafted number one overall in the NBA?",
      "correct_answer": "Kwame Brown",
      "incorrect_answers": ["LeBron James", "Kevin Garnett", "Dwight Howard"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Which team holds the NBA record for most wins in a single season?",
      "correct_answer": "Golden State Warriors",
      "incorrect_answers": ["Chicago Bulls", "Boston Celtics", "San Antonio Spurs"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Who has the most career turnovers in NBA history?",
      "correct_answer": "LeBron James",
      "incorrect_answers": ["Karl Malone", "Kobe Bryant", "Russell Westbrook"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Who was the shortest player to ever play in an NBA game?",
      "correct_answer": "Muggsy Bogues",
      "incorrect_answers": ["Spud Webb", "Nate Robinson", "Earl Boykins"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Which player has the highest career playoff scoring average?",
      "correct_answer": "Michael Jordan",
      "incorrect_answers": ["LeBron James", "Kevin Durant", "Allen Iverson"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Which team has the longest playoff drought in NBA history?",
      "correct_answer": "Sacramento Kings",
      "incorrect_answers": ["Los Angeles Clippers", "Minnesota Timberwolves", "Charlotte Hornets"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Which NBA player was nicknamed 'The Answer'?",
      "correct_answer": "Allen Iverson",
      "incorrect_answers": ["Ray Allen", "Tracy McGrady", "Baron Davis"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Which player has the most career triple-doubles in NBA history?",
      "correct_answer": "Russell Westbrook",
      "incorrect_answers": ["Oscar Robertson", "Magic Johnson", "Nikola Jokic"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Who is the only player to record a triple-double without missing a shot or free throw?",
      "correct_answer": "Nikola Jokic",
      "incorrect_answers": ["Wilt Chamberlain", "Chris Paul", "LeBron James"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Which team did Michael Jordan score his career-high 69 points against?",
      "correct_answer": "Cleveland Cavaliers",
      "incorrect_answers": ["Detroit Pistons", "New York Knicks", "Miami Heat"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Which coach has the most NBA championships?",
      "correct_answer": "Phil Jackson",
      "incorrect_answers": ["Red Auerbach", "Pat Riley", "Gregg Popovich"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Which team did Dirk Nowitzki play his entire career for?",
      "correct_answer": "Dallas Mavericks",
      "incorrect_answers": ["San Antonio Spurs", "Houston Rockets", "Phoenix Suns"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Who is the tallest player in NBA history?",
      "correct_answer": "Gheorghe Mureșan",
      "incorrect_answers": ["Manute Bol", "Shawn Bradley", "Yao Ming"],
      "difficulty": "hard",
      "sport": "basketball"
    },
    {
      "question": "Which NBA player legally changed his name to World B. Free?",
      "correct_answer": "Lloyd Free",
      "incorrect_answers": ["Ron Artest", "Metta Sandiford-Artest", "Stephen Jackson"],
      "difficulty": "hard",
      "sport": "basketball"
    },

    // hard football questions

    {
      "question": "Who is the only player to win the Heisman Trophy twice?",
      "correct_answer": "Archie Griffin",
      "incorrect_answers": ["Tim Tebow", "Barry Sanders", "Bo Jackson"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which player holds the record for the most career receiving yards in the NFL?",
      "correct_answer": "Jerry Rice",
      "incorrect_answers": ["Randy Moss", "Terrell Owens", "Larry Fitzgerald"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Who was the quarterback for the Miami Dolphins during their 1972 perfect season?",
      "correct_answer": "Bob Griese",
      "incorrect_answers": ["Dan Marino", "Earl Morrall", "Ken Stabler"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which team won the first Super Bowl ever played?",
      "correct_answer": "Green Bay Packers",
      "incorrect_answers": ["Kansas City Chiefs", "Chicago Bears", "New York Jets"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which head coach has the most total wins in NFL history?",
      "correct_answer": "Don Shula",
      "incorrect_answers": ["Bill Belichick", "George Halas", "Tom Landry"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Who holds the record for most sacks in a single NFL season?",
      "correct_answer": "Michael Strahan",
      "incorrect_answers": ["T.J. Watt", "Reggie White", "DeMarcus Ware"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which kicker holds the record for the longest field goal in NFL history?",
      "correct_answer": "Justin Tucker",
      "incorrect_answers": ["Adam Vinatieri", "Sebastian Janikowski", "Matt Prater"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Who was the first African American quarterback to win a Super Bowl?",
      "correct_answer": "Doug Williams",
      "incorrect_answers": ["Warren Moon", "Randall Cunningham", "Steve McNair"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which team holds the longest playoff drought in NFL history?",
      "correct_answer": "Cleveland Browns",
      "incorrect_answers": ["Detroit Lions", "New York Jets", "Arizona Cardinals"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "What was the name of the league that merged with the NFL in 1970?",
      "correct_answer": "AFL",
      "incorrect_answers": ["USFL", "XFL", "CFL"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which NFL team had the nickname 'The Greatest Show on Turf'?",
      "correct_answer": "St. Louis Rams",
      "incorrect_answers": ["Indianapolis Colts", "New Orleans Saints", "San Diego Chargers"],
      "difficulty": "hard",
      "sport": "football"
    },    
    
      {
        "question": "Who is the only player to win Super Bowl MVP despite his team losing the game?",
        "correct_answer": "Chuck Howley",
        "incorrect_answers": ["Tom Brady", "Joe Montana", "Peyton Manning"],
        "difficulty": "hard",
        "sport": "football"
      },
      {
        "correct_answer": "Super Bowl XXV",
        "incorrect_answers": ["Super Bowl XX", "Super Bowl XXX", "Super Bowl XL"],
        "difficulty": "hard",
        "sport": "football"
      },
      {
        "correct_answer": "No team has ever recorded a shutout in Super Bowl history.",
        "incorrect_answers": ["Baltimore Ravens", "Chicago Bears", "New York Giants"],
        "difficulty": "hard",
        "sport": "football"
      },
      {
        "correct_answer": "Jerry Rice",
        "incorrect_answers": ["Rob Gronkowski", "Emmitt Smith", "Franco Harris"],
        "difficulty": "hard",
        "sport": "football"
      },
      {
        "correct_answer": "New Orleans",
        "incorrect_answers": ["Detroit", "Houston", "Atlanta"],
        "difficulty": "hard",
        "sport": "football"
      },
      {
        "correct_answer": "Super Bowl LV",
        "incorrect_answers": ["Super Bowl I", "Super Bowl XX", "Super Bowl XL"],
        "difficulty": "hard",
        "sport": "football"
      },
      {
        "correct_answer": "Bart Starr",
        "incorrect_answers": ["Terry Bradshaw", "Joe Montana", "Tom Brady"],
        "difficulty": "hard",
        "sport": "football"
      },
      {
        "correct_answer": "Miami Dolphins",
        "incorrect_answers": ["Los Angeles Rams", "New York Giants", "Baltimore Ravens"],
        "difficulty": "hard",
        "sport": "football"
      },
      {
        "correct_answer": "Tom Brady",
        "incorrect_answers": ["Jerry Rice", "Peyton Manning", "Ben Roethlisberger"],
        "difficulty": "hard",
        "sport": "football"
      },
      {
        "question": "Who performed the national anthem at Super Bowl 50?",
        "correct_answer": "Lady Gaga",
        "incorrect_answers": ["Beyoncé", "Alicia Keys", "Whitney Houston"],
        "difficulty": "hard",
        "sport": "football"
      },
    
    {
      "question": "Which NFL team has the most losses in Super Bowl history?",
      "correct_answer": "New England Patriots",
      "incorrect_answers": ["Denver Broncos", "Buffalo Bills", "Minnesota Vikings"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Who was the first African American quarterback to start in a Super Bowl?",
      "correct_answer": "Doug Williams",
      "incorrect_answers": ["Warren Moon", "Randall Cunningham", "Steve McNair"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which NFL team drafted Eli Manning first overall in 2004 before trading him?",
      "correct_answer": "San Diego Chargers",
      "incorrect_answers": ["New York Giants", "Indianapolis Colts", "Dallas Cowboys"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which running back holds the record for most rushing yards in a single NFL season?",
      "correct_answer": "Eric Dickerson",
      "incorrect_answers": ["Adrian Peterson", "Barry Sanders", "OJ Simpson"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which NFL player has the most career interceptions?",
      "correct_answer": "Paul Krause",
      "incorrect_answers": ["Ed Reed", "Rod Woodson", "Deion Sanders"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which team won the first AFL-NFL World Championship Game (now Super Bowl I)?",
      "correct_answer": "Green Bay Packers",
      "incorrect_answers": ["Kansas City Chiefs", "Chicago Bears", "Baltimore Colts"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Who holds the record for the longest field goal in NFL history?",
      "correct_answer": "Justin Tucker",
      "incorrect_answers": ["Matt Prater", "Adam Vinatieri", "Tom Dempsey"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which coach has the most career wins in NFL history?",
      "correct_answer": "Don Shula",
      "incorrect_answers": ["Bill Belichick", "George Halas", "Tom Landry"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which Super Bowl had the biggest point differential?",
      "correct_answer": "Super Bowl XXIV",
      "incorrect_answers": ["Super Bowl XLVIII", "Super Bowl XX", "Super Bowl I"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which NFL player returned a fumble 98 yards for a touchdown in Super Bowl XXXVII?",
      "correct_answer": "Dwight Smith",
      "incorrect_answers": ["Dexter Jackson", "John Lynch", "Ronde Barber"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which NFL team has gone the longest without making a Super Bowl appearance?",
      "correct_answer": "Cleveland Browns",
      "incorrect_answers": ["Detroit Lions", "Jacksonville Jaguars", "Houston Texans"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Who was the first overall pick in the 2007 NFL Draft?",
      "correct_answer": "JaMarcus Russell",
      "incorrect_answers": ["Calvin Johnson", "Joe Thomas", "Adrian Peterson"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which player holds the NFL record for most sacks in a single season?",
      "correct_answer": "Michael Strahan",
      "incorrect_answers": ["T.J. Watt", "Reggie White", "Jared Allen"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which NFL team was originally called the Titans of New York?",
      "correct_answer": "New York Jets",
      "incorrect_answers": ["New York Giants", "Tennessee Titans", "Buffalo Bills"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Who was the MVP of Super Bowl XXXV?",
      "correct_answer": "Ray Lewis",
      "incorrect_answers": ["Trent Dilfer", "Jamal Lewis", "Shannon Sharpe"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which NFL player was known as 'The Nigerian Nightmare'?",
      "correct_answer": "Christian Okoye",
      "incorrect_answers": ["Emmitt Smith", "Bo Jackson", "Marshall Faulk"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which team has the longest winning streak in NFL history (including playoffs)?",
      "correct_answer": "New England Patriots",
      "incorrect_answers": ["Pittsburgh Steelers", "San Francisco 49ers", "Dallas Cowboys"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "What year did the NFL and AFL officially merge?",
      "correct_answer": "1970",
      "incorrect_answers": ["1966", "1969", "1972"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which player won NFL MVP and Super Bowl MVP in the same season in 1999?",
      "correct_answer": "Kurt Warner",
      "incorrect_answers": ["Marshall Faulk", "Tom Brady", "Peyton Manning"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which defensive player was selected number one overall in the 1988 NFL Draft?",
      "correct_answer": "Aundray Bruce",
      "incorrect_answers": ["Bruce Smith", "Cornelius Bennett", "Derrick Thomas"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which NFL player has the most career playoff touchdown passes?",
      "correct_answer": "Tom Brady",
      "incorrect_answers": ["Peyton Manning", "Joe Montana", "Brett Favre"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which NFL team drafted Jerry Rice?",
      "correct_answer": "San Francisco 49ers",
      "incorrect_answers": ["Dallas Cowboys", "Oakland Raiders", "Denver Broncos"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which quarterback holds the record for most rushing touchdowns in a single season?",
      "correct_answer": "Cam Newton",
      "incorrect_answers": ["Lamar Jackson", "Steve Young", "Michael Vick"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Who was the MVP of the first Super Bowl?",
      "correct_answer": "Bart Starr",
      "incorrect_answers": ["Joe Namath", "Len Dawson", "Ray Nitschke"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which team did Brett Favre end his career with?",
      "correct_answer": "Minnesota Vikings",
      "incorrect_answers": ["Green Bay Packers", "New York Jets", "Atlanta Falcons"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Who was the first wide receiver to be named Super Bowl MVP?",
      "correct_answer": "Lynn Swann",
      "incorrect_answers": ["Jerry Rice", "Fred Biletnikoff", "Hines Ward"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which NFL player was known as 'Prime Time'?",
      "correct_answer": "Deion Sanders",
      "incorrect_answers": ["Bo Jackson", "Reggie Bush", "Ray Lewis"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Who was the first pick in the 1983 NFL Draft?",
      "correct_answer": "John Elway",
      "incorrect_answers": ["Dan Marino", "Jim Kelly", "Eric Dickerson"],
      "difficulty": "hard",
      "sport": "football"
    },
    {
      "question": "Which city hosted the coldest Super Bowl ever played outdoors?",
      "correct_answer": "East Rutherford",
      "incorrect_answers": ["Green Bay", "Minneapolis", "Chicago"],
      "difficulty": "hard",
      "sport": "football"
    },

    // hard hockey questions

    {
      "correct_answer": "Maurice Richard",
      "incorrect_answers": ["Wayne Gretzky", "Bobby Hull", "Gordie Howe"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Who is the only player to win the Stanley Cup as captain of two different teams?",
      "correct_answer": "Mark Messier",
      "incorrect_answers": ["Wayne Gretzky", "Ray Bourque", "Joe Sakic"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Which team won the Stanley Cup in 1942 after being down 0-3 in the Finals?",
      "correct_answer": "Toronto Maple Leafs",
      "incorrect_answers": ["Boston Bruins", "Detroit Red Wings", "Chicago Blackhawks"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Which goalie was the first to score a goal in the Stanley Cup Playoffs?",
      "correct_answer": "Ron Hextall",
      "incorrect_answers": ["Martin Brodeur", "Patrick Roy", "Tom Barrasso"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Which NHL team has appeared in the most Stanley Cup Finals without a win?",
      "correct_answer": "Vancouver Canucks",
      "incorrect_answers": ["Buffalo Sabres", "San Jose Sharks", "Ottawa Senators"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "In what year was the Stanley Cup not awarded due to a lockout?",
      "correct_answer": "2005",
      "incorrect_answers": ["1995", "2013", "2020"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Which team ended a 54-year Stanley Cup drought in 1994?",
      "correct_answer": "New York Rangers",
      "incorrect_answers": ["Toronto Maple Leafs", "Chicago Blackhawks", "Los Angeles Kings"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Which player scored the Cup-clinching goal in triple OT in 1996?",
      "correct_answer": "Uwe Krupp",
      "incorrect_answers": ["Joe Sakic", "Peter Forsberg", "Claude Lemieux"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Which NHL team was the last to win the Stanley Cup before the 2005 lockout?",
      "correct_answer": "Tampa Bay Lightning",
      "incorrect_answers": ["Calgary Flames", "New Jersey Devils", "Detroit Red Wings"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Who was the first European captain to win the Stanley Cup?",
      "correct_answer": "Nicklas Lidstrom",
      "incorrect_answers": ["Jaromir Jagr", "Teemu Selanne", "Zdeno Chara"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Which arena has hosted the most Stanley Cup Finals games?",
      "correct_answer": "Montreal Forum",
      "incorrect_answers": ["Madison Square Garden", "Boston Garden", "United Center"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Which goaltender has the most career NHL wins?",
      "correct_answer": "Martin Brodeur",
      "incorrect_answers": ["Patrick Roy", "Marc-André Fleury", "Dominik Hasek"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Which team won the first Stanley Cup after the NHL was formed?",
      "correct_answer": "Toronto Arenas",
      "incorrect_answers": ["Montreal Canadiens", "Ottawa Senators", "Boston Bruins"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Who holds the record for most career playoff points in the NHL?",
      "correct_answer": "Wayne Gretzky",
      "incorrect_answers": ["Mark Messier", "Jaromir Jagr", "Mario Lemieux"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Which NHL team was originally known as the Quebec Nordiques?",
      "correct_answer": "Colorado Avalanche",
      "incorrect_answers": ["Arizona Coyotes", "Carolina Hurricanes", "Calgary Flames"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Who was the first American-born player to score 500 goals in the NHL?",
      "correct_answer": "Joe Mullen",
      "incorrect_answers": ["Brett Hull", "Mike Modano", "Keith Tkachuk"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Which NHL defenseman has the most career points?",
      "correct_answer": "Ray Bourque",
      "incorrect_answers": ["Paul Coffey", "Nicklas Lidström", "Al MacInnis"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "In which year did the NHL introduce the salary cap?",
      "correct_answer": "2005",
      "incorrect_answers": ["2004", "2006", "2007"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Which team did Wayne Gretzky score his 802nd career goal against?",
      "correct_answer": "Vancouver Canucks",
      "incorrect_answers": ["Los Angeles Kings", "Calgary Flames", "Detroit Red Wings"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "What was the last Canadian team to win the Stanley Cup?",
      "correct_answer": "Montreal Canadiens",
      "incorrect_answers": ["Calgary Flames", "Ottawa Senators", "Edmonton Oilers"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Who was the first NHL player to score 100 points in a season?",
      "correct_answer": "Phil Esposito",
      "incorrect_answers": ["Wayne Gretzky", "Bobby Orr", "Gordie Howe"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Who was the NHL commissioner before Gary Bettman?",
      "correct_answer": "Gil Stein",
      "incorrect_answers": ["John Ziegler", "Clarence Campbell", "Frank Calder"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Which player has the most penalty minutes in NHL history?",
      "correct_answer": "Dave 'Tiger' Williams",
      "incorrect_answers": ["Tie Domi", "Marty McSorley", "Chris Nilan"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Who was the last player in the NHL to play without a helmet?",
      "correct_answer": "Craig MacTavish",
      "incorrect_answers": ["Doug Gilmour", "Mark Messier", "Ron Francis"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "correct_answer": "Montreal Canadiens",
      "incorrect_answers": ["Toronto Maple Leafs", "Detroit Red Wings", "Boston Bruins"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Who was the first player to win the Hart Trophy as league MVP more than six times?",
      "correct_answer": "Wayne Gretzky",
      "incorrect_answers": ["Gordie Howe", "Mario Lemieux", "Bobby Orr"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Who was the first European-trained player inducted into the Hockey Hall of Fame?",
      "correct_answer": "Vladislav Tretiak",
      "incorrect_answers": ["Jaromir Jagr", "Börje Salming", "Jari Kurri"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Which goalie was credited with scoring a goal in the NHL first?",
      "correct_answer": "Billy Smith",
      "incorrect_answers": ["Ron Hextall", "Martin Brodeur", "Patrick Roy"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Which team drafted Jaromir Jagr in 1990?",
      "correct_answer": "Pittsburgh Penguins",
      "incorrect_answers": ["Philadelphia Flyers", "Washington Capitals", "Boston Bruins"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Which player has the most career overtime goals in NHL history?",
      "correct_answer": "Alex Ovechkin",
      "incorrect_answers": ["Sidney Crosby", "Jaromir Jagr", "Patrick Kane"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Which team was involved in the longest game in NHL history?",
      "correct_answer": "Detroit Red Wings",
      "incorrect_answers": ["Montreal Canadiens", "Toronto Maple Leafs", "Chicago Blackhawks"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Who was the first goalie to wear a mask in an NHL game?",
      "correct_answer": "Jacques Plante",
      "incorrect_answers": ["Terry Sawchuk", "Glenn Hall", "Ken Dryden"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "What year was the original NHL Winter Classic held?",
      "correct_answer": "2008",
      "incorrect_answers": ["2006", "2009", "2007"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "correct_answer": "Canada",
      "incorrect_answers": ["USA", "Russia", "Sweden"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Who was the first captain of the Vegas Golden Knights?",
      "correct_answer": "Mark Stone",
      "incorrect_answers": ["Shea Theodore", "Jonathan Marchessault", "Deryk Engelland"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Which team drafted Eric Lindros before he was traded to Philadelphia?",
      "correct_answer": "Quebec Nordiques",
      "incorrect_answers": ["Toronto Maple Leafs", "New York Rangers", "Winnipeg Jets"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Who was the first player to win the Conn Smythe Trophy as a member of the losing team?",
      "correct_answer": "Roger Crozier",
      "incorrect_answers": ["Ron Hextall", "Jean-Sebastien Giguere", "Glenn Hall"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Which NHL player was known as 'The Finnish Flash'?",
      "correct_answer": "Teemu Selanne",
      "incorrect_answers": ["Jari Kurri", "Saku Koivu", "Patrik Laine"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "Which team won the first NHL Presidents’ Trophy?",
      "correct_answer": "Edmonton Oilers",
      "incorrect_answers": ["Boston Bruins", "Calgary Flames", "Montreal Canadiens"],
      "difficulty": "hard",
      "sport": "hockey"
    },
    {
      "question": "What is the minimum number of games required to win a best-of-seven NHL playoff series?",
      "correct_answer": "4",
      "incorrect_answers": ["5", "3", "2"],
      "difficulty": "hard",
      "sport": "hockey"
    }
    
    
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