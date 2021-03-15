"use strict";
//import _ from 'lodash';//optional, must run npm install --save lodash
import {DisplayController, Player} from './myModule.js'

DisplayController.saySomething("HelloWorld");
const alan = Player("Alan");
console.log(alan.getPlayer());

function component() {
    const element = document.createElement('div');
  
    // Lodash, imported
    element.innerHTML = "Hello World!";
  
    return element;
  }
  
  document.body.appendChild(component());