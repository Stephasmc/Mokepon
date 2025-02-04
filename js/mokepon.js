//GLOBAL VARIABLE
const cardsContainer = document.getElementById('cards-container')
const sectionResetGame = document.getElementById('reset-game')
const sectionChoseAtack = document.getElementById('chose-atack')
const buttonCardPlayer = document.getElementById('button-card')

const sectionChoseCard = document.getElementById('chose-fantastic-card')
const spanCardPlayer = document.getElementById('card-player')
const spanCardEnemy = document.getElementById('card-enemy')
const spanLifePlayer = document.getElementById('life-player')
const spanLifeEnemy = document.getElementById('life-enemy')

const sectionMessage = document.getElementById('result')
const playerAtackMessage = document.getElementById('player-atack')
const enemyAtackMessage = document.getElementById('enemy-atack')

let atackButtonContainer = document.getElementById('atack-button-container')
let buttonReset = document.getElementById('button-reset')

let mokepones = []
let enemyAtack = []
let beastOption

let inputTheteddy
let inputTheFluffy
let inputTheBuckbeak

let cardPlayer
let cardAtack
let cardAtackEnemy

let buttonTeddyOne
let buttonTeddyTwo
let buttonTeddyThree
let buttonFluffyOne
let buttonFluffyTwo
let buttonFluffyThree
let buttonBuckbeakOne
let buttonBuckbeakTwo
let buttonBuckbeakThree

let playerAtackIndex 
let enemyAtackIndex

let buttons = []
let playerAtack = []
let enemyAtackbutton = []
let currentRound = 0;

let lifePlayer = 0
let lifeEnemy = 0

//CLASES
class Mokepon {
    //metodo constructor method
    constructor(name, picture, victories) {
        this.name = name
        this.picture = picture
        this.victories = victories
        this.atacks = []
    }
}
//create a new objecto from the class Mokepon and atacks
let teddy = new Mokepon('Teddy', './assets/Teddy.png', 0)
let fluffy = new Mokepon('Fluffy', './assets/Fluffy.png', 0)
let buckbeak = new Mokepon('Buckbeak', './assets/Buckbeak.png', 0)

teddy.atacks.push(
    { name: '🌀 Dark Vortex', id:'teddyOne-button'},
    { name: '🌠 Shooting Star', id:'teddyTwo-button'},
    { name: '💫Shell Shock', id:'teddyThree-button'}
)
fluffy.atacks.push(
    { name: '🐯 Thunderclaw', id:'fluffyOne-button'},
    { name: '💥 Inferno Blast', id:'fluffyTwo-button'},
    { name: '🔥 Blazing Fury', id:'fluffyThree-button'}
)
buckbeak.atacks.push(
    { name: '🍂 Sandstorm', id:'buckbeakOne-button'},
    { name: '🌊 Earthquake', id:'buckbeakTwo-button'},
    { name: '🌪️ Maelstrom', id:'buckbeakThree-button'}  
)

mokepones.push(teddy, fluffy, buckbeak)

// FUNCTIONS
function startGame() {
    //Hide sections
    sectionChoseAtack.style.display = 'none'
    sectionResetGame.style.display = 'none'

    mokepones.forEach((Mokepon) => {
        beastOption = `
            <input class="selected-card-color" type="radio" name="mascota" id="${Mokepon.name}"/>
        <label class="fantastic-legend-card" for="${Mokepon.name}">
            <p>${Mokepon.name}</p>
            <img src="${Mokepon.picture}" alt="${Mokepon.name}">
        </label>
        `
        cardsContainer.innerHTML +=  beastOption

        // Assign input elements after they exist in the DOM
        inputTheteddy = document.getElementById('Teddy');
        inputTheFluffy = document.getElementById('Fluffy');
        inputTheBuckbeak = document.getElementById('Buckbeak');
    }) 

    //Start Game
    buttonCardPlayer.addEventListener('click', choseCardPlayer)
    //action to reset Game
    buttonReset.addEventListener('click',resetGame)
}

