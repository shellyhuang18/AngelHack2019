console.log('fired');
document.querySelector('#start').onclick = function() {
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

        })
  
        document.querySelector('#stop').onclick = function() {
          stream.stop();
        };
      })
      .catch(function(error) {
        console.log(error);
      });
  };