var prompt = require('prompt')
const EventEmitter = require('events');

const myEmitter = new EventEmitter();



var win = false;
var turn = 1;



var boardArray = [[' ', ' ', ' '],
                    [' ', ' ', ' '],
                    [' ', ' ', ' ']];

var player = 'X';
    
function createBoard(boardArray){
    var board = ''
    for(var i = 0; i < boardArray.length; i++){
        for(var j = 0; j < boardArray[i].length; j++){
            if(i < boardArray.length-1){
                if(j < boardArray.length - 1){
                    board += boardArray[i][j] + ' | '
                } else {
                    board += boardArray[i][j] + '\n' + '---------' + '\n'
                }
            } else {
                if(j < boardArray.length - 1){
                    board += boardArray[i][j] + ' | '
                }
                else{
                    board += boardArray[i][j];
                }
            }
        }
    }
    console.log(board);
}

createBoard(boardArray);