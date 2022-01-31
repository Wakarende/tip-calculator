'use strict';

let totalBill = document.querySelector("#total-bill");
let tips = document.querySelector('.tips');

tips.addEventListener('click', e =>{
  if(e.target.matches('button')){
    console.log('tips clicked.');
  }
})