function choseCardPlayer() {
    //show and hide sections    
    sectionChoseAtack.style.display = 'flex'
    sectionChoseCard.style.display = 'none'
    
    // Insert MG and text
    let playerCardImage = document.getElementById('player-card-image');
    let playercardName = document.getElementById('player-card-name')
    let cardName = document.createElement('p')

    if (inputTheteddy.checked) {
        spanCardPlayer.innerHTML = inputTheteddy.id
        cardPlayer = inputTheteddy.id
        cardName.innerHTML = inputTheteddy.id
        playercardName.appendChild(cardName)
        playerCardImage.innerHTML = '<img src="./assets/Teddy.png" alt=" Teddy">';
    }else if (inputTheFluffy.checked) {
        spanCardPlayer.innerHTML = inputTheFluffy.id
        cardPlayer = inputTheFluffy.id
        cardName.innerHTML = inputTheFluffy.id
        playercardName.appendChild(cardName)
        playerCardImage.innerHTML = '<img src="./assets/Fluffy.png" alt="Fluffy">';
    } else if (inputTheBuckbeak.checked) {
        spanCardPlayer.innerHTML = inputTheBuckbeak.id
        cardPlayer = inputTheBuckbeak.id
        cardName.innerHTML = inputTheBuckbeak.id
        playercardName.appendChild(cardName)
        playerCardImage.innerHTML = '<img src="./assets/Buckbeak.png" alt="Buckbeak">';
    } else {
        alert('You MUST choose a card')
    }    
    
    bringAtacks(cardPlayer)
    choseCardEnemy()
}

function bringAtacks(cardPlayer) {
    let atacks

    for (let i = 0; i < mokepones.length; i++) {
        if (cardPlayer === mokepones[i].name) {
            atacks = mokepones[i].atacks
        }
    }
    showAtacks(atacks)
}

function showAtacks(atacks) {

    atacks.forEach((atack) => {
        cardAtack = `
            <button id=${atack.id} class="atack-button BAtacks">${atack.name}</button>
        `
        atackButtonContainer.innerHTML += cardAtack
        })

        buttonTeddyOne = document.getElementById('teddyOne-button')
        buttonTeddyTwo = document.getElementById('teddyTwo-button')
        buttonTeddyThree = document.getElementById('teddyThree-button')

        buttonFluffyOne = document.getElementById('fluffyOne-button')
        buttonFluffyTwo = document.getElementById('fluffyTwo-button')
        buttonFluffyThree = document.getElementById('fluffyThree-button')

        buttonBuckbeakOne = document.getElementById('buckbeakOne-button')
        buttonBuckbeakTwo = document.getElementById('buckbeakTwo-button')
        buttonBuckbeakThree = document.getElementById('buckbeakThree-button')
        
        buttons = document.querySelectorAll('.BAtacks') //we use querySelectorAll to get all the elements, a class in this case is .BAtacks
}

