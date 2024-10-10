//console.log(`Hello world`);

const userFahrTemp = prompt(`Enter your temperature`);
const fahrTemp = 
Number(userFahrTemp);
const celTemp =(fahrTemp -32) * (5/9);
alert (celTemp);
console.log (celTemp);

if ( fahrTemp >= 100 ){
  alert (`Very hot`);
}
if (fahrTemp < 100 && fahrTemp > 86  ){
  alert (`Hot`);
}
if (fahrTemp < 86 && fahrTemp > 64 ){
  alert (`Warm`);
}
if (fahrTemp < 64 && fahrTemp > 32 ){
  alert (`Cold`);
}
else if (fahrTemp <= 32){
  alert ('Very Cold');
}