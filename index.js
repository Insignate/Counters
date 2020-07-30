var ashScreamAudios = '';
var randomNumber = 0;
function addValue(){
  
  ashScreamAudios = document.getElementsByClassName("ashAudios");
  ashScreamAudios[getRandomInt(ashScreamAudios.length)].play();
  
  var element = document.getElementById('counter');
  element.innerText = parseInt(element.innerText) + 1;
  
}

function addDanyValue(){
  var element = document.getElementById('counterDany');
  element.innerText = parseInt(element.innerText) + 1;
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