function sequenceAtacks() {
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.textContent == '🌀 Dark Vortex') {
                playerAtack.push('🌀 Dark Vortex');
                console.log(playerAtack)
                button.style.background = 'rgba(138, 118, 228, 0.5)';
                button.style.color = 'rgba(138, 118, 228, 0.5)';
                button.disabled = true
            }else if (e.target.textContent == '🌠 Shooting Star') {
                playerAtack.push('🌠 Shooting Star');
                console.log(playerAtack)
                button.style.background = 'rgba(218, 158, 110, 0.5)';
                button.style.color = 'rgba(218, 158, 110, 0.5)';
                button.disabled = true
            }else if (e.target.textContent == '💫Shell Shock') {
                playerAtack.push('💫Shell Shock');
                console.log(playerAtack)
                button.style.background = 'rgba(157, 192, 101, 0.5)';
                button.style.color = 'rgba(157, 192, 101, 0.5)';
                button.disabled = true
            } else if (e.target.textContent == '🐯 Thunderclaw') {
                playerAtack.push('🐯 Thunderclaw');
                console.log(playerAtack)
                button.style.background = 'rgba(157, 192, 101, 0.5)';
                button.style.color = 'rgba(157, 192, 101, 0.5)';
                button.disabled = true
            } else if (e.target.textContent == '💥 Inferno Blast') {
                playerAtack.push('💥 Inferno Blast');
                console.log(playerAtack)
                button.style.background = 'rgba(138, 118, 228, 0.5)';
                button.style.color = 'rgba(138, 118, 228, 0.5)';
                button.disabled = true
            }else if (e.target.textContent == '🔥 Blazing Fury') {
                playerAtack.push('🔥 Blazing Fury');
                console.log(playerAtack)
                button.style.background = 'rgba(218, 158, 110, 0.5)';
                button.style.color = 'rgba(218, 158, 110, 0.5)';
                button.disabled = true
            } else if (e.target.textContent == '🍂 Sandstorm') {
                playerAtack.push('🍂 Sandstorm');
                console.log(playerAtack)
                button.style.background = 'rgba(218, 158, 110, 0.5)';
                button.style.color = 'rgba(218, 158, 110, 0.5)';
                button.disabled = true
            }else if (e.target.textContent == '🌊 Earthquake') {
                playerAtack.push('🌊 Earthquake');
                console.log(playerAtack)
                button.style.background = 'rgba(157, 192, 101, 0.5)';
                button.style.color = 'rgba(157, 192, 101, 0.5)';
                button.disabled = true
            }else if (e.target.textContent == '🌪️ Maelstrom') {
                playerAtack.push('🌪️ Maelstrom');
                console.log(playerAtack)
                button.style.background = 'rgba(138, 118, 228, 0.5)';
                button.style.color = 'rgba(138, 118, 228, 0.5)';
                button.disabled = true
            }
            enemyRandomAtack();
        })
    })
}
    

