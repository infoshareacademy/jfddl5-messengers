function Card(front) {
    this.front = front
    this.visible = false
    this.complete = false
}

const newCardArray = function (newArrayLength) {
        return Array(newArrayLength).fill({}).map(function (item, index) {
        return new Card(index + 1)
        })
    }

function Game(selector, numberOfCards) {
    this.container = document.querySelector(selector)
    this.gameBoard = null
    this.scoreContainer = null
    this.timeIntervalId = null
    this.gameContainer = null
    this.deckOfCards = newCardArray(numberOfCards).concat(newCardArray(numberOfCards))
    
    this.time = 0
    this.numberOfCardsOnBoardSide = Math.sqrt(this.deckOfCards.length)
    this.cardDimension = (100 / this.numberOfCardsOnBoardSide) + '%'
    
    this.init()
}

Game.prototype.makeGameContainer = function () {
    const gameContainer = document.createElement('div')
    this.container.appendChild(gameContainer)
    gameContainer.className = 'gameContainer'
    this.gameContainer = gameContainer
}

Game.prototype.makeSingleButton = function(numberOfCards){
    const button = document.createElement('button')
    button.style.width = '100px'
    button.style.height = '30px'
    button.innerText = numberOfCards +' kart'
    button.addEventListener('click', () => {
    this.reinit(numberOfCards)
    this.gameContainer.querySelector('p').innerHTML = '0 sekund'
    clearInterval(this.timeIntervalId)
    })
    return button
}

Game.prototype.makeButtons = function () {
    const levelsContainer = document.createElement('div')

    const button1 = this.makeSingleButton(4)
    const button2 = this.makeSingleButton(16)
    const button3 = this.makeSingleButton(36)

    levelsContainer.appendChild(button1)
    levelsContainer.appendChild(button2)
    levelsContainer.appendChild(button3)
    
    this.gameContainer.appendChild(levelsContainer)
}

Game.prototype.init = function () {
    this.makeGameContainer()
    this.makeButtons()
    this.makeGameBoard()
    
    this.render()
    this.shuffle(this.deckOfCards)
    this.makeTimeDiv()
    this.renderRankingList()
}

Game.prototype.reinit = function(numberOfCards){
    this.deckOfCards = newCardArray(numberOfCards/2).concat(newCardArray(numberOfCards/2))
    this.shuffle(this.deckOfCards)
    this.numberOfCardsOnBoardSide = Math.sqrt(this.deckOfCards.length)
    this.cardDimension = (100 / this.numberOfCardsOnBoardSide) + '%'
    this.render()
}

Game.prototype.makeGameBoard = function () {
    const board = document.createElement('div')
    board.style.width = '70vh'
    board.style.height = '70vh'
    board.style.backgroundColor = 'yellow'
    board.style.display = 'flex'
    board.style.flexWrap = 'wrap'
    board.style.justifyContent = 'center'
    board.className = 'game-board'

    this.gameContainer.appendChild(board)
    this.gameBoard = board
}

Game.prototype.makeTimeDiv = function () {
    const divTimer = document.createElement('div')
    divTimer.style.height = '100px'
    divTimer.innerHTML = '<p>0 sekund</p>'
    this.gameContainer.appendChild(divTimer)
}

Game.prototype.renderTime = function () {
    this.gameContainer.querySelector('p').innerHTML = this.time + ' sekund'
}

Game.prototype.render = function () {
    this.gameBoard.innerHTML = ''

    this.deckOfCards.forEach((card, index) => {
        this.renderSingleCard(card, index)
    })
}

Game.prototype.renderSingleCard = function (card, index) {
    const cardElement = document.createElement('div')
    cardElement.style.width = this.cardDimension
    cardElement.style.height = this.cardDimension
    cardElement.style.backgroundColor = '#6b6bca'
    cardElement.style.border = '1px solid black'
    cardElement.style.boxSizing = 'border-box'
    cardElement.style.color = 'white'
    cardElement.style.fontSize = '5em'
    cardElement.style.textAlign = 'center'

    if (card.visible) {
        cardElement.innerText = card.front
    }

    if (card.complete) {
        cardElement.innerText = card.front
        cardElement.style.backgroundColor = 'green'
    }

    cardElement.addEventListener(
        'click',
        () => this.toggleCard(index)
        
    )

    this.gameBoard.appendChild(cardElement)
}

