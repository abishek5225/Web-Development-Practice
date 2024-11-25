let randomNumber = (parseInt(Math.random()* 50 + 1));

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guess-field')
const guessslot = document.querySelector('.guesses')
const remainig = document.querySelector('.lastResult')
const low_high = document.querySelector('.low-high')
const startover = document.querySelector('.result')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
      const guess =  parseInt(userInput.value)
      console.log(guess);
      validateGuess(guess)
    })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please enter a number")
  }
  else if(guess<1){
    alert("Your guess must be greater than zero");
  }
  else if(guess > 50){
  alert("The NUmber is greater then 50 ")
  }
  else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game over`)
      displayMessage(`Numbers was ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess == randomNumber){
    displayMessage(`Congratulation you won!`)
    endGame()
  }else if(guess< randomNumber){
    displayMessage("Guess higher Number")
  }
  else if(guess> randomNumber){
    displayMessage("Guess lower Number")
  }
}

function displayGuess(guess){
  userInput.value=''
  guessslot.innerHTML +=`${guess}\n,`
  numGuess++
  remainig.innerHTML=`${11-numGuess}`

}

function displayMessage(message){
  low_high.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Play Again</h2>`
    startover.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
  const newGameButton =document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber =(parseInt(Math.random()* 50 + 1))
    prevGuess = []
    numGuess =1
    guessslot.innerHTML= ''
    remainig.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute( 'disabled' )
    startover.removeChild(p)


    playGame = true
  })
}

