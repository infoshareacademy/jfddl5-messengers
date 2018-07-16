function Game() {
  this.container = document.querySelector('body')
  this.gameBoard = null
  this.scoreContainer = null
  this.deckOfCards = [
    {
        front: "A",
        visible: true,
        complete: true
      },
      {
        front: "A",
        visible: true,
        complete: true
      },
      {
        front: "B",
        visible: false,
        complete: false
      },
      {
        front: "B",
        visible: false,
        complete: false
      },
      {
        front: "C",
        visible: false,
        complete: false
      },
      {
        front: "C",
        visible: false,
        complete: false
      },
      {
        front: "D",
        visible: false,
        complete: false
      },
      {
        front: "D",
        visible: false,
        complete: false
      },
      {
        front: "E",
        visible: false,
        complete: false
      },
      {
        front: "E",
        visible: false,
        complete: false
      },
      {
        front: "F",
        visible: false,
        complete: false
      },
      {
        front: "F",
        visible: false,
        complete: false
      },
      {
        front: "G",
        visible: false,
        complete: false
      },
      {
        front: "G",
        visible: false,
        complete: false
      },
      {
        front: "H",
        visible: false,
        complete: false
      },
      {
        front: "H",
        visible: false,
        complete: false
      }
    ]
}

Game.prototype.init = function() {
  this.makeGameBoard();
  this.render();
};

Game.prototype.makeGameBoard = function() {
  let board = document.createElement('div')
  board.style.width='70vh'
  board.style.height='70vh'
  board.style.backgroundColor='yellow'
  board.style.display='flex'
  board.style.flexWrap='wrap'
  board.style.justifyContent='center'
  board.className='game-board'

  this.container.appendChild(board)
  this.gameBoard = board
};

Game.prototype.render = function() {
  

Game.prototype.addFlipEventListener = function(element, index) {

};

Game.prototype.flip = function(index) {

};

Game.prototype.checkIfVisibleIsAMatch = function() {

};

Game.prototype.completeVisible = function() {

};

Game.prototype.unflipAll = function() {

};

Game.prototype.countUncompleted = function() {

};
}
var newGame = new Game();
newGame.init()
