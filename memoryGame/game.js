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
    this.deckOfCards = newCardArray(numberOfCards).concat(newCardArray(numberOfCards))
    this.makeButtons()
    this.time = 0

    this.init()
}

Game.prototype.makeButtons = function () {
    const levelsContainer = document.createElement('div')

    const button1 = document.createElement('button')
    const button2 = document.createElement('button')
    const button3 = document.createElement('button')
    button1.style.width = '100px'
    button1.style.height = '30px'
    button1.innerText = '4 karty'

    button1.addEventListener('click', () => {
        game1.deckOfCards = newCardArray(2).concat(newCardArray(2))
        this.numberOfCardsOnBoardSide = Math.sqrt(this.deckOfCards.length)
        this.cardDimension = (100 / this.numberOfCardsOnBoardSide) + '%'
        this.render()

    })

    button2.style.width = '100px'
    button2.style.height = '30px'
    button2.innerText = '16 karty'

    button2.addEventListener('click', () => {
        game1.deckOfCards = newCardArray(8).concat(newCardArray(8))
        this.numberOfCardsOnBoardSide = Math.sqrt(this.deckOfCards.length)
        this.cardDimension = (100 / this.numberOfCardsOnBoardSide) + '%'
        this.render()
    })

    button3.style.width = '100px'
    button3.style.height = '30px'
    button3.innerText = '36 kart'
    button3.addEventListener('click', () => {
        game1.deckOfCards = newCardArray(18).concat(newCardArray(18))
        this.numberOfCardsOnBoardSide = Math.sqrt(this.deckOfCards.length)
        this.cardDimension = (100 / this.numberOfCardsOnBoardSide) + '%'
        this.render()

    })
    levelsContainer.appendChild(button1)
    levelsContainer.appendChild(button2)
    levelsContainer.appendChild(button3)
    this.container.appendChild(levelsContainer)

}

Game.prototype.init = function () {
    this.makeGameBoard()
    this.render(2)
    this.shuffle(this.deckOfCards)
    this.makeTimeDiv()
}

Game.prototype.makeGameBoard = function () {
    if (typeof board === 'undefined' || board === null) {
        // variable is undefined or null
        board = document.createElement('div')
    }

    board.style.width = '70vh'
    board.style.height = '70vh'
    board.style.backgroundColor = 'yellow'
    board.style.display = 'flex'
    board.style.flexWrap = 'wrap'
    board.style.justifyContent = 'center'

    board.className = 'game-board'

    this.container.appendChild(board)
    this.gameBoard = board

    this.numberOfCardsOnBoardSide = Math.sqrt(this.deckOfCards.length)
    this.cardDimension = (100 / this.numberOfCardsOnBoardSide) + '%'
}

Game.prototype.makeTimeDiv = function () {
    const divTimer = document.createElement('div')
    divTimer.style.height = '100px'
    divTimer.innerHTML = '<p>0 sekund</p>'
    this.container.appendChild(divTimer)
}

Game.prototype.renderTime = function () {
    this.container.querySelector('p').innerHTML = this.time + ' sekund'
}

Game.prototype.render = function (numberOfCards) {

    this.numberOfCardsOnBoardSide = Math.sqrt(this.deckOfCards.length)
    this.cardDimension = (100 / this.numberOfCardsOnBoardSide) + '%'
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
        cardElement.innerText = card.front + 'competed'
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
    let compareVisibleCards = this.deckOfCards.filter(function (card) {
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
        },
        1000
    )
}