function randomEnemyCard(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function choseCardEnemy() {
    let randomCard = randomEnemyCard(0, mokepones.length -1)
    
    // Insert IMG and text
    let enemyCardImage = document.getElementById('enemy-card-image');
    let enemycardName = document.getElementById('enemy-card-name')
    let cardName2 = document.createElement('p')

    // Asigna el nombre y la imagen de acuerdo al objeto seleccionado
    spanCardEnemy.innerHTML = mokepones[randomCard].name;
    cardName2.innerHTML = mokepones[randomCard].name;
    enemycardName.appendChild(cardName2);
    enemyCardImage.innerHTML = `<img src="${mokepones[randomCard].picture}" alt="${mokepones[randomCard].name}">`;

    cardAtackEnemy = mokepones[randomCard].atacks

    sequenceAtacks()
}

function enemyRandomAtack() {
    let randomAtack = randomEnemyCard(0, cardAtackEnemy.length -1)

    if (randomAtack == 0 ) {
         enemyAtack.push(cardAtackEnemy[randomAtack].name);
    } else if (randomAtack == 1) {
        enemyAtack.push(cardAtackEnemy[randomAtack].name);
    }else {
         enemyAtack.push(cardAtackEnemy[randomAtack].name);
     }
    // console.log("Ataque enemigo seleccionado:", enemyAtack);

    startCombat()
}

function startCombat () {
    if (playerAtack.length === enemyAtack.length) {
        combat()
    }
}

function playersIndex(player, enemy) {
    playerAtackIndex = playerAtack[player]
    enemyAtackIndex = enemyAtack[enemy]
}

function combat() {

    if (currentRound < playerAtack.length) {
        let i = currentRound; // Solo procesamos la ronda actual
        playersIndex(i, i);

        if ((playerAtack[i] == '🌀 Dark Vortex' || playerAtack[i] == '💥 Inferno Blast' || playerAtack[i] == '🌪️ Maelstrom') && (enemyAtack[i] == '🌀 Dark Vortex' || enemyAtack[i] == '💥 Inferno Blast' || enemyAtack[i] == '🌪️ Maelstrom')) {
            createMessage("🥳<br>DRAW");
        } else if ((playerAtack[i] == '🌠 Shooting Star' || playerAtack[i] == '🔥 Blazing Fury' || playerAtack[i] == '🍂 Sandstorm') && (enemyAtack[i] == '🌠 Shooting Star' || enemyAtack[i] == '🔥 Blazing Fury' || enemyAtack[i] == '🍂 Sandstorm')) {
            createMessage("🥳<br>DRAW");
        } else if ((playerAtack[i] == '💫Shell Shock' || playerAtack[i] == '🐯 Thunderclaw' || playerAtack[i] == '🌊 Earthquake') && (enemyAtack[i] == '💫Shell Shock' || enemyAtack[i] == '🐯 Thunderclaw' || enemyAtack[i] == '🌊 Earthquake')) {
            createMessage("🥳<br>DRAW");
        } else if ((playerAtack[i] == '🌀 Dark Vortex' || playerAtack[i] == '💥 Inferno Blast' || playerAtack[i] == '🌪️ Maelstrom') && (enemyAtack[i] == '💫Shell Shock' || enemyAtack[i] == '🐯 Thunderclaw' || enemyAtack[i] == '🌊 Earthquake')) {
            createMessage("💐<br>You WIN!");
            lifePlayer++;
            spanLifePlayer.innerHTML = lifePlayer;
        } else if ((playerAtack[i] == '🌠 Shooting Star' || playerAtack[i] == '🔥 Blazing Fury' || playerAtack[i] == '🍂 Sandstorm') &&  (enemyAtack[i] == '🌀 Dark Vortex' || enemyAtack[i] == '💥 Inferno Blast' || enemyAtack[i] == '🌪️ Maelstrom')) {
            createMessage("💐<br>You WIN!");
            lifePlayer++;
            spanLifePlayer.innerHTML = lifePlayer;
        } else if ((playerAtack[i] == '💫Shell Shock' || playerAtack[i] == '🐯 Thunderclaw' || playerAtack[i] == '🌊 Earthquake') &&  (enemyAtack[i] == '🌠 Shooting Star' || enemyAtack[i] == '🔥 Blazing Fury' || enemyAtack[i] == '🍂 Sandstorm')) {
            createMessage("💐<br>You WIN!");
            lifePlayer++;
            spanLifePlayer.innerHTML = lifePlayer;
        } else {
            createMessage("💔<br>YOU LOSE!");
            lifeEnemy++;
            spanLifeEnemy.innerHTML = lifeEnemy;
        }
        currentRound++; // Avanza a la siguiente ronda
        console.log(currentRound)
        checkLife();
    }
}

function checkLife() {
    console.log(currentRound + '*')
    if (currentRound == 3){

        if (lifePlayer > lifeEnemy){
            createFinalMessage("CONGRATULATIONS!<br>you WIN the Final Battle<br>🥳")
        } else if (lifeEnemy > lifePlayer){
            createFinalMessage("WHAT A PITY!<br>You LOSE the Final Battle<br>😭")
        } else if (lifePlayer == lifeEnemy){
            createFinalMessage("DRAW!<br>Let's play again<br>😮")
        }
    }    
}

function createMessage(battleResult) {
    let newPlayerAtack = document.createElement('p')
    let newEnemyAtack = document.createElement('p')

    sectionMessage.innerHTML = battleResult
    newPlayerAtack.innerHTML = playerAtackIndex
    newEnemyAtack.innerHTML = enemyAtackIndex

    playerAtackMessage.appendChild(newPlayerAtack)
    enemyAtackMessage.appendChild(newEnemyAtack)
}

function createFinalMessage(finalResult) {
    sectionMessage.innerHTML = finalResult
    sectionResetGame.style.display = 'block'
}

function resetGame() {
    location.reload(true)
}

//FUNCIONALITIES
window.addEventListener('load', startGame)