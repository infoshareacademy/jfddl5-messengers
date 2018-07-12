// This is the self-invoking function expression
// it is here to provide scope for our variables 
// and functions inside game, ant to not pollute
// global scope
(function Game (selector) {
    
    // VARS
    // place for "global" variables that you will use in whole game
    // like score, or time
    // they aren't really global - because of self-invoking function

    // FUNCTIONS
    function init(container) {
        // this function should be called when we want to init game
        // it accepts 1 argument - dom node of the container
        // where game should be rendered, eg it can be body of document

        // this function should render first frame of game and set all
        // of the variables like time to game end that werent predefinied
    }

    function render() {
        // this function will be responsible of rendering new content 
        // in the container when game ticks or player interacts
    }

    // here you can put some functions taht renders only parts of the game 
    // and will be used in render function

    // here you will attach all events listeners like oncliks or keydowns
    function attachEventListeners() { }

    // move should be another function called eg. when event is fired
    // it is quite obvious that move bakwards is a move fovard with minus sign ;)
    function move() { }

    // in this fucntion you can do all stuff that needs to be repeated
    // you can invoke this function in an interval
    // you can set that interval in init function
    function gameTick() { }

    // below functions are self-describing ;)
    function incScore() { }
    function displayScore() { }

    function decTime() { }
    function displayTIme() { }

    // invoked when game ends (you can check if time elepsed eg. in gameTick function)
    function endGame() { }

    // HELPERS

    // here put some functions that are not directly itto the game
    // but will help to do some general stuff - like make an array of ...

    // START GAME
    // document.body is an example of the container for the game
    init(document.body)
})()