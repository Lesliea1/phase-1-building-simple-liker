// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
 const heart = document.querySelector ('.like')
 heart.addEventListener('click', function() {
  mimicServerCall()
  .then(function(response){
    if (heart.classList.contains('activated-heart')) {
      heart.classList.remove('activated-heart');
    }
  })


    .catch(function(error) {
      errorModal.classList.remove('hidden');
      const errorMessage = errorModal.querySelector('p');
      errorMessage.textContent = error;
      setTimeout(function() {
        errorModal.classList.add('hidden');
     }, 3000)
    });
 });


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
