// 'use strict';

let totalBill = document.getElementById("total-bill");

let tips = document.querySelectorAll('.tip-btn');
let people = document.getElementById("number-of-people").innerHTML;

console.log(tips);

// Get value of totalBill

function bill(ele){
  if(event.key === 'Enter'){
    console.log(ele.value);
  }
}

// Get value of people
function totalPeople(ele){
  if(event.key === 'Enter'){
    console.log(ele.value);
  }
}


// tips.addEventListener('click', function() {
// });

// Value from bill input 
// console.log(totalBill);

//Value from people input
// console.log(people);


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


