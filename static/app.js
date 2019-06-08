console.log('Firing');
let sentenceBuilder = ''
let totalPlayers = 2
let currentPlayer = 1  // index starts at 1
let currentRound = 0
const maxRounds = 5

const POSSIBLE_GOALS = ['Anger', 'Fear', 'Joy', 'Sadness', 'Analytical', 'Confident', 'Tentative']

newRound(currentRound)

$('#start').on('click', function() {
    fetch('/api/speech-to-text/token')
      .then(function(response) {
        return response.text();
      })
      .then(function(token) {
        var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({ // eslint-disable-line
          token: token, // use `access_token` as the parameter name if using an RC service
          outputElement: '#output' // CSS selector or DOM Element
        });
  
        stream.on('error', function(err) {
          console.log(err);
        });

        stream.on('data', data => {
            if (true) {
                firstSentenceCompleted(data)
            }
        })
  
        document.querySelector('#stop').onclick = function() {
          stream.stop();
        };
      })
      .catch(function(error) {
        console.log(error);
      });
  })

$('#next').on('click', nextPlayer)
// Function Declarations

function firstSentenceCompleted (data) {
  sentenceBuilder += data
  $('.story').text(sentenceBuilder)
  nextPlayer()
}

function nextPlayer() {
    if (currentPlayer + 1 >= totalPlayers) {
        currentRound += 1
        newRound(currentRound)
    }
    currentPlayer = (currentPlayer + 1) % totalPlayers
}

function newRound (round) {
    console.log('Starting round', currentRound, '/', maxRounds);
    $('.round-display').text(round)
    if (currentRound === 0) {
        // If First Round
    } else if (currentRound === maxRounds) {
        // If final round
    } else {

    }
}

function generateGoalPair () {
    // Generate a unique pair
    const pair = []
    const firstVal = getRandomValue(POSSIBLE_GOALS)
    pair.push(firstVal)
    if (POSSIBLE_GOALS.length >= 2) {
        let secondVal = getRandomValue(POSSIBLE_GOALS)
        while (firstVal === secondVal) {

        }
        pair.push(secondVal)
    }
    return pair
}

function getRandomValue(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function initMatch () {

}
