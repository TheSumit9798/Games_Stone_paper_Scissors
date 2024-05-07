const obj={
    1:"rock",2:"paper",3:"Scissors"
};
let userPoint=0;
let computerPoint=0;
const r=document.getElementById("rock");
const p=document.getElementById("paper");
const s=document.getElementById("Scissors");
const result=document.querySelector(".result");
r.addEventListener('click',function(){
        let n = Math.floor(Math.random()*3+1);
        if(obj[n]=="rock"){
            result.innerHTML=" Match Draw! "+"<br>"+ "your point: "+userPoint +" computer Point: "+computerPoint;
        }
        else if(obj[n]== "Scissors"){
            userPoint++;
            result.innerHTML=" You Win!"+"<br> "+ "your point: "+userPoint +" computer Point: "+computerPoint;
        }
        else{
            computerPoint++;
            result.innerHTML=" You Lost!"+"<br>"+ "your point: "+userPoint +" computer Point: "+computerPoint;
    }
})
p.addEventListener('click',function(){
    let n = Math.floor(Math.random()*3+1);
    if(obj[n]=="paper"){
        result.innerHTML=" Match Draw!"+"<br>" + "your point: "+userPoint +" computer Point: "+computerPoint;
    }
    else if(obj[n]== "rock"){
        userPoint++;
        result.innerHTML=" You Win! " +"<br>"+ "your point: "+userPoint +" computer Point: "+computerPoint;
    }
    else{
        computerPoint++;
        result.innerHTML=" You Lost! "+"<br>" + "your point: "+userPoint +" computer Point: "+computerPoint;
    }
})
s.addEventListener('click',function(){
    let n = Math.floor(Math.random()*3+1);
    if(obj[n]=="Scissors"){
        result.innerHTML=" Match Draw!"+"<br>" + "your point: "+userPoint +" computer Point: "+computerPoint;
    }
    else if(obj[n]== "paper"){
        userPoint++;
        result.innerHTML=" You Win!" +"<br>"+ "your point: "+userPoint +" computer Point: "+computerPoint;
    }
    else{
        computerPoint++;
        result.innerHTML=" You Lost!"+"<br>" + "your point: "+userPoint +" computer Point: "+computerPoint;
    }
})
const btn=document.querySelector(".start");
btn.addEventListener('click',function(){
    window.location.reload();
})