Game.prototype.getVisibleCards = function () {
    return this.deckOfCards.filter(
        card => card.complete === false && card.visible === true
    )
}

Game.prototype.toggleCard = function (index) {
    this.startCountingTime()

    

    if (this.getVisibleCards().length > 1) {
        this.hideVisibleCards()
    }

    this.makeVisibleCard(index)

    if (this.getVisibleCards().length > 1) {
        this.checkIfVisibleCardIsAMatch()
    }

    this.render()
    this.checkWin()

}

Game.prototype.checkWin = function () {
    const numberOfUncompletedCards = this.deckOfCards.filter(card => !card.complete).length

    if (numberOfUncompletedCards === 0) {
        console.log('Win')
        this.yourScore = this.time 
        console.log(this.yourScore)
        clearInterval(this.timeIntervalId)
        this.displayScore()
        
    }
    
}

Game.prototype.makeVisibleCard = function (index) {
    this.deckOfCards[index] = Object.assign(this.deckOfCards[index], {
        visible: true
    });
}

Game.prototype.checkIfVisibleCardIsAMatch = function () {
    const visibleCards = this.getVisibleCards()
    const firstCard = visibleCards[0]
    const secondCard = visibleCards[1]
    if (firstCard.front === secondCard.front) {
        this.completeVisibleCards()
    }
}

Game.prototype.completeVisibleCards = function () {
    this.deckOfCards = this.deckOfCards.map(card => card.visible ? Object.assign(card, { complete: true }) : card)
}

Game.prototype.hideVisibleCards = function () {
    this.deckOfCards = this.deckOfCards.map(card => card.visible && !card.completed ? Object.assign(card, { visible: false }) : card)
}

Game.prototype.compareVisibleCards = function () {
    this.deckOfCards.filter(function (card) {
    return card.complete === true && card.visible === true
    }).length
}

Game.prototype.shuffle = function (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

Game.prototype.startCountingTime = function () {
    if (this.timeIntervalId !== null) {
        return
    }
  

    this.timeIntervalId = setInterval(
        () => {
            
            this.time = this.time + 1
            this.renderTime()
                    if (this.time > this.yourScore){
                        this.displayScore()
                    }
        },
        1000
    )
}

Game.prototype.displayScore = function(){
    let scoreMessage = ''
    const lastDigitOfNumber = this.yourScore.toString().split('').pop()
    if (this.yourScore === 1){
        scoreMessage = 'Gratulacje! Twoj wynik to ' + this.yourScore + ' sekunda.'
    } else if(this.yourScore === 0 || (this.yourScore>4 && this.yourScore<22) || lastDigitOfNumber>4){
        scoreMessage = 'Gratulacje! Twoj wynik to ' + this.yourScore + ' sekund.'
    } else if (lastDigitOfNumber>1 || lastDigitOfNumber<5){
        scoreMessage = 'Gratulacje! Twoj wynik to ' + this.yourScore + ' sekundy.'
    }
    console.log(lastDigitOfNumber)
    this.gameContainer.querySelector('p').innerHTML = scoreMessage
    const currentTime = new Date()
    const id = currentTime.getHours()+':'+currentTime.getMinutes()+':'+currentTime.getSeconds()
    localStorage.setItem(id, this.yourScore)
}

Game.prototype.renderRankingList=function(){
    const ranking = localStorage 
    const rankingContainer = document.createElement('div')
    let sortable = []
    for (let date in ranking){
        sortable.push([date, ranking[date]])
    }
    sortable.sort(function(a,b){
        return a[1] - b[1]
    })
    console.log(sortable)
    // for (i=0; i<sortable.length; i++){
    //     if (typeof(sortable[i][1])!=='string'){
            
    //         console.log(sortable)
    //     }
    // }


    // const filterStrings = array => {
    //     typeof(array) === 'string'
    // }

    // const onlyScores = sortable.filter(filterStrings)
    // console.log(onlyScores)
}