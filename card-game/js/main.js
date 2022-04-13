//Example fetch using pokemonapi.co

let deckID = 'g0lpth7os570'


fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)
  deckId = data.deck_id

})
.catch(err => {
    console.log(`error ${err}`)
});


document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){
   const url = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`

   fetch(url)
   .then(res => res.json()) // parse response as JSON
   .then(data => {
     console.log(data)
     document.querySelector('#player1').src = data.cards[0].image
     document.querySelector('#player2').src = data.cards[1].image
     let player1Val = convertToNum(data.cards[0].value)
     let player2Val = convertToNum(data.cards[1].value)
     if(player1Val > player2Val){
        document.querySelector('h3').innerText = 'Player 1 Wins'
     }else if(player1Val < player2Val){
        document.querySelector('h3').innerText = 'Player 2 Wins'
     }else{
        document.querySelector('h3').innerText = 'WAR'
     }
   
   })
   .catch(err => {
       console.log(`error ${err}`)
   });

}

function convertToNum(val){
   if(val === 'ACE'){
      return 14
   }else if(val === 'KING'){
      return 13
   }else if(val === 'QUEEN'){
      return 12
   }else if(val === 'JACK'){
      return 11

   }else{
      return Number(val)
   }
}

// shuffle deck when cards run out to get new deck ID
// https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
// enter that link into https://web.postman.co/workspace/My-Workspace~f80bf244-9baa-46f7-859b-02d37bcd497e/request/create?requestId=7b170a38-3a20-46c5-b472-2e409177e136
// that's how you get new deck ID