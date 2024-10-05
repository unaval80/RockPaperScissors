const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const uScore = document.querySelector(".uScore");
const cScore = document.querySelector(".cScore");
const msg = document.querySelector(".msg");
let uCount = 0; //uCount is the score of user
let cCount = 0; //cCount is the score of computer
rock.onclick = () =>{
    let a = 1;
    let x = Math.floor((Math.random())*3+1);
    if(x==3){
        // console.log("you win");
        msg.innerText = "You Win!";
        uCount++;
        uScore.innerText = uCount;
    }else if(x==2){
        // console.log("you lost");
        msg.innerText = "You Lost!";
        cCount++;
        cScore.innerText = cCount;
    }else{
        // console.log("draw");
        msg.innerText = "Draw! Play again";
    }
}
paper.onclick = () =>{
    console.log("paper is clicked");
    let a = 2;
    // console.log(a);
    let x = Math.floor((Math.random())*3+1);
    // console.log(x);
    if(x==1){
        // console.log("you win");
        msg.innerText = "You Win!";
        uCount++;
        uScore.innerText = uCount;
    }else if(x==3){
        // console.log("you lost");
        msg.innerText = "You Lost!";
        cCount++;
        cScore.innerText = cCount;
    }else{
        // console.log("draw");
        msg.innerText = "Draw! Play again";
    }
}
scissors.onclick = () =>{
    console.log("scissors is clicked");
    let a = 3;
    // console.log(a);
    let x = Math.floor((Math.random())*3+1);
    // console.log(x);
    if(x==2){
        // console.log("you win");
        msg.innerText = "You Win!";
        uCount++;
        uScore.innerText = uCount;
    }else if(x==1){
        // console.log("you lost");
        msg.innerText = "You Lost!";
        cCount++;
        cScore.innerText = cCount;
    }else{
        // console.log("draw");
        msg.innerText = "Draw! Play again";
    }
}