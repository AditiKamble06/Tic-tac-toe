let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let turnO=false;
let newGame=document.querySelector("#newGame");
let msg=document.querySelector("#msg");
boxes.forEach((box)=>{
  box.disabled=false;
});

const winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    console.log("Box was clicked");
    if(turnO)
    {box.innerHTML="O";
    turnO=false;}
  else{
    box.innerHTML="X";
    turnO=true;
  }
  box.disabled=true;
  checkWinner();
});
});
reset.addEventListener("click",()=>{
  boxes.forEach((box)=>{
    box.innerHTML="";
    box.disabled=false;
    msg.innerHTML="";
  });
});
const checkWinner=()=>{
for(pattern of winPatterns){
  console.log(pattern[0],pattern[1],pattern[2]);
  console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
  let pos1=boxes[pattern[0]].innerText;
  let pos2=boxes[pattern[1]].innerText;
  let pos3=boxes[pattern[2]].innerText;
  if(pos1!="" && pos2!="" && pos3!=""){
    let winner=false;
    if(pos1==pos2 && pos2==pos3){
      console.log("Winner",pos1);
      winner=true;
      msg.innerHTML=`Winner is ${pos1}`;
      boxes.forEach((box)=>{
        box.disabled=true;
      });
      reset.classList.add("hide");
      newGame.classList.remove("hide");
        }
    if(winner)
    break;
  }
}
}
newGame.addEventListener("click",()=>{
  reset.classList.remove("hide");
  newGame.classList.add("hide");
  boxes.forEach((box)=>{
    box.innerHTML="";
    box.disabled=false;
    msg.innerHTML="";
  });
});
