let playerDetails={
    name:"hari",
    chips:"500rs"
}
function getRandomCard(){
    randomNumber=Math.floor(Math.random()*13)+1;
    if (randomNumber===1)
    {
        randomNumber=11;
        return randomNumber;
    }else if(randomNumber>11 && randomNumber<=13)
    {
        randomNumber=10;
        return randomNumber;
    }
    else
    {
        return randomNumber;
    }
}


/*let firstCard=getRandomCard();
let secondCard=getRandomCard();
let array=[firstCard,secondCard];
let sum=array[0]+array[1];*/
let sum=0;
let array=[];
let firstNumber=getRandomCard();
let secondNumber=getRandomCard();
array=[firstNumber,secondNumber];
sum=array[0]+array[1];
let cashOut=false;
let alive=false;
let blackJack=false;
let message="";
let sumEl=document.querySelector("#sumel");
let cardEle=document.querySelector("#card-ele");
let playerEl=document.querySelector("#player-el");
playerEl.textContent=playerDetails.name+" "+playerDetails.chips
console.log(typeof array);

function start()
{

    /*let firstNumber=getRandomCard();
    let secondNumber=getRandomCard();
    array=[firstNumber,secondNumber];
    sum=array[0]+array[1];
    let a=1;*/
    renderCard();
}
function renderCard(){
    cardEle.textContent="Cards:"
    for (let i=0; i<array.length; i+=1)
    {
        cardEle.textContent+=array[i]+" "
    }
    
    sumEl.textContent="Sum:"+sum;
    if (sum<21)
    {
        message="draw a new card";
        alive=true;
    }
    else  if (sum===21)
    {
        cashout=true;
        message="you won";
        blackJack=true;
    }
    else if (sum>21)
    {
        alive=false;
        message="you lost";
        alive=false;
    }
    document.querySelector("#play").textContent=message;

}
function newcard()
{
    if (alive===true && blackJack===false)
    {
        let newcard=getRandomCard();
        sum+=newcard;
        array.push(newcard)
        start();
    }


}