let turn = 'O';
let total_turn = 0;
let winner = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
let board_array = new Array(9).fill("E");
function check_winner(){
    for(let [index0,index1,index2] of winner){
        if(board_array[index0] !== 'E' && board_array[index0] === board_array[index1] && board_array[index1] === board_array[index2]){  
            return 1; 
        }
    }
    return 0;
}
//print the board
const printer = (event) => {

    const element = event.target;
    if(board_array[element.id]==="E"){
        total_turn++;
        if(turn==='O')
        {
            element.innerText = 'O';
            board_array[element.id] = 'O';
            if(check_winner()){
                document.getElementById("winningMessage").innerHTML = "Winner is O";
                board.removeEventListener('click',printer); //jab winner mil jaye to click na ho(remove event listner)
                return;
            }
            turn = 'X';
        } 
        else
        {
            element.innerText = 'X';
            board_array[element.id] = 'X';
            if(check_winner()){
                document.getElementById("winningMessage").innerHTML = "Winner is X";
                board.removeEventListener('click',printer); //jab winner mil jaye to click na ho(remove event listner)
                return;
            }
            turn = 'O';
        }
        if(total_turn === 9 && !check_winner()){
            document.getElementById("winningMessage").innerHTML = "Match is Draw";
        }
    }
}

const board = document.querySelector('.board');
board.addEventListener('click',printer); 

//Restart Button
const Restart = document.getElementById('RestartButton');
Restart.addEventListener('click',() => {
    const cell=document.getElementsByClassName("cell");
    Array.from(cell).forEach((value)=>{
        value.innerHTML ="";
    });
    turn = 'O';
    total_turn = 0;
    board_array = new Array(9).fill("E");
    document.getElementById("winningMessage").innerHTML = "";
    board.addEventListener('click',printer); 
})