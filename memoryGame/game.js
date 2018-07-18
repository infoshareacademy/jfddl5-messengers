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


function Game(selector) {
    this.container = document.querySelector(selector)
    this.gameBoard = null
    this.scoreContainer = null
    this.deckOfCards = newCardArray(8).concat(newCardArray(8))
}
// VARSgit a
// place for "global" variables that you will use in whole game
// like score, or time
// they aren't really global - because of self-invoking function

// FUNCTIONS
Game.prototype.init = function (container) {
    // this function should be called when we want to init game
    // it accepts 1 argument - dom node of the container
    // where game should be rendered, eg it can be body of document

    // this function should render first frame of game and set all
    // of the variables like time to game end that werent predefinied
}

Game.prototype.render = function () {
    // this function will be responsible of rendering new content 
    // in the container when game ticks or player interacts
}

// here you can put some functions taht renders only parts of the game 
// and will be used in render function

// here you will attach all events listeners like oncliks or keydowns
Game.prototype.attachEventListeners = function () { }

// move should be another function called eg. when event is fired
// it is quite obvious that move bakwards is a move fovard with minus sign ;)
Game.prototype.move = function () { }

// in this fucntion you can do all stuff that needs to be repeated
// you can invoke this function in an interval
// you can set that interval in init function
Game.prototype.gameTick = function () { }

// below functions are self-describing ;)
Game.prototype.incScore = function () { }
Game.prototype.displayScore = function () { }

Game.prototype.decTime = function () { }
Game.prototype.displayTIme = function () { }

// invoked when game ends (you can check if time elepsed eg. in gameTick function)
Game.prototype.endGame = function () { }

// HELPERS

// here put some functions that are not directly itto the game
// but will help to do some general stuff - like make an array of ...

Game.prototype.shuffle = function (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

const game1 = new Game('.game-container')
console.log(game1)

