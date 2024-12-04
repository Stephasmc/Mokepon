
// FUNCTIONS

function startGame() {
    let buttonCardPlayer = document.getElementById('button-card')
    buttonCardPlayer.addEventListener('click', selectCardPlayer)
}

function selectCardPlayer() {
    
    //Chose player's card
    let inputTheFirey = document.getElementById('firey')
    let inputTheEarthy = document.getElementById('earthy')
    let inputTheWatery = document.getElementById('watery')

    let spanCardPlayer = document.getElementById('card-player')

    if (inputTheFirey.checked) {
        spanCardPlayer.innerHTML = 'The Firey'
    } else if (inputTheEarthy.checked) {
        spanCardPlayer.innerHTML = 'The Earthy'
    }else if (inputTheWatery.checked) {
        spanCardPlayer.innerHTML = 'The Watery'
    } else {
        alert('You MUST choose a card')
    }    

    //Chose enemy's card
    choseCardEnemy()
}

function randomEnemyCard(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function choseCardEnemy() {

    let randomCard = randomEnemyCard(1,3)
    let spanCardEnemy = document.getElementById('card-enemy')

    if (randomCard == 1){
        spanCardEnemy.innerHTML = 'The Firey'
    } else if (randomCard == 2){
        spanCardEnemy.innerHTML = 'The Earthy'
    } else {
        spanCardEnemy.innerHTML = 'The Watery'
    }
}


//FUNCIONALITIES

window.addEventListener('load', startGame)

