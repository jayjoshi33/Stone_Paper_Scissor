
let opt=document.querySelectorAll('.option');
let hS=document.querySelector('#human');
let cS=document.querySelector('#computer');
let userScore=0;
let compScore=0;
let userOutput=document.querySelector('#userOutput');
let compOutput=document.querySelector('#compOutput');


const comptureChoice = () =>
{
    const choices=['stone','paper','scissor'];
    const randIndex=(Math.floor(Math.random()*3));
    return choices[randIndex];
    //We cant generate the random strings, so we will generate the random number using Math function and map it with the string.

}
const playGame = (userSelected) =>
{
    let compSelected=comptureChoice();
    if (compSelected==userSelected)
    {
        console.log('Draw')
    }
    else if((compSelected=='paper' && userSelected=='stone') || (compSelected=='stone' && userSelected=='scissor') || (compSelected=='scissor' && userSelected=='paper') )
    {
        console.log('Computer won');
        compScore+=1;
        cS.innerText=compScore;

    }
    else
    {
        console.log('Computer',compSelected);
        console.log('User',userSelected);
        console.log('User won');
        userScore+=1;
        hS.innerText=userScore;

    }
    userOutput.innerText= `User selected:${userSelected}`;
    compOutput.innerText= `Computer selected:${compSelected}`;

    
};
opt.forEach((c)=>
{
    c.addEventListener('click',()=>
    {
        userSelected=c.id;
        playGame(userSelected);
    });
});
