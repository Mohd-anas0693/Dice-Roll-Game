
const submitUserInput=document.getElementById('submit-button')
let result = document.getElementById('calculated-sum');
let userInput = document.getElementById('user-number');
// 1:> Firstmethod to Solve add all the number upto userInput
function totalSum(){
let n = parseInt(userInput.value);
 sum = (n * (n + 1)) / 2;
 result.textContent = sum;
 result.style.display='block';
}
submitUserInput.addEventListener('click',totalSum);



// 2:> second Methods to do so (by Using Loops).

/*  let sum=0;
  function userSum(){
   
      let n = userInput.value;

      for(let i=0;i<=n;i++){
       sum=sum+i;
          }
      result.textContent=sum;
     result.style.display='block'
    sum = 0
  }

 submitUserInput.addEventListener('click', userSum);
 */



  
//Hightlighting All the links in the Paragraph
// 1:> First Mathod Top solve this Problem;

let hightlighterButton = document.querySelector('#highlight-links button');
let links = document.querySelector('#highlight-links');

function Hightlighter(){
  for(let i=2;i<=4;i++)
  links.children[i].children[0].classList.add('highlight');
}
hightlighterButton.addEventListener('click',Hightlighter);



// 2:> Second Method to solve this problem;

/*
let hightlighterButton = document.querySelector('#highlight-links button');
const anchorLinks = document.querySelectorAll('#highlight-links p a');
function highlight(){
  for (const Element of anchorLinks){
    Element.classList.add('highlight')
  }
}
hightlighterButton.addEventListener('click',highlight)
*/
    
 const userData={
   firstName:'Mohammad',
   lastName:'Anas',
   age:20
 };

 const button= document.querySelector('#user-data button')
  
  function displayUserData(){  
      const outputdataElement= document.getElementById('output-user-data');
      outputdataElement.innerHTML='';
     
    for(const key in userData){
   const userDataElement=document.createElement('li');
      const output=key.toUpperCase() +(':')+ userData[key];
        userDataElement.textContent=output;
    outputdataElement.append(userDataElement);   
    }

  }

button.addEventListener('click',displayUserData);
// dice Roll Program

let rollButton = document.getElementById('roll-dice-button');

function rollDice(){
return Math.floor(Math.random()*6)+1;
};

function outputDiceRolls(){
  const userNumber = document.getElementById('user-target-number').value;
  let outputRolls = document.getElementById('dice-rolls');
  outputRolls.innerHTML='';
  let diceRolled=false;
  let numberOfRolls=0;
  while(!diceRolled){
      const rolledNumber=rollDice();
        numberOfRolls++;
        const newListItem=document.createElement('li');
        const outputText='Roll ' + numberOfRolls + ': ' + rolledNumber;
        newListItem.textContent = outputText;
        outputRolls.append(newListItem);
        diceRolled = rolledNumber == userNumber;
  }
 const TotalNumberOfRolls=document.getElementById('output-total-rolls');
 const outputTargetNumberElement=document.getElementById('output-target-number');
 outputTargetNumberElement.textContent=userNumber;
 TotalNumberOfRolls.textContent = numberOfRolls;
}
rollButton.addEventListener('click',outputDiceRolls);

