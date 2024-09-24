const boxes = document.querySelectorAll('.box');  // Assuming boxes have a class "box"
let resetbtn = document.querySelector(".reset-game");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true; // playerX, playerO

const winPatters = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

function resetGame(){
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
    count = 0
}



// const boxes = document.querySelectorAll('.box');  // Assuming boxes have a class "box"

let count = 0;
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if(turnO){//playerO
            box.innerText  = "O";
            box.style.color = "red";
            count++;
            turnO = false;
            
        }else{// playerX
            box.innerText = "X";
            box.style.color = "green";
            count++;
            turnO = true;
        }
        // console.log(count);
        box.disabled=true;
        checkWinner();
    });
});



function disabledBoxes(){
    for(let box of boxes){
        box.disabled = true;
    }
}

function enabledBoxes(){
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

function showWinner(winner){
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

function checkWinner(){
    for(let pattern of winPatters){
        
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){ // it check the position is not empty
        if(pos1Val == pos2Val && pos2Val == pos3Val){
            showWinner(pos1Val);

        }
        else if(count == 9){
        showDraw();
        }
    }
    }
};

function showDraw(){
    msg.innerText = `Draw `;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}


newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);