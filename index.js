let coin =document.querySelector(".coin");
let flpbtn = document.querySelector("#button");
let result = document.querySelector("#result");
let r="-----";
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);
flpbtn.addEventListener("click",()=>{
    let x = Math.floor(Math.random()*2);
    coin.style.animation = "none";
    if (x){
        setTimeout(function(){
            coin.style.animation ="spin-heads 3s forwards";
        },0);
        r="Heads";
    }
    else{
        setTimeout(function(){
            coin.style.animation ="spin-tails 3s forwards";
        },0);
        r="Tails";
    }

    setTimeout(updateResult,3000);
    disableButton();
    
});

function updateResult(){
    result.textContent = r;
    
}
function disableButton(){
    result.textContent = "-----";
    flpbtn.classList.add('disabled');
    setTimeout(function(){
        flpbtn.classList.remove('disabled');
    },3000)
}