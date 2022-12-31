/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const paraMefe = document.querySelector('#metfet');
const paraLiga = document.querySelector('#liga');
const paraKipo = document.querySelector('#kipo');
const meter = 3.281;
const liter = 0.264;
const kilo = 2.204;

buttonEl.addEventListener('click',function(){
let value = Number(inputEl.value);
  let feet = value * meter;
  let met = value /  meter;
  let lit =  value * liter;
  let ga =  value / liter;
  let ki =  value * kilo;
  let po =  value / kilo;
  
  paraMefe.textContent = `${value} meters = ${feet.toFixed(3)} feet | ${value} feet = ${met.toFixed(3)} meters`
  paraLiga.textContent = `${value} liters = ${lit.toFixed(3)} gallons | ${value} gallons = ${ga.toFixed(3)} liters`
  paraKipo.textContent = `${value} kilos = ${ki.toFixed(3)} pounds | ${value} pounds = ${po.toFixed(3)} kilos`
 
 inputEl.value = ''; 
   
   
})
