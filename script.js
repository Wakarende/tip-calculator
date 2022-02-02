// 'use strict';

let totalBill = document.getElementById("total-bill");
totalBill.addEventListener('change', calculateTip);

const tipBtns = document.querySelectorAll(".btn");
console.log(tipBtns);

// Custom tips 
const customBtn = document.getElementById("custom")
customBtn.addEventListener('change', calculateTip);

// People Value 
let people = document.getElementById("people");
people.addEventListener('change', calculateTip);

// Reset btn 
let resetBtn = document.getElementById("reset").addEventListener('click', function reset(){
  console.log("reset btn clicked!");
  totalBill.value = 0;
  people.value = 0;
  document.getElementById("tip-per-person").textContent = '$0.00';
  document.getElementById("amout-per-person").textContent = '$0.00';

});



// TOTAL TIP CALCULATION 
function calculateTip(){
  let bill = parseFloat(totalBill.value);
  let numberOfPeople = parseFloat(people.value);
  // Tip btns value 
  for(const btn of tipBtns) {
  btn.addEventListener('click',function(){
    let tipPercentage =this.value;
    return tipPercentage;
    });
  };

  tipPercentage = parseFloat(this.value);
  console.log(tipPercentage);
  let customTip = parseFloat(customBtn.value);

  totalBill.value = bill.toFixed(2);
  
  let totalTip = parseFloat((bill * (tipPercentage/100)).toFixed(2));
  let total = parseFloat((bill + totalTip).toFixed(2));
  let tipPerPerson = (totalTip / numberOfPeople).toFixed(2);
  let totalPerPerson = (total/numberOfPeople).toFixed(2);


  if (tipPercentage == customTip){
    totalTip = parseFloat((bill * (customTip/100)).toFixed(2));
  }

    
  


  

  if(bill === 0 || tipPercentage === NaN || numberOfPeople === 0){
    document.getElementById("amout-per-person").textContent = '0.00';
    document.getElementById("tip-per-person").textContent = '0.00';
  }else{
    document.getElementById("amout-per-person").textContent = `\$ ${totalPerPerson}`;
    document.getElementById("tip-per-person").textContent = `\$ ${tipPerPerson}`;
  }

}

calculateTip();


//tip per person 

// function tipPerPerson(totalTip, people){
//   let perPersonTip = totalTip / people;
//   console.log(perPersonTip);
//   return perPersonTip;

// }


