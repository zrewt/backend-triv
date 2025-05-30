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
    },
  
      {
        "question": "Which country is known as the birthplace of hockey?",
        "correct_answer": "Canada",
        "incorrect_answers": ["USA", "Russia", "Sweden"],
        "difficulty": "easy"
      },
      {
        "question": "What is the name of the championship game in the NFL?",
        "correct_answer": "Super Bowl",
        "incorrect_answers": ["World Series", "Stanley Cup", "NBA Finals"],
        "difficulty": "easy"
      },
      {
        "question": "How many players are on a soccer team on the field?",
        "correct_answer": "11",
        "incorrect_answers": ["10", "12", "9"],
        "difficulty": "easy"
      },
      {
        "question": "Which NBA team is based in Toronto?",
        "correct_answer": "Toronto Raptors",
        "incorrect_answers": ["Toronto Huskies", "Toronto Bulls", "Toronto Kings"],
        "difficulty": "easy"
      },
      {
        "question": "What is the term for three goals scored by one player in a soccer match?",
        "correct_answer": "Hat-trick",
        "incorrect_answers": ["Triple play", "Slam dunk", "Touchdown"],
        "difficulty": "easy"
      },
      {
        "question": "Which sport uses a puck?",
        "correct_answer": "Hockey",
        "incorrect_answers": ["Soccer", "Basketball", "Baseball"],
        "difficulty": "easy"
      },
      {
        "question": "Which baseball team is based in New York?",
        "correct_answer": "New York Yankees",
        "incorrect_answers": ["Chicago Cubs", "Los Angeles Dodgers", "Boston Red Sox"],
        "difficulty": "easy"
      },
      {
        "question": "In basketball, how many points is a free throw worth?",
        "correct_answer": "1",
        "incorrect_answers": ["2", "3", "0"],
        "difficulty": "easy"
      },
      {
        "question": "What color card means a player is sent off in soccer?",
        "correct_answer": "Red",
        "incorrect_answers": ["Yellow", "Green", "Blue"],
        "difficulty": "easy"
      },
      {
        "question": "Which NHL team plays home games at Scotiabank Arena?",
        "correct_answer": "Toronto Maple Leafs",
        "incorrect_answers": ["Montreal Canadiens", "Ottawa Senators", "Vancouver Canucks"],
        "difficulty": "easy"
      },
      {
        "question": "What is the term for a home run with the bases loaded?",
        "correct_answer": "Grand Slam",
        "incorrect_answers": ["Triple Play", "Double Play", "Walk-off"],
        "difficulty": "easy"
      },
      {
        "question": "Which basketball player is known as 'King James'?",
        "correct_answer": "LeBron James",
        "incorrect_answers": ["Michael Jordan", "Kobe Bryant", "Stephen Curry"],
        "difficulty": "easy"
      },
      {
        "question": "In football, how many points is a touchdown worth?",
        "correct_answer": "6",
        "incorrect_answers": ["3", "7", "2"],
        "difficulty": "easy"
      },
      {
        "question": "Which country won the FIFA World Cup in 2018?",
        "correct_answer": "France",
        "incorrect_answers": ["Croatia", "Brazil", "Germany"],
        "difficulty": "easy"
      },
      {
        "question": "What is the name of the trophy awarded to the NHL champion?",
        "correct_answer": "Stanley Cup",
        "incorrect_answers": ["Grey Cup", "World Cup", "Super Bowl"],
        "difficulty": "easy"
      },
      {
        "question": "Which NBA team has a logo featuring a bear?",
        "correct_answer": "Memphis Grizzlies",
        "incorrect_answers": ["Chicago Bulls", "Minnesota Timberwolves", "Boston Celtics"],
        "difficulty": "easy"
      },
      {
        "question": "In baseball, how many strikes result in an out?",
        "correct_answer": "3",
        "incorrect_answers": ["2", "4", "5"],
        "difficulty": "easy"
      },
      {
        "question": "Which soccer player is known for wearing the number 10 jersey for Argentina?",
        "correct_answer": "Lionel Messi",
        "incorrect_answers": ["Diego Maradona", "Cristiano Ronaldo", "Neymar"],
        "difficulty": "easy"
      },
      {
        "question": "What is the name of the area where a hockey goalie stands?",
        "correct_answer": "Crease",
        "incorrect_answers": ["Zone", "Box", "Circle"],
        "difficulty": "easy"
      },
      {
        "question": "Which NFL team is based in Dallas?",
        "correct_answer": "Dallas Cowboys",
        "incorrect_answers": ["Houston Texans", "New York Giants", "Philadelphia Eagles"],
        "difficulty": "easy"
      },
      {
        "question": "In basketball, what is it called when a player scores by jumping and slamming the ball into the basket?",
        "correct_answer": "Dunk",
        "incorrect_answers": ["Layup", "Three-pointer", "Free throw"],
        "difficulty": "easy"
      },
      {
        "question": "Which country is famous for its passion for soccer and has won five World Cups?",
        "correct_answer": "Brazil",
        "incorrect_answers": ["Germany", "Italy", "Argentina"],
        "difficulty": "easy"
      },
      {
        "question": "What is the term for a score in hockey?",
        "correct_answer": "Goal",
        "incorrect_answers": ["Touchdown", "Run", "Basket"],
        "difficulty": "easy"
      },
      {
        "question": "Which baseball position is located between second and third base?",
        "correct_answer": "Shortstop",
        "incorrect_answers": ["First baseman", "Catcher", "Left fielder"],
        "difficulty": "easy"
      },
      {
        "question": "Which NBA team is known as 'The Heat'?",
        "correct_answer": "Miami Heat",
        "incorrect_answers": ["Phoenix Suns", "Chicago Bulls", "Los Angeles Lakers"],
        "difficulty": "easy"
      },
      {
        "question": "In football, what is the term for a kick after a touchdown worth one point?",
        "correct_answer": "Extra point",
        "incorrect_answers": ["Field goal", "Safety", "Two-point conversion"],
        "difficulty": "easy"
      },
      {
        "question": "Which soccer club is based in Barcelona?",
        "correct_answer": "FC Barcelona",
        "incorrect_answers": ["Real Madrid", "Atletico Madrid", "Valencia CF"],
        "difficulty": "easy"
      },
      {
        "question": "What is the name of the championship series in Major League Baseball?",
        "correct_answer": "World Series",
        "incorrect_answers": ["Super Bowl", "Stanley Cup", "NBA Finals"],
        "difficulty": "easy"
      },
      {
        "question": "Which NHL team is based in Montreal?",
        "correct_answer": "Montreal Canadiens",
        "incorrect_answers": ["Toronto Maple Leafs", "Ottawa Senators", "Vancouver Canucks"],
        "difficulty": "easy"
      },
      {
        "question": "In basketball, how many points is a shot made from beyond the three-point line worth?",
        "correct_answer": "3",
        "incorrect_answers": ["2", "1", "4"],
        "difficulty": "easy"
      },
    


    // Medium questions



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
      },
      {
      "question": "Who won the FIFA Best Men's Player award in 2022?",
      "correct_answer": "Lionel Messi",
      "incorrect_answers": ["Kylian Mbappé", "Karim Benzema", "Robert Lewandowski"],
      "difficulty": "medium"
    },
    {
      "question": "Which NFL quarterback won the 2023 MVP award?",
      "correct_answer": "Lamar Jackson",
      "incorrect_answers": ["Patrick Mahomes", "Jalen Hurts", "Joe Burrow"],
      "difficulty": "medium"
    },
    {
      "question": "Which MLB team has the most World Series titles?",
      "correct_answer": "New York Yankees",
      "incorrect_answers": ["Boston Red Sox", "Los Angeles Dodgers", "St. Louis Cardinals"],
      "difficulty": "medium"
    },
    {
      "question": "What team did Wayne Gretzky play for when he scored his 894th career NHL goal?",
      "correct_answer": "New York Rangers",
      "incorrect_answers": ["Edmonton Oilers", "Los Angeles Kings", "St. Louis Blues"],
      "difficulty": "medium"
    },
    {
      "question": "Who led the NBA in points per game during the 2023–24 season?",
      "correct_answer": "Luka Dončić",
      "incorrect_answers": ["Joel Embiid", "Stephen Curry", "Jayson Tatum"],
      "difficulty": "medium"
    },
    {
      "question": "Which country hosted the 2023 Women's World Cup?",
      "correct_answer": "Australia and New Zealand",
      "incorrect_answers": ["France", "Japan", "Canada"],
      "difficulty": "medium"
    },
    {
      "question": "Who holds the record for most career interceptions thrown in the NFL?",
      "correct_answer": "Brett Favre",
      "incorrect_answers": ["Peyton Manning", "Eli Manning", "Ben Roethlisberger"],
      "difficulty": "medium"
    },
    {
      "question": "Which player broke the NBA all-time scoring record in 2023?",
      "correct_answer": "LeBron James",
      "incorrect_answers": ["Kareem Abdul-Jabbar", "Kevin Durant", "Karl Malone"],
      "difficulty": "medium"
    },
    {
      "question": "Who won the 2023 Stanley Cup?",
      "correct_answer": "Vegas Golden Knights",
      "incorrect_answers": ["Florida Panthers", "Colorado Avalanche", "Tampa Bay Lightning"],
      "difficulty": "medium"
    },
    {
      "question": "Which baseball player won the 2023 AL MVP?",
      "correct_answer": "Shohei Ohtani",
      "incorrect_answers": ["Aaron Judge", "Yordan Alvarez", "Corey Seager"],
      "difficulty": "medium"
    },
    {
      "question": "Who managed Argentina to World Cup victory in 2022?",
      "correct_answer": "Lionel Scaloni",
      "incorrect_answers": ["Marcelo Bielsa", "Gerardo Martino", "Cesar Menotti"],
      "difficulty": "medium"
    },
    {
      "question": "Which NFL team drafted Patrick Mahomes?",
      "correct_answer": "Kansas City Chiefs",
      "incorrect_answers": ["Houston Texans", "Chicago Bears", "San Francisco 49ers"],
      "difficulty": "medium"
    },
    {
      "question": "Which MLB player is known for his 'home run trot' and massive power at-bats?",
      "correct_answer": "Aaron Judge",
      "incorrect_answers": ["Bryce Harper", "Juan Soto", "Mike Trout"],
      "difficulty": "medium"
    },
    {
      "question": "What position does Connor McDavid play in hockey?",
      "correct_answer": "Center",
      "incorrect_answers": ["Defense", "Winger", "Goalie"],
      "difficulty": "medium"
    },
    {
      "question": "Which team won the NBA Finals in 2022?",
      "correct_answer": "Golden State Warriors",
      "incorrect_answers": ["Boston Celtics", "Milwaukee Bucks", "Miami Heat"],
      "difficulty": "medium"
    },
    {
      "question": "Who is the all-time leader in assists in NBA history?",
      "correct_answer": "John Stockton",
      "incorrect_answers": ["Magic Johnson", "Steve Nash", "Chris Paul"],
      "difficulty": "medium"
    },
    {
      "question": "Which team won the FIFA Club World Cup in 2023?",
      "correct_answer": "Manchester City",
      "incorrect_answers": ["Real Madrid", "Flamengo", "Chelsea"],
      "difficulty": "medium"
    },
    {
      "question": "Which NFL player holds the record for most career receiving touchdowns?",
      "correct_answer": "Jerry Rice",
      "incorrect_answers": ["Randy Moss", "Terrell Owens", "Larry Fitzgerald"],
      "difficulty": "medium"
    },
    {
      "question": "Who was the 2023 NBA Rookie of the Year?",
      "correct_answer": "Paolo Banchero",
      "incorrect_answers": ["Jabari Smith Jr.", "Keegan Murray", "Jalen Williams"],
      "difficulty": "medium"
    },
    {
      "question": "Which country won the 2023 CONCACAF Gold Cup?",
      "correct_answer": "Mexico",
      "incorrect_answers": ["USA", "Canada", "Costa Rica"],
      "difficulty": "medium"
    },
    {
      "question": "Who hit the most home runs in the 2023 MLB season?",
      "correct_answer": "Matt Olson",
      "incorrect_answers": ["Shohei Ohtani", "Pete Alonso", "Aaron Judge"],
      "difficulty": "medium"
    },
    {
      "question": "Which NHL team moved to Utah in 2024?",
      "correct_answer": "Arizona Coyotes",
      "incorrect_answers": ["Columbus Blue Jackets", "Calgary Flames", "San Jose Sharks"],
      "difficulty": "medium"
    },
    {
      "question": "Which NBA player became the all-time leader in three-pointers made?",
      "correct_answer": "Stephen Curry",
      "incorrect_answers": ["Ray Allen", "James Harden", "Reggie Miller"],
      "difficulty": "medium"
    },
    {
      "question": "Which football player was known as 'Megatron'?",
      "correct_answer": "Calvin Johnson",
      "incorrect_answers": ["Julio Jones", "Dez Bryant", "Odell Beckham Jr."],
      "difficulty": "medium"
    },
    {
      "question": "Which soccer player has the most international goals?",
      "correct_answer": "Cristiano Ronaldo",
      "incorrect_answers": ["Lionel Messi", "Ali Daei", "Neymar"],
      "difficulty": "medium"
    },
    {
      "question": "Which MLB team won the 2023 World Series?",
      "correct_answer": "Texas Rangers",
      "incorrect_answers": ["Houston Astros", "Philadelphia Phillies", "Arizona Diamondbacks"],
      "difficulty": "medium"
    },
    {
      "question": "Which NFL stadium is known as 'Lambeau Field'?",
      "correct_answer": "Green Bay Packers",
      "incorrect_answers": ["Chicago Bears", "Buffalo Bills", "Minnesota Vikings"],
      "difficulty": "medium"
    },
    {
      "question": "Which country hosted the 2022 FIFA World Cup?",
      "correct_answer": "Qatar",
      "incorrect_answers": ["Russia", "Brazil", "Germany"],
      "difficulty": "medium"
    },
    {
      "question": "Which NBA player won Finals MVP in 2023?",
      "correct_answer": "Nikola Jokic",
      "incorrect_answers": ["Jimmy Butler", "Jamal Murray", "Giannis Antetokounmpo"],
      "difficulty": "medium"
    },
    {
      "question": "Which NHL team has the most Stanley Cup wins?",
      "correct_answer": "Montreal Canadiens",
      "incorrect_answers": ["Toronto Maple Leafs", "Detroit Red Wings", "Boston Bruins"],
      "difficulty": "medium"
    },


      // Hard questions



        {
          "question": "Who was the first player in NBA history to record a triple-double without missing a shot or free throw?",
          "correct_answer": "Nikola Jokic",
          "incorrect_answers": ["Wilt Chamberlain", "LeBron James", "Chris Paul"],
          "difficulty": "hard"
        },
        {
          "question": "Who was the first player in NBA history to record a 60-point triple-double?",
          "correct_answer": "Luka Dončić",
          "incorrect_answers": ["James Harden", "Russell Westbrook", "Kobe Bryant"],
          "difficulty": "hard"
        },
        {
          "question": "Which NFL player has the most career sacks since the stat became official in 1982?",
          "correct_answer": "Bruce Smith",
          "incorrect_answers": ["Reggie White", "Kevin Greene", "Michael Strahan"],
          "difficulty": "hard"
        },
        {
          "question": "Which country won the first ever FIFA World Cup in 1930?",
          "correct_answer": "Uruguay",
          "incorrect_answers": ["Brazil", "Germany", "Argentina"],
          "difficulty": "hard"
        },
        {
          "question": "Who is the only MLB player to have a 40–40 season (40 HRs and 40 stolen bases) twice?",
          "correct_answer": "Nobody",
          "incorrect_answers": ["Barry Bonds", "Alex Rodriguez", "Jose Canseco"],
          "difficulty": "hard"
        },
        {
          "question": "Which hockey player holds the record for most career points in the Stanley Cup Playoffs?",
          "correct_answer": "Wayne Gretzky",
          "incorrect_answers": ["Mark Messier", "Jaromir Jagr", "Sidney Crosby"],
          "difficulty": "hard"
        },
        {
          "question": "Who was the first soccer player to win 5 Ballon d'Or awards?",
          "correct_answer": "Lionel Messi",
          "incorrect_answers": ["Cristiano Ronaldo", "Michel Platini", "Zinedine Zidane"],
          "difficulty": "hard"
        },
        {
          "question": "Which pitcher holds the record for most career no-hitters in MLB?",
          "correct_answer": "Nolan Ryan",
          "incorrect_answers": ["Sandy Koufax", "Randy Johnson", "Roger Clemens"],
          "difficulty": "hard"
        },
        {
          "question": "Which NBA player has the most career triple-doubles?",
          "correct_answer": "Russell Westbrook",
          "incorrect_answers": ["Oscar Robertson", "LeBron James", "Magic Johnson"],
          "difficulty": "hard"
        },
        {
          "question": "Who was the youngest NHL player to reach 1,000 career points?",
          "correct_answer": "Wayne Gretzky",
          "incorrect_answers": ["Mario Lemieux", "Sidney Crosby", "Connor McDavid"],
          "difficulty": "hard"
        },
        {
          "question": "Which national soccer team has appeared in the most FIFA World Cup finals?",
          "correct_answer": "Germany",
          "incorrect_answers": ["Brazil", "Italy", "Argentina"],
          "difficulty": "hard"
        },
        {
          "question": "Who was the first player in NFL history to rush for over 2,000 yards in a single season?",
          "correct_answer": "O.J. Simpson",
          "incorrect_answers": ["Eric Dickerson", "Barry Sanders", "Adrian Peterson"],
          "difficulty": "hard"
        },
        {
          "question": "Which MLB team lost the most games in a single season?",
          "correct_answer": "New York Mets (1962)",
          "incorrect_answers": ["Detroit Tigers (2003)", "Philadelphia Phillies (1941)", "Baltimore Orioles (2018)"],
          "difficulty": "hard"
        },
        {
          "question": "Which NBA player had the longest suspension for an on-court incident?",
          "correct_answer": "Ron Artest",
          "incorrect_answers": ["Draymond Green", "Dennis Rodman", "Latrell Sprewell"],
          "difficulty": "hard"
        },
        {
          "question": "Which football team was the first to win six Super Bowls?",
          "correct_answer": "Pittsburgh Steelers",
          "incorrect_answers": ["New England Patriots", "San Francisco 49ers", "Dallas Cowboys"],
          "difficulty": "hard"
        },
        {
          "question": "Which soccer club has the most UEFA Champions League titles?",
          "correct_answer": "Real Madrid",
          "incorrect_answers": ["AC Milan", "Liverpool", "Barcelona"],
          "difficulty": "hard"
        },
        {
          "question": "Which NHL goalie has the most wins in league history?",
          "correct_answer": "Martin Brodeur",
          "incorrect_answers": ["Patrick Roy", "Marc-André Fleury", "Dominik Hasek"],
          "difficulty": "hard"
        },
        {
          "question": "Which player won the NBA Defensive Player of the Year award 4 times?",
          "correct_answer": "Ben Wallace",
          "incorrect_answers": ["Dennis Rodman", "Dwight Howard", "Dikembe Mutombo"],
          "difficulty": "hard"
        },
        {
          "question": "Who is the only MLB player to hit a walk-off home run to win Game 7 of a World Series?",
          "correct_answer": "Bill Mazeroski",
          "incorrect_answers": ["Joe Carter", "Kirk Gibson", "Reggie Jackson"],
          "difficulty": "hard"
        },
        {
          "question": "Which country has won the most Olympic gold medals in hockey?",
          "correct_answer": "Canada",
          "incorrect_answers": ["Soviet Union", "USA", "Sweden"],
          "difficulty": "hard"
        },
        {
          "question": "Which NBA player averaged a triple-double for a full season more than once?",
          "correct_answer": "Russell Westbrook",
          "incorrect_answers": ["Oscar Robertson", "Nikola Jokic", "James Harden"],
          "difficulty": "hard"
        },
        {
          "question": "Which NFL team had a perfect season including the playoffs?",
          "correct_answer": "Miami Dolphins (1972)",
          "incorrect_answers": ["New England Patriots (2007)", "Pittsburgh Steelers (1978)", "San Francisco 49ers (1984)"],
          "difficulty": "hard"
        },
        {
          "question": "Who was the first African-American head coach to win a Super Bowl?",
          "correct_answer": "Tony Dungy",
          "incorrect_answers": ["Lovie Smith", "Herm Edwards", "Dennis Green"],
          "difficulty": "hard"
        },
        {
          "question": "Which soccer player has the most goals in a single UEFA Champions League season?",
          "correct_answer": "Cristiano Ronaldo",
          "incorrect_answers": ["Lionel Messi", "Robert Lewandowski", "Karim Benzema"],
          "difficulty": "hard"
        },
        {
          "question": "Which MLB team was the first to integrate with a Black player?",
          "correct_answer": "Brooklyn Dodgers",
          "incorrect_answers": ["New York Yankees", "Boston Red Sox", "Chicago Cubs"],
          "difficulty": "hard"
        },
        {
          "question": "Which goalie won the most Vezina Trophies in NHL history?",
          "correct_answer": "Jacques Plante",
          "incorrect_answers": ["Patrick Roy", "Dominik Hasek", "Martin Brodeur"],
          "difficulty": "hard"
        },
        {
          "question": "Who is the only NBA player to win MVP, Finals MVP, and All-Star MVP in the same season?",
          "correct_answer": "Michael Jordan",
          "incorrect_answers": ["Shaquille O'Neal", "LeBron James", "Stephen Curry"],
          "difficulty": "hard"
        },
        {
          "question": "Which NFL player won the most Super Bowl MVP awards?",
          "correct_answer": "Tom Brady",
          "incorrect_answers": ["Joe Montana", "Terry Bradshaw", "Roger Staubach"],
          "difficulty": "hard"
        },
        {
          "question": "Which MLB team was the last to win their first World Series?",
          "correct_answer": "Texas Rangers",
          "incorrect_answers": ["Arizona Diamondbacks", "San Diego Padres", "Seattle Mariners"],
          "difficulty": "hard"
        },
        {
          "question": "Which country hosted the first ever Olympic hockey tournament?",
          "correct_answer": "Belgium",
          "incorrect_answers": ["Canada", "Switzerland", "USA"],
          "difficulty": "hard"
        },
        {
          "question": "Which football player had the longest touchdown run in Super Bowl history?",
          "correct_answer": "Willie Parker",
          "incorrect_answers": ["Terrell Davis", "Emmitt Smith", "James White"],
          "difficulty": "hard"
        },    
        {
          "question": "Which country was the first to win the FIFA World Cup twice?",
          "correct_answer": "Italy",
          "incorrect_answers": ["Brazil", "Germany", "Uruguay"],
          "difficulty": "hard"
        },
        {
          "question": "Who holds the record for most stolen bases in a single MLB season?",
          "correct_answer": "Rickey Henderson",
          "incorrect_answers": ["Lou Brock", "Vince Coleman", "Ty Cobb"],
          "difficulty": "hard"
        },
        {
          "question": "Which NHL goalie has the most career wins in the regular season?",
          "correct_answer": "Martin Brodeur",
          "incorrect_answers": ["Patrick Roy", "Marc-André Fleury", "Dominik Hasek"],
          "difficulty": "hard"
        },
        {
          "question": "Which NFL team was the first to go a full regular season undefeated and win the Super Bowl?",
          "correct_answer": "Miami Dolphins",
          "incorrect_answers": ["New England Patriots", "San Francisco 49ers", "Dallas Cowboys"],
          "difficulty": "hard"
        },
        {
          "question": "What team did Lionel Messi score his first professional goal against?",
          "correct_answer": "Albacete",
          "incorrect_answers": ["Getafe", "Real Madrid", "Espanyol"],
          "difficulty": "hard"
        },
        {
          "question": "Who was the first NBA player to score 70 points in a game in the 21st century?",
          "correct_answer": "Devin Booker",
          "incorrect_answers": ["Kobe Bryant", "Stephen Curry", "Kevin Durant"],
          "difficulty": "hard"
        },
        {
          "question": "Which MLB team did Nolan Ryan throw his 7th no-hitter against?",
          "correct_answer": "Toronto Blue Jays",
          "incorrect_answers": ["Baltimore Orioles", "Boston Red Sox", "Detroit Tigers"],
          "difficulty": "hard"
        },
        {
          "question": "Which player scored the fastest hat trick in Premier League history?",
          "correct_answer": "Sadio Mané",
          "incorrect_answers": ["Cristiano Ronaldo", "Thierry Henry", "Mohamed Salah"],
          "difficulty": "hard"
        },
        {
          "question": "Which hockey team won the first Stanley Cup in 1917?",
          "correct_answer": "Seattle Metropolitans",
          "incorrect_answers": ["Toronto Arenas", "Montreal Canadiens", "Ottawa Senators"],
          "difficulty": "hard"
        },
        {
          "question": "What year was the NBA founded?",
          "correct_answer": "1946",
          "incorrect_answers": ["1949", "1950", "1939"],
          "difficulty": "hard"
        },
        {
          "question": "Who was the first overall pick in the 1984 NBA Draft?",
          "correct_answer": "Hakeem Olajuwon",
          "incorrect_answers": ["Michael Jordan", "Charles Barkley", "Sam Bowie"],
          "difficulty": "hard"
        },
        {
          "question": "Which NFL player holds the record for most career fumbles?",
          "correct_answer": "Brett Favre",
          "incorrect_answers": ["Eli Manning", "Tony Romo", "Michael Vick"],
          "difficulty": "hard"
        },
        {
          "question": "Which baseball stadium has the deepest center field in MLB history?",
          "correct_answer": "Polo Grounds",
          "incorrect_answers": ["Yankee Stadium", "Fenway Park", "Tiger Stadium"],
          "difficulty": "hard"
        },
        {
          "question": "Who was the top scorer of the 2014 FIFA World Cup?",
          "correct_answer": "James Rodríguez",
          "incorrect_answers": ["Lionel Messi", "Thomas Müller", "Neymar"],
          "difficulty": "hard"
        },
        {
          "question": "Which NHL player holds the record for most goals in a single season?",
          "correct_answer": "Wayne Gretzky",
          "incorrect_answers": ["Brett Hull", "Mario Lemieux", "Alex Ovechkin"],
          "difficulty": "hard"
        },
        {
          "question": "Who was the first African American coach to win a Super Bowl?",
          "correct_answer": "Tony Dungy",
          "incorrect_answers": ["Mike Tomlin", "Dennis Green", "Lovie Smith"],
          "difficulty": "hard"
        },
        {
          "question": "Which club won the UEFA Champions League in 2004?",
          "correct_answer": "Porto",
          "incorrect_answers": ["AC Milan", "Real Madrid", "Chelsea"],
          "difficulty": "hard"
        },
        {
          "question": "What baseball player was nicknamed 'The Say Hey Kid'?",
          "correct_answer": "Willie Mays",
          "incorrect_answers": ["Hank Aaron", "Jackie Robinson", "Joe DiMaggio"],
          "difficulty": "hard"
        },
        {
          "question": "Which NHL player scored the most goals in a single playoff run?",
          "correct_answer": "Reggie Leach",
          "incorrect_answers": ["Wayne Gretzky", "Mario Lemieux", "Jaromir Jagr"],
          "difficulty": "hard"
        },
        {
          "question": "Which soccer team has the most UEFA Europa League titles?",
          "correct_answer": "Sevilla FC",
          "incorrect_answers": ["Inter Milan", "Liverpool", "Juventus"],
          "difficulty": "hard"
        },
        {
          "question": "Who is the only player to win NBA MVP, Coach of the Year, and Executive of the Year?",
          "correct_answer": "Larry Bird",
          "incorrect_answers": ["Phil Jackson", "Pat Riley", "Michael Jordan"],
          "difficulty": "hard"
        },
        {
          "question": "Who was the first player to reach 600 home runs in MLB history?",
          "correct_answer": "Babe Ruth",
          "incorrect_answers": ["Hank Aaron", "Willie Mays", "Barry Bonds"],
          "difficulty": "hard"
        },
        {
          "question": "Which team did the USA beat in the 'Miracle on Ice' in the 1980 Winter Olympics?",
          "correct_answer": "Soviet Union",
          "incorrect_answers": ["Canada", "Sweden", "Czechoslovakia"],
          "difficulty": "hard"
        },
        {
          "question": "Who is the only player in NBA history to average a triple-double in four different seasons?",
          "correct_answer": "Russell Westbrook",
          "incorrect_answers": ["Oscar Robertson", "Magic Johnson", "Jason Kidd"],
          "difficulty": "hard"
        },
        {
          "question": "Which team did Cristiano Ronaldo debut against in the Premier League?",
          "correct_answer": "Bolton Wanderers",
          "incorrect_answers": ["Chelsea", "Arsenal", "Leeds United"],
          "difficulty": "hard"
        },
        {
          "question": "Who was the first designated hitter in MLB history?",
          "correct_answer": "Ron Blomberg",
          "incorrect_answers": ["David Ortiz", "Reggie Jackson", "Harold Baines"],
          "difficulty": "hard"
        },
        {
          "question": "Who holds the record for most receiving yards in a single NFL season?",
          "correct_answer": "Calvin Johnson",
          "incorrect_answers": ["Jerry Rice", "Cooper Kupp", "Randy Moss"],
          "difficulty": "hard"
        },
        {
          "question": "Which goalkeeper has the most clean sheets in Premier League history?",
          "correct_answer": "Petr Čech",
          "incorrect_answers": ["David de Gea", "Edwin van der Sar", "Alisson Becker"],
          "difficulty": "hard"
        },
        {
          "question": "Which baseball team was the last to integrate African American players?",
          "correct_answer": "Boston Red Sox",
          "incorrect_answers": ["Philadelphia Phillies", "St. Louis Cardinals", "New York Yankees"],
          "difficulty": "hard"
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