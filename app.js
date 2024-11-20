let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newbtn = document.querySelector(".new-btn");
let resetbtn = document.querySelector(".reset-btn");

const newGame = () => {
    enableleboxes();
}

const enableleboxes =() => {
    for( box of boxes) {
        box.innerText ="";
        turnx=true;
        box.style.backgroundColor = "";
        box.disabled = false;
        msgContainer.classList.add("hide");

    }
}




const winPatterns =[
    [0 ,1 ,2],
    [3 ,4 ,5],
    [6 ,7 ,8],
    [0 ,3, 6],
    [1 ,4 ,7],
    [2 ,5 ,8],
    [0 ,4 ,8],
    [2 ,4 ,6],
];

let turnx= true;

const BoxDisabled =() =>  {
    for( box of boxes){
        box.disabled = true;
    }
    
}

const showWinner =(winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide"); 

    BoxDisabled();
    
}


boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked ")
        if(turnx){
            console.log(" x was clicked ");
            box.innerText = " x";
            box.style.color ="red";
            turnx = false;
        }
        else
        {
            console.log("0 was clicked ");
            box.style.color ="orange";
            box.innerText ="0"
            turnx= true;
        }
        box.disabled = true;
        checkWinner();

    });
});

const checkWinner =() => {
for (pattern of winPatterns){

let pos1val = boxes[pattern[0]].innerText;
let pos2val = boxes[pattern[1]].innerText;
let pos3val = boxes[pattern[2]].innerText;

if(pos1val !='' && pos2val != '' &&  pos3val !=''){
    if(pos1val ===pos2val && pos2val === pos3val){
        console.log("you are the winner ")

        
        boxes[pattern[0]].style.backgroundColor ="#ffff00";
        boxes[pattern[1]].style.backgroundColor ="#ffff00";
        boxes[pattern[2]].style.backgroundColor ="#ffff00";
        showWinner(pos1val);
    }
}
}
};

resetbtn.addEventListener("click", newGame);
newbtn.addEventListener("click", newGame);