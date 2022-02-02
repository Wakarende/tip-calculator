// 'use strict';

let totalBill = document.getElementById("total-bill");
totalBill.addEventListener('change', calculateTip);

let tipBtns = document.querySelectorAll("button[type='number']");

tipBtns.forEach(function(button){
  button.addEventListener('click', calculateTip);
});


let people = document.getElementById("people");
people.addEventListener('change', calculateTip);


let resetBtn = document.getElementById("reset").addEventListener('click', function reset(){
  console.log("reset btn clicked!");
  totalBill.value = 0;
  people.value = 0;
  document.getElementById("tip-per-person").textContent = '$0.00';
  document.getElementById("amout-per-person").textContent = '$0.00';

});

// Get value of totalBill

// function bill(ele){
//   if(event.key === 'Enter'){
//     return parseFloat(ele.value);
//   }
// }

// Get value of people
// function totalPeople(ele){
//   if(event.key === 'Enter'){
//     return parseInt(ele.value);
//   }
// }

// TOTAL TIP CALCULATION 
function calculateTip(){
  let bill = parseFloat(totalBill.value);
  let numberOfPeople = parseFloat(people.value);
  let tipPercentage = parseFloat(tipBtns.value);

  totalBill.value = bill.toFixed(2);

  let totalTip = parseFloat((bill * (tipPercentage/100)).toFixed(2));
  let total = parseFloat((bill + totalTip).toFixed(2));
  let tipPerPerson = (totalTip / numberOfPeople).toFixed(2);
  let totalPerPerson = (total/numberOfPeople).toFixed(2);

  document.getElementById("amout-per-person").textContent = `\$ ${totalPerPerson}`;
  document.getElementById("tip-per-person").textContent = `\$ ${tipPerPerson}`;
}

calculateTip();


//tip per person 

// function tipPerPerson(totalTip, people){
//   let perPersonTip = totalTip / people;
//   console.log(perPersonTip);
//   return perPersonTip;

// }


