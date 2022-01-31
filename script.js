'use strict';

let totalBill = document.getElementById("total-bill");

let tips = document.querySelector('.tips');
let people = document.getElementById("number-of-people");


// Tips button event listener 
tips.addEventListener('click', e =>{
  if(e.target.matches('button')){
    console.log('tips clicked.');
  }
});

// Value from bill input 
let bill = totalBill.valueAsNumber;
console.log(bill);

//Value from people input
let numberOfPeople = people.valueAsNumber;
console.log(numberOfPeople);


// TOTAL TIP CALCULATION 
function calculateTip(bill, tips, people){
  let totalTip = (bill * (tips/100))/people;
  console.log(totalTip);
  return totalTip;
}


//tip per person
function tipPerPerson(totalTip, people){
  let perPersonTip = totalTip / people;
  console.log(perPersonTip);
  return perPersonTip;

}

