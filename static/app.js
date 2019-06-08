console.log('fired');

var turn;

var Players = [];

var maxRounds = 5;
var currentRound = 0;

var currentMood = "Sad";

var sentence = [];



document.querySelector('#start').onclick = function() {

    //Hide the selector and render other elements in html
    newGame();
    gameLoop();

  };

function gameLoop(){
  while(true){
  currentMood = getMood();
  let wordList = watsonWords();

  let sentence = speech_to_text(); //Assume it returns a string

  let score = checkIfValid(sentence,wordList);

  processScore(turn,score);


  turn = nextTurn(turn);
  if(currentRound == maxRounds)
    break;
  }
}


 function newGame(){
    let playerCount = document.querySelector("#playerCount").value
    Players = []
    for(let i = 0; i < playerCount;++i ){
      Players.push(0);
    }
    turn = 0;
 }



 function speech_to_text(){
  // fetch('/api/speech-to-text/token')
    //   .then(function(response) {
    //     return response.text();
    //   })
    //   .then(function(token) {
    //     var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({ // eslint-disable-line
    //       token: token, // use `access_token` as the parameter name if using an RC service
    //       outputElement: '#output' // CSS selector or DOM Element
    //     });
  
    //     stream.on('error', function(err) {
    //       console.log(err);
    //     });

    //     stream.on('data', data => {

    //     })
  
    //     document.querySelector('#stop').onclick = function() {
    //       stream.stop();
    //     };
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    //Idk what else to do here

    return string = ""; //Returns a string 
 }

 function watsonWords(){
    //Return an array of words 

    return ["Dies","Man","Iron"]
 }

 function getMood(){
  return "happy"
   //API call returns the mood
 }

 function sendToWatson(sentence,mood){


  //Api call to watson

  //How will watson return a result



  return score;
 }

 function processScore(turn,score){
    Players[turn] += score;
 }

 function nextTurn(currentTurn){
    currentTurn = ++currentTurn % Players.length;
    if(!currentTurn){
      currentRound++;
    }
    if(currentRound >= maxRounds){
      endGame();
    }
    return currentTurn;
 }

 function endGame(){
    //How do we want to end the game @Jack
    console.log("End Game")
 }

function checkIfValid (sentence,wordList) {
  for(let i = 0; i < wordList.length; i++){
    if(!sentence.includes(wordList[i]))
      return 0;
  }

  return sendToWatson(sentence,mood);
}