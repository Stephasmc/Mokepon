//GLOBAL VARIABLE
const cardsContainer = document.getElementById('cards-container')

const sectionResetGame = document.getElementById('reset-game')
const sectionChoseAtack = document.getElementById('chose-atack')
const buttonCardPlayer = document.getElementById('button-card')
const buttonClaws = document.getElementById('claws-button')
const buttonLash = document.getElementById('lash-button')
const buttonClash = document.getElementById('clash-button')
const buttonReset = document.getElementById('button-reset')

const sectionChoseCard = document.getElementById('chose-clow-card')
const inputTheteddy = document.getElementById('teddy')
const inputTheFluffy = document.getElementById('fluffy')
const inputTheBuckbeak = document.getElementById('buckbeak')
const spanCardPlayer = document.getElementById('card-player')

const spanCardEnemy = document.getElementById('card-enemy')

const spanLifePlayer = document.getElementById('life-player')
const spanLifeEnemy = document.getElementById('life-enemy')

const sectionMessage = document.getElementById('result')
const playerAtackMessage = document.getElementById('player-atack')
const enemyAtackMessage = document.getElementById('enemy-atack')

let mokepones = []
let playerAtack
let enemyAtack
let beastOption
let lifePlayer =3
let lifeEnemy = 3

//CLASES
class Mokepon {
    //metodo constructor method
    constructor(name, picture, life) {
        this.name = name
        this.picture = picture
        this.life = life
        this.atacks = []
    }
}
//create a new objecto from the class Mokepon and atacks
let teddy = new Mokepon('Teddy', './assest/Teddy.png', 3)
let fluffy = new Mokepon('Fluffy', './assest/Fluffy.png', 3)
let buckbeak = new Mokepon('Buckbeak', './assest/Buckbeak.png', 3)

teddy.atacks.push(
    { name: '🪨', id:'claws-button'},
    { name: '🔥', id:'lash-button'},
    { name: '💫', id:'clash-button'}
)
fluffy.atacks.push(
    { name: '🪨', id:'claws-button'},
    { name: '🔥', id:'lash-button'},
    { name: '💫', id:'clash-button'}
)
buckbeak.atacks.push(
    { name: '🪨', id:'claws-button'},
    { name: '🔥', id:'lash-button'},
    { name: '💫', id:'clash-button'}
)

mokepones.push(teddy, fluffy, buckbeak)

// FUNCTIONS
function startGame() {
    //Hide sections
    sectionChoseAtack.style.display = 'none'
    sectionResetGame.style.display = 'none'

    mokepones.forEach((Mokepon) => {
        beastOption = `
            <input type="radio" name="mascota" id=${Mokepon.name}/>
            <label class="clow-legend-card" for=${Mokepon.name}>
                <p>${Mokepon.name}</p>
                <img src=${Mokepon.picture} alt="${Mokepon.name}">
            </label>
        `
        cardsContainer.innerHTML +=  beastOption
    }) 

    //Start Game
    buttonCardPlayer.addEventListener('click', choseCardPlayer)

    //Chose Atack
    buttonClaws.addEventListener('click',clawsAtack)
    buttonLash.addEventListener('click',lashAtack)
    buttonClash.addEventListener('click',clashAtack)

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
        spanCardPlayer.innerHTML = ' Teddy'
        cardName.innerHTML = ' Teddy'
        playercardName.appendChild(cardName)
        playerCardImage.innerHTML = '<img src="./assest/Teddy.png" alt=" Teddy">';
    }else if (inputTheFluffy.checked) {
        spanCardPlayer.innerHTML = 'Fluffy'
        cardName.innerHTML = 'Fluffy'
        playercardName.appendChild(cardName)
        playerCardImage.innerHTML = '<img src="./assest/Fluffy.png" alt="Fluffy">';
    } else if (inputTheBuckbeak.checked) {
        spanCardPlayer.innerHTML = 'Buckbeak'
        cardName.innerHTML = 'Buckbeak'
        playercardName.appendChild(cardName)
        playerCardImage.innerHTML = '<img src="./assest/Buckbeak.png" alt="Buckbeak">';
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
    let enemyCardImage = document.getElementById('enemy-card-image');

    // Insert IMG and text
    let enemycardName = document.getElementById('enemy-card-name')
    let cardName2 = document.createElement('p')

    if (randomCard == 1){
        spanCardEnemy.innerHTML = ' Teddy'
        cardName2.innerHTML = ' Teddy'
        enemycardName.appendChild(cardName2)
        enemyCardImage.innerHTML = '<img src="./assest/Teddy.png" alt=" Teddy">';
    } else if (randomCard == 2){
        spanCardEnemy.innerHTML = 'Fluffy'
        cardName2.innerHTML = 'Fluffy'
        enemycardName.appendChild(cardName2)
        enemyCardImage.innerHTML = '<img src="./assest/Fluffy.png" alt="Fluffy">';
    } else {
        spanCardEnemy.innerHTML = 'Buckbeak'
        cardName2.innerHTML = 'Buckbeak'
        enemycardName.appendChild(cardName2)
        enemyCardImage.innerHTML = '<img src="./assest/Buckbeak.png" alt="Buckbeak">';
    }
}

function clawsAtack() {
    playerAtack = 'Garras de Acero'
    enemyRandomAtack()
}
function lashAtack() {
    playerAtack = 'Azote Infernal'
    enemyRandomAtack()
}
function clashAtack() {
    playerAtack = 'Choque Sísmico'
    enemyRandomAtack()
}

function enemyRandomAtack() {
    let randomAtack = randomEnemyCard(1,3)

    if (randomAtack == 1) {
        enemyAtack = 'Garras de Acero'
    } else if (randomAtack == 2) {
        enemyAtack = 'Azote Infernal'
    }else {
        enemyAtack = 'Choque Sísmico'
    }

    combat()
}

function combat() {
    if (playerAtack == enemyAtack){
        createMessage("🥳<br>EMPATE")
    } else if ((playerAtack == 'Garras de Acero' && enemyAtack == 'Choque Sísmico') || (playerAtack == 'Azote Infernal' && enemyAtack == 'Garras de Acero') || (playerAtack == 'Choque Sísmico' && enemyAtack == 'Azote Infernal')){
        createMessage("💐<br>You WIN!")
        lifeEnemy--
        spanLifeEnemy.innerHTML = lifeEnemy
    } else {
        createMessage("💔<br>YOU LOSE!")
        lifePlayer--
        spanLifePlayer.innerHTML = lifePlayer
    }

    checkLife()
}

function checkLife() {
    if (lifeEnemy == 0){
        createFinalMessage("CONGRATULATIONS!<br>you WIN the Final Battle<br>🥳")
    } else if (lifePlayer == 0){
        createFinalMessage("WHAT A PITY!<br>You LOSE the Final Battle<br>😭")
    }
}

function createMessage(battleResult) {
    let newPlayerAtack = document.createElement('p')
    let newEnemyAtack = document.createElement('p')

    sectionMessage.innerHTML = battleResult
    newPlayerAtack.innerHTML = playerAtack
    newEnemyAtack.innerHTML = enemyAtack

    playerAtackMessage.appendChild(newPlayerAtack)
    enemyAtackMessage.appendChild(newEnemyAtack)
}

function createFinalMessage(finalResult) {
    sectionMessage.innerHTML = finalResult

    buttonClaws.disabled = true
    buttonLash.disabled = true
    buttonClash.disabled = true

    sectionResetGame.style.display = 'block'
}

function resetGame() {
    //JS function to reload the page
    location.reload(true)
}


//FUNCIONALITIES
window.addEventListener('load', startGame)