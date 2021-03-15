//myModule.js

//A Module for editing
const DisplayController  = (()=>{
    let aVariable = "hello"

    //privates is better to declare starting with _
    //set popup to visible
    let _showPopUp = (something)=>{
        console.log(something);
    }

    let saySomething = (something) =>{
        _showPopUp(something);
    }

    return {saySomething}
})();


//A factory function
const Player = (human = "Hi Player") =>{
    //human param is boolean, false for computers, stored in closure
    let counter = 0;
    //setting default choices
    let choice = "X";
    let player = human;
    const setChoice = (newChoice) =>{ choice = newChoice};
    const getChoice = () => {return choice};
    const addCounter = () => {counter++};
    const getCounter = () => {return counter};
    const getPlayer = () => player;

    return {setChoice, getChoice, addCounter, getCounter, getPlayer}
}

//const human = Player("Alan");

export {Player, DisplayController};