
function addValue(){
  
  var ashScreamAudios = document.getElementsByClassName("ashAudios");
  ashScreamAudios[getRandomInt(ashScreamAudios.length)].play();
  
  var element = document.getElementById('counter');
  element.innerText = parseInt(element.innerText) + 1;
  
}

function addDanyValue(){
  
  var danyFucksAudios = document.getElementsByClassName("danyAudios");
  danyFucksAudios[getRandomInt(danyFucksAudios.length)].play();
  
  var element = document.getElementById('counterDany');
  element.innerText = parseInt(element.innerText) + 1;
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
