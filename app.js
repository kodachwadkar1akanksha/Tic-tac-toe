let boxes = document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset-game");
let newbtnn= document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO= true;//playerX,playerO
let count=0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
   
if(turnO)
{
    box.innerText="O";
    turnO = false;
}
else{
    box.innerText="X";
    turnO = true;
}
box.disabled= true;
count++;
let isWinner=checkWinner();
if (count === 9 && !isWinner)
{
    gameDraw();
}
});
});
const gameDraw=() =>
{
    msg.innerText=`Game was a Draw :(`;
    msgContainer.classList.remove("hide");
    disableboxes();
};
const restart = () =>
{
    turnO=true;
    count=0;
    enableboxes();
    msgContainer.classList.add("hide");
};
const enableboxes =() =>
{
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
    
        }
};
const disableboxes = () =>
{
    for(let box of boxes)
    {
        box.disabled=true;

    }
};
const showWinner = (winner) => {
    msg.innerText=`Congratulations!!!
                   Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}
const checkWinner = () => {
    for(let pattern of winPatterns)
    {
        console.log( [pattern[0]], [pattern[1]],[pattern[2]]);
        let pos1Val = boxes [pattern[0]].innerText;
        let pos2Val = boxes [pattern[1]].innerText;
        let pos3Val = boxes  [pattern[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};
newbtnn.addEventListener("click",restart);
resetbtn.addEventListener("click",restart);
