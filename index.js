const input = require("readline-sync");
let score = 0;

var questions = [
  {
    question: "It was rumour that Ponting had a spring in his bat in this World Cup match. Which game was it?\n",
    answer: "Aus vs Ind '03",
    options: ["Aus vs Ind '03", "Aus vs Pak '99", "Aus vs Pak '96", "Aus vs Eng '07"]
  },
  {
    question: "Who has the highest wickets in World Cups?\n",
    answer: "Glenn McGrath",
    options: ["Glenn McGrath", "Shane Warne", "Muttiah Murlitharan", "Anil Kumble"]
  },
  {
    question: "Ganguly took off his jersey in celebration. Where was it?\n",
    answer: "Lords, London",
    options: ["Lords, London", "the Gabba, Brisbane", "Wankhede, Mumbai", "Eden Gardens, Kolkata"]
  },
  {
    question: "Dhoni scored his highest innings against which team?\n",
    answer: "Sri Lanka",
    options: ["Sri Lanka", "Pakistan", "Australia", "Bangladesh"]
  },
  {
    question: "Who scored the first double century in ODIs?\n",
    answer: "Sachin Tendulkar",
    options: ["Sachin Tendulkar", "Virender Sehwag", "Rohit Sharma", "Chris Gayle"]
  },
  {
    question: "The only batsman to raise bat 5 times in an ODI match?\n",
    answer: "Rohit Sharma",
    options: ["Rohit Sharma", "Martin Guptill", "Virender Sehwag", "Brian Lara"]
  },
  {
    question: "Who's known as the Haryana Hurricane?\n",
    answer: "Kapil Dev",
    options: ["Kapil Dev", "Virender Sehwag", "Chetan Sharma", "Rajinder Amarnath"]
  },
  {
    question: "Who scored the first triple century in Test Matches playing for Indian Cricket Team?\n",
    answer: "Virender Sehwag",
    options: ["Sunil Gawaskar", "Rahul Dravid", "Sachin Tendulkar", "Virender Sehwag"]
  },
  {
    question: "Who scored the winning runs in World Cup 2011 finals?\n",
    answer: "Mahender Singh Dhoni",
    options: ["Mahender Singh Dhoni", "Gautam Gambhir", "Virat Kohli", "Yuvraj Singh"]
  },
  {
    question: "Who was the Player of the Series in the inaugral T20 World Cup 2007?\n",
    answer: "Shahid Afridi",
    options: ["Yuvraj Singh", "Mahender Singh Dhoni", "Irfan Pathan", "Shahid Afridi"]
  }
]

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function quiz() {
  for (let i = 0; i < questions.length; i++) {
    console.log("Q" + (i + 1) + " " + questions[i].question);
    
    let options = shuffle(questions[i].options);
    var opt_ans;
    
    for(let j = 0; j < 4; j++)
      {
        console.log(String.fromCharCode(65 + j) + ". " + options[j]);
        if(options[j] === questions[i].answer)
          opt_ans = j;
      }
    
    var ans = input.question("\nYour answer: ");
    
    if (ans.toUpperCase() === questions[i].answer.toUpperCase()) {
      score += 1;
      console.log("\nCorrect answer!");
    }
    else if(ans.toUpperCase() === String.fromCharCode(65 + opt_ans)){
      score += 1;
      console.log("\nCorrect answer!");
    }
    else if(ans == opt_ans + 1){
      score += 1;
      console.log("\nCorrect answer!");
    }
      
    else console.log("\nWrong answer!\nThe correct answer is " + questions[i].answer);
    console.log("Your current score is " + score);
    console.log("\n*****************************************************\n");
  }
}
var name = input.question("What is your name?\n");
console.log("\nWelcome, " + name + "!\nLet's play a quiz!\n\n***************************************************\n");

setTimeout(() => {
  console.clear();
  quiz();
  if (score > 5)
    console.log("You have won with a score of " + score);
  else
    console.log("Alas! Try again next time!!!")
}, 2